"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { School, GraduationCap, CircleDollarSign, Globe, Handshake, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerChildren, StaggerItem, ScaleIn, MagneticButton } from "@/components/motion"
import { supabase } from "@/lib/supabase"

const pathways = [
  {
    icon: CircleDollarSign,
    title: "Subsidized Programs (Cost-Shared Support)",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: School,
    title: "School-Funded Access (with vendor flexibility)",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Handshake,
    title: "Sponsored / Fully Funded Access",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Globe,
    title: "Service Credit & Voucher Model",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: BarChart3,
    title: "Priority Access Allocation",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: GraduationCap,
    title: "Vetted Provider Network",
    color: "from-pink-500 to-pink-600",
  },
]

const defaultLandingOptions = ["$500", "$1,000", "$2,000", "$3,000", "Custom"]

export default function VoucherSystem() {
  const [denominations, setDenominations] = useState<string[]>([])

  useEffect(() => {
    async function loadDenominations() {
      try {
        const { data, error } = await supabase
          .from("voucher_denominations")
          .select("label")
          .eq("show_on_landing", true)
          .order("sort_order", { ascending: true })

        if (error) throw error
        if (data && data.length > 0) {
          setDenominations(data.map((d: any) => d.label))
        } else {
          setDenominations(defaultLandingOptions)
        }
      } catch (err) {
        console.error("Error loading denominations in VoucherSystem:", err)
        setDenominations(defaultLandingOptions)
      }
    }
    loadDenominations()
  }, [])

  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-widest text-primary-foreground/60 mb-3 block">
              Program Pathways
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
              Program Access Pathways
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              We provide structured access to educational programs through multiple pathways based on funding, eligibility, and partner alignment.
            </p>
          </FadeIn>
        </div>

        {/* Pathways Grid */}
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-20" staggerDelay={0.08}>
          {pathways.map((pathway, idx) => {
            const Icon = pathway.icon
            return (
              <StaggerItem key={idx}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center group border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.2)" }}
                >
                  <motion.div
                    className={`w-14 h-14 mx-auto mb-5 bg-gradient-to-br ${pathway.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={24} className="text-white" />
                  </motion.div>
                  <h3 className="font-bold text-lg leading-tight">{pathway.title}</h3>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerChildren>

        {/* Voucher amounts */}
        <ScaleIn>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 text-center border border-white/20 shadow-xl">
            <h3 className="font-bold text-2xl mb-8">Voucher Denominations</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {denominations.map((amount, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 + 0.3, duration: 0.4, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {amount}
                </motion.div>
              ))}
            </div>
            <p className="text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
              Our model uses service-based funding (no cash), applies funds directly to approved services delivered by vetted providers, and tracks outcomes through aggregate reporting with ongoing monitoring for accountability.
            </p>
          </div>
        </ScaleIn>

        {/* CTA */}
        <FadeIn delay={0.2} className="text-center mt-14">
          <MagneticButton>
            <Link href="https://app.globalbrightfutures.org/">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-lg font-bold rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300">
                Apply for Education Support Voucher
              </Button>
            </Link>
          </MagneticButton>
        </FadeIn>
      </div>
    </section>
  )
}
