"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

interface SimpleImageModalProps {
    src: string
    alt: string
    isOpen: boolean
    onClose: () => void
}

export function SimpleImageModal({ src, alt, isOpen, onClose }: SimpleImageModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[90vw] max-h-[90vh] p-4 overflow-hidden">
                {/* Adăugăm DialogTitle pentru accesibilitate, dar îl ascundem vizual */}
                <DialogTitle className="sr-only">{alt || "Imagine produs"}</DialogTitle>

                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-full max-w-3xl aspect-square">
                        <Image
                            src={src || "/placeholder.svg"}
                            alt={alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 80vw"
                            priority
                            quality={90}
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
