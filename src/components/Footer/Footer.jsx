import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.svg';
import { RiFacebookFill, RiInstagramFill, RiYoutubeFill, RiTwitterFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='w-full bg-[#011627]'>
            <div className='footer container mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 py-6 text-[#f6f7f8]'>
                <div className='footer-col-1 col-span-2 md:col-span-1 flex flex-col items-start p-4'>
                    <div className='flex flex-col item-start'>
                        <Image src={logo} alt="logo" className='logo w-28 h-auto' />
                        <ul className='mt-4'>
                            <li className='flex items-center mb-2'>Phone: +1-913-405-4955</li>
                            <li className='flex items-center mb-2'>Email: shawnemran3@gmail.com</li>
                            <li className='flex items-center mb-2'>Address: ABC, Brampton, Canada - 1234</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-col-2 flex flex-col items-center p-4'>
                    <div className='flex flex-col item-start'>
                        <h3 className='text-lg text-red-600 font-semibold mb-2'>Quick Links</h3>
                        <ul>
                            <li className='text-[#f6f7f8] hover:text-red-600 active:text-red-700 mb-2'><Link href='/accomplishments'>Accomplishments</Link></li>
                            <li className='text-[#f6f7f8] hover:text-red-600 active:text-red-700 mb-2'><Link href='/issues'>Issues</Link></li>
                            <li className='text-[#f6f7f8] hover:text-red-600 active:text-red-700 mb-2'><Link href='/action'>Take Action</Link></li>
                            <li className='text-[#f6f7f8] hover:text-red-600 active:text-red-700 mb-2'><Link href='/contact'>Contact</Link></li>
                            <li className='text-[#f6f7f8] hover:text-red-600 active:text-red-700 mb-2'><Link href='/donate'>Donate</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-col-3 flex flex-col items-center md:items-end p-4'>
                    <div className='flex flex-col item-start'>
                        <h3 className='text-lg text-red-600 font-semibold mb-2'>Follow Me</h3>
                        <ul>
                            <li className='flex text-[#f6f7f8] hover:text-red-600 active:text-red-700 items-center mb-2'><RiFacebookFill /> <Link href='https://linkedin.com/in/muhit-khan' className='ml-2' target="_blank">Facebook</Link></li>
                            <li className='flex text-[#f6f7f8] hover:text-red-600 active:text-red-700 items-center mb-2'><RiInstagramFill /> <Link href='https://linkedin.com/in/muhit-khan' className='ml-2' target="_blank">Instagram</Link></li>
                            <li className='flex text-[#f6f7f8] hover:text-red-600 active:text-red-700 items-center mb-2'><RiYoutubeFill /> <Link href='https://linkedin.com/in/muhit-khan' className='ml-2' target="_blank">Youtube</Link></li>
                            <li className='flex text-[#f6f7f8] hover:text-red-600 active:text-red-700 items-center mb-2'><RiTwitterFill /> <Link href='https://linkedin.com/in/muhit-khan' className='ml-2' target="_blank">Twitter</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
