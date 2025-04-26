"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"

export function CategorySection() {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

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

    const categories = [
        {
            name: "Săculețe Parfumate",
            link: "/categorii/saculete-parfumate",
            delay: 0,
            image: "/saculet2.jpg",
        },
        {
            name: "Decorațiuni Sezoniere",
            link: "/categorii/decoratiuni-sezoniere",
            delay: 200,
            image: "/img2.jpg",
        },
        {
            name: "Aranjamente Florale",
            link: "/categorii/aranjamente-florale",
            delay: 400,
            image: "/flori.jpg",
        },
        {
            name: "Cadouri Personalizate",
            link: "/categorii/cadouri-personalizate",
            delay: 600,
            image: "/img3.jpg",
        },
    ]

    return (
        <section ref={sectionRef} className="py-16 bg-white relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
            <div className="container relative z-10">
                <h2
                    className={`text-3xl font-bold text-center mb-4 text-purple-800 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    Categorii de Produse
                </h2>
                <p
                    className={`text-center text-gray-600 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    Explorează colecțiile noastre diverse de produse handmade, organizate pe categorii pentru o experiență de
                    cumpărare ușoară.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <Link href={category.link} key={index}>
                            <Card
                                className={`overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                    }`}
                                style={{ transitionDelay: `${category.delay}ms` }}
                            >
                                <div className={`h-48 w-full flex items-center justify-center relative overflow-hidden`}>
                                    {/* Imaginea de fundal */}
                                    {category.image && (
                                        <Image
                                            src={category.image || "/placeholder.svg"}
                                            alt={category.name}
                                            fill
                                            className="object-cover opacity-70 group-hover:opacity-80 transition-opacity duration-300"
                                            quality={80}
                                        />
                                    )}

                                    {/* Textul peste imagine */}
                                    <div className="text-white font-medium text-lg z-10 transition-transform duration-300 group-hover:scale-110 p-4 bg-black/30 backdrop-blur-sm rounded-lg">
                                        {category.name}
                                    </div>

                                    {/* Elemente decorative */}
                                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 rounded-full transition-transform duration-500 group-hover:scale-150"></div>
                                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full transition-transform duration-500 group-hover:scale-150 group-hover:rotate-45"></div>
                                </div>
                                <CardContent className="p-4 text-center bg-purple-700 text-white group-hover:bg-purple-800 transition-colors duration-300">
                                    <div className="flex items-center justify-center">
                                        <h3 className="font-medium">Descoperă</h3>
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}