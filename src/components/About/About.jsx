import React from 'react'
import Image from 'next/image'
import portrait from '../../../public/images/portrait-3.jpg'
import Link from 'next/link'

const About = () => {
    return (
        <section className='bg-amber-50' id='about'>
            <div className='container mx-auto px-4 pt-20 pb-10'>
                <h2 className='text-4xl font-bold text-center text-red-600 mb-8'>About Shawn</h2>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
                    <div className='relative mb-20 col-span-1'>
                        <Image
                            src={portrait}
                            alt={"Portrait"}
                            placeholder='blur'
                            className="rounded-lg w-3/4 h-full object-cover"
                        />
                        <div className='absolute -bottom-10 left-1/4 bg-red-700 bg-opacity-80 p-4 rounded-lg'>
                            <p className='text-gray-50 text-lg'>&ldquo;Unity in diversity: Brampton&apos;s strength.&rdquo; - Shawn E.</p>
                        </div>
                    </div>
                    <div className='col-span-2 lg:ml-10 md:ml-10'>
                        <p className='text-center text-lg text-gray-800 text-justify mb-10'>Shawn Emran is a passionate advocate for the people of Brampton, dedicated to making a positive impact through his role in the Canadian Liberal Party. Born and raised in Brampton, Shawn has a deep connection to the community and a thorough understanding of the challenges and opportunities that lie ahead.</p>
                        <p className='text-center text-lg text-gray-800 text-justify mb-10'>With a background in [relevant background information, such as education, previous work experience, or community involvement], Shawn brings a wealth of knowledge and experience to his role as your representative. His commitment to public service is rooted in his belief that everyone deserves a fair shot at success, and he works tirelessly to ensure that all Bramptonians have access to the resources and opportunities they need to thrive.</p>
                        <Link href="/contact">
                            <button className="bg-red-600 font-semibold text-[#f6f7f8] py-2 px-6 rounded-full hover:bg-red-700 active:bg-red-600">
                                Message Shawn
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About