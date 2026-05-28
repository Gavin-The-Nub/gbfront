"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  FileText, CheckCircle2, Globe2, Users, ArrowRight, School, Building2,
  Users2, GraduationCap, BarChart3, ShieldCheck, Zap, Briefcase, Heart,
} from "lucide-react"
import { FadeIn, TextReveal, StaggerChildren, StaggerItem } from "@/components/motion"
import { SmartIntakeHeroCard, SmartIntakeFormSection } from "@/components/smart-intake-form"

const steps = [
  { title: "Application Submission", description: "Submit your school partnership application with required documentation", icon: FileText },
  { title: "Voucher Approval", description: "Review and approve voucher allocation based on program guidelines", icon: CheckCircle2 },
  { title: "Paired School Assignment", description: "Receive assignment to a partner school abroad for coordinated impact", icon: Globe2 },
  { title: "Independent Student Selection", description: "Schools independently select students based on documented educational need", icon: Users },
]

export default function JoinPage() {
  return (
    <main className="bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent/60 text-primary-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center gap-12 max-w-4xl mx-auto">
            <FadeIn className="w-full">
              <span className="text-sm font-bold uppercase tracking-widest text-primary-foreground/50 mb-4 block">
                Join &amp; Get Support
              </span>
              <TextReveal
                text="Collaborative pathways to join our mission and receive support."
                as="h1"
                className="text-4xl md:text-6xl font-bold mb-6 mx-auto max-w-3xl"
              />
              <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                Whether you are a school, district, business, organization, or family, joining Global Bright Futures Foundation Inc. helps expand access to education and support services.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="w-full max-w-4xl mx-auto">
              <Card className="bg-background/95 backdrop-blur-sm border-border/50 text-foreground shadow-2xl text-left">
                <CardHeader>
                  <CardTitle className="text-2xl">Partner With Us</CardTitle>
                  <p className="text-sm text-foreground/60">Select how you&apos;d like to connect with us</p>
                </CardHeader>
                <CardContent>
                  <SmartIntakeHeroCard />
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Multi-Audience Tabs */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="schools" className="w-full">
            <FadeIn className="flex justify-center mb-10">
              <div className="bg-secondary/40 border border-border/50 px-6 py-3 rounded-2xl text-foreground/70 font-medium italic text-sm md:text-base text-center max-w-3xl">
                Requests are reviewed based on program availability, eligibility, and partner alignment.
              </div>
            </FadeIn>

            <div className="flex justify-center mb-12 overflow-x-auto pb-4 md:pb-0">
              <TabsList className="bg-secondary/60 p-2 h-auto grid grid-cols-2 md:grid-cols-4 w-full md:w-auto gap-2 rounded-2xl">
                <TabsTrigger value="schools" className="px-8 py-4 text-lg md:text-xl font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 rounded-xl shadow-sm">
                  <School className="w-5 h-5 md:w-6 md:h-6 mr-3" />Schools &amp; Districts
                </TabsTrigger>
                <TabsTrigger value="corporate" className="px-8 py-4 text-lg md:text-xl font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 rounded-xl shadow-sm">
                  <Building2 className="w-5 h-5 md:w-6 md:h-6 mr-3" />Corporate Partners
                </TabsTrigger>
                <TabsTrigger value="families" className="px-8 py-4 text-lg md:text-xl font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 rounded-xl shadow-sm">
                  <Users2 className="w-5 h-5 md:w-6 md:h-6 mr-3" />Families
                </TabsTrigger>
                <TabsTrigger value="tutors" className="px-8 py-4 text-lg md:text-xl font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 rounded-xl shadow-sm">
                  <GraduationCap className="w-5 h-5 md:w-6 md:h-6 mr-3" />Tutors
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Schools Tab */}
            <TabsContent value="schools" className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Join Our Network?</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    Schools benefit from a structured, cost-efficient academic support system that scales with their needs.
                  </p>
                  <StaggerChildren className="grid gap-4">
                    {["Reduced tutoring costs through subsidized service credits","Expanded student support without increasing staff workload","Flexible online implementation (MTSS, intervention, enrichment)","Access to trained tutors and educators","Alignment with school improvement and funding priorities"].map((item, i) => (
                      <StaggerItem key={i} className="flex items-start gap-3 bg-secondary/30 p-4 rounded-xl border border-border/50">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span className="text-foreground/80">{item}</span>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </div>
                <div className="space-y-8 bg-primary/5 p-8 md:p-12 rounded-[2.5rem] border border-primary/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Priority Access Advantage</h3>
                  </div>
                  <ul className="space-y-6">
                    {[["01","Priority Access","Partner schools receive priority access to grant-funded programs."],["02","Early Placement","Early placement in fully funded tutoring initiatives."],["03","Expanded Capacity","Expanded program capacity before new partner onboarding."]].map(([n,t,d]) => (
                      <li key={n} className="flex gap-4">
                        <div className="font-bold text-primary text-xl">{n}</div>
                        <p className="text-foreground/70"><strong className="text-foreground block">{t}</strong>{d}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <BarChart3 className="text-primary mb-2" size={32} />
                    <CardTitle>Outcomes You Can Expect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-border/50">
                      <span className="text-foreground/70">Academic Improvement</span>
                      <span className="font-bold text-primary">70%+</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-border/50">
                      <span className="text-foreground/70">Participation Rate</span>
                      <span className="font-bold text-primary">80%+</span>
                    </div>
                    <p className="text-sm text-foreground/60 pt-2">Increased student confidence, engagement, and expanded access to services.</p>
                  </CardContent>
                </Card>
                <Card className="border-border/50 bg-background/50 backdrop-blur-sm md:col-span-2">
                  <CardHeader>
                    <ShieldCheck className="text-primary mb-2" size={32} />
                    <CardTitle>Compliance &amp; Accountability</CardTitle>
                  </CardHeader>
                  <CardContent className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      {["Service-based funding","Approved vendors only"].map(t => (
                        <div key={t} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /><span className="text-sm font-medium">{t}</span></div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {["Aggregate reporting only","Privacy protected (No PII)"].map(t => (
                        <div key={t} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /><span className="text-sm font-medium">{t}</span></div>
                      ))}
                    </div>
                    <p className="sm:col-span-2 text-sm text-foreground/60 italic">Our model is designed for district approval and audit safety. No student personal data is stored by GBFF.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-8">
                <h3 className="text-2xl font-bold mb-12 text-center">The Join &amp; Support Process</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {steps.map((step, idx) => {
                    const Icon = step.icon
                    return (
                      <div key={idx} className="relative group">
                        <Card className="h-full border-border/50 hover:border-primary/50 transition-colors">
                          <CardHeader className="pb-2">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                              <Icon className="text-primary" size={20} />
                            </div>
                            <CardTitle className="text-lg">{step.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-foreground/60">{step.description}</p>
                          </CardContent>
                        </Card>
                        {idx < steps.length - 1 && (
                          <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-primary/30">
                            <ArrowRight size={20} />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </TabsContent>

            {/* Corporate Tab */}
            <TabsContent value="corporate" className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Invest in Education &amp; Workforce Development</h2>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                      Partnering with Global Bright Futures Foundation allows organizations to support access to education and workforce development through structured, service-based programs delivered in collaboration with schools and vetted education providers.
                    </p>
                    <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl italic text-sm text-foreground/60">
                      All sponsorship funding is used exclusively for educational services and program delivery; no funds are distributed as cash to individuals.
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold flex items-center gap-2"><Heart className="text-primary" size={24} />What Your Sponsorship Supports</h3>
                    <div className="grid gap-4">
                      {["Tutoring and academic support programs for students","Educator and mentorship initiatives","Workforce readiness and skills development pathways","School and community-based learning programs"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-secondary/30 p-4 rounded-xl border border-border/50">
                          <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                          <span className="text-foreground/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <Card className="border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden">
                    <CardHeader className="bg-primary/5 border-b border-border/50">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="text-primary" size={24} />
                        <CardTitle className="text-xl">What You Receive</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-6">
                      <div className="space-y-3">
                        <p className="font-semibold text-primary">Structured Impact Reporting:</p>
                        <ul className="grid gap-2 text-foreground/70 text-sm">
                          {["Program participation and reach metrics","Student, educator, and tutor engagement data (aggregate reporting)","School and community partnership updates","Program delivery summaries aligned with CSR and ESG objectives"].map(t => (
                            <li key={t} className="flex gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />{t}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <p className="font-semibold text-primary">Additional Opportunities:</p>
                        <div className="flex flex-wrap gap-2">
                          {["Brand recognition","Employee engagement","Strategic education partnership visibility"].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-accent/10 border border-accent/20 p-6 rounded-2xl space-y-4">
                      <div className="flex items-center gap-2 text-accent"><Globe2 size={20} /><h4 className="font-bold">Scalable Impact</h4></div>
                      <ul className="text-sm text-foreground/70 space-y-2">
                        <li>• Academic support for students</li>
                        <li>• Work opportunities for tutors and educators</li>
                        <li>• Strengthened school and community programs</li>
                      </ul>
                    </div>
                    <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl space-y-4">
                      <div className="flex items-center gap-2 text-primary"><ShieldCheck size={20} /><h4 className="font-bold">Accountability &amp; Transparency</h4></div>
                      <p className="text-xs text-foreground/70 leading-relaxed">All programs are delivered through vetted partners under structured agreements to ensure accountability, transparency, and consistent quality.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Families Tab */}
            <TabsContent value="families" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold">Support Your Child&apos;s Learning</h2>
                <p className="text-lg text-foreground/70">We provide accessible, structured academic support designed to help students succeed.</p>
                <div className="grid sm:grid-cols-2 gap-6 text-left">
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2"><Heart className="text-red-500" size={20} />Family Benefits</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-foreground/70">
                      <p>Personalized tutoring support</p>
                      <p>Flexible online learning options</p>
                      <p>Access to enrichment resources</p>
                      <p>Sponsored or subsidized programs</p>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20 bg-primary/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2"><Zap className="text-primary" size={20} />Sponsored Access</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-foreground/70">
                      <p>Fully funded tutoring (when available)</p>
                      <p>Subsidized academic support</p>
                      <p>Expanded learning opportunities</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Tutors Tab */}
            <TabsContent value="tutors" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-secondary/30 p-8 md:p-12 rounded-[2.5rem] order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-6">Participants receive:</h3>
                  <div className="space-y-4">
                    {["Paid tutoring opportunities","Real-world teaching experience","Professional development and mentorship","Flexible work aligned with career goals"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary" size={20} />
                        <span className="text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6 order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold">Build Experience While Making Impact</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">We create pathways for tutors, students, and graduates to grow professionally through meaningful impact.</p>
                  <Link href="https://app.smartbrainlearning.org/tutor/signup" target="_blank" className="inline-block">
                    <Button className="rounded-full px-8 h-12">Become a Tutor</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Unified Impact Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">One Partnership. Multiple Outcomes.</h2>
            <p className="text-xl opacity-80 max-w-2xl mx-auto">Every partnership supports a wider ecosystem of educational success.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: Users2, text: "Students gaining academic support" },
              { icon: Briefcase, text: "Tutors gaining workforce experience" },
              { icon: GraduationCap, text: "Tutors receiving professional opportunities" },
              { icon: School, text: "Schools expanding access to services" },
              { icon: Globe2, text: "Global communities receiving support" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <item.icon size={32} />
                </div>
                <p className="text-sm font-medium leading-tight px-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Model Works */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background border border-border/50 rounded-3xl p-8 md:p-12 grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold">Why This Model Works</h3>
            </div>
            <div className="md:col-span-3 grid sm:grid-cols-2 gap-6">
              {["Reduces cost while expanding services","Combines tutoring + workforce development","Supports local schools and global communities","Scales easily across districts and programs"].map(t => (
                <p key={t} className="text-foreground/70 flex gap-2">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-1" />{t}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
