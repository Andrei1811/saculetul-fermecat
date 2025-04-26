import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

export default function SaculeteParfumatePage() {
    // Produse specifice pentru categoria "Săculețe Parfumate"
    const products = [
        {
            image: "/saculet-lavanda.jpg",
            title: "Săculețe cu Lavandă",
            description: "Săculețe parfumate cu lavandă naturală, perfecte pentru a împrospăta dulapurile sau dormitor.",
            price: "xx RON",
            code: "1",
        },
        {
            image: "/lavanda.jpg",
            title: "Buchet de lavandă",
            description: "Răcoritor și natural, perfect pentru dulapuri sau cadou.",
            price: "xx RON",
            code: "5",
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
                    <h1 className="text-3xl font-bold text-purple-800 mb-4">Săculețe Parfumate</h1>
                    <p className="text-gray-600 mb-6">
                        Descoperă colecția noastră de săculețe parfumate, realizate manual cu ingrediente naturale. Perfecte pentru
                        a împrospăta dulapurile, sertarele sau orice spațiu din casa ta.
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