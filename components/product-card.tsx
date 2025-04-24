"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart, Heart } from "lucide-react"

interface ProductCardProps {
    image: string
    title: string
    description: string
    price: string
    delay?: number
}

export default function ProductCard({ image, title, description, price, delay = 0 }: ProductCardProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true)
                    }, delay)
                }
            },
            { threshold: 0.1 }
        )

        if (cardRef.current) observer.observe(cardRef.current)

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current)
        }
    }, [delay])

    return (
        <Card
            ref={cardRef}
            className={`overflow-hidden transition-all duration-500 hover:shadow-xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-64 w-full overflow-hidden group">
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"
                        }`}
                />
                <button
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${isFavorite ? "bg-red-100" : "bg-white/80 hover:bg-white"
                        }`}
                    onClick={() => setIsFavorite(!isFavorite)}
                >
                    <Heart
                        className={`h-4 w-4 transition-colors ${isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"}`}
                    />
                </button>
            </div>
            <CardContent className="p-6">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <p className="text-lg font-medium text-purple-700">{price}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-purple-700 hover:bg-purple-800 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                    <ShoppingCart className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    Adaugă în Coș
                </Button>
            </CardFooter>
        </Card>
    )
}
