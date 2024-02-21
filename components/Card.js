// components/Card.js
"use client"
import React, { useState } from 'react';

export default function Card(props) {
  const [showForm, setShowForm] = useState(false);

  const showInput = () => {
    // setShowForm(true);
    if(showForm)
    {
      setShowForm(false);
    }
    else
    {
      setShowForm(true);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center text-center mb-5">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.desc}
          </p>

          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            {props.button1text}
          </button>

          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
            type="button"
            onClick={showInput}
          >
            {props.button2text}
          </button>

          {showForm && (
            <div className="w-full max-w-xs mx-auto" id="userInput">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="screenPeer"
                  >
                    Peer ID (Screen)
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="screenPeer"
                    type="text"
                    placeholder="Screen Peer Id"
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="cameraPeer"
                  >
                    Peer ID (Camera)
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cameraPeer"
                    type="text"
                    placeholder="Camera Peer Id"
                  />
                </div>

                <div className="flex items-center justify-center">
                  <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Action
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
