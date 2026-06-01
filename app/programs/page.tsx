"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { BookOpen, Code2, Heart, Users, GraduationCap, Package, ArrowRight, School, Globe, CheckCircle, Briefcase, Apple, Handshake, CreditCard, CircleDollarSign, BarChart3, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, TextReveal, StaggerChildren, StaggerItem, MagneticButton, ScaleIn } from "@/components/motion"
import Image from "next/image"


const programCategories = [
  {
    icon: BookOpen,
    title: "Student Learning Support",
    description: "Academic support for student success",
    benefitsTitle: "Programs include:",
    benefits: [
      "Tutoring in core subjects",
      "Academic enrichment and skill-building",
      "Interest-based learning programs (STEM, coding, financial literacy, and life skills — when funding is available) learning support",
      "Access to learning resources",
    ],
  },
  {
    icon: Globe,
    title: "Global Learning Partnerships",
    description: "Cross-community education collaboration",
    benefitsTitle: "Programs include:",
    benefits: [
      "School and community partnerships",
      "Support for under-resourced communities",
      "Shared learning programs",
      "Regional and international collaboration",
    ],
  },
  {
    icon: Briefcase,
    title: "Workforce & Career Readiness Pathways",
    description: "Education-to-workforce development support",
    benefitsTitle: "Programs include:",
    benefits: [
      "Tutoring and education support roles (via approved providers)",
      "Leadership and skills development",
      "Career readiness programs",
      "Education-sector experience pathways",
    ],
    footer: "📌 Scholarships, tuition assistance, and fellowships may be available based on funding and eligibility and are administered through approved partners only. No direct cash assistance is provided.",
  },
  {
    icon: Apple,
    title: "Educator Development Pathways",
    description: "Support for educators and future educators",
    benefitsTitle: "Programs include:",
    benefits: [
      "Professional training and development",
      "Tutoring and instructional roles",
      "Mentorship programs",
      "Career transition support",
      "Burnout recovery and re-entry pathways",
    ],
  },
]



export default function ProgramsPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-accent/60 text-primary-foreground py-20 md:py-28 relative overflow-hidden gradient-animate">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.05] rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-widest text-primary-foreground/50 mb-4 block">
              Our Programs
            </span>
          </FadeIn>
          <TextReveal
            text="Breaking barriers to learning—empowering students, educators, and future leaders.
