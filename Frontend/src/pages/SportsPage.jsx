import { useState } from "react";
import Navbar from "../components/Navbar";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import events from "../utils/s_event";
import axios from "axios";
import { Fade } from "react-awesome-reveal"

export default function SportsPage() {
  const [selectedCategory, setSelectedCategory] = useState(events[0]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState([]);

  async function fetchData(code) {
    try {
      const response = await axios.get(`http://localhost:3000/getIndividualSports?code=${code}`);
      const sortedData = response.data.sort((a, b) => a.position - b.position);
      setResult(sortedData);
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  }

  return (
    <div className="bg-black min-h-screen w-screen text-white">
      <Navbar />
      <h1 className="text-5xl font-bold text-center pt-20">Sports Events</h1>

      <div className="flex justify-center mt-10">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="cursor-pointer inline-flex w-64 justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-lg font-semibold text-gray-900 shadow-md ring-1 ring-gray-300 hover:bg-gray-100">
              {selectedCategory.cat}
              <ChevronDownIcon aria-hidden="true" className="size-5 text-gray-400" />
            </MenuButton>
          </div>

          <MenuItems className="absolute left-0 z-10 mt-2 w-64 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition">
            <div className="py-1">
              {events.map((category, index) => (
                <MenuItem key={index}>
                  {({ active }) => (
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-4 py-2 text-lg ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                    >
                      {category.cat}
                    </button>
                  )}
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
      </div>

      <Fade >
        <div className="max-w-5xl mx-auto mt-10 px-6 pb-10">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">{selectedCategory.cat}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {selectedCategory.events.map(([code, name], i) => (
              <li
                key={i}
                className="bg-gray-800 p-3 rounded-md shadow-md cursor-pointer hover:bg-gray-700"
                onClick={() => {
                  setSelectedEvent({ code, name });
                  fetchData(code);
                  setIsModalOpen(true);
                }}
              >
                <span className="font-bold text-blue-300">{code}:</span> {name}
              </li>
            ))}
          </ul>
        </div>
      </Fade>

      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 mx-4">
          <div className="bg-white text-black rounded-lg p-6 w-full max-w-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-center">{selectedEvent.name} Results</h2>

            <div className="overflow-scroll max-w-full">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">Position</th>
                    <th className="border border-gray-300 p-2 whitespace-nowrap">Department</th>
                    <th className="border border-gray-300 p-2 break-words max-w-[150px]">Name</th>
                    <th className="border border-gray-300 p-2">Mark</th>
                  </tr>
                </thead>
                <tbody>
                  {result.map((res, index) => (
                    <tr key={index} className="text-center">
                      <td className="border border-gray-300 p-2">{res.position}</td>
                      <td className="border border-gray-300 p-2">{res.dept.toUpperCase()}</td>
                      <td className="border border-gray-300 p-2">{res.name}</td>
                      <td className="border border-gray-300 p-2">{res.mark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
