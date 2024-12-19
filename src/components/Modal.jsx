import React from 'react';
import { Bell, Mail, Edit, ThumbsUp, ThumbsDown, ChevronDown, X } from 'lucide-react';

export default function Modal({ isOpen, onClose  }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  z-50">
            <div className="w-3/4 h-3/4 overflow-y-scroll mx-auto bg-white rounded-lg shadow-lg p-8">
                {/* Header */}
                <div className='flex items-center mb-6 gap-2'>
                    <Mail className="text-blue-600" size={16} />
                    <p className="text-black text-[16px] font-bold">Engage with Jane Reyes</p>
                </div>
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gray-200" />
                        <div>
                            <h2 className="font-semibold text-lg">Jane Reyes</h2>
                            <div className="flex items-center gap-2">
                                <img src="/api/placeholder/16/16" alt="LinkedIn" className="w-4 h-4" />
                                <span className="text-gray-600 text-sm">COO | Northwind Traders</span>
                            </div>
                        </div>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                {/* Engagement Suggestion */}
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Bell className="text-purple-600" size={16} />
                            <p className="text-purple-800">Jane may be interested in upgrading espresso machines for her in-store coffee shops.</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="text-purple-600 bg-white border p-2 rounded flex items-center gap-1">
                                <Edit size={16} />
                                Edit
                            </button>
                            <button className="bg-purple-600 text-white px-3 py-1 rounded flex items-center gap-1" >
                                Approve and send
                            </button>
                        </div>
                    </div>
                </div>

                {/* Engage Section */}
                <div className="border-b my-8">
                    <div className="flex gap-4 text-gray-600">
                        <button className="border-b-2 border-purple-600 pb-2 font-medium">Engage</button>
                        <button className="pb-2">Search</button>
                    </div>
                </div>

                {/* Lead Information */}
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                       
                        <h3 className="font-semibold text-purple-800">Why I picked this lead</h3>
                    </div>
                    <ul className="space-y-2 ml-4">
                        <li className="flex items-baseline gap-2">
                            <span>•</span>
                            <span>Jane is a <span className="font-bold">key decision maker</span> and was browsing 'espresso machines' on First Coffee's website.</span>
                        </li>
                        <li className="flex items-baseline gap-2">
                            <span>•</span>
                            <span>Multiple people at her company have reported 'slowness' during <strong>service requests</strong></span>
                        </li>
                        <li className="flex items-baseline gap-2">
                            <span>•</span>
                            <span>Northwind Traders currently see <span className="font-bold">$200M in revenue</span> from their in-store coffee shops.</span>
                        </li>
                    </ul>

                    <div className="flex gap-4 mt-4">
                        <div className="bg-white rounded-lg p-3 flex-1">
                            <div className="text-sm text-gray-600">Decision maker</div>
                            <div className="font-semibold text-green-600">Yes</div>
                        </div>
                        <div className="bg-white rounded-lg p-3 flex-1">
                            <div className="text-sm text-gray-600">Potential deal value</div>
                            <div className="font-semibold text-purple-600">$1M</div>
                        </div>
                        <div className="bg-white rounded-lg p-3 flex-1">
                            <div className="text-sm text-gray-600">Intent</div>
                            <div className="font-semibold text-purple-600">High</div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                                <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs">1</div>
                            </div>
                            <span className="text-sm text-gray-600">D365 Sales</span>
                            <span className="text-sm text-gray-600">+2</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">AI-generated content may be incorrect</span>
                            <ThumbsUp size={16} className="text-gray-500" />
                            <ThumbsDown size={16} className="text-gray-500" />
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="mb-4 bg-gray-100 p-2 rounded-[20px]">
                    <button className="w-full flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                        <span className="font-medium">About Jane</span>
                        <ChevronDown size={20} />
                    </button>
                    <p className="text-gray-600 mt-2">
                        Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders' in-store coffee shops have flourished, becoming a hallmark of quality and innovation. Jane's commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shops' offerings, ensuring consistent, high-quality service.
                    </p>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Showing 1 of 9</span>
                        <button className="text-blue-600 text-sm">Show all</button>
                    </div>
                    <div className="flex gap-2">
                        <ThumbsUp size={16} className="text-gray-500" />
                        <ThumbsDown size={16} className="text-gray-500" />
                    </div>
                </div>
            </div>

        </div>
    );
}
