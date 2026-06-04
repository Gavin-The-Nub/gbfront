"use client"

import { FadeIn, StaggerChildren, StaggerItem, CountUp, DrawLine } from "@/components/motion"
import Image from "next/image"

const stats = [
  { prefix: "1,000–", value: 5000, suffix: "+", text: "students annually supported through partner-delivered academic programs" },
  { prefix: "150–", value: 300, suffix: "", text: "educators, tutors, youth, and college-level participants engaged in structured roles" },
  { prefix: "10–", value: 25, suffix: "", text: "school and community partnerships across regional and international under-resourced communities" },
]


export default function ImpactSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Our Growth Model
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Structured, partnership-based expansion across schools, educators, youth, and workforce pathways.
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                Capacity-Based Growth Outlook
              </h3>
            </div>
          </FadeIn>
          <DrawLine className="w-16 h-0.5 bg-accent mx-auto mt-8" delay={0.4} />
        </div>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 mb-24" staggerDelay={0.15}>
          {stats.map((stat, idx) => (
            <StaggerItem key={idx}>
              <div className="text-center group flex flex-col items-center justify-center h-full">
                <div className="relative inline-block my-2">
                  <CountUp
                    prefix={stat.prefix}
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-4xl md:text-5xl font-bold text-primary"
                  />
                  {/* Subtle glow behind number */}
                  <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {stat.text && (
                  <p className="text-muted-foreground leading-relaxed mt-2 font-medium">
                    {stat.text}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

      </div>
    </section>
  )
}
