import { useState } from "react";
import axios from 'axios';
import baseUrl from ".../utils/url";

export default function Arts() {
    const initialState = [{ position: "", participantCode: "", name: "", categoryCode: "", mark: "", department: "" }];
    const [participants, setParticipants] = useState(initialState);

    const handleInputChange = (index, field, value) => {
        const newParticipants = [...participants];
        newParticipants[index][field] = value;
        setParticipants(newParticipants);
    };

    const addParticipant = () => {
        setParticipants([...participants, { position: "", participantCode: "", name: "", categoryCode: "", mark: "", department: "" }]);
    };

    const removeParticipant = (index) => {
        if (participants.length > 1) {
            setParticipants(participants.filter((_, i) => i !== index));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseUrl}/addarts`, { participants });
            console.log("Server Response:", response.data);
            alert("Data submitted successfully!");
            setParticipants(initialState);
        } catch (e) {
            console.error("Error:", e.response?.data || e.message);
            alert("Submission failed. Check console for details.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 p-6 text-white">
            <h1 className="text-4xl font-bold text-center mb-6">Arts - Add Participants</h1>

            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg text-black">
                {participants.map((participant, index) => (
                    <div key={index} className="grid grid-cols-7 gap-4 mb-4 items-center">
                        <input
                            type="number"
                            placeholder="Position"
                            value={participant.position}
                            onChange={(e) => handleInputChange(index, "position", e.target.value)}
                            className="border p-2 rounded-md"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Participant Code"
                            value={participant.participantCode}
                            onChange={(e) => handleInputChange(index, "participantCode", e.target.value)}
                            className="border p-2 rounded-md"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Name"
                            value={participant.name}
                            onChange={(e) => handleInputChange(index, "name", e.target.value)}
                            className="border p-2 rounded-md"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Category Code"
                            value={participant.categoryCode}
                            onChange={(e) => handleInputChange(index, "categoryCode", e.target.value)}
                            className="border p-2 rounded-md"
                            required
                        />
                        <input
                            type="number"
                            placeholder="Mark"
                            value={participant.mark}
                            onChange={(e) => handleInputChange(index, "mark", e.target.value)}
                            className="border p-2 rounded-md"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Department"
                            value={participant.department}
                            onChange={(e) => handleInputChange(index, "department", e.target.value)}
                            className="border p-2 rounded-md"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => removeParticipant(index)}
                            className="cursor-pointer bg-red-500 text-white px-3 py-2.5 rounded-md hover:bg-red-600"
                        >
                            Remove
                        </button>
                    </div>
                ))}

                <div className="flex justify-start items-center gap-4">
                    <button
                        type="button"
                        onClick={addParticipant}
                        className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                    >
                        Add 
                    </button>

                    <button type="submit" className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
