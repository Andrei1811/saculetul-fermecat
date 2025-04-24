"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormState((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      alert("Mesajul a fost trimis cu succes!")
    }, 1500)
  }

  return (
    <section ref={sectionRef} id="contact" className="py-16 bg-white relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="container relative z-10">
        <h2
          className={`text-3xl font-bold text-center mb-4 text-purple-800 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Contactează-ne
        </h2>
        <p
          className={`text-center text-gray-600 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Ai întrebări sau dorești să plasezi o comandă? Completează formularul de mai jos și te vom contacta în cel mai
          scurt timp.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-700">Trimite-ne un Mesaj</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nume
                  </label>
                  <Input
                    id="name"
                    placeholder="Numele tău"
                    value={formState.name}
                    onChange={handleChange}
                    className="border-purple-200 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email-ul tău"
                    value={formState.email}
                    onChange={handleChange}
                    className="border-purple-200 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subiect
                </label>
                <Input
                  id="subject"
                  placeholder="Subiectul mesajului"
                  value={formState.subject}
                  onChange={handleChange}
                  className="border-purple-200 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesaj
                </label>
                <Textarea
                  id="message"
                  placeholder="Mesajul tău"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="border-purple-200 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-800 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Se trimite...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    Trimite Mesajul
                  </div>
                )}
              </Button>
            </form>
          </div>
          <div
            className={`transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-700">Informații de Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 mt-1 group-hover:bg-purple-700 group-hover:text-white transition-colors duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Telefon</h4>
                  <p className="text-gray-600 group-hover:text-purple-700 transition-colors duration-300">
                    +40733994344
                  </p>
                </div>
              </div>
             
                          <div className="flex items-start gap-4 group">
                              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 mt-1 group-hover:bg-purple-700 group-hover:text-white transition-colors duration-300">
                                  {/* Înlocuiește iconița Mail cu logo Instagram */}
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className="h-5 w-5"
                                  >
                                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                  </svg>
                              </div>
                              <div>
                                  <h4 className="font-medium">Instagram</h4>
                                  <Link
                                      href="https://www.instagram.com/saculetfermecat/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-gray-600 group-hover:text-purple-700 transition-colors duration-300"
                                  >
                                      @saculetulfermect
                                  </Link>
                              </div>
                          </div> 

                          <div className="flex items-start gap-4 group">
                              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 mt-1 group-hover:bg-purple-700 group-hover:text-white transition-colors duration-300">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className="h-5 w-5"
                                  >
                                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                  </svg>
                              </div>
                              <div>
                                  <h4 className="font-medium">Facebook</h4>
                                  <Link
                                      href="https://www.facebook.com/profile.php?id=100057279226453&sk=photos_by"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-gray-600 group-hover:text-purple-700 transition-colors duration-300"
                                  >
                                      /saculetulfermecat
                                  </Link>
                              </div>
                          </div>
               
              
            </div>
                      <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-purple-200">
                          <h3 className="text-2xl font-extrabold mb-4 text-purple-700">Program</h3>
                          <div className="space-y-4 text-base">
                              <div className="flex justify-between">
                                  <span className="text-gray-800 font-medium">Luni - Vineri:</span>
                                  <span className="font-semibold text-gray-900">09:00 - 18:00</span>
                              </div>
                              <div className="flex justify-between">
                                  <span className="text-gray-800 font-medium">Sâmbătă:</span>
                                  <span className="font-semibold text-gray-900">10:00 - 16:00</span>
                              </div>
                              <div className="flex justify-between">
                                  <span className="text-gray-800 font-medium">Duminică:</span>
                                  <span className="font-bold text-red-600">Închis</span>
                              </div>
                          </div>
                      </div>

          </div>
        </div>
      </div>
    </section>
  )
}
