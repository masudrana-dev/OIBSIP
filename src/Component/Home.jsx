import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='mt-72'>
            <ul className='flex justify-center gap-x-20 '>
                <Link to='/todo'><li className='boder border-teal-600 bg-teal-600 text-white px-6 py-3 rounded-md font-medium text-[18px]'>Todo</li></Link>
                <Link to='/calculator'><li className='boder border-orange-600 bg-orange-500 text-white px-6 py-3 rounded-md font-medium text-[18px]'>Calculator</li></Link>
                <Link to='/todo'><li className='boder border-yellow-500 bg-yellow-500 text-white px-6 py-3 rounded-md font-medium text-[18px]'>Tribute</li></Link>
                <Link to='/todo'><li className='boder border-red-600 bg-red-600 text-white px-6 py-3 rounded-md font-medium text-[18px]'>Login page</li></Link>
            </ul>
        </div>
    )
}

export default Home