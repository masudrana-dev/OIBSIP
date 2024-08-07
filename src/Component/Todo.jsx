import todo from '../assets/todo_icon.png'
const Todo = () => {
    return (
        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">

            {/*---------- title -----------  */}
            <div className="flex items-center mt-7  gap-2">
                <img className="w-8" src={todo} alt="" />
                <h1 className='text-3xl font-semibold'>To-Do List</h1>
            </div>

            {/*---------- title -----------  */}
            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input type="text" placeholder='Add your task' />
                <button>ADD+</button>
            </div>
        </div>
    )
}

export default Todo