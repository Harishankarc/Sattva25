import { Link } from "react-router-dom";

export default function Arts() {
    const branchPoints = [
        { branch: "Computer Science", cultural: 150, total: 350 },
        { branch: "Mechanical", cultural: 180, total: 340 },
        { branch: "Electronics", cultural: 140, total: 320 },
        { branch: "Electrical", cultural: 160, total: 300 },
        { branch: "Civil", cultural: 130, total: 300 }
    ];

    return (
        <div className="h-screen w-screen arts relative" id="arts">
            <div className="py-20 relative z-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">ARTS</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full rounded-lg overflow-hidden shadow-lg relative z-20">
                            <thead className="bg-zinc-900 text-white">
                                <tr>
                                    <th className="py-4 px-6 text-left">Branch</th>
                                    <th className="py-4 px-6 text-center">Cultural Points</th>
                                    <th className="py-4 px-6 text-center">Total Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {branchPoints.map((branch, index) => (
                                    <tr key={index} className="border-b border-gray-700 bg-zinc-900/50">
                                        <td className="py-4 px-6 font-medium text-gray-300">{branch.branch}</td>
                                        <td className="py-4 px-6 text-center text-gray-300">{branch.cultural}</td>  
                                        <td className="py-4 px-6 text-center font-bold text-primary text-gray-300">
                                            {branch.total}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        
                    </div>
                    <div className="flex justify-center items-center">
                    <button className="cursor-pointer text-white mt-10 bg-transparent border border-white px-20 rounded-md py-5 hover:bg-white hover:text-black"><Link to="/arts">Individual Point</Link></button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
