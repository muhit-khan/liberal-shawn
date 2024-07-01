import Image from 'next/image';
import { RiArrowRightLine } from 'react-icons/ri';
import portrait from '../../../public/images/portrait-1.png';

import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className="flex py-20 flex-col md:flex-row items-center p-4 md:space-x-8 space-y-4 md:space-y-0">
                <div className="w-full md:w-auto">
                    <Image
                        src={portrait}
                        alt="Shawn Emran"
                        width={400}
                        height={400}
                        className="w-full md:w-96 max-w-full h-auto rounded-lg shadow-lg" // Tailwind classes for responsive image
                    />
                </div>
                <div className="text-center md:text-left max-w-2xl">
                    <h1 className="text-red-600 text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Meet Shawn!
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        We have only one planet to call home. From British Columbia to Newfoundland, the effects of climate change and economic disparity are clear. I believe that the de-carbonization of our industries and economic equality are cornerstones of our political discourse. We the political leaders need to step-up and realize that industry is far ahead of us in progress. That&apos;s why I believe in economic liberalization and competition. A free market economy is the only way to get us out of the reliance on our traditional partners and allies like the United States, United Kingdom, and the Commonwealth. We must forge new trade and military alliances that can mend some of our economic ills while maintaining our competitive advantages.
                    </p>
                    <button className="bg-red-600 font-semibold text-gray-900 text-base py-2 px-6 rounded-full inline-flex items-center hover:bg-red-700 active:bg-red-600">
                        Join Me
                        <RiArrowRightLine className='ml-2' />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;