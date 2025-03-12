"use client"; // Required for App Router

import Footer from "@/components/Footer";
import MainFooter from "@/components/MainFooter";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        setLoading(false);
        setStatus(result.message);
        if (response.ok) setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section>
            <Navbar />
            <section className="bg-[url('/assets/images/contacts.jpg')] bg-no-repeat bg-cover bg-center h-70 mt-20">
            <h1>Contact Us</h1>
            <p>Home | Contacts </p>
            </section>
            <div className="container mx-auto px-4 py-8">
                <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                    <div className='flex flex-col justify-center items-start'>
                        <small className='text-amber-400 font-bold'>GET IN TOUCH</small>
                        <h1 className='font-black md:text-4xl text-3xl md:max-w-md'>Need help? <br />Let us get
                            intouch</h1>
                    </div>
                    <div>
                        <p>Banu helps small business owners like you streamline bookkeeping and income taxes with dedicated experts and user-friendly financial software—saving you time and money so you can focus on growing your business. Our Services Include:</p>
                    </div>
                </div>
            </div>

            <section className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
                <div className="md:mr-20">
                    <Image src="/assets/images/conta.jpg" alt="logo" width={1920} height={100} className="rounded-3xl mb-4 mr-10"  />
                    <h3 className="font-bold text-amber-400 text-2xl">Say Hello!</h3>
                    <p>+1 (614) 285‑9445</p>
                    <p>info@banubookkeeping.com</p>
                </div>
                <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
                    <h2 className="text-xl font-semibold">Contact Us</h2>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="border p-2 w-full"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="border p-2 w-full"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <Textarea
                        name="message"
                        placeholder="Your Message"
                        className="border p-2 w-full h-24"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <Button
                        type="submit"
                        className="bg-amber-400 hover:bg-white text-black font-bold border-1 hover:cursor-pointer border-amber-400 p-2 w-full"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </Button>
                    {status && <p className="mt-2 text-sm">{status}</p>}
                </form>
            </section>
            <Footer />
            <MainFooter />
        </section>
    );
}
