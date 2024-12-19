import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Microsoft from '../../public/microsoft.png'

const Table = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // Sample data
    const data = [
        { name: "Winford Avner", topic: "Cafe A100 for commercial use", status: "New", date: "4/02/2024 12:00 PM" },
        { name: "Jesse Ernst", topic: "Upgrading service plan", status: "New", date: "3/30/2024 7:45 AM" },
        { name: "Winford Avner", topic: "Cafe A100 for commercial use", status: "New", date: "4/02/2024 12:00 PM" },
        { name: "Sarah Johnson", topic: "Product launch plan", status: "In Progress", date: "4/05/2024 2:30 PM" },
        { name: "Mark Smith", topic: "Project timeline review", status: "Completed", date: "3/25/2024 9:00 AM" },
    ];

    const filteredData = data.filter(lead => 
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.date.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
                <div className="relative w-1/3">
                    <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Sort, filter and search with Copilot"
                        className="w-full pl-10 pr-12 py-2 border rounded-lg"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Image
                        src={Microsoft} 
                        alt="Search icon"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
                    />
                </div>
            </div>
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex items-center">
                                <p>Name</p>
                                <ChevronDown className="w-5 h-5" />
                            </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex items-center">
                                <p>Topic</p>
                                <ChevronDown className="w-5 h-5" />
                            </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex items-center">
                                <p>Status Reason</p>
                                <ChevronDown className="w-5 h-5" />
                            </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex items-center">
                                <p>Created On</p>
                                <ChevronDown className="w-5 h-5" />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {filteredData.map((lead, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-3" />
                                    <span className="text-sm text-blue-700">{lead.name}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {lead.topic}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {lead.status}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {lead.date}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
