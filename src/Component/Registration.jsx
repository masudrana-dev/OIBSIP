import { Link } from "react-router-dom"
import img from '../assets/google.png'
import auth from '../firebasae_config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Registration = () => {
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')

    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)

    }

    const handleRegistration = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log('registration done ', user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                console.log(errorCode)
                // ..
            });
    }

    return (
        <div className="">
            <div className="w-10/12 border border-slate-200 rounded-md h-[550px] w-[450px] bg-white m-auto mt-36 ">
                <h1 className="text-center text-[32px] font-medium pt-5"> Login</h1>
                <form action="" className=" w-3/4 m-auto pt-5      ">
                    <p className="font-edu text-[16px] font-bold mb-2
                ">Full Name</p>
                    <input onChange={handleEmail} type="text" placeholder="Enter your email" className='focus:outline-none h-8 w-[330px] py-4 mb-4 border-b border-green-500' /> <br />

                    <p className="font-edu text-[16px] font-bold mb-2
                ">Email Address</p>
                    <input onChange={handlePassword} type="email" placeholder="Enter your email" className='focus:outline-none h-8 w-[330px] py-4 mb-4 border-b border-green-500' /> <br />

                    <p className="font-edu text-[16px] font-bold mb-2
                "> Password</p>
                    <input type="password" placeholder="Enter your password" className='focus:outline-none h-8 w-[330px] py-4 mb-4 border-b border-green-500' />

                    <p className="font-edu font-medium text-[18px]">Already  have an account ? <Link to='/login' className="text-blue-600">Login</Link></p>

                    <button onClick={handleRegistration} className="border border-green-500 bg-green-500 py-2 px-8 rounded-md w-full mt-4 font-edu font-medium text-[18px] text-white">Submit</button>

                    <p className="text-center font-edu font-medium text-[18px] mt-2">Or</p>
                    <button className="border border-slate-300 bg-slate-300 py-2 px-8 rounded-md w-full mt-2 font-edu font-medium text-[18px] flex justify-center items-center">
                        <img src={img} alt="" className="h-10 w-10" />
                        Login with google
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Registration