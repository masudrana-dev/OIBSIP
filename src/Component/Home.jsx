import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1 className='text-[40px] text-white font-bold text-center mt-40 '>Projects</h1>
            <div className='mt-32 md:mt-20 flex justify-center'>
                <ul className='grid grid-cols-1 md:flex justify-center gap-y-10 md:gap-x-20 '>
                    <Link to='/todo'><li className='boder border-teal-600 bg-teal-600 text-white w-[140px] h-[60px] rounded-md font-medium text-[18px] inline-block flex items-center justify-center '>Todo</li></Link>
                    <Link to='/calculator'><li className='boder border-orange-600 bg-orange-500 text-white w-[140px] h-[60px] rounded-md font-medium text-[18px] inline-block flex items-center justify-center'>Calculator</li></Link>
                    <Link to='/tribute'><li className='boder border-yellow-500 bg-yellow-500 text-white w-[140px] h-[60px] rounded-md font-medium text-[18px] inline-block flex items-center justify-center'>Tribute</li></Link>
                    <Link to='/login'><li className='boder border-red-600 bg-red-600 text-white w-[140px] h-[60px] rounded-md font-medium text-[18px] inline-block flex items-center justify-center'>Login page</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Home