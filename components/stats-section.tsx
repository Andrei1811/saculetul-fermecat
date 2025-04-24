"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Heart, Package, Award } from "lucide-react"

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    products: 0,
    clients: 0,
    experience: 0,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const productsTarget = 500
      const clientsTarget = 1000
      const experienceTarget = 5
      const framesPerSecond = 60
      const totalFrames = (duration / 1000) * framesPerSecond

      let frame = 0
      const interval = setInterval(() => {
        frame++
        const progress = frame / totalFrames

        setCounts({
          products: Math.floor(productsTarget * progress),
          clients: Math.floor(clientsTarget * progress),
          experience: Math.floor(experienceTarget * progress),
        })

        if (frame === totalFrames) {
          clearInterval(interval)
          setCounts({
            products: productsTarget,
            clients: clientsTarget,
            experience: experienceTarget,
          })
        }
      }, 1000 / framesPerSecond)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  const stats = [
    {
      icon: Package,
      value: counts.products,
      label: "Produse Handmade",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      delay: 0,
    },
    {
      icon: Heart,
      value: counts.clients,
      label: "Clienți Mulțumiți",
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      delay: 200,
    },
    {
      icon: Award,
      value: counts.experience,
      label: "Ani de Experiență",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      delay: 400,
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`p-6 border-none shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-full ${stat.bgColor} flex items-center justify-center ${stat.color}`}
                >
                  <stat.icon className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-3xl font-bold">{stat.value}+</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
