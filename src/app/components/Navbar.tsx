import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    // add external links for subpages - req api modules
    const links = [
        { name: "Produkty", href: "/food" },
        { name: "Ćwiczenia", href: "/excercise" },
        { name: "Ustawienia", href: "/settings" },
        { name: "Kalkulator", href: "/calculator" },
    ]
    return (
        // improve viuals by changing fonts and colors
        <div className='border rounded-full bg-gray-200 p-4 mt-8 mx-auto max-w-2xl'>
            <div className='flex justify-center items-center font-bold'>
                <Link href="/">
                    <h3 className='text-3xl font-semibold cursor-pointer'>
                        PWA APP
                    </h3>
                </Link>

                <nav className='hidden gap-12 lg:flex 2xl:ml-16 md:ml-12'>
                    {links.map((link, idx) => (
                        <div key={idx}>
                            <Link
                                className='text-xl font-normal transition duration-200 hover:text-blue-500'
                                href={link.href}>
                                {link.name}
                            </Link>
                        </div>
                    ))}
                    <div className=' rounded-full bg-purple-600 font-semibold text-xl px-1.5 py-0.5'>
                        {/* add new button */}
                        btn
                    </div>
                </nav>
            </div>
        </div>

    )
}