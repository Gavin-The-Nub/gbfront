"use client"

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import { Users, Target, Shield, Eye, Cpu, Network, Globe, BookOpen } from "lucide-react";
import { BoardMember } from "@/components/board-member";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn, StaggerChildren, StaggerItem, TextReveal, DrawLine, ScaleIn, MagneticButton, HoverLift } from "@/components/motion";

import FounderMessage from "@/components/founder-message";

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="bg-background">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
        <div className="absolute inset-0 grain pointer-events-none" />

        <motion.div
          className="relative z-10 text-center text-white pt-20 px-6"
          style={{ opacity: textOpacity }}
        >
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
              Our Identity
            </span>
          </FadeIn>
          <TextReveal
            text="About Us"
            as="h1"
            className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 tracking-tight"
          />
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              Strengthening structured connections between schools, educators, and communities to expand access to learning support.
            </p>
          </FadeIn>
        </motion.div>
      </section>

      {/* OUR ORGANIZATION */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="right">
              <div className="sticky top-32">
                <span className="text-sm font-bold text-primary uppercase tracking-widest mb-4 block">Our Organization</span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-[1.1]">
                  Building Partnerships for <span className="text-primary italic">Consistent</span> Delivery
                </h2>
                <DrawLine className="w-24 h-1 bg-primary mb-10" />
              </div>
            </FadeIn>
            
            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <p className="text-xl text-foreground leading-relaxed">
                  Global Bright Futures Foundation is a U.S.-based nonprofit organization that works in partnership with schools, educators, and community organizations to expand access to structured educational support programs.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We coordinate with vetted education providers to ensure consistent, accountable, and scalable delivery of services across regional and international settings.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our role is to facilitate partnerships that strengthen access to academic support, educator development, and workforce-aligned learning opportunities.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <FounderMessage />

      {/* OUR PURPOSE & HOW WE WORK */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            {/* Purpose */}
            <div className="space-y-10">
              <FadeIn>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Our Purpose</h3>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We address gaps in educational access by strengthening structured connections between schools, educators, and communities.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our focus is to expand access to learning support and development pathways through coordinated, partner-based program delivery that serves students, educators, and emerging professionals.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* How We Work */}
            <div className="space-y-10">
              <FadeIn delay={0.2}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Network size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">How We Work</h3>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We operate through a structured, partnership-based model that connects funding partners, schools, and approved education providers.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    All programs are delivered exclusively through vetted partners to ensure accountability, consistency, and responsible use of resources.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    This model supports scalable implementation across local, regional, and international education networks.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <FadeIn>
              <span className="text-sm font-bold text-primary uppercase tracking-widest mb-4 block">Core Principles</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Values
              </h2>
              <DrawLine className="w-20 h-1 bg-primary mx-auto mb-8" />
            </FadeIn>
          </div>
          
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {[
              { 
                icon: Globe, 
                title: "Equity", 
                desc: "We support fair access to educational opportunities across diverse communities." 
              },
              { 
                icon: Users, 
                title: "Partnership", 
                desc: "We work collaboratively with schools, educators, and organizations to deliver sustainable impact." 
              },
              { 
                icon: Shield, 
                title: "Accountability", 
                desc: "We ensure responsible program delivery through structured oversight and monitoring systems." 
              },
              { 
                icon: Eye, 
                title: "Transparency", 
                desc: "We maintain clear reporting and visibility into program operations and outcomes." 
              },
            ].map((value, idx) => (
              <StaggerItem key={idx}>
                <HoverLift className="h-full">
                  <div className="h-full p-8 rounded-3xl bg-secondary/50 border border-border/50 hover:border-primary/20 transition-all duration-300">
                    <div className="w-14 h-14 mb-8 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      <value.icon size={28} />
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* OPERATIONS & TECHNOLOGY */}
      <section className="section-padding bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <FadeIn>
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-widest mb-6 block">Efficiency & Scale</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Operations & <span className="text-primary italic">Technology</span>
              </h2>
              <div className="space-y-6 text-background/80 text-lg leading-relaxed max-w-3xl mx-auto">
                <p>
                  We utilize nonprofit-eligible technology platforms to support communication, coordination, and program management.
                </p>
                <p>
                  These systems improve operational efficiency and accessibility but do not deliver educational services directly. Where eligible, we leverage nonprofit programs or discounted access from technology providers.
                </p>
                <div className="pt-4 flex flex-wrap gap-3 justify-center">
                  {["Google Workspace", "Zoom", "LMS", "Design Tools", "AI Administrative Systems"].map((tool) => (
                    <span key={tool} className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium border border-white/5">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Leadership and Governance
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                Leadership and governance ensure responsible oversight of programs, partnerships, and organizational operations.
              </p>
              <Link
                href="/board-of-directors"
                className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
              >
                View Full Leadership →
              </Link>
            </FadeIn>
          </div>
          
          <div className="space-y-8">
            <FadeIn>
              <BoardMember
                name="Ilyne Cendy Root"
                title="Founder & President"
                shortDescription="Ilyne Cendy Root is an education professional and nonprofit executive with experience in instructional leadership, program development, and cross-cultural education initiatives."
                fullDescription="Ilyne Cendy Root is an education professional and nonprofit executive with experience in instructional leadership, program development, and cross-cultural education initiatives across the Philippines, Thailand, and the United States. Her focus includes building ethical, school-aligned partnerships and ensuring that all programs operate under structured, transparent, and accountable systems."
                imageSrc="/ilyne.jpg"
                imageAlt="Ilyne Cendy Root"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <BoardMember
                name="Joseph Root"
                title="Vice President"
                shortDescription="Joseph Root provides executive and operational leadership, supporting organizational planning, program coordination, and partnership development."
                fullDescription="Joseph Root provides executive and operational leadership for Global Bright Futures Foundation Inc., supporting organizational planning, program coordination, and partnership development. He works closely with executive leadership to ensure effective program implementation, compliance alignment, and operational consistency across initiatives."
                imageSrc="/joseph.jpg"
                imageAlt="Joseph Root"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Accountability & Transparency
              </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto text-center">
              We maintain clear, structured oversight to ensure funds are used responsibly and program services are delivered as intended.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.15}>
            <div className="flex justify-center mb-10">
              <motion.a
                href="https://app.candid.org/profile/16509371/global-bright-futures-foundation-inc-41-2810962/?pkId=0b067e55-2a04-462c-8f3f-fc2e3d05c211"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-48 bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="https://widgets.guidestar.org/prod/v1/pdp/transparency-seal/16509371/svg" 
                  alt="Candid/GuideStar Transparency Seal"
                  className="w-full h-auto"
                />
              </motion.a>
            </div>
          </FadeIn>

        </div>
      </section>

      <Footer />
    </main>
  );
}
