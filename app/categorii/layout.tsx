import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Categorii de Produse | Săculețul Fermecat",
    description: "Descoperă colecțiile noastre de produse handmade, organizate pe categorii.",
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-200 animate-pulse-slow">
                                    SF
                                </div>
                                <span className="text-xl font-semibold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
                                    Săculețul Fermecat
                                </span>
                            </div>
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/" className="text-sm font-medium hover:text-purple-600 transition-colors relative group">
                            Acasă
                        </Link>
                        <Link
                            href="/#products"
                            className="text-sm font-medium hover:text-purple-600 transition-colors relative group"
                        >
                            Produse
                        </Link>
                        <Link href="/#about" className="text-sm font-medium hover:text-purple-600 transition-colors relative group">
                            Despre Noi
                        </Link>
                        <Link
                            href="/#contact"
                            className="text-sm font-medium hover:text-purple-600 transition-colors relative group"
                        >
                            Contact
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link href="/#contact">
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-100 transition-colors">
                                <Phone className="h-5 w-5 text-purple-700" />
                            </Button>
                        </Link>
                        <Link href="/#contact">
                            <Button className="bg-purple-700 hover:bg-purple-800 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                                Comandă Acum
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="bg-gradient-to-br from-purple-900 to-purple-800 text-white py-8">
                <div className="container">
                    <div className="text-center">
                        <p>&copy; {new Date().getFullYear()} Săculețul Fermecat. Toate drepturile rezervate.</p>
                        <div className="mt-2">
                            <Link href="/#contact" className="text-purple-200 hover:text-white transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}