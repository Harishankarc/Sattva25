import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 flex items-center justify-center p-4">
            <div className="flex gap-10">
                <Link to="/arts"><button className="cursor-pointer px-10 py-5 rounded-md bg-white/15 text-white text-2xl">Arts</button></Link>
                <Link to="/sports"><button className="cursor-pointer px-10 py-5 rounded-md bg-white/15 text-white text-2xl">Sports</button></Link>
            </div>
        </div>
    );
}