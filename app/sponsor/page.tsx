"use client";

import { useState, useRef } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Script from "next/script";
import {
  Heart,
  Globe2,
  Users,
  GraduationCap,
  CheckCircle,
  Shield,
  BookOpen,
  Briefcase,
  School,
  BarChart3,
  Handshake,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn, TextReveal, StaggerChildren, StaggerItem, ScaleIn, MagneticButton, HoverLift } from "@/components/motion";

const suggestedAmounts = [25, 50, 100, 200, 500, 1000];

const ZEFFY_FORM_URL =
  process.env.NEXT_PUBLIC_ZEFFY_FORM_URL ||
  "https://www.zeffy.com/en-US/donation-form/support-student-success-through-global-bright-futures-foundation";

export default function SponsorPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleDonateClick = (amount: number, isRecurring: boolean) => {
    if (ZEFFY_FORM_URL) {
      try {
        const url = new URL(ZEFFY_FORM_URL);
        if (amount > 0) {
          url.searchParams.set("amount", amount.toString());
        }
        if (isRecurring) {
          url.searchParams.set("recurring", "true");
        }
        window.open(url.toString(), "_blank");
      } catch (error) {
        console.error("Invalid Zeffy form URL:", error);
        window.open("https://www.zeffy.com/en-US/donation-form/support-student-success-through-global-bright-futures-foundation", "_blank");
      }
    } else {
      window.open("https://www.zeffy.com/en-US/donation-form/support-student-success-through-global-bright-futures-foundation", "_blank");
    }
  };

  return (
    <main>
      <Navigation />

      {/* Hero with Parallax */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url('/hero.png')`,
            y: bgY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        <div className="absolute inset-0 grain pointer-events-none" />

        <motion.div
          className="relative z-10 text-center text-white pt-20 px-6 max-w-4xl mx-auto"
          style={{ opacity: textOpacity }}
        >
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
              <Heart size={14} className="text-accent" />
              <span className="text-sm font-medium text-white/90">100% Tax Deductible</span>
            </div>
          </FadeIn>
          <TextReveal
            text="Your Gift Changes Lives"
            as="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          />
          <FadeIn delay={0.5}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Every contribution directly supports structured academic programs that provide tutoring, mentoring, and educator development through vetted partners. One gift expands access to learning opportunities for students, youth, and educators across the United States and globally.
            </p>
          </FadeIn>
          <FadeIn delay={0.7} className="w-full max-w-2xl mx-auto mt-4">
            <div className="relative overflow-hidden h-[600px] w-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
              <div 
                data-zeffy-embed 
                data-form-url="/embed/donation-form/support-student-success-through-global-bright-futures-foundation"
                style={{ width: "100%", height: "100%" }}
              />
              <div data-zeffy-embed-fallback style={{ display: "none" }}>
                <div style={{ position: "relative", overflow: "hidden", height: "600px", width: "100%" }}>
                  <iframe 
                    title='Donation form powered by Zeffy' 
                    style={{ position: "absolute", border: 0, top: 0, left: 0, bottom: 0, right: 0, width: "100%", height: "100%" }}
                    data-zeffy-embed-src='https://www.zeffy.com/embed/donation-form/support-student-success-through-global-bright-futures-foundation' 
                    {...({ allowPaymentRequest: true } as any)}
                    allowTransparency={true}
                  />
                </div>
              </div>
              <Script
                src="https://www.zeffy.com/embed/v2/zeffy-embed.js"
                strategy="lazyOnload"
                onError={() => {
                  document.querySelectorAll('[data-zeffy-embed-fallback]').forEach((el: any) => {
                    el.style.display = 'block';
                    el.querySelectorAll('iframe[data-zeffy-embed-src]').forEach((f: any) => {
                      f.src = f.getAttribute('data-zeffy-embed-src');
                    });
                  });
                }}
              />
            </div>
          </FadeIn>
        </motion.div>
      </section>

      {/* Why This Matters */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why This Matters
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Addressing the gap between student support and educator opportunities.
              </p>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              <FadeIn delay={0.2} direction="up">
                <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:border-primary/20 transition-colors duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="text-primary" size={24} />
                  </div>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center md:text-left">
                    Educational opportunity is often determined by access to <span className="text-foreground font-semibold">consistent academic support</span> and structured learning pathways.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:border-primary/20 transition-colors duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-accent" size={24} />
                  </div>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center md:text-left">
                    At the same time, many educators, college students, and emerging professionals lack <span className="text-foreground font-semibold">structured opportunities</span> to apply their skills in meaningful education settings.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.6} direction="up">
                <div className="mt-4 p-8 md:p-10 rounded-3xl bg-primary text-primary-foreground text-center shadow-xl shadow-primary/10">
                  <p className="text-xl md:text-2xl font-bold leading-tight">
                    This program addresses both challenges through a coordinated system that connects learners with academic support and creates workforce-aligned education opportunities.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* Donation Impact */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How Your Support Creates Impact
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                Your contribution supports an integrated program model where all funds are applied directly to services delivered by approved providers under structured reporting and oversight.
              </p>
            </FadeIn>
          </div>

          <StaggerChildren className="grid md:grid-cols-2 gap-12" staggerDelay={0.1}>
            {[
              { 
                icon: BookOpen, 
                title: "Students", 
                desc: "Tutoring, mentoring, and academic support that builds confidence and improves learning outcomes." 
              },
              { 
                icon: Briefcase, 
                title: "Tutors & Educators", 
                desc: "Paid and structured opportunities for college students, graduates, and educators to gain experience and develop professional skills." 
              },
              { 
                icon: School, 
                title: "Partner Schools", 
                desc: "Expanded academic support services without increasing school staffing costs." 
              },
              { 
                icon: Users, 
                title: "Families & Communities", 
                desc: "Improved access to learning support that strengthens educational engagement and long-term opportunity." 
              },
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="flex gap-5 group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                  >
                    <item.icon className="text-primary" size={24} />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Amount Impact */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Impact Levels
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-14">
              All contributions are allocated directly to program services delivered through approved education providers.
            </p>
          </FadeIn>
          
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              { amount: "$50", impact: "Student learning materials and academic resources" },
              { amount: "$200", impact: "Partial tutoring and structured learning support" },
              { amount: "$1,000", impact: "Expanded multi-student academic support programs" },
              { amount: "Custom", impact: "Scaled program support based on funding priorities" },
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="bg-background p-8 rounded-3xl shadow-lg shadow-primary/5 border border-border/50 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-center"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-gradient mb-3">{item.amount}</div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.impact}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          
          <FadeIn delay={0.3} className="mt-14">
            <MagneticButton>
              <Button
                onClick={() => handleDonateClick(0, false)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-lg font-bold rounded-full shadow-xl transition-all duration-300"
              >
                Give Today
              </Button>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      {/* Oversight & Accountability */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Oversight & Accountability
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  All programs operate under structured oversight systems ensuring funds are used responsibly and as intended.
                </p>
                <div className="space-y-4">
                  {[
                    "Funds are used exclusively for approved educational services",
                    "Services are delivered by vetted providers",
                    "Outcomes are tracked through aggregate reporting",
                    "No cash is distributed to individuals"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <CheckCircle className="text-primary" size={14} />
                      </div>
                      <span className="text-foreground/80 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-secondary/30 border border-border/50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Trusted Oversight</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Global Bright Futures Foundation Inc. is a 501(c)(3) nonprofit organization committed to the highest standards of financial transparency and program integrity.
                  </p>
                  <Link href="https://app.candid.org/profile/16509371/global-bright-futures-foundation-inc-41-2810962/?pkId=0b067e55-2a04-462c-8f3f-fc2e3d05c211" target="_blank">
                    <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5">
                      View Transparency Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* Brighter Futures */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight max-w-6xl mx-auto">
              Every contribution large or small helps open doors to learning, opportunity, and brighter futures.
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* Tax Info */}
      <section className="py-14 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-muted-foreground leading-relaxed">
              Global Bright Futures Foundation Inc. is a U.S. 501(c)(3) nonprofit organization (EIN: 41-2810962).
              <br />
              Donations are tax-deductible in the United States to the extent permitted by law. International tax deductibility varies by jurisdiction.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Partner Benefits & Recognition */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[center_top_-1px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Partner <span className="text-primary">Benefits</span> & Recognition
              </h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                Join a community of changemakers making education accessible worldwide
              </p>
            </FadeIn>
          </div>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              {
                title: "Recognition & Visibility",
                description: "Featured on our website, social media, and annual reports to showcase your commitment to global education.",
                icon: Globe2,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Impact Reports",
                description: "Exclusive impact reports and regular updates on how your contributions are transforming learning outcomes.",
                icon: BarChart3,
                color: "from-indigo-500 to-indigo-600"
              },
              {
                title: "Community Engagement",
                description: "Opportunities for employee and community involvement through structured volunteering and mentorship programs.",
                icon: Handshake,
                color: "from-emerald-500 to-emerald-600"
              },
              {
                title: "Direct Connection",
                description: "A direct connection to the students you empower, with stories and updates from the communities you support.",
                icon: Heart,
                color: "from-rose-500 to-rose-600"
              }
            ].map((benefit, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="bg-background rounded-[2rem] p-8 border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col group"
                  whileHover={{ y: -8 }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <Footer />
    </main>
  );
}

