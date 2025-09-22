import React from 'react'

const services = [
    {
        id: 1,
        title: "web Design",
        description: "Creating visually appealing and use-friendly designs ",

    },
    {
        id: 2,
        title: "Frontend Developper",
        description: "Building responsive designs ",
        
    },
    {
        id: 3,
        title: "Backend Developer",
        description: "Solving logical problems  ",
    },
    {
        id: 4,
        title: "Full-Stack Developer",
        description: "Combining of both frontend and backend development",
    },
    {
        id: 5,
        title: "Digital Markating",
        description: "Promoting or Marketing Brands Through Internet , Social Media Platforms",
    },
    {
        id: 6,
        title: "Startup Business",
        description: "Starting There Own Business Through There Own Ideas",
    }


]
const Service = () => {
  return (
       <div className='bg-black text-white py-20' id='service'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                < h2 className='text-4xl font-bold text-center mb-12'>Service</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                 {services.map(services => (
                    <div key={services.id}
                    className='bg-gray-900 px-8 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 '>
                            {services.id}
                            <div>
                                <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    {services.title}
                                </h3>
                                <p className='mt-2 text-gray-300 '>{services.description}</p>
                                <a href="#" className='mt-4 inline-block text-green-500 hover:text-blue-500 '> Read More </a>
                            </div>
                        </div>
                    </div>
                 ))}   
                </div>
    </div>
    </div>
  )
}

export default Service
