import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

export default function AranjamenteFloraleePage() {
    // Produse specifice pentru categoria "Aranjamente Florale"
    const products = [
        {
            image: "/flori.jpg",
            title: "Aranjamente Florale",
            description: "Aranjamente florale deosebite pentru ocazii speciale sau pentru a înfrumuseța casa ta.",
            price: "xx RON",
            code: "3",
        },
        {
            image: "/prod.jpg",
            title: "Decorațiune de săpun",
            description: "Aranjament de săpun realizat manual cu aromă de lavandă",
            price: "xx RON",
            code: "6",
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
                    <h1 className="text-3xl font-bold text-purple-800 mb-4">Aranjamente Florale</h1>
                    <p className="text-gray-600 mb-6">
                        Descoperă colecția noastră de aranjamente florale, create cu pasiune pentru a aduce frumusețea naturii în
                        casa ta. Perfecte pentru cadouri sau pentru a înfrumuseța propriul tău spațiu.
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