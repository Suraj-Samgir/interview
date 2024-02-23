import React from 'react'

export default function IntoBanner() {
    return (
        <section className="bg-white dark:bg-gray-900 max-w-screen-xl mx-auto p-8 md:p-12 lg:p-20">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-400 from-orange-600">Building Confidence, <br /></span>Securing Futures</h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:pe-16 xl:pe-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            {/* learn more button */}
            <button type="button" className="text-orange-700 hover:text-white border border-orange-700 hover:bg-gradient-to-r from-orange-500 to-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-500 dark:text-white dark:hover:text-white dark:hover:bg-orange-700 dark:focus:ring-orange-700">Learn More</button>
        </section>
    )
}
