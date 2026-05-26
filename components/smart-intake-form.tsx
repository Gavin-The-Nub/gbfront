"use client"
import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { CheckCircle2, ExternalLink, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const ic = "w-full px-3 py-2.5 border border-border/50 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-sm"
const lc = "block text-sm font-semibold mb-1.5 text-foreground/80"

const REDIRECTS: Record<string, { url: string; label: string; email: string }> = {
  "Student/Families/Educator Support": { url: "https://app.globalbrightfutures.org/auth/signup", label: "Student/Families/Educator Support Portal", email: "families@globalbrightfutures.org" },
  "Vendor Application": { url: "https://app.globalbrightfutures.org/auth/vendor-signup", label: "Sign Up as a Vendor", email: "vendor@globalbrightfutures.org" },
  "Registration": { url: "https://app.globalbrightfutures.org/auth/signup", label: "Registration Portal", email: "partnership@globalbrightfutures.org" },
}

function F({ label, id, value, onChange, placeholder, required, type = "text" }: { label: string; id: string; value: string; onChange: (v: string) => void; placeholder?: string; required?: boolean; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className={lc}>{label}{required && <span className="text-red-500 ml-1">*</span>}</label>
      <input type={type} id={id} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} required={required} className={ic} />
    </div>
  )
}

function T({ label, id, value, onChange, placeholder, required, rows = 4 }: { label: string; id: string; value: string; onChange: (v: string) => void; placeholder?: string; required?: boolean; rows?: number }) {
  return (
    <div>
      <label htmlFor={id} className={lc}>{label}{required && <span className="text-red-500 ml-1">*</span>}</label>
      <textarea id={id} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} required={required} rows={rows} className={ic + " resize-none"} />
    </div>
  )
}

