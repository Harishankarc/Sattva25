import img1 from '../assets/image/image1.jpg'
import img2 from '../assets/image/image2.jpg'
import img3 from '../assets/image/image3.jpg'
import img4 from '../assets/image/image4.jpg'
import Navbar from '../components/Navbar'
export default function Home() {
    return (
        <div>
            <div className='absolute top-0 z-50'>
                <Navbar/>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 md:flex h-screen overflow-hidden">
                <div className="flex-1 md:h-screen relative group">
                    <img
                        src={img1}
                        alt="Sample"
                        className="md:w-full md:h-screen h-[50vh] w-[50vw] object-cover scale-150"
                    />
                    <div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 h-full relative group">
                    <img
                        src={img2}
                        alt="Sample"
                        style={{ scale: 1}}
                        className="md:w-full md:h-screen h-[50vh] w-[50vw] object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 h-screen relative group">
                    <img
                        src={img3}
                        alt="Sample"
                        className="md:w-full md:h-screen h-[50vh] w-[50vw] object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 h-screen relative group">
                    <img
                        src={img4}
                        alt="Sample"
                        className="md:w-full md:h-screen h-[50vh] w-[50vw] object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
                
            </div>
        </div>
    );
}