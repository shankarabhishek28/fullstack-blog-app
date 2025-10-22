// components/Footer.js
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#1e1e1e] text-gray-200 py-12 mt-12 px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

                {/* Left Section */}
                <div>
                    <h3 className="font-semibold mb-2">Get in touch with us!</h3>
                    <Image src="/blogLogo.png" width={350} height={350} alt="Blog Logo" />

                    <p className="text-sm mt-2 text-gray-400">
                        25985 Rustic Lane, <br />
                        Westlake, Ohio 44145, U.S.A.
                    </p>
                    <p className="text-sm italic mt-2">
                        Telephone: <a href="tel:+19494270564" className="hover:underline">+1 949-427-0564</a>
                    </p>
                </div>

                {/* Middle Section */}
                <div>
                    <h3 className="font-semibold mb-4">Useful pages</h3>
                    <ul className="space-y-2">
                        <li><Link href="/about-us" className="hover:underline">About us</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contact us</Link></li>
                        <li><Link href="/terms" className="hover:underline">Terms and Conditions</Link></li>
                        <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                        <li><Link href="/guidelines" className="hover:underline">Content Guidelines</Link></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <h3 className="font-semibold mb-4">Drop us a message</h3>
                    <form className="flex flex-col space-y-3">
                        <input
                            type="email"
                            placeholder="Your Email (required)"
                            required
                            className="px-3 py-2 bg-transparent border border-gray-400 rounded-md focus:outline-none focus:border-orange-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="px-3 py-2 bg-transparent border border-gray-400 rounded-md focus:outline-none focus:border-orange-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-md"
                        >
                            SEND
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
}
