import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center space-x-4 w-full">
        <div className="relative flex-1 max-w-lg">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center space-x-4 ">
          <button className="relative p-2 rounded-full bg-white hover:bg-gray-100 ">
            <Bell className="h-5 w-5 text-gray-600 " />
            <span className="absolute top-1 right-1 h-2 w-2 bg-blue-500 rounded-full "></span>
          </button>
          <div className="flex items-center space-x-2" >
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-semibold">JD</span>
            </div>
          </div>
          <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;