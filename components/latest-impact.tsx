"use client"

import { useEffect, useState } from "react"
import { FadeIn } from "@/components/motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Carousel } from "@ark-ui/react/carousel"
import { supabase } from "@/lib/supabase"

type ImpactSlide = {
  url: string
  alt: string
}

const defaultSlides: ImpactSlide[] = [
  { url: "/c1.png", alt: "Impact image 1" },
  { url: "/c2.png", alt: "Impact image 2" },
  { url: "/c3.png", alt: "Impact image 3" },
  { url: "/c4.png", alt: "Impact image 4" },
  { url: "/c5.png", alt: "Impact image 5" },
  { url: "/c6.png", alt: "Impact image 6" },
  { url: "/c7.png", alt: "Impact image 7" },
  { url: "/c8.png", alt: "Impact image 8" },
  { url: "/c9.png", alt: "Impact image 9" },
]

export default function LatestImpact() {
  const [slides, setSlides] = useState<ImpactSlide[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadSlides() {
      try {
        const { data, error } = await supabase
          .from("impact_images")
          .select("url, alt_text")
          .order("sort_order", { ascending: true })

        if (error) throw error

        if (data && data.length > 0) {
          const mapped = data.map((item: any, idx: number) => ({
            url: item.url,
            alt: item.alt_text || `Impact image ${idx + 1}`
          }))
          setSlides(mapped)
        } else {
          setSlides(defaultSlides)
        }
      } catch (err) {
        console.error("Error fetching dynamic impact images:", err)
        setSlides(defaultSlides)
      } finally {
        setIsLoading(false)
      }
    }
    loadSlides()
  }, [])

  if (isLoading) {
    return (
      <section className="section-padding bg-secondary/20 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-24 mx-auto animate-pulse" />
            <div className="h-8 md:h-12 bg-slate-200 dark:bg-slate-800 rounded w-96 mx-auto animate-pulse" />
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 animate-pulse" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3 block">
              Up-to-Date Impact
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Program Reach & Field Impact
            </h2>
          </FadeIn>
        </div>

        {/* Image Slider */}
        <FadeIn delay={0.3}>
          <div className="max-w-6xl mx-auto">
            <Carousel.Root
              defaultPage={0}
              slideCount={slides.length}
              className="w-full relative"
            >
              <Carousel.ItemGroup className="overflow-hidden rounded-2xl shadow-sm border bg-background mb-4">
                {slides.map((slide, index) => (
                  <Carousel.Item key={index} index={index}>
                    <div className="relative aspect-video">
                      <Image 
                        src={slide.url} 
                        alt={slide.alt} 
                        fill 
                        className="object-cover transition-transform duration-700" 
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        unoptimized={slide.url.startsWith("http")}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel.ItemGroup>

              <div className="flex items-center gap-4">
                <Carousel.PrevTrigger className="p-2 bg-background hover:bg-muted border rounded-lg transition-colors shrink-0 flex items-center justify-center cursor-pointer">
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </Carousel.PrevTrigger>

                <Carousel.IndicatorGroup className="flex gap-2 overflow-x-auto scrollbar-hide flex-1 px-2 justify-center">
                  {slides.map((slide, index) => (
                    <Carousel.Indicator
                      key={index}
                      index={index}
                      className="shrink-0 border-2 border-transparent data-[state=current]:border-primary rounded-md overflow-hidden cursor-pointer transition-all hover:border-gray-300 h-16 w-24 relative"
                    >
                      <Image
                        src={slide.url}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        unoptimized={slide.url.startsWith("http")}
                      />
                    </Carousel.Indicator>
                  ))}
                </Carousel.IndicatorGroup>

                <Carousel.NextTrigger className="p-2 bg-background hover:bg-muted border rounded-lg transition-colors shrink-0 flex items-center justify-center cursor-pointer">
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </Carousel.NextTrigger>
              </div>
            </Carousel.Root>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
