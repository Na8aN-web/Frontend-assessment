import React from 'react'
import Image from 'next/image';
import {
    MessageSquare,
    ChevronDown,
    BarChart2,
    Users,
    Home,
    Clock,
    Pin,
} from 'lucide-react';
import Microsoft from '../../public/microsoft.png'

const Sidebar = ({ onApproveAndSend }) => {
    return (
        <div className="w-64 bg-gray-200 border-r border-gray-200 min-h-screen">
            <div className="p-4">
                <div className="flex items-center space-x-2 mb-4 text-gray-700">
                    <Home className="w-5 h-5" />
                    <span>Home</span>
                </div>
                <div className="flex items-center space-x-2 mb-4 text-gray-700">
                    <Clock className="w-5 h-5" />
                    <span>Recent</span>
                </div>
                <div className="flex items-center space-x-2 mb-4 text-gray-700">
                    <Pin className="w-5 h-5" />
                    <span>Pinned</span>
                </div>

                <div className="mt-8">
                    <h3 className="text-sm font-semibold mb-4">My work</h3>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-gray-700">
                            <BarChart2 className="w-5 h-5" />
                            <span>Sales accelerator</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                            <ChevronDown className="w-5 h-5" />
                            <span>Dashboards</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                            <MessageSquare className="w-5 h-5" />
                            <span>Activities</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-sm font-semibold mb-4">Customers</h3>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-gray-700">
                            <Users className="w-5 h-5" />
                            <span>Accounts</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                            <Users className="w-5 h-5" />
                            <span>Contacts</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-sm font-semibold mb-4">Sales</h3>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 border-l-[5px] border-purple-800 bg-white p-2 relative right-2 text-gray-700">
                            <BarChart2 className="w-5 h-5" />
                            <span>Leads</span>
                        </div>
                        <div className="flex items-center space-x-2 cursor-pointer text-gray-700" onClick={onApproveAndSend}>
                            <Image
                                src={Microsoft} // replace with your image path
                                alt="Search icon"
                                width={20}
                                height={20}
                            />
                            <span>Agent Skill</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                            <ChevronDown className="w-5 h-5" />
                            <span>Opportunities</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                            <MessageSquare className="w-5 h-5" />
                            <span>Competitors</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-sm font-semibold mb-4">Collateral</h3>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-gray-700">
                            <BarChart2 className="w-5 h-5" />
                            <span>Quotes</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                            <ChevronDown className="w-5 h-5" />
                            <span>Orders</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                            <MessageSquare className="w-5 h-5" />
                            <span>Invoices</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                            <MessageSquare className="w-5 h-5" />
                            <span>Products</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                            <MessageSquare className="w-5 h-5" />
                            <span>Sales Literature</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-sm font-semibold mb-4">Marketing</h3>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-gray-700">
                            <BarChart2 className="w-5 h-5" />
                            <span>Marketing Lists</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                            <ChevronDown className="w-5 h-5" />
                            <span>Quick Campaigns</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar