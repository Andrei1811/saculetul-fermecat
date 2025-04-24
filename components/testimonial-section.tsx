"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialSection() {
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

    const testimonials = [
        {
            name: "Maria Popescu",
            text: "Săculețele cu lavandă sunt minunate! Parfumul este natural și persistent, iar calitatea materialelor este excepțională.",
            delay: 0,
        },
        {
            name: "Elena Ionescu",
            text: "Am comandat iepurașii decorativi pentru Paște și au fost adorabili! Toți invitații au fost impresionați de detaliile fine.",
            delay: 300,
        },
        {
            name: "Andrei Dumitrescu",
            text: "Aranjamentele florale sunt superbe și rezistă foarte bine în timp. Recomand cu încredere pentru orice ocazie specială!",
            delay: 600,
        },
    ]

    return (
        <section ref={sectionRef} className="py-16 bg-purple-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-200 rounded-full opacity-30 blur-3xl animate-blob animation-delay-4000"></div>

            <div className="container relative z-10">
                <h2
                    className={`text-3xl font-bold text-center mb-4 text-purple-800 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    Ce Spun Clienții Noștri
                </h2>
                <p
                    className={`text-center text-gray-600 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    Descoperă experiențele clienților noștri cu produsele Saculet Fermecat și vezi de ce ne aleg pentru cadourile
                    și decorațiunile lor.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className={`bg-white hover:shadow-xl transition-all duration-500 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${testimonial.delay}ms` }}
                        >
                            <CardContent className="p-6 relative">
                                <Quote className="absolute top-4 right-4 h-8 w-8 text-purple-200 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white font-bold shadow-md group-hover:shadow-lg transition-transform duration-300 group-hover:scale-110">
                                        <span>{testimonial.name.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-purple-800">{testimonial.name}</h4>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700">{testimonial.text}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}