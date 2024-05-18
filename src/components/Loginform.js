import React from "react";
import {useState} from "react";
import {toast} from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
const Loginform = ({setIsLoggedIn}) =>{
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        email:"",password:""
    })
    const [showPassword,setShowPassword] = useState(false);
    function changeHandler(event)
    {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    function SubmitHandler (event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }
    return(
        <form onSubmit={SubmitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address<sup className="text-pink-200">*</sup>
                </p>
                <input 
                requried 
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                name="email"
                placeholder="Enter email address"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
            </label>
            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password< sup className="text-pink-200">*</sup>
                </p>
                <input 
                requried 
                type={showPassword ? ("text"):("password")}
                value = {formData.password}
                name="password"
                onChange={changeHandler}
                placeholder="enter Password"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
                <span className="absolute right-3 top-[38px] cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)
                    :(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto"> Forgot Password</p>
                </Link>
            </label>
            <button type="submit" className="bg-yellow-50 font-medium rounded-[8px] text-richblack-900 px-[12px] py-[8px]"> 
                Sign In
            </button>
        </form>
    )
}
export default Loginform;