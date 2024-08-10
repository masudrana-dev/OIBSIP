import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'
const TodoItems = ({ text }) => {
    return (
        <div className="flex item-center my-3 gap-2">
            <div className="flex flex-1 items-center cursor-pointer">
                <img src={tick} alt="" className='w-7' />
                <p className='text-slate-600 ml-2 text-[15px]'>
                    {text}
                </p>
            </div>

            <img src={delete_icon} alt="" className='w-5 cursor-pointer' />
        </div>
    )
}

export default TodoItems