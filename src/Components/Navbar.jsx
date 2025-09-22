import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
            <div className='container py-2 flex justify-center md:justify-between items-center'>
                <div className='text-2xl font-bold  hidden md:inline'> JM Charan</div>
                <div className='space-x-6 '>
                    <a href="#Home" className='hover:text-gray-400 hover:cursor-pointer'>Home</a>
                    <a href="#about" className='hover:text-gray-400 hover:cursor-pointer'>About Me</a>
                    <a href="#service" className='hover:text-gray-400 hover:cursor-pointer'>Services</a>
                    {/* <a href="#project" className='hover:text-gray-400 hover:cursor-pointer'>Project</a> */}
                    <a href="#contact" className='hover:text-gray-400 hover:cursor-pointer'>Contact</a>

                </div>
                <button className='bg-gradient-to-r from-green-300 to-blue-500 text-white hidden md:inline transform transition-transform  duration-300 hover:scale-105 px-4 py-2 rounded-full hover:cursor-pointer'>Contact Me</button>
            </div> 
        </nav>
    )
}

export default Navbar
