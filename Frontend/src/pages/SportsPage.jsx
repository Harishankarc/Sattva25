import { useState } from "react";
import Navbar from "../components/Navbar";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import event from "../utils/s_event";


export default function SportsPage() {
  const [selectedSport, setSelectedSport] = useState(event[0]);

  return (
    <div className="bg-black min-h-screen w-screen text-white">
      <Navbar />
      <h1 className="text-5xl font-bold text-center pt-20">Sports Events</h1>

      {/* Dropdown Menu */}
      <div className="flex justify-center mt-10">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-64 justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-lg font-semibold text-gray-900 shadow-md ring-1 ring-gray-300 hover:bg-gray-100">
              {selectedSport[1]}
              <ChevronDownIcon aria-hidden="true" className="size-5 text-gray-400" />
            </MenuButton>
          </div>

          <MenuItems className="absolute left-0 z-10 mt-2 w-64 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition">
            <div className="py-1">
              {event.map((sport, index) => (
                <MenuItem key={index}>
                  {({ active }) => (
                    <button
                      onClick={() => setSelectedSport(sport)}
                      className={`block w-full text-left px-4 py-2 text-lg ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {sport[1]}
                    </button>
                  )}
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
      </div>

      {/* Display Selected Sport */}
      <div className="max-w-xl mx-auto mt-10 px-6">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">{selectedSport[1]}</h2>
        <div className="bg-gray-800 p-4 rounded-md shadow-md text-center text-xl font-bold">
          {selectedSport[1]}
        </div>
      </div>
    </div>
  );
}
