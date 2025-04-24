"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import heroImage from "@/public/hero-image.jpg" 

export function HeroSection() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section className="relative py-20 overflow-hidden min-h-[90vh] flex items-center">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white z-0">
                <div
                    className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl animate-blob"
                    style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                ></div>
                <div
                    className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000"
                    style={{ transform: `translateY(${scrollY * -0.05}px)` }}
                ></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in-left">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent mb-4">
                            Creații Handmade cu Suflet
                        </h1>
                        <p className="text-lg text-gray-700 mb-8 animate-fade-in-up animation-delay-300">
                            Descoperă colecția noastră de săculețe parfumate, decorațiuni și aranjamente florale realizate manual cu
                            dragoste și pasiune. Fiecare produs este unic și creat cu atenție la detalii.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
                            <Link href="#products">
                                <Button className="bg-purple-700 hover:bg-purple-800 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                                    Explorează Produsele
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                            </Link>
                            <Link href="#contact">
                                <Button
                                    variant="outline"
                                    className="border-purple-700 text-purple-700 hover:bg-purple-100 text-lg px-8 py-6 transition-all duration-300 hover:-translate-y-1"
                                >
                                    Contactează-ne
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-right"
                        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
                    >
                        <Image
                            src={heroImage}
                            alt="Produse handmade"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}