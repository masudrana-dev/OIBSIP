import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="">
            <div className="w-10/12 border border-slate-200 rounded-md h-[550px] w-[450px] bg-white m-auto ">
                <h1 className="text-center text-[32px] font-medium pt-5"> Login</h1>
                <form action="" className=" w-3/4 m-auto pt-5      ">
                    <p className="font-edu text-[16px] font-bold mb-2
                    ">Email Address</p>
                    <input type="email" placeholder="Enter your email" className='focus:outline-none h-8 w-[330px] py-4 mb-4 border-b border-green-500' /> <br />

                    <p className="font-edu text-[16px] font-bold mb-2
                    "> Password</p>
                    <input type="password" placeholder="Enter your password" className='focus:outline-none h-8 w-[330px] py-4 mb-4 border-b border-green-500' />

                    <p className="font-edu font-medium text-[18px]">Don't have an account ? <Link to='/registration' className="text-blue-600">Register</Link></p>

                    <button className="border border-green-500 bg-green-500 py-2 px-8 rounded-md w-full mt-4">Submit</button>
                    <p>Or</p>
                    <button className="border border-green-500 bg-green-500 py-2 px-8 rounded-md w-full mt-4">Submit</button>
                    <button className="border border-green-500 bg-green-500 py-2 px-8 rounded-md w-full mt-4">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Login