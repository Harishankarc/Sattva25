import aboutVideo from '../assets/video/aboutVideo.mp4';

export default function About() {
    return (
        <div className="w-screen h-screen relative">
            <video
                autoPlay
                loop
                playsInline
                muted
                className="absolute w-full h-full object-cover -z-50"
            >
                <source src={aboutVideo} type="video/mp4" />
            </video>
            <div className="absolute w-full h-full bg-black/50 -z-40"></div>

            <div className="w-screen h-screen flex justify-center items-center px-6 relative z-10">
                <div className="bg-yellow-50/10 backdrop-blur-xl text-white p-10 md:p-16 lg:p-20 rounded-2xl shadow-2xl border border-white/30 max-w-3xl">
                    <h1 className="text-5xl font-bold text-center font-[Poppins]">ABOUT SATTVA</h1>
                    <p className="mt-4 text-lg text-center font-[Poppins]">
                        SATTVA 25, the glorious arts & sports fest of the CUCEKians, is marking its yearly beginning for the year 2025 
                        from February 2025 with offstage events and the official onstage schedule on 28th & 29th February.
                    </p>
                </div>
            </div>
        </div>
    );
}
