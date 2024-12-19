import React from 'react'
import {
    RefreshCw,
    ChevronDown,
    Users,
    Mail,
    List,
    Trash,
    Plus,
    Maximize2
} from "lucide-react"

const Navbar = () => {
    return (
        <div className="flex items-center w-full justify-between mb-4 bg-white shadow-md p-2">
            <div className="flex items-center space-x-4">
                <button className="text-gray-600  px-3 py-1 flex items-center text-[10px]">
                    <span className="text-gray-700 text-[10px]">My open leads</span>
                    <ChevronDown className="w-4 h-4 inline-block ml-1" />
                </button>

            </div>
            <div className="flex items-center space-x-4">
                <button className="text-gray-600  px-3 py-1 flex items-center text-[10px]">
                    <Mail className="w-4 h-4 mr-1" />
                    Show Chart
                </button>
                <button className="text-gray-600 px-3 py-1 flex items-center text-[10px]">
                    <List className="w-4 h-4 mr-1" />
                    Focused View
                </button>
                <button className="text-gray-600 px-3 py-1 flex items-center text-[10px]">
                    <Plus className="w-4 h-4 mr-1" />
                    New
                </button>
                <button className='flex items-center text-gray-600 text-[10px]'>
                    <RefreshCw className="w-4 h-4 text-gray-600" />
                    Refresh
                </button>

                <button className='flex items-center text-gray-600 text-[10px]'>
                    <Users className="w-4 h-4 text-gray-600" />
                    Collaborate
                </button>
                <button className='flex items-center text-gray-600 text-[10px]'>
                    <Trash className="w-4 h-4 text-gray-600" />
                    Delete
                </button>
                <button className="text-gray-600 border rounded px-3 py-1 text-[10px]">Smart data</button>
                <button className="text-gray-600 border rounded px-3 py-1 text-[10px]">Edit filters</button>
                <Maximize2 className="w-4 h-4 text-gray-600" />
            </div>
        </div>
    )
}

export default Navbar