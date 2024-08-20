import { Link, useNavigate } from "react-router-dom"
import img from '../assets/google.png'
import { useState } from "react"
import auth from '../firebasae_config'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const Login = () => {
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [emailError, setEmailError] = useState(' ')
    const [passwordError, setPasswordError] = useState(' ')
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();


    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailError(' ')
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordError(' ')
    }

    const handleSubmit = (event) => {
        if (!email) {
            setEmailError('Enter Your Email')
        }
        if (!password) {
            setPasswordError('Enter your password')
        }
        event.preventDefault()
    }

    const handleGoogleSignIn = async (event) => {
        event.preventDefault()
        await signInWithPopup(auth, provider)
            .then((user) => {
                console.log(user.user)
                setTimeout(() => {
                    navigate('/')
                }, 3000);
            }).catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
            });
    }

    return (
        <div className="w-10/12 border border-slate-200 rounded-md h-[550px] w-[450px] bg-white m-auto mt-36 ">
            <h1 className="text-center text-[32px] font-medium pt-5"> Login</h1>
            <form action="" className=" w-3/4 m-auto pt-5      ">

                <p className="font-edu text-[16px] font-bold mb-2
                    ">Email Address</p>
                <input onChange={handleEmail} type="email" placeholder="Enter your email" className='focus:outline-none h-8 w-[330px] py-4 mb-4 border-b border-green-500' /> <br />
                {
                    emailError &&
                    <p className=" font-nunito font-bold text-white  bg-red-400  ">{emailError}</p>
                }


                <p className="font-edu text-[16px] font-bold mb-2
                    "> Password</p>
                <input onChange={handlePassword} type="password" placeholder="Enter your password" className='focus:outline-none h-8 w-[330px] py-4 mb-4 border-b border-green-500' />
                {
                    passwordError &&
                    <p className=" font-nunito font-bold text-white  bg-red-400 px-5 ">{passwordError}</p>
                }

                <p className="font-edu font-medium text-[18px]">Don't have an account ? <Link to='/registration' className="text-blue-600">Register</Link></p>

                <button onClick={handleSubmit} className="border border-green-500 bg-green-500 py-2 px-8 rounded-md w-full mt-4 font-edu font-medium text-[18px] text-white">Submit</button>

                <p className="text-center font-edu font-medium text-[18px] mt-2">Or</p>
                <button onClick={handleGoogleSignIn} className="border border-slate-300 bg-slate-300 py-2 px-8 rounded-md w-full mt-2 font-edu font-medium text-[18px] flex justify-center items-center">
                    <img src={img} alt="" className="h-10 w-10" />
                    Login with google
                </button>
            </form>
        </div>

    )
}

export default Login