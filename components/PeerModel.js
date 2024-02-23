"use client";
import { useState, useEffect } from 'react';

export default function PeerModel({ setIsOpen }) {
    const [cameraPeerId, setCameraPeerId] = useState('');
    const [screenPeerId, setScreenPeerId] = useState('');

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', handleEscape);

        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '16px';

        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0';
            window.removeEventListener('keydown', handleEscape);
        };
    }, [setIsOpen]);

    const handleGenerate = () => {
        // Implement peer id generation logic here
        alert('Yet to implement peer id generation logic!');
    };

    const handleJoin = (e) => {
        e.preventDefault();
        // Implement peer id join logic here
        alert('Yet to implement peer id join logic!');
    }

    return (
        <div tabindex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 items-center w-full md:inset-0  max-h-full flex justify-center bg-gray-900 bg-opacity-60">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Generate or Join a room
                        </h3>
                        <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal"
                            onClick={() => setIsOpen(false)}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-4 md:p-5">
                        <form className="space-y-4" action="#" method="POST" onSubmit={handleJoin}>
                            <div>
                                <label for="peer-video" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Camera peer id</label>
                                <input type="text" name="peer-video" id="peer-video" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="peer id for camera" required value={cameraPeerId} onChange={(e) => setCameraPeerId(e.target.value)} />
                            </div>
                            <div>
                                <label for="peer-screen" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Screen peer id</label>
                                <input type="text" name="peer-screen" id="peer-screen" placeholder="peer id for screen" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required  value={screenPeerId} onChange={(e) => setScreenPeerId(e.target.value)} />
                            </div>

                            <div className="flex items-center justify-between">
                                <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 me-2">Join</button>
                                <button type="button" className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 ms-2" onClick={handleGenerate}>Generate</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
