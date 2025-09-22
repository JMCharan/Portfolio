import React from 'react'
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";


const Contact = () => {
  return (
     <div className='bg-black text-white py-20' id='contact'>
                <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                    < h2 className='text-4xl font-bold text-center mb-12'>Contact  Mee</h2>
                        <div className='flex flex-col md:flex-row items-center md:space-x-12 '>

                            <div className='flex-1'> 
                                <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 mb-4'>Lets Talk</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem.</p>
                                <div className='mb-4 mt-8 '>
                                    <FaEnvelopeOpenText  className='inline-block text-green-500 mr-2 '></FaEnvelopeOpenText>
                                    <a href="charanjm2@gmail.com" className='hover:underline'>
                                        My Email
                                    </a>
                                </div>
                                <div className='mb-4 '>
                                    <FaPhone className='inline-block text-green-500 mr-2 '></FaPhone>
                                   <span>+91 8217672635</span>

                                </div>
                                 <div className='mb-4 '>
                                    <FaMapMarkedAlt className='inline-block text-green-500 mr-2 '></FaMapMarkedAlt>
                                    <span>Street , City , State , Country</span>

                                </div>
                            </div>
                            
                            </div>
                            <div className='flex-1 w-full'>
                                <form className='space-y-4'>
                                    <div>
                                        <label htmlFor="name" className='block mb-2'>Your Name</label>
                                        <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-500'
                                        placeholder='Enter Your Name'/>
                                    </div>
                                      <div>
                                        <label htmlFor="email" className='block mb-2'>Email</label>
                                        <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-500'
                                        placeholder='Enter Your Email'/>
                                    </div>
                                     <div>
                                        <label htmlFor="message" className='block mb-2'>Message</label>
                                        <textarea type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-500'
                                        placeholder='Enter Your Message'
                                        rows="5"/>
                                    </div>
                                    <button className='bg-gradient-to-r from-green-300 to-blue-500 text-white hidden md:inline transform transition-transform  duration-300 hover:scale-105 px-9 py-2 rounded-full hover:cursor-pointer'>
                                      Send   
                                    </button>
                                </form>

                            </div>
                        </div>
                    
                </div>
    
            
  )
}

export default Contact
