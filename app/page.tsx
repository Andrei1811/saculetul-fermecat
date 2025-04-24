"use client"

import Link from "next/link"
import { Phone, Instagram, Facebook } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { CategorySection } from "@/components/category-section"
import { HeroSection } from "@/components/hero-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { ContactSection } from "@/components/contact-section"
import { MobileMenu } from "@/components/mobile-menu"
import { StatsSection } from "@/components/stats-section"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
    const [showAllProducts, setShowAllProducts] = useState(false)

    const products = [
        {
            image: "/saculet-lavanda.jpg",
            title: "Săculețe cu Lavandă",
            description:
                "Săculețe parfumate cu lavandă naturală, perfecte pentru a împrospăta dulapurile sau dormitor.",
            price: "xx RON",
            code: "1",
            
        },
        {
            image: "/iepuras.jpg",
            title: "Iepurași Decorativi",
            description: "Iepurași decorativi confecționați manual din materiale de calitate, ideali pentru decor sau cadou.",
            price: "xx RON",
            code: "2",
        },
        {
            image: "/flori.jpg",
            title: "Aranjamente Florale",
            description: "Aranjamente florale deosebite pentru ocazii speciale sau pentru a înfrumuseța casa ta.",
            price: "xx RON",
            code: "3",
        },
        {
            image: "/paste.jpg",
            title: "Decor Paște",
            description: "Element decorativ de sezon, creat manual cu detalii unice.",
            price: "xx RON",
            code: "4",
        },
        {
            image: "/lavanda.jpg",
            title: "Buchet de lavanda",
            description: "Răcoritor și natural, perfect pentru dulapuri sau cadou.",
            price: "xx RON",
            code: "5",
        },
        {
            image: "/prod.jpg",
            title: "Decoratiune de sapun",
            description: "Aranjament de sapun realizat manual cu aroma de lavanda",
            price: "xx RON",
            code: "6",
        },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-200 animate-pulse-slow">
                            SF
                        </div>
                        <span className="text-xl font-semibold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
                            Saculet Fermecat
                        </span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="#" className="text-sm font-medium hover:text-purple-600 transition-colors relative group">
                            Acasă
                        </Link>
                        <Link
                            href="#products"
                            className="text-sm font-medium hover:text-purple-600 transition-colors relative group"
                        >
                            Produse
                        </Link>
                        <Link href="#about" className="text-sm font-medium hover:text-purple-600 transition-colors relative group">
                            Despre Noi
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium hover:text-purple-600 transition-colors relative group"
                        >
                            Contact
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link href="#contact">
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-100 transition-colors">
                                <Phone className="h-5 w-5 text-purple-700" />
                            </Button>
                        </Link>
                        <Link href="#contact">
                            <Button className="bg-purple-700 hover:bg-purple-800 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                                Comandă Acum
                            </Button>
                        </Link>
                        <MobileMenu />
                    </div>
                </div>
            </header>

            <main className="flex-1">
                <HeroSection />
                <StatsSection />

                <section id="products" className="py-16 bg-purple-50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
                    <div className="container relative z-10">
                        <h2 className="text-3xl font-bold text-center mb-4 text-purple-800">Produsele Noastre</h2>
                        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                            Descoperă colecția noastră de produse handmade, create cu pasiune și atenție la detalii.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {products.slice(0, showAllProducts ? products.length : 3).map((product, index) => (
                                <ProductCard
                                    key={index}
                                    image={product.image}
                                    title={product.title}
                                    description={product.description}
                                    price={product.price}
                                    code={product.code || "N/A"}
                                    delay={index * 300}
                                />
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Button
                                onClick={() => setShowAllProducts(!showAllProducts)}
                                className="bg-purple-700 hover:bg-purple-800 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                            >
                                {showAllProducts ? "Vezi mai puține" : "Vezi Toate Produsele"}
                            </Button>
                        </div>
                    </div>
                </section>

                <CategorySection />

                <section id="about" className="py-16 bg-white relative overflow-hidden">
                    <div className="absolute top-20 right-0 w-72 h-72 bg-purple-100 rounded-full opacity-50 blur-3xl animate-blob animation-delay-4000"></div>
                    <div className="container relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-purple-800">Despre Saculet Fermecat</h2>
                                <p className="text-gray-700 mb-4">
                                    Saculet Fermecat este un atelier de creație unde fiecare produs este realizat cu dragoste și atenție
                                    la detalii. Ne-am început călătoria din pasiunea pentru artizanat și dorința de a aduce bucurie prin
                                    creațiile noastre.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Folosim doar materiale naturale de cea mai bună calitate pentru a crea produse care să aducă un strop
                                    de magie în casele dumneavoastră.
                                </p>
                                <p className="text-gray-700">
                                    Fiecare săculeț, aranjament floral sau decorațiune este unică și realizată manual, cu grijă pentru
                                    fiecare detaliu.
                                </p>
                            </div>
                            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/atelier.jpg"
                                    alt="Atelier Saculet Fermecat"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    quality={90}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <TestimonialSection />
                <ContactSection />
            </main>

            <footer className="bg-gradient-to-br from-purple-900 to-purple-800 text-white py-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-6 bg-[url('/wave.svg')] bg-repeat-x opacity-10"></div>
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Saculet Fermecat</h3>
                            <p className="text-purple-200">
                                Creații handmade cu suflet și pasiune pentru a aduce bucurie și frumusețe în viața ta.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact</h3>
                            <div className="flex items-center gap-2 mb-2">
                                <Phone className="h-4 w-4 text-purple-300" />
                                <span className="text-purple-200">+40733994344</span>
                            </div>
                            <a href="https://www.instagram.com/saculetfermecat/" className="flex items-center gap-2">
                                <Instagram className="h-5 w-5 text-purple-300" />
                                <span className="text-purple-200">@saculetfermecat</span>
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100057279226453&sk=photos_by"
                                className="flex items-center gap-2"
                            >
                                <Facebook className="h-5 w-5 text-purple-300" />
                                <span className="text-purple-200">/saculetfermecat</span>
                            </a>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Program</h3>
                            <p className="text-purple-200">Luni - Vineri: 09:00 - 18:00</p>
                            <p className="text-purple-200">Sâmbătă: 10:00 - 16:00</p>
                            <p className="text-purple-200">Duminică: Închis</p>
                        </div>
                    </div>
                    <div className="border-t border-purple-800/50 mt-8 pt-8 text-center text-purple-300">
                        <p>&copy; {new Date().getFullYear()} Saculet Fermecat. Toate drepturile rezervate.</p>
                    </div>
                </div>
            </footer>

            <ScrollToTop />
        </div>
    )
}
