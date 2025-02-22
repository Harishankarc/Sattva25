import img1 from '../assets/image/image1.jpg';
import img2 from '../assets/image/image2.jpg';
import img3 from '../assets/image/image3.jpg';
import img4 from '../assets/image/image4.jpg';
import logo from '../assets/image/sattvalogo.png';
import Navbar from './Navbar';
import { Fade, Slide } from 'react-awesome-reveal';

export default function Home() {
    return (
        <div>
            <div className='sticky top-0 z-50'>
                <Slide triggerOnce direction='down'>
                    <Navbar />
                </Slide>
            </div>

            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-[90vw] md:w-[50vw]'>
                <Fade triggerOnce>
                    <img src={logo} alt="Sattva Logo" className='md:w-200 w-400' />
                </Fade>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 md:flex h-screen overflow-hidden z-10 relative">
                
                <Slide triggerOnce direction='down' duration={500} className='flex-1'>
                    <div className="relative group flex-1 h-screen overflow-hidden">
                        <img
                            src={img1}
                            alt="Sample"
                            className="md:w-full md:h-screen h-[50vh] w-[50vw] object-cover transition-transform duration-300 group-hover:scale-[1.7] scale-150"
                        />
                        <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300 group-hover:opacity-0"></div>
                    </div>
                </Slide>

                <Slide triggerOnce direction='up' duration={500} className='flex-1'>
                    <div className="relative group flex-1 h-screen overflow-hidden">
                        <img
                            src={img2}
                            alt="Sample"
                            className="md:w-full md:h-screen h-[50vh] w-[50vw] object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300 group-hover:opacity-0"></div>
                    </div>
                </Slide>

                <Slide triggerOnce direction='down' duration={500} className='flex-1'>
                    <div className="relative group flex-1 h-screen overflow-hidden">
                        <img
                            src={img3}
                            alt="Sample"
                            className="md:w-full md:h-screen h-[50vh] w-[50vw] object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300 group-hover:opacity-0"></div>
                    </div>
                </Slide>

                <Slide triggerOnce direction='up' duration={500} className='flex-1'>
                    <div className="relative group flex-1 h-screen overflow-hidden">
                        <img
                            src={img4}
                            alt="Sample"
                            className="md:w-full md:h-screen h-[50vh] w-[50vw] object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300 group-hover:opacity-0"></div>
                    </div>
                </Slide>

            </div>
        </div>
    );
}
