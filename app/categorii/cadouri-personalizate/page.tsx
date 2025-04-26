import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

export default function CadouriPersonalizatePage() {
    // Produse specifice pentru categoria "Cadouri Personalizate"
    const products = [
        {
            image: "/img3.jpg",
            title: "Cadou Personalizat",
            description: "Cadouri personalizate create special pentru ocaziile importante din viața ta.",
            price: "xx RON",
            code: "7",
        },
        // Poți adăuga mai multe produse specifice acestei categorii
    ]

    return (
        <div className="min-h-screen bg-purple-50">
            <div className="container py-8">
                <Link href="/" className="inline-flex items-center text-purple-700 hover:text-purple-900 mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Înapoi la pagina principală
                </Link>

                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h1 className="text-3xl font-bold text-purple-800 mb-4">Cadouri Personalizate</h1>
                    <p className="text-gray-600 mb-6">
                        Descoperă colecția noastră de cadouri personalizate, create special pentru a marca momentele importante din
                        viața ta. Fie că este vorba de o aniversare, un botez sau o nuntă, avem cadoul perfect pentru orice ocazie.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                image={product.image}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                code={product.code}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-8 mb-12">
                    <Link href="/#contact">
                        <Button className="bg-purple-700 hover:bg-purple-800 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                            Comandă Acum
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}