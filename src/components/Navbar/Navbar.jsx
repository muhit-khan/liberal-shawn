// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import logo from '../../../public/images/logo.svg';

// const Navbar = () => {
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > window.innerHeight * 0.010) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <nav className={`fixed top-0 left-0 w-full bg-[#011627] shadow-md z-50 transition-opacity duration-300 ${scrolled ? 'bg-opacity-90 py-2' : 'bg-opacity-60 py-4'}`}>
//             <div className="container mx-auto flex items-center justify-between py-1 ">
//                 <Link href='/'>
//                     <Image src={logo} alt="Logo" className="w-32 " />
//                 </Link>
//                 <ul className="flex items-center space-x-6">
//                     <li className="text-[#f6f7f8] hover:text-red-600 active:text-red-700"><Link href='/'>Shawn</Link></li>
//                     <li className="text-[#f6f7f8] hover:text-red-600 active:text-red-700"><Link href='/#accomplishment'>Accomplishments</Link></li>
//                     <li className="text-[#f6f7f8] hover:text-red-600 active:text-red-700"><Link href='/#issues'>Issues</Link></li>
//                     <li className="text-[#f6f7f8] hover:text-red-600 active:text-red-700"><Link href='/#action'>Take Action</Link></li>
//                     <li className="text-[#f6f7f8] hover:text-red-600 active:text-red-700"><Link href="/contact">Contact</Link></li>
//                     <li>
//                         <Link href="/donate">
//                             <button className="bg-red-600 font-semibold text-[#f6f7f8] py-2 px-6 rounded-full hover:bg-red-700 active:bg-red-600">
//                                 Donate
//                             </button>
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;







"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.010) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full bg-[#011627] shadow-md z-50 transition-opacity duration-300 ${scrolled ? 'bg-opacity-90 py-2' : 'bg-opacity-60 py-4'}`}>
            <div className="container mx-auto flex items-center justify-between py-1 px-4">
                <Link href='/'>
                    <Image src={logo} alt="Logo" className="w-32" />
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                    <li className="list-none text-[#f6f7f8] hover:text-red-600 active:text-red-700"><Link href='/'>Shawn</Link></li>
                    <li className="list-none text-[#f6f7f8] hover:text-red-600 active:text-red-700"><Link href='/#accomplishment'>Accomplishments</Link></li>
                    <li className="list-none text-[#f6f7f8] hover:text-red-600 active:text-red-700"><Link href='/#issues'>Issues</Link></li>
                    <li className="list-none text-[#f6f7f8] hover:text-red-600 active:text-red-700"><Link href='/#action'>Take Action</Link></li>
                    <li className="list-none text-[#f6f7f8] hover:text-red-600 active:text-red-700"><Link href="/contact">Contact</Link></li>
                    <li className="list-none">
                        <Link href="/donate">
                            <button className="bg-red-600 font-semibold text-[#f6f7f8] py-2 px-6 rounded-full hover:bg-red-700 active:bg-red-600">
                                Donate
                            </button>
                        </Link>
                    </li>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="z-50 text-[#f6f7f8] text-2xl">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            <div className={`fixed top-0 right-0 h-full bg-[#011627] transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40 w-full`}>
                <div className="flex flex-col items-center justify-center h-full space-y-6 text-white text-center">
                    <li className="list-none text-2xl" onClick={toggleMenu}><Link href='/'>Shawn</Link></li>
                    <li className="list-none text-2xl" onClick={toggleMenu}><Link href='/#accomplishment'>Accomplishments</Link></li>
                    <li className="list-none text-2xl" onClick={toggleMenu}><Link href='/#issues'>Issues</Link></li>
                    <li className="list-none text-2xl" onClick={toggleMenu}><Link href='/#action'>Take Action</Link></li>
                    <li className="list-none text-2xl" onClick={toggleMenu}><Link href='/contact'>Contact</Link></li>
                    <li className="list-none">
                        <Link href="/donate">
                            <button className="bg-red-600 font-semibold text-[#f6f7f8] py-2 px-6 rounded-full hover:bg-red-700 active:bg-red-600">
                                Donate
                            </button>
                        </Link>
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
