"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image"

const Header = () => {
    const logoImageUrl = 'https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png';
    const [isMobile, setIsMobile] = useState(true);
    const [drawerHidden, setDrawerHidden] = useState(true);

    useEffect(() => {
        setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    }, []);

    const navbar = (
        <nav>
            <ul className="mt-4 lg:flex lg:gap-8">
                {isMobile && <li className="mb-6 lg:mb-0 text-lg lg:text-sm font-semibold lg:hover:text-primary">
                    <Link href="/">Home</Link>
                </li>}
                <li className="mb-6 lg:mb-0 text-lg lg:text-sm font-semibold lg:hover:text-primary">
                    <a href="#">Organic Foods</a>
                </li>
                <li className="mb-6 lg:mb-0 text-lg lg:text-sm font-semibold lg:hover:text-primary">
                    <a href="#">High Rated Foods</a>
                </li>
                <li className="mb-6 lg:mb-0 text-lg lg:text-sm font-semibold lg:hover:text-primary">
                    <a href="#">Best Restaurants</a>
                </li>
                <div className="mb-6 lg:mb-0 w-full lg:w-0 px-4 lg:p-0 border"></div>
                <li className="mb-6 lg:mb-0 text-lg lg:text-sm font-semibold lg:hover:text-primary">
                    <a href="#">Your Orders</a>
                </li>
                <li className="mb-6 lg:mb-0 text-lg lg:text-sm font-semibold lg:hover:text-primary">
                    <Link href="/cart">Cart</Link>
                </li>
                <div className="mb-6 lg:mb-0 w-full lg:w-0 px-4 lg:p-0 border"></div>
                <li className="mb-6 lg:mb-0 text-lg lg:text-sm font-semibold lg:hover:text-primary">
                    <button>Sign in</button>
                </li>
            </ul>
        </nav>
    )

    return (
        <>
            <header className="fixed shadow-lg w-full top-0 left-0 z-10 bg-white px-4 lg:pr-8 py-3 flex align-center justify-between">
                <Link href="/" className="w-14 h-12 relative">
                    <Image src={logoImageUrl} alt="logo" objectFit="cover" layout="fill" />
                </Link>
                {
                    isMobile ?
                        (
                            <>
                                <button onClick={() => setDrawerHidden(prev => !prev)}>
                                    <div className="w-7 h-1 bg-black mb-1"></div>
                                    <div className="w-7 h-1 bg-black mb-1"></div>
                                    <div className={`${drawerHidden ? 'w-7' : 'w-6'} h-1 bg-black mb-1`}></div>
                                </button>
                                <div className={`fixed bg-primary text-white top-16 p-4 w-[100vw] h-[90vh] z-10 transition-all duration-1000 ease-in-out ${drawerHidden ? 'left-full' : 'left-0'}`}>
                                    {navbar}
                                </div>
                            </>

                        ) : navbar
                }
            </header>
            <div className='h-16 lg:h-20'></div>
        </>
    )
}

export default Header