import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Fade, Slide } from 'react-awesome-reveal'
import baseUrl from "../utils/url";

export default function Sports() {
    const [branchPoints, setBranchPoints] = useState([]);

    useEffect(() => {
        async function fetchPoints() {
            try {
                const response = await axios.get(`${baseUrl}/getSportsPointTable`);
                setBranchPoints(response.data);
                console.log(response.data);
            } catch (e) {
                console.log({ "Fetch error": e });
            }
        }
        fetchPoints();
    }, []);

    return (
        <div className="h-screen w-screen sports relative">
            <div className="py-20 relative z-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Slide direction="down" triggerOnce><h2 className="text-4xl font-bold text-center mb-12 text-white">SPORTS</h2></Slide>
                    <div className="overflow-x-auto">
                        <Fade duration={1000} triggerOnce>
                            <table className="min-w-full rounded-lg overflow-hidden shadow-lg relative z-20">
                                <thead className="bg-zinc-900 text-white">
                                    <tr>
                                        <th className="py-4 px-6 text-left">Branch</th>
                                        <th className="py-4 px-6 text-center">Sports Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {branchPoints.map((branch, index) => (
                                        <tr key={index} className="border-b border-gray-700 bg-zinc-900/50">
                                            <td className="py-4 px-6 font-medium text-gray-300">{branch.branch}</td>
                                            <td className="py-4 px-6 text-center text-gray-300">{branch.marks}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Fade>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="cursor-pointer text-white mt-10 bg-transparent border border-white px-20 rounded-md py-5 hover:bg-white hover:text-black">
                            <Link to="/sports">Individual Point</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
