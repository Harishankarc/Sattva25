import { useState } from "react";
import Navbar from "../components/Navbar";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import events from '../utils/events'

export default function ArtsPage() {
  const [selectedCategory, setSelectedCategory] = useState(events[0]);

  return (
    <div className="bg-black min-h-screen w-screen text-white">
      <Navbar />
      <h1 className="text-5xl font-bold text-center pt-20">Arts Events</h1>

      
      <div className="flex justify-center mt-10">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-64 justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-lg font-semibold text-gray-900 shadow-md ring-1 ring-gray-300 hover:bg-gray-100">
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
                      className={`block w-full text-left px-4 py-2 text-lg ${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
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

      
      <div className="max-w-5xl mx-auto mt-10 px-6 pb-10">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">{selectedCategory.cat}</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {selectedCategory.events.map(([code, name], i) => (
            <li key={i} className="bg-gray-800 p-3 rounded-md shadow-md">
              <span className="font-bold text-blue-300">{code}:</span> {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
