"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Maximize2 } from "lucide-react"
import { SimpleImageModal } from "@/components/simple-image-modal"

interface ProductCardProps {
    image: string
    title: string
    description: string
    price: string
    code: string
    delay: number
}

export default function ProductCard({ image, title, description, price, code, delay }: ProductCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (cardRef.current) {
            observer.observe(cardRef.current)
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current)
            }
        }
    }, [])

    return (
        <>
            <div
                ref={cardRef}
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                style={{ transitionDelay: `${delay}ms` }}
            >
                <div className="relative h-48 w-full group">
                    <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />

                    {/* Overlay la hover cu buton de vizualizare imagine */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                            className="bg-white text-purple-700 hover:bg-purple-50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                            onClick={() => setIsImageModalOpen(true)}
                        >
                            <Maximize2 className="mr-2 h-4 w-4" />
                            Vezi Imaginea
                        </Button>
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-purple-800 font-bold">{price}</span>
                        <span className="text-gray-500">Cod: {code}</span>
                    </div>

                    {/* Buton de vizualizare imagine sub descriere */}
                    <div className="mt-4">
                        <Button
                            className="w-full bg-purple-700 hover:bg-purple-800 transition-all duration-300"
                            onClick={() => setIsImageModalOpen(true)}
                        >
                            <Maximize2 className="mr-2 h-4 w-4" />
                            Vezi Imaginea
                        </Button>
                    </div>
                </div>
            </div>

            {/* Modal simplu pentru imagine */}
            <SimpleImageModal
                src={image || "/placeholder.svg"}
                alt={title}
                isOpen={isImageModalOpen}
                onClose={() => setIsImageModalOpen(false)}
            />
        </>
    )
}