"
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          />
        </div>
      </section>

      {/* Support One, Empower Two */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[center_top_-1px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Support One, Empower Two™
              </h2>
              <p className="text-xl md:text-2xl font-medium text-foreground/80">
                Education Access & Workforce Development Program
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="prose prose-lg max-w-none text-foreground/70 text-center space-y-8 mb-16">
              <p className="text-xl leading-relaxed">
                Global Bright Futures Foundation delivers structured academic support, educator development, and workforce readiness programs through partnerships with schools, community organizations, and approved education providers.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-background rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl">
                <Image
                  src="/program.png"
                  alt="Support One, Empower Two Program"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Funding & Access Overview */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">FUNDING & ACCESS OVERVIEW</h2>
              <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8" />
              <p className="text-xl text-foreground/80 leading-relaxed max-w-4xl mx-auto">
                We use a structured funding model combining school funding, grants, and subsidized support to expand access to academic services.
              </p>
              <p className="mt-4 text-lg text-foreground/60 italic">
                All funding is restricted to approved educational services delivered through vetted or school-aligned providers under structured oversight and compliance standards.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 space-y-6">
              <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {/* 1. Subsidized Programs */}
                <AccordionItem value="subsidized" className="border-border/50 px-8 md:px-12 py-2 hover:bg-primary/5 transition-colors rounded-2xl bg-background shadow-sm border">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                        <CircleDollarSign className="text-blue-500" size={24} />
                      </div>
                      <div>
                        <span className="text-xl font-bold block">Subsidized Programs (Cost-Shared Support)</span>
                        <span className="text-sm text-foreground/50 font-medium uppercase tracking-wider">Shared Funding Model</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <div className="space-y-8 pt-4">
                      <p className="text-lg text-foreground/70 leading-relaxed">
                        Schools and GBFF share program costs to expand access while reducing per-student expenses. Programs are delivered through the Support One, Empower Two™ vetted provider network, ensuring consistent instructional quality and standardized delivery.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h4 className="font-bold text-primary flex items-center gap-2">
                            <CheckCircle size={18} /> Provider Participation Model
                          </h4>
                          <p className="text-sm text-foreground/60 mb-2">Approved providers operate under a structured service agreement where they:</p>
                          <ul className="space-y-3">
                            {[
                              "Deliver consistent academic support services",
                              "Align with school academic priorities and program requirements",
                              "Participate in scalable, cost-efficient service delivery models",
                              "Support workforce development pathways for educators and tutors",
                              "Expand access for high-need student populations"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-foreground/80">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                <span className="text-sm leading-tight">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-bold text-emerald-600 flex items-center gap-2">
                            <CheckCircle size={18} /> Benefits
                          </h4>
                          <ul className="space-y-3">
                            {[
                              "Lower per-student cost",
                              "Increased student participation",
                              "Flexible school budget usage",
                              "Expanded academic support capacity"
                            ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-foreground/80">
                                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                  <CheckCircle size={12} className="text-emerald-500" />
                                </div>
                                <span className="text-sm font-medium">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 2. Sponsored / Fully Funded Access */}
                <AccordionItem value="sponsored" className="border-border/50 px-8 md:px-12 py-2 hover:bg-primary/5 transition-colors rounded-2xl bg-background shadow-sm border">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <Handshake className="text-emerald-500" size={24} />
                      </div>
                      <div>
                        <span className="text-xl font-bold block">Sponsored / Fully Funded Access</span>
                        <span className="text-sm text-foreground/50 font-medium uppercase tracking-wider">Grant & Philanthropic Support</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <div className="space-y-8 pt-4">
                      <p className="text-lg text-foreground/70 leading-relaxed">
                        Programs may be fully or partially funded through grants, corporate sponsors, or philanthropic partners. GBFF manages funding coordination, compliance, provider assignment, and service delivery oversight.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h4 className="font-bold text-primary flex items-center gap-2">
                            <CheckCircle size={18} /> Provider Role
                          </h4>
                          <p className="text-sm text-foreground/80">
                            Approved providers deliver services under funded allocations with standardized instructional expectations and reporting requirements.
                          </p>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-bold text-emerald-600 flex items-center gap-2">
                            <CheckCircle size={18} /> Benefits
                          </h4>
                          <ul className="space-y-3">
                            {[
                              "No-cost access when funding is available",
                              "Increased equity for high-need schools",
                              "Expanded program reach",
                              "Reduced financial barriers"
                            ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-foreground/80">
                                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                  <CheckCircle size={12} className="text-emerald-500" />
                                </div>
                                <span className="text-sm font-medium">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 3. School-Funded Access */}
                <AccordionItem value="school-funded" className="border-border/50 px-8 md:px-12 py-2 hover:bg-primary/5 transition-colors rounded-2xl bg-background shadow-sm border">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                        <School className="text-orange-500" size={24} />
                      </div>
                      <div>
                        <span className="text-xl font-bold block">School-Funded Access</span>
                        <span className="text-sm text-foreground/50 font-medium uppercase tracking-wider">Direct Budget Allocation</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <div className="space-y-8 pt-4">
                      <p className="text-lg text-foreground/70 leading-relaxed">
                        Schools may use existing academic support budgets (Title I, intervention, enrichment, tutoring, or related allocations) to access structured services.
                      </p>
                      
                      <div className="space-y-6">
                        <div className="bg-secondary/40 p-6 rounded-2xl border border-border/50">
                          <h4 className="font-bold text-primary flex items-center gap-2 mb-4">
                            <ArrowRight size={18} className="text-orange-500" /> Flexible Vendor Alignment
                          </h4>
                          <p className="text-sm text-foreground/70 mb-4">Where schools already have existing tutoring or education vendors, GBFF supports integration by:</p>
                          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                            {[
                              "Structuring funding within approved academic service categories",
                              "Aligning service delivery to standardized program requirements",
                              "Allowing school-selected vendors to participate if they meet program standards",
                              "Providing optional access to GBFF vetted providers for expanded capacity",
                              "Ensuring consistent reporting and accountability across all providers"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-foreground/80">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                                <span className="text-xs font-medium leading-tight">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-bold text-emerald-600 flex items-center gap-2">
                            <CheckCircle size={18} /> What This Ensures
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-4">
                            {[
                              "Schools retain full control of vendor relationships",
                              "Existing vendor contracts remain valid if aligned",
                              "No disruption to current school systems",
                              "Optional expansion through GBFF provider network"
                            ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/10">
                                <CheckCircle size={14} className="text-emerald-500" />
                                <span className="text-xs font-bold text-emerald-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 4. EDUCATION SERVICE CREDIT & VOUCHER MODEL */}
                <AccordionItem value="voucher" className="border-border/50 px-8 md:px-12 py-2 hover:bg-primary/5 transition-colors rounded-2xl bg-background shadow-sm border">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                        <CreditCard className="text-violet-500" size={24} />
                      </div>
                      <div>
                        <span className="text-xl font-bold block">Education Service Credit & Voucher Model</span>
                        <span className="text-sm text-foreground/50 font-medium uppercase tracking-wider">Standardized Instructional Units</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <div className="space-y-8 pt-4">
                      <p className="text-lg text-foreground/70 leading-relaxed">
                        Academic services are delivered through standardized Service Credits, which represent defined instructional units (e.g., tutoring sessions, intervention blocks, enrichment modules).
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-bold text-primary mb-3 uppercase tracking-tight text-sm">Vendor & Voucher Usage Rules</h4>
                            <p className="text-sm text-foreground/60">Service Credits / Vouchers may be used ONLY with:</p>
                            <ul className="mt-2 space-y-2">
                              <li className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                                <CheckCircle size={14} className="text-primary" /> GBFF vetted education providers
                              </li>
                              <li className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                                <CheckCircle size={14} className="text-primary" /> School-approved vendors aligned with program standards
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                            <h4 className="font-bold text-red-700 mb-3 uppercase tracking-tight text-sm">Safeguards</h4>
                            <ul className="space-y-2">
                              {[
                                "Not cash or financial instruments",
                                "Not transferable outside program systems",
                                "Used only for approved educational services",
                                "Fully tracked, documented, and reportable"
                              ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs font-bold text-red-600/80">
                                  <div className="w-1 h-1 rounded-full bg-red-400" /> {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="bg-secondary/40 p-6 rounded-2xl border border-border/50">
                            <h4 className="font-bold text-primary mb-3 uppercase tracking-tight text-sm">Payment Structure</h4>
                            <ul className="space-y-3">
                              {[
                                "Services are delivered first",
                                "Services are documented and verified",
                                "Payments are issued only after validation",
                                "Rates are pre-approved under program agreements"
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-foreground/70">
                                  <span className="text-primary font-bold">{i+1}.</span>
                                  <span className="text-xs font-medium">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <h4 className="font-bold text-emerald-600 uppercase tracking-tight text-sm">What This Solves</h4>
                            <ul className="space-y-2">
                              {[
                                "Prevents pricing disputes",
                                "Ensures accountability for services delivered",
                                "Aligns with grant and district audit expectations",
                                "Provides clear cost control and transparency"
                              ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                                  <CheckCircle size={12} /> {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 5. VETTED EDUCATION PROVIDER NETWORK */}
                <AccordionItem value="vetted-network" className="border-border/50 px-8 md:px-12 py-2 hover:bg-primary/5 transition-colors rounded-2xl bg-background shadow-sm border">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Users className="text-primary" size={24} />
                      </div>
                      <div>
                        <span className="text-xl font-bold block tracking-tight">Vetted Education Provider Network</span>
                        <span className="text-sm text-foreground/50 font-medium uppercase tracking-wider">Quality & Compliance Standards</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <div className="space-y-8 pt-4">
                      <p className="text-lg text-foreground/70 leading-relaxed">
                        Global Bright Futures Foundation operates a Support One, Empower Two™ vetted provider network including qualified tutors, educators, and academic support professionals.
                      </p>
                      <p className="text-foreground/80 font-medium italic">
                        All providers—whether GBFF-approved or school-aligned—operate under structured standards.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h4 className="font-bold text-primary flex items-center gap-2 uppercase text-sm tracking-widest">
                            Provider Oversight Standards
                          </h4>
                          <ul className="space-y-3">
                            {[
                              "Instructional quality and alignment requirements",
                              "Compliance and service delivery expectations",
                              "Standardized reporting and accountability systems",
                              "Alignment with school academic goals and outcomes"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-foreground/80 bg-secondary/30 p-4 rounded-xl border border-border/50">
                                <CheckCircle size={16} className="text-primary mt-1" />
                                <span className="text-sm font-semibold">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20">
                            <h4 className="font-bold text-primary mb-4 uppercase text-xs tracking-widest">Key Clarification</h4>
                            <p className="text-lg font-medium leading-relaxed text-foreground/80">
                              GBFF functions as a program administration and funding coordination entity, ensuring consistency, compliance, and quality across all service delivery pathways.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>



                {/* 6. PRIORITY ACCESS ALLOCATION */}
                <AccordionItem value="priority" className="border-border/50 px-8 md:px-12 py-2 hover:bg-primary/5 transition-colors rounded-2xl bg-background shadow-sm border">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                        <BarChart3 className="text-amber-500" size={24} />
                      </div>
                      <div>
                        <span className="text-xl font-bold block tracking-tight">Priority Access Allocation</span>
                        <span className="text-sm text-foreground/50 font-medium uppercase tracking-wider">Need-Based Support Distribution</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <div className="space-y-8 pt-4">
                      <p className="text-lg text-foreground/70 leading-relaxed">
                        When demand exceeds capacity, access is allocated based on student academic need, school resource level, funding type, and provider availability.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h4 className="font-bold text-primary flex items-center gap-2 uppercase text-xs tracking-widest">
                            Provider Flexibility
                          </h4>
                          <p className="text-sm text-foreground/60 font-medium">Assignments may include:</p>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border/50 shadow-sm">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <Users size={16} className="text-primary" />
                              </div>
                              <span className="text-sm font-bold">GBFF vetted providers</span>
                            </li>
                            <li className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border/50 shadow-sm">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <School size={16} className="text-primary" />
                              </div>
                              <span className="text-sm font-bold">School-approved vendors (if aligned)</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-bold text-emerald-600 flex items-center gap-2 uppercase text-xs tracking-widest">Benefits</h4>
                          <ul className="space-y-3">
                            {[
                              "Transparent selection criteria",
                              "Equitable student access",
                              "Structured allocation system",
                              "Full accountability in delivery"
                            ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-foreground/80">
                                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                  <CheckCircle size={14} className="text-emerald-500" />
                                </div>
                                <span className="text-sm font-bold">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* 7. GLOBAL LEARNING IMPACT MATCHING */}
                <AccordionItem value="global-matching" className="border-border/50 px-8 md:px-12 py-2 hover:bg-primary/5 transition-colors rounded-2xl bg-background shadow-sm border md:col-span-2">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0">
                        <Globe className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <span className="text-xl font-bold block tracking-tight">Global Learning Impact Matching</span>
                        <span className="text-sm text-foreground/50 font-medium uppercase tracking-wider">International Support Coordination</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <div className="space-y-8 pt-4">
                      <p className="text-lg text-foreground/70 leading-relaxed">
                        Global Bright Futures Foundation may coordinate parallel learning support initiatives in under-resourced international communities through separate vetted education partners.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                          <h4 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5" /> Safeguard
                          </h4>
                          <ul className="space-y-3">
                            {[
                              "Local school services remain fully protected",
                              "Global programs are funded separately",
                              "No school funds are redirected internationally"
                            ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-blue-800 font-bold text-sm">
                                <div className="w-2 h-2 rounded-full bg-blue-400" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="font-bold text-emerald-600 flex items-center gap-2 uppercase text-xs tracking-widest">Benefits</h4>
                          <ul className="space-y-3">
                            {[
                              "Strong CSR and grant alignment",
                              "Expanded global education impact",
                              "No disruption to local programs",
                              "Enhanced partnership value"
                            ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-foreground/80">
                                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                  <CheckCircle size={14} className="text-emerald-500" />
                                </div>
                                <span className="text-sm font-bold">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="section-padding bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Program Impact Areas</h2>
              <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
            </div>
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 gap-8" staggerDelay={0.1}>
            {programCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="h-full"
                  >
                    <Card className="border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full bg-background/80 backdrop-blur-sm overflow-hidden flex flex-col">
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4 mb-2">
                          <motion.div
                            className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0"
                            whileHover={{ rotate: 10, scale: 1.1 }}
                          >
                            <Icon className="text-primary" size={28} />
                          </motion.div>
                          <CardTitle className="text-2xl font-bold text-foreground leading-tight">
                            {category.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col gap-6">
                        <p className="text-foreground/70 text-lg leading-relaxed">
                          {category.description}
                        </p>

                        <div className="space-y-4">
                          <h4 className="font-bold text-primary flex items-center gap-2 uppercase tracking-wider text-xs">
                            <CheckCircle size={14} />
                            {category.benefitsTitle}
                          </h4>
                          <ul className="space-y-3">
                            {category.benefits.map((benefit, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-3 text-foreground/80 group">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors flex-shrink-0" />
                                <span className="leading-snug">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {category.footer && (
                          <div className="mt-auto pt-6 border-t border-border/50 italic text-foreground/60 text-sm leading-relaxed">
                            {category.footer}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* How the Program Works */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[center_top_-1px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">How the Program Works</h2>
              <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8" />
              <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
                Global Bright Futures Foundation operates through a structured, partner-based delivery model connecting schools, educators, students, and vetted providers.
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-blue-500 via-primary to-amber-500 opacity-20" />

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10" staggerDelay={0.15}>
              {[
                {
                  icon: Users,
                  title: "Partner Identification",
                  description: "Schools and community partners identify student and program needs.",
                  color: "bg-blue-500"
                },
                {
                  icon: CreditCard,
                  title: "Service-Based Allocation",
                  description: "Support is allocated through service-based funding for approved educational services delivered by vetted providers. No cash is distributed.",
                  color: "bg-indigo-500"
                },
                {
                  icon: GraduationCap,
                  title: "Service Delivery",
                  description: "Approved providers deliver tutoring, mentoring, and enrichment programs.",
                  color: "bg-primary"
                },
                {
                  icon: Handshake,
                  title: "Participant Engagement",
                  description: "Students, youth, and educators engage in structured learning and workforce pathways.",
                  color: "bg-emerald-500"
                },
                {
                  icon: CheckCircle,
                  title: "Monitoring & Reporting",
                  description: "Program outcomes are tracked through structured reporting systems for accountability and improvement.",
                  color: "bg-amber-500"
                },
              ].map((step, idx) => (
                <StaggerItem key={idx}>
                  <div className="text-center group">
                    <motion.div
                      className={`${step.color} text-white rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-xl relative`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-background border-2 border-border rounded-full flex items-center justify-center text-xs font-bold text-foreground shadow-sm">
                        {idx + 1}
                      </div>
                      <step.icon size={40} />
                    </motion.div>

                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors min-h-[3rem] flex items-center justify-center px-2">
                      {step.title}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed px-2">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Program Access Pathways */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Voucher System Card */}
          <ScaleIn>
            <div className="bg-white/10 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 border border-white/20 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32" />

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8">Voucher-Based Support Model</h3>
                  <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                    Where applicable, support may be structured through education service vouchers ranging from <span className="text-accent font-bold">$500–$3,000</span> or custom allocations.
                  </p>
                </div>

                <div className="space-y-6 bg-white/5 p-8 md:p-10 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                  <p className="font-bold text-xl mb-2">These represent service value only and are:</p>
                  <ul className="space-y-4">
                    {[
                      "non-cash",
                      "non-transferable",
                      "restricted to approved providers"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4 group/item">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 group-hover/item:bg-accent/40 transition-colors">
                          <CheckCircle className="text-accent" size={20} />
                        </div>
                        <span className="text-lg md:text-xl font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScaleIn>

          {/* CTA Button */}
          <FadeIn delay={0.2} className="text-center mt-20">
            <MagneticButton>
              <Link href="https://app.globalbrightfutures.org/">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-8 text-xl font-extrabold rounded-full shadow-[0_20px_50px_rgba(245,158,11,0.3)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.5)] transition-all duration-300 hover:scale-105 active:scale-95">
                  Apply for Education Support Voucher
                </Button>
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Outcomes</h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                Our model supports a multi-stakeholder impact system:
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {[
              {
                icon: GraduationCap,
                title: "Students",
                description: "Tutoring, mentoring, and academic support that builds confidence and improves learning outcomes.",
                color: "text-blue-500",
                bg: "bg-blue-500/10"
              },
              {
                icon: Users,
                title: "Tutors & Educators",
                description: "Paid and structured opportunities for college students, graduates, and educators to gain experience and develop professional skills.",
                color: "text-indigo-500",
                bg: "bg-indigo-500/10"
              },
              {
                icon: School,
                title: "Partner Schools",
                description: "Expanded academic support services without increasing school staffing costs.",
                color: "text-amber-500",
                bg: "bg-amber-500/10"
              },
              {
                icon: Globe,
                title: "Families & Communities",
                description: "Improved access to learning support that strengthens educational engagement and long-term opportunity.",
                color: "text-emerald-500",
                bg: "bg-emerald-500/10"
              },
            ].map((result, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-background rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 text-center group h-full flex flex-col items-center">
                  <div className={`${result.bg} ${result.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <result.icon size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{result.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {result.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Partnership Network */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[center_top_-1px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Partnership Network</h2>
              <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8" />
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                We work with:
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" staggerDelay={0.1}>
            {[
              "Schools and educational institutions",
              "Under-resourced communities globally",
              "Community and nonprofit organizations",
              "Education service providers",
              "Funding partners and sponsors"
            ].map((partner, idx) => (
              <StaggerItem key={idx}>
                <div className="flex items-center gap-4 bg-secondary/40 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle size={24} className="text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-foreground/80 leading-tight">{partner}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.6}>
            <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-8 text-center relative overflow-hidden group max-w-4xl mx-auto">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
              <p className="text-lg md:text-xl italic text-foreground/70 leading-relaxed">
                All partners are vetted for quality, compliance, and delivery standards.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">Frequently Asked Questions</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="what-are-voucher-credits" className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  What are Education Support Voucher Credits?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 text-foreground/60">
                    <p>
                      Global Bright Futures Foundation Inc. provides Tutoring Service Credits (Voucher Credits), a nonprofit-supported funding mechanism designed to help schools expand access to academic support services at reduced cost.
                    </p>
                    <p>These credits:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Are applied directly to approved tutoring services</li>
                      <li>Are delivered through approved vendors</li>
                      <li>Are used for tutoring, enrichment, and intervention programs</li>
                      <li>Are not redeemable as cash or transferable funds</li>
                    </ul>
                    <p>Schools may use these credits to expand:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Academic tutoring</li>
                      <li>Intervention support</li>
                      <li>Enrichment programs</li>
                      <li>Summer and after-school learning</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-schools-use" className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  How do schools use Voucher Credits?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 text-foreground/60">
                    <p>
                      Voucher Credits are applied directly toward instructional services provided through our approved education partner, Smart Brain TLC Inc. or other approved vendor.
                    </p>
                    <p>
                      Schools determine student eligibility and program participation, while Global Bright Futures Foundation Inc. supports cost reduction, coordination, and program expansion through nonprofit funding mechanisms.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="are-they-free" className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  Are Voucher Credits free or do schools pay for them?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 text-foreground/60">
                    <p>
                      Global Bright Futures Foundation Inc. offers Tutoring Service Credits (Voucher Credits) in two formats:
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Fully Funded (Grant-Supported Credits)</h4>
                      <p>
                        Some Voucher Credits are fully funded through nonprofit or grant support. These are provided at no cost to schools and are used to expand tutoring, intervention, enrichment, and learning support services.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Cost-Shared (Subsidized Model)</h4>
                      <p>
                        Some Voucher Credits are partially subsidized. In this model, Global Bright Futures Foundation Inc. reduces the overall service cost through nonprofit support, while the school contributes a portion of the funding.
                      </p>
                    </div>
                    <p>This model allows schools to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Expand services within existing budgets</li>
                      <li>Serve more students</li>
                      <li>Access higher levels of tutoring support at reduced rates</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-used" className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  How Voucher Credits Are Used?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 text-foreground/60">
                    <p>All Voucher Credits:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Are applied directly to approved tutoring or educational services</li>
                      <li>Are delivered through Smart Brain TLC Inc.</li>
                      <li>Are used for tutoring, enrichment, and intervention programs</li>
                      <li>Are not redeemable as cash or transferable funds</li>
                    </ul>
                    <p>Schools use credits for:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Academic tutoring</li>
                      <li>Intervention support</li>
                      <li>Enrichment programs</li>
                      <li>Summer and after-school learning</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="why-different-types" className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  Why are there different types of Voucher Credits?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 text-foreground/60">
                    <p>Different credit types allow schools to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Access fully funded support when grant funding is available</li>
                      <li>Use cost-shared options when expanding beyond available funding</li>
                      <li>Scale services gradually and sustainably based on student need</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="global-programs" className="bg-background border border-border/50 rounded-2xl px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  Do you support global programs?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2 text-foreground/60">
                    <p>
                      Yes. For every U.S. school supported, we extend services to a partner school in an under-resourced community.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