function S({ label, id, value, onChange, options, required, placeholder = "Select..." }: { label: string; id: string; value: string; onChange: (v: string) => void; options: string[]; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className={lc}>{label}{required && <span className="text-red-500 ml-1">*</span>}</label>
      <select id={id} value={value} onChange={e => onChange(e.target.value)} required={required} className={ic}>
        <option value="">{placeholder}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}

function CG({ label, options, selected, onChange }: { label: string; options: string[]; selected: string[]; onChange: (v: string) => void }) {
  return (
    <div>
      <p className={lc}>{label}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {options.map(o => (
          <label key={o} className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" checked={selected.includes(o)} onChange={() => onChange(o)} className="w-4 h-4 accent-primary rounded" />
            <span className="text-foreground/80">{o}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

function RG({ label, name, options, value, onChange, required }: { label: string; name: string; options: string[]; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <div>
      <p className={lc}>{label}{required && <span className="text-red-500 ml-1">*</span>}</p>
      <div className="flex flex-wrap gap-3">
        {options.map(o => (
          <label key={o} className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(o)} className="w-4 h-4 accent-primary" />
            <span className="text-foreground/80">{o}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

function Sec({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-bold text-primary border-b border-primary/20 pb-2 pt-2 uppercase tracking-wider">{children}</h3>
}

const init = {
  email: "", fullName: "", phone: "", location: "", timezone: "",
  studentName: "", gradeLevel: "", schoolName: "", primaryNeeds: [] as string[], subjectsNeeded: "", internetAccess: "", deviceAccess: "", supportDescription: "",
  roles: [] as string[], legallyEligible: "", govId: "", highestEducation: "", fieldOfStudy: "", yearsExperience: "", experienceTypes: [] as string[], experienceLevel: "", subjectAreas: [] as string[], hasCertifications: "", deliveryMethod: "", hoursPerWeek: "", preferredDays: [] as string[], commitmentLength: "", impactStatement: "", educatorAck: false,
  orgName: "", contactTitle: "", partnershipType: "", focusAreas: [] as string[], supportLevel: "", csrGoals: "", reportingPreference: "",
  interestType: "", message: "", generalInterest: "",
}

function buildPayload(cat: string, f: typeof init): Record<string, string> {
  if (cat === "Student/Families/Educator Support") return {
    "Contact Email": f.email, "Student / Parent Name": f.studentName, "Grade Level": f.gradeLevel,
    "School Name": f.schoolName || "Not provided", "Location": f.location,
    "Primary Needs": f.primaryNeeds.join(", "), "Subjects Needed": f.subjectsNeeded,
    "Internet Access": f.internetAccess, "Device Access": f.deviceAccess, "Support Description": f.supportDescription,
  }
  if (cat === "Educator") return {
    "Full Name": f.fullName, "Email": f.email, "Phone": f.phone, "Location": f.location, "Time Zone": f.timezone,
    "Roles Applied For": f.roles.join(", "), "Legally Eligible": f.legallyEligible, "Gov ID Available": f.govId,
    "Highest Education": f.highestEducation, "Field of Study": f.fieldOfStudy, "Years of Experience": f.yearsExperience,
    "Experience Types": f.experienceTypes.join(", "), "Experience Level": f.experienceLevel,
    "Subject / Skill Areas": f.subjectAreas.join(", "), "Has Certifications": f.hasCertifications,
    "Preferred Delivery": f.deliveryMethod, "Hours per Week": f.hoursPerWeek,
    "Preferred Days": f.preferredDays.join(", "), "Commitment Length": f.commitmentLength,
    "Impact Statement": f.impactStatement, "Placement Acknowledgment": "Confirmed",
  }
  if (cat === "Sponsorship and Corporate Partnership") return {
    "Organization Name": f.orgName, "Contact Name": f.fullName, "Title": f.contactTitle,
    "Email": f.email, "Phone": f.phone, "Partnership Type": f.partnershipType,
    "Focus Areas": f.focusAreas.join(", "), "Support Level": f.supportLevel,
    "ESG / CSR Goals": f.csrGoals, "Reporting Preference": f.reportingPreference,
  }
  if (cat === "Program Support Inquiry") return {
    "Full Name": f.fullName, "Email": f.email, "Interest Type": f.interestType, "Message": f.message,
  }
  return { "Full Name": f.fullName, "Email": f.email, "Interest Area": f.generalInterest, "Message": f.message }
}

export function SmartIntakeHeroCard() {
  const [cat, setCat] = useState("")
  const sectionRef = useRef<HTMLDivElement>(null)
  const isRedirect = Object.keys(REDIRECTS).includes(cat)
  const redirectInfo = REDIRECTS[cat]

  const handleChange = (v: string) => {
    setCat(v)
    setTimeout(() => sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 150)
  }

  return (
    <>
      <div className="space-y-4">
        <div>
          <label htmlFor="hero-cat" className={lc}>I am interested in: <span className="text-red-500">*</span></label>
          <select id="hero-cat" value={cat} onChange={e => handleChange(e.target.value)} className={ic}>
            <option value="">Select a category...</option>
            {["Student/Families/Educator Support","Educator","Vendor Application","Registration","Sponsorship and Corporate Partnership","Program Support Inquiry","General Inquiry"].map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <AnimatePresence mode="wait">
          {isRedirect && redirectInfo && (
            <motion.div key="redirect" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-3 pt-1">
              <p className="text-sm text-foreground/70">This category has a dedicated portal. Click below to proceed:</p>
              <Link href={redirectInfo.url} target="_blank">
                <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-5">
                  <ExternalLink size={16} /> {redirectInfo.label}
                </Button>
              </Link>
              <p className="text-xs text-foreground/50 text-center">Questions? Email <a href={`mailto:${redirectInfo.email}`} className="underline hover:text-primary">{redirectInfo.email}</a></p>
            </motion.div>
          )}
          {cat && !isRedirect && (
            <motion.div key="hint" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-sm text-primary font-medium">
              <ChevronDown size={16} className="animate-bounce" /> Complete the form below to submit your inquiry
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div ref={sectionRef} />
      <SmartIntakeFormSection selectedCategory={cat} />
    </>
  )
}

export function SmartIntakeFormSection({ selectedCategory }: { selectedCategory: string }) {
  const [f, setF] = useState(init)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const set = (k: keyof typeof init, v: string | boolean) => setF(p => ({ ...p, [k]: v }))
  const tog = (k: keyof typeof init, v: string) => {
    const arr = f[k] as string[]
    setF(p => ({ ...p, [k]: arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedCategory === "Educator" && !f.educatorAck) {
      toast.error("Please acknowledge the placement terms to continue.")
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch("/api/send-support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category: selectedCategory, formData: buildPayload(selectedCategory, f), replyToEmail: f.email || undefined }),
      })
      if (!res.ok) throw new Error()
      setDone(true)
      toast.success("Submitted! We'll be in touch soon.")
    } catch {
      toast.error("Failed to send. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  if (!selectedCategory || Object.keys(REDIRECTS).includes(selectedCategory)) return null

  return (
    <AnimatePresence mode="wait">
      <motion.section key={selectedCategory} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }} className="py-16 bg-secondary/10 border-b border-border/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">{selectedCategory}</span>
            <h2 className="text-3xl font-bold text-foreground">Complete Your Application</h2>
            <p className="text-foreground/60 mt-1 text-sm">Fields marked <span className="text-red-500">*</span> are required.</p>
          </div>

          {done ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center space-y-4">
              <CheckCircle2 className="text-green-500 mx-auto" size={48} />
              <h3 className="text-xl font-bold text-green-800">Submission Received!</h3>
              <p className="text-green-700 text-sm">Thank you for reaching out. Our team will review your submission and be in touch soon.</p>
              <Button variant="outline" onClick={() => { setDone(false); setF(init) }}>Submit Another</Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 bg-background border border-border/50 rounded-2xl p-8 shadow-sm">

              {/* STUDENTS & FAMILIES */}
              {selectedCategory === "Student/Families/Educator Support" && <>
                <Sec>Basic Information</Sec>
                <F label="Student First Name / Parent Name" id="sf-name" value={f.studentName} onChange={v => set("studentName", v)} placeholder="Name" required />
                <F label="Contact Email (optional)" id="sf-email" type="email" value={f.email} onChange={v => set("email", v)} placeholder="your@email.com" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <S label="Grade Level" id="sf-grade" value={f.gradeLevel} onChange={v => set("gradeLevel", v)} required options={["Pre-K","Kindergarten","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12","College / University","Adult Learner"]} />
                  <F label="School Name (optional)" id="sf-school" value={f.schoolName} onChange={v => set("schoolName", v)} placeholder="e.g. Lincoln Elementary" />
                </div>
                <F label="Location (City / State / Country)" id="sf-loc" value={f.location} onChange={v => set("location", v)} placeholder="e.g. Manila, Philippines" required />
                <Sec>Support Needs</Sec>
                <CG label="Primary Need (select all that apply) *" options={["Tutoring","Academic Support","Mentorship","Learning Resources","Summer Enrichment"]} selected={f.primaryNeeds} onChange={v => tog("primaryNeeds", v)} />
                <F label="Subjects Needed" id="sf-subj" value={f.subjectsNeeded} onChange={v => set("subjectsNeeded", v)} placeholder="e.g. Math, Reading, Science" />
                <Sec>Access Information</Sec>
                <div className="grid sm:grid-cols-2 gap-4">
                  <RG label="Internet access available?" name="sf-internet" options={["Yes","No"]} value={f.internetAccess} onChange={v => set("internetAccess", v)} required />
                  <RG label="Device access?" name="sf-device" options={["Yes","No"]} value={f.deviceAccess} onChange={v => set("deviceAccess", v)} required />
                </div>
                <T label="Brief description of support needed" id="sf-desc" value={f.supportDescription} onChange={v => set("supportDescription", v)} placeholder="Tell us more about what support you need..." required />
              </>}

              {/* EDUCATOR */}
              {selectedCategory === "Educator" && <>
                <Sec>Personal Information</Sec>
                <div className="grid sm:grid-cols-2 gap-4">
                  <F label="Full Name" id="ed-name" value={f.fullName} onChange={v => set("fullName", v)} placeholder="Your full name" required />
                  <F label="Email Address" id="ed-email" type="email" value={f.email} onChange={v => set("email", v)} placeholder="your@email.com" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <F label="Phone Number" id="ed-phone" value={f.phone} onChange={v => set("phone", v)} placeholder="+1 (555) 000-0000" />
                  <F label="Location (City / State / Country)" id="ed-loc" value={f.location} onChange={v => set("location", v)} placeholder="e.g. Toronto, Canada" required />
                </div>
                <F label="Time Zone" id="ed-tz" value={f.timezone} onChange={v => set("timezone", v)} placeholder="e.g. EST, PST, GMT+8" />
                <Sec>Role Selection</Sec>
                <CG label="Applying as (select all that apply) *" options={["Tutor","Educator","Mentor","Workforce Trainer","Educational Service Provider (Vendor Partner)"]} selected={f.roles} onChange={v => tog("roles", v)} />
                <Sec>Eligibility & Verification</Sec>
                <div className="grid sm:grid-cols-2 gap-4">
                  <RG label="Legally eligible to provide services?" name="ed-elig" options={["Yes","No"]} value={f.legallyEligible} onChange={v => set("legallyEligible", v)} required />
                  <RG label="Government ID verification available?" name="ed-gov" options={["Yes","No"]} value={f.govId} onChange={v => set("govId", v)} />
                </div>
                <Sec>Education & Experience</Sec>
                <div className="grid sm:grid-cols-2 gap-4">
                  <S label="Highest Education Level" id="ed-edu" value={f.highestEducation} onChange={v => set("highestEducation", v)} required options={["High School / GED","Associate's Degree","Bachelor's Degree","Master's Degree","Doctoral Degree","Professional Certificate","Other"]} />
                  <F label="Degree / Field of Study" id="ed-field" value={f.fieldOfStudy} onChange={v => set("fieldOfStudy", v)} placeholder="e.g. Education, Mathematics" />
                </div>
                <RG label="Years of Experience" name="ed-yrs" options={["0–1","2–5","5–10","10+"]} value={f.yearsExperience} onChange={v => set("yearsExperience", v)} required />
                <CG label="Experience Type" options={["K–12 Students","College Students","Adult Learners","Workforce Training"]} selected={f.experienceTypes} onChange={v => tog("experienceTypes", v)} />
                <RG label="Experience Level" name="ed-lvl" options={["Entry","Intermediate","Advanced","Certified Educator"]} value={f.experienceLevel} onChange={v => set("experienceLevel", v)} />
                <Sec>Skills & Subject Areas</Sec>
                <CG label="Subject / Skill Areas (select all that apply)" options={["Math","Science","Literacy / Reading","Writing","Test Prep","Career Readiness","Workforce Skills","Other"]} selected={f.subjectAreas} onChange={v => tog("subjectAreas", v)} />
                <RG label="Do you hold relevant certifications?" name="ed-cert" options={["Yes","No"]} value={f.hasCertifications} onChange={v => set("hasCertifications", v)} />
                <Sec>Delivery Preferences</Sec>
                <RG label="Preferred Delivery Method" name="ed-del" options={["Online","In-Person","Hybrid"]} value={f.deliveryMethod} onChange={v => set("deliveryMethod", v)} required />
                <div className="grid sm:grid-cols-2 gap-4">
                  <F label="Hours Available per Week" id="ed-hrs" value={f.hoursPerWeek} onChange={v => set("hoursPerWeek", v)} placeholder="e.g. 10" />
                  <S label="Commitment Length" id="ed-commit" value={f.commitmentLength} onChange={v => set("commitmentLength", v)} options={["Short-term (< 3 months)","3–6 months","6–12 months","Long-term (1+ year)"]} />
                </div>
                <CG label="Preferred Days" options={["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]} selected={f.preferredDays} onChange={v => tog("preferredDays", v)} />
                <Sec>Documents</Sec>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                  <strong>Resume / CV & Certifications:</strong> Please email your documents to{" "}
                  <a href="mailto:educators@globalbrightfutures.org" className="underline font-medium">educators@globalbrightfutures.org</a> with your full name in the subject line.
                </div>
                <Sec>Additional Information</Sec>
                <T label="What impact do you hope to create through education?" id="ed-impact" value={f.impactStatement} onChange={v => set("impactStatement", v)} placeholder="Share your goals and motivation..." rows={4} />
                <div className="bg-amber-50 border border-amber-300 rounded-xl p-5">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={f.educatorAck} onChange={e => setF(p => ({ ...p, educatorAck: e.target.checked }))} className="w-5 h-5 mt-0.5 accent-primary flex-shrink-0" />
                    <span className="text-sm text-amber-900 leading-relaxed font-medium">
                      <span className="text-red-500 mr-1">*</span>
                      I understand that placement is through approved partner organizations and education providers and does not constitute direct employment with Global Bright Futures Foundation.
                    </span>
                  </label>
                </div>
              </>}

              {/* SPONSORSHIP */}
              {selectedCategory === "Sponsorship and Corporate Partnership" && <>
                <Sec>Organization Information</Sec>
                <F label="Company / Organization Name" id="sp-org" value={f.orgName} onChange={v => set("orgName", v)} placeholder="e.g. Acme Corp" required />
                <div className="grid sm:grid-cols-2 gap-4">
                  <F label="Contact Name" id="sp-name" value={f.fullName} onChange={v => set("fullName", v)} placeholder="Your full name" required />
                  <F label="Title / Position" id="sp-title" value={f.contactTitle} onChange={v => set("contactTitle", v)} placeholder="e.g. CSR Manager" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <F label="Email Address" id="sp-email" type="email" value={f.email} onChange={v => set("email", v)} placeholder="your@company.com" required />
                  <F label="Phone Number" id="sp-phone" value={f.phone} onChange={v => set("phone", v)} placeholder="+1 (555) 000-0000" />
                </div>
                <Sec>Partnership Details</Sec>
                <RG label="Partnership Type" name="sp-type" options={["CSR Sponsorship","Foundation Grant","Workforce Development Partner"]} value={f.partnershipType} onChange={v => set("partnershipType", v)} required />
                <CG label="Focus Areas" options={["Education Access","Workforce Development","Community Impact"]} selected={f.focusAreas} onChange={v => tog("focusAreas", v)} />
                <S label="Support Level (optional)" id="sp-level" value={f.supportLevel} onChange={v => set("supportLevel", v)} options={["< $10K","$10K – $50K","$50K – $100K","$100K+","Custom"]} />
                <T label="ESG / CSR Alignment Goals" id="sp-goals" value={f.csrGoals} onChange={v => set("csrGoals", v)} placeholder="Briefly describe your organization's CSR or ESG goals..." rows={3} />
                <RG label="Reporting Preference" name="sp-report" options={["Monthly","Quarterly","Annual"]} value={f.reportingPreference} onChange={v => set("reportingPreference", v)} />
              </>}

              {/* PROGRAM SUPPORT */}
              {selectedCategory === "Program Support Inquiry" && <>
                <Sec>Your Information</Sec>
                <div className="grid sm:grid-cols-2 gap-4">
                  <F label="Full Name" id="ps-name" value={f.fullName} onChange={v => set("fullName", v)} placeholder="Your full name" required />
                  <F label="Email Address" id="ps-email" type="email" value={f.email} onChange={v => set("email", v)} placeholder="your@email.com" required />
                </div>
                <RG label="Interest Type" name="ps-type" options={["Volunteer","Program Collaboration","Donation Inquiry","Other"]} value={f.interestType} onChange={v => set("interestType", v)} required />
                <T label="Message / Details" id="ps-msg" value={f.message} onChange={v => set("message", v)} placeholder="Tell us more about your interest..." required rows={5} />
              </>}

              {/* GENERAL INQUIRY */}
              {selectedCategory === "General Inquiry" && <>
                <Sec>Your Information</Sec>
                <div className="grid sm:grid-cols-2 gap-4">
                  <F label="Full Name" id="gi-name" value={f.fullName} onChange={v => set("fullName", v)} placeholder="Your full name" required />
                  <F label="Email Address" id="gi-email" type="email" value={f.email} onChange={v => set("email", v)} placeholder="your@email.com" required />
                </div>
                <S label="What are you interested in?" id="gi-interest" value={f.generalInterest} onChange={v => set("generalInterest", v)} required options={["Programs","Partnerships","Sponsorship","Tutoring","Other"]} />
                <T label="Message" id="gi-msg" value={f.message} onChange={v => set("message", v)} placeholder="How can we help you?" required rows={5} />
              </>}

              <Button type="submit" disabled={submitting} className="w-full py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {submitting ? "Sending..." : "Submit"}
              </Button>
            </form>
          )}
        </div>
      </motion.section>
    </AnimatePresence>
  )
}
