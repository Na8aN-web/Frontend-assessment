import { X, ChevronUp, Mail, Package, ClipboardCheck, BoxIcon, Truck, PenSquare, UserCircle } from 'lucide-react';
import { useState } from 'react';
import Microsoft from '../../public/microsoft.png'
import Image from 'next/image';

export default function Modal({ isOpen, onClose }) {
    const [emails, setEmails] = useState(['purchasing@contoso.com']);
    const [currentEmail, setCurrentEmail] = useState('');

    const handleAddEmail = (e) => {
        e.preventDefault();
        if (currentEmail && !emails.includes(currentEmail)) {
            setEmails([...emails, currentEmail]);
            setCurrentEmail('');
        }
    };

    const removeEmail = (emailToRemove) => {
        setEmails(emails.filter(email => email !== emailToRemove));
    };
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                <div className="bg-white rounded-lg w-2/3 shadow-xl px-12 py-20">
                    <div className="p-6 space-y-6">
                        {/* Agent Skill Section */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center gap-2">

                                <div className=" rounded-full flex items-center">
                                    <Image src={Microsoft} alt='micro' />
                                    <h2 className="text-lg font-semibold">Agent skill</h2>
                                </div>

                                <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="border rounded-lg">
                                <div className="p-4 flex justify-between items-center">
                                    <h3 className="font-medium">Check if on-hand inventory will allow all sales orders to ship without delay</h3>
                                    <ChevronUp className="text-gray-500" />
                                </div>


                                <div className="p-4 pt-0">
                                    <p className="text-gray-700 leading-relaxed">
                                        When
                                        <span className="mx-1 bg-blue-50 text-blue-600 px-2 py-0.5 rounded inline-flex items-center gap-1">
                                            <UserCircle size={16} />
                                            any vendor
                                        </span>
                                        sends an email with changes to
                                        <span className="mx-1 bg-blue-50 text-blue-600 px-2 py-0.5 rounded inline-flex items-center gap-1">
                                            <ClipboardCheck size={16} />
                                            confirmed purchase orders
                                        </span>
                                        , check if the resulting
                                        <span className="mx-1 bg-blue-50 text-blue-600 px-2 py-0.5 rounded inline-flex items-center gap-1">
                                            <Package size={16} />
                                            on-hand inventory
                                        </span>
                                        will allow
                                        <span className="mx-1 bg-blue-50 text-blue-600 px-2 py-0.5 rounded inline-flex items-center gap-1">
                                            <BoxIcon size={16} />
                                            all sales orders
                                        </span>
                                        to
                                        <span className="mx-1 bg-blue-50 text-blue-600 px-2 py-0.5 rounded inline-flex items-center gap-1">
                                            <Truck size={16} />
                                            ship without delay
                                        </span>
                                        . If so,
                                        <span className="mx-1 bg-blue-50 text-blue-600 px-2 py-0.5 rounded inline-flex items-center gap-1">
                                            <PenSquare size={16} />
                                            update the purchase order
                                        </span>
                                        to reflect the change.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Email Access Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center">
                                    <Mail className="w-4 h-4 text-white" />
                                </div>
                                <h2 className="text-lg font-semibold">Enable email access</h2>
                            </div>

                            <p className="text-gray-600">Allow the agent to access email inboxes to read mail from known vendors</p>

                            <form onSubmit={handleAddEmail} className="flex gap-2">
                                <div className="flex-1 relative">
                                    <div className="min-h-[40px] w-full border rounded-md bg-white pl-2 pr-8 py-1 flex flex-wrap items-center gap-1">
                                        {emails.map((email, index) => (
                                            <div
                                                key={index}
                                                className="inline-flex items-center gap-1 bg-gray-100 rounded pr-1"
                                            >
                                                <div className="h-6 w-6 rounded bg-orange-100 text-orange-600 flex items-center justify-center font-medium text-sm">
                                                    {email[0].toUpperCase()}
                                                </div>
                                                <span className="text-sm">{email}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => removeEmail(email)}
                                                    className="text-gray-400 hover:text-gray-600 p-0.5"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        ))}
                                        <input
                                            type="email"
                                            value={currentEmail}
                                            onChange={(e) => setCurrentEmail(e.target.value)}
                                            placeholder="Add email address"
                                            className="flex-1 min-w-[120px] outline-none py-1"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Allow access
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t p-4 flex justify-end gap-2">
                        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                            Activate
                        </button>
                        <button className="px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
