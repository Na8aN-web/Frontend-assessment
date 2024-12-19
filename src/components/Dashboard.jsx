"use client"

import Image from 'next/image';
import {
    Settings,
    Plus,
    HelpCircle,
    Monitor,
} from 'lucide-react';
import { useState } from 'react';
import Modal from './Modal';
import Modal2 from './Modal2';
import Sidebar from "./Sidebar"
import Table from "./Table"
import Navbar from './Navbar'
import Microsoft from '../../public/microsoft.png'


const Dashboard = () => {
    const target = 45;
    const won = 18;
    const committed = 8;
    const bestCase = 7;
    const qualified = 3;
    const leads = 75;
    const totalAchieved = won + committed + bestCase + qualified;

    const percentageAchieved = Math.round((totalAchieved / target) * 100);
    const [isModal1Open, setIsModal1Open] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);

    const handleApproveAndSend = () => {
        setIsModal1Open(false);
        setIsModal2Open(true);
    };
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Top Navigation */}
            <nav className="bg-gray-700 border-b border-gray-200 p-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="text-white font-semibold">Dynamics 365</div>
                    <span className="text-white">| Sales hub</span>
                </div>
                <div className="flex items-center space-x-4">
                    <Monitor className="w-5 h-5 text-white" />
                    <Plus className="w-5 h-5 text-white" />
                    <Settings className="w-5 h-5 text-white" />
                    <HelpCircle className="w-5 h-5 text-white" />
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
            </nav>

            <div className="flex">
                {/* Left Sidebar */}
                <Sidebar onApproveAndSend={handleApproveAndSend} />

                {/* Main Content */}
                <div className="flex-1 p-4">
                    {/* Navbar */}
                    <Navbar />

                    <div className="bg-white relative p-4 mb-6 border-[2px] rounded-[20px] border-purple-800 shadow-2xl">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full">
                                    <Image src={Microsoft} alt='micro' />
                                </div>
                                <div>
                                    <h2 className="font-semibold">Hi Mona, <span className='text-purple-500'>68%</span> of goal achieved and rest can be achieved by focusing on 20 top leads.</h2>

                                </div>
                            </div>
                            <div className=" max-w-xl mx-auto">
                                <div className="flex justify-between gap-6 items-center mb-2">
                                    <span className="text-gray-500 text-[12px]">1 month until Q4 ends</span>
                                    <span className="font-bold text-[12px]">
                                        Target <span className="text-black">${target} million</span>
                                    </span>
                                    <div className="text-right text-[12px]">
                                        <span className="text-gray-700 font-medium">
                                            {percentageAchieved}% of target achieved
                                        </span>
                                    </div>
                                </div>
                                <div className="relative h-2 bg-gray-200 rounded-lg overflow-hidden">
                                    <div
                                        className="absolute text-[12px] h-full bg-green-400"
                                        style={{ width: `${(won / target) * 100}%` }}
                                        title={`Won $${won}m`}
                                    ></div>
                                    <div
                                        className="absolute h-full text-[12px] bg-blue-400"
                                        style={{
                                            left: `${(won / target) * 100}%`,
                                            width: `${(committed / target) * 100}%`,
                                        }}
                                        title={`Committed $${committed}m`}
                                    ></div>
                                    <div
                                        className="absolute h-full text-[12px] bg-purple-400"
                                        style={{
                                            left: `${((won + committed) / target) * 100}%`,
                                            width: `${(bestCase / target) * 100}%`,
                                        }}
                                        title={`Best case $${bestCase}m`}
                                    ></div>
                                    <div
                                        className="absolute text-[12px] h-full bg-yellow-400"
                                        style={{
                                            left: `${((won + committed + bestCase) / target) * 100}%`,
                                            width: `${(qualified / target) * 100}%`,
                                        }}
                                        title={`Qualified $${qualified}m`}
                                    ></div>
                                </div>
                                <div className="flex justify-between mt-2 text-[10px] text-gray-500">
                                    <span>Won ${won}m</span>
                                    <span>Committed ${committed}m</span>
                                    <span>Best case ${bestCase}m</span>
                                    <span>Qualified ${qualified}m</span>
                                    <span>Leads ${leads}m</span>
                                </div>

                            </div>
                        </div>

                        {/* Lead Cards */}
                        <div className="mt-6 flex w-full">
                            <div className="flex flex-col w-2/3">
                                <p className="text-sm text-gray-600 my-2">
                                    Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
                                </p>
                                <div className="flex gap-4 items-start">
                                    <div className="flex-1 cursor-pointer shadow-md  rounded-lg p-4" onClick={() => setIsModal1Open(true)}>
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                            <div>
                                                <div className="font-semibold text-[14px]">Jane Reyes</div>
                                                <div className="text-[12px] text-gray-600">COO • Northwind Traders</div>
                                            </div>
                                        </div>
                                        <div className="bg-blue-100 p-2 rounded-[10px]">
                                            <h3 className="font-semibold mb-2 text-[14px]">Engage with Jane Reyes</h3>
                                            <p className="text-[12px] text-gray-600">
                                                Jane may be interested in upgrading espresso machines for her in-store coffee shops.
                                            </p>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-2">Lead source • High buying intent</div>
                                    </div>

                                    <div className="flex-1 shadow-md rounded-lg p-4 cursor-pointer" onClick={() => setIsModal1Open(true)}>
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                            <div>
                                                <div className="font-semibold text-[14px]">Allan Munger</div>
                                                <div className="text-[12px] text-gray-600">Head of Development • Contoso Coffee</div>
                                            </div>
                                        </div>
                                        <div className="bg-blue-100 p-2 rounded-[10px]">
                                            <h3 className="font-semibold mb-2 text-[14px]">Prepare for meeting with Allan</h3>
                                            <p className="text-[12px] text-gray-600">
                                                Prepare for high-buying intent meeting Copilot scheduled for 2 PM
                                            </p>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-2">Upcoming meeting • Due today</div>
                                    </div>


                                    <div className="w-8 h-8 bg-white border relative right-8 top-20 rounded-full flex justify-center items-center cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-4 h-4 text-gray-500"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>


                                <div className="flex justify-center mt-8 space-x-2">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                </div>
                            </div>

                            <div className="p-2 w-1/3">
                                <h2 className="text-lg font-medium text-gray-800 mb-4">Other key activities</h2>

                                {/* Activity Card 1 */}
                                <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        {/* Icon Placeholder */}
                                        <div className="bg-green-100 text-green-700 rounded-full p-2">
                                            <span className="text-sm font-semibold">CA</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold text-gray-800">
                                            Cafe A100 for Woodland Bank
                                        </h3>
                                        <p className="text-xs text-gray-600 mb-2">
                                            Woodland Bank • <span className="font-medium">$280,000</span> • 8 days to close
                                        </p>
                                        <p className="text-sm bg-blue-100 p-1 rounded-[10px] text-gray-700">
                                            Review draft and reply to Chris Naido
                                        </p>
                                    </div>
                                    <div>
                                        {/* Action Icon */}
                                        <div className="text-gray-400">
                                            <span>⋯</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Activity Card 2 */}
                                <div className="bg-white shadow-md rounded-lg p-4 flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        {/* Icon Placeholder */}
                                        <div className="bg-blue-100 text-blue-700 rounded-full p-2">
                                            <span className="text-sm font-semibold">FK</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold text-gray-800">
                                            Partnership opportunity for Fabrikam
                                        </h3>
                                        <p className="text-xs text-gray-600 mb-2">
                                            Fabrikam • <span className="font-medium">$5,000,000</span> • 12 days to close
                                        </p>
                                        <p className="text-sm text-gray-700 bg-blue-100 p-1 rounded-[10px]">
                                            Prepare me for stakeholder meeting
                                        </p>
                                    </div>
                                    <div>
                                        {/* Action Icon */}
                                        <div className="text-gray-400">
                                            <span>⋯</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Link */}
                                <div className="mt-4">
                                    <a
                                        href="#"
                                        className="text-blue-600 text-sm font-medium hover:underline"
                                    >
                                        Show all key activities
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Leads Table */}
                    <Table />
                </div>
            </div>
            <Modal
                isOpen={isModal1Open}
                onClose={() => setIsModal1Open(false)}
            />
            <Modal2
                isOpen={isModal2Open}
                onClose={() => setIsModal2Open(false)}
            />
        </div >
    );
};

export default Dashboard;
