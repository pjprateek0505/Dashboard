import React,{useState} from "react";
import {toast} from "react-hot-toast";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";

const Signupform =  ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        firstname:"",lastname:"",email:"",password:"",
        confirmpassword:""
    })
    function changeHandler(event)
    {
        setFormData((prev)=>(
            {
            ...prev,
            [event.target.name]:event.target.value
        }

        ))
    }
    function submitHandler (event){
        event.preventDefault(); // prevent default behaviour
        if(formData.password !== formData.confirmpassword){
            toast.error("Passwords do not match");
            return ;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");

    }
    const [showPassword,setShowPassword] = useState(false);
    const [showwPassword,setShowwPassword] = useState(false);
    const [accountType,setAccountType] = useState("student");
    return(
        <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button
                    className={`${accountType === "student"
                    ?
                    "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("student")}
                    >
                        Student
                </button>
                <button
                    className={`${accountType === "instructor"
                    ?
                    "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("instructor")}
                    >
                        Instructor
                </button>
            </div>
            <form onSubmit={submitHandler}>
            <div className="mt-[10px]"></div>
                {/* firstname and lastname */}
                <div className="w-full flex justify-between" >
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup></p>
                        <input
                        required
                        type="text"
                        name="firstname"
                        onChange={changeHandler}
                        placeholder="Enter your First Name"
                        value={formData.firstname}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                    <label>
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
                        >Last Name<sup className="text-pink-200">*</sup></p>
                        <input
                        required
                        type="text"
                        name="lastname"
                        onChange={changeHandler}
                        placeholder="Enter your Last Name"
                        value={formData.lastname}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                    </label>
                </div>
                <div className="mt-[10px]"></div>
                {/* email address label */}
                <label>
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
                    >E-mail<sup className="text-pink-200">*</sup></p>
                    <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter your E-mail"
                    value={formData.email}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    />
                </label>
                {/* create and confirm password fields */}
                <div className="mt-[10px]"></div>
                <div className="w-full flex gap-x-7">
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
                        >Create Password<sup className="text-pink-200">*</sup></p>
                        <input
                        required
                        type={showPassword ? ("text"):("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Create your password"
                        value={formData.password}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
                        <span className="absolute right-3 top-[38px] cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                    
                    </label>
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
                        >Confirm Password<sup className="text-pink-200">*</sup></p>
                        <input
                        required
                        type={showwPassword ? ("text"):("password")}
                        name="confirmpassword"
                        onChange={changeHandler}
                        placeholder="confirm your password"
                        value={formData.confirmpassword}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                        />
                        <span className="absolute right-3 top-[38px] cursor-pointer"
                        onClick={() => setShowwPassword((prev) => !prev)}>
                        {showwPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                    </label>
                </div>
                <div className="mt-[20px]"></div>
                <button className="w-full bg-yellow-50 font-medium rounded-[8px] text-richblack-900 px-[12px] py-[8px]" >
                    Create Account
                </button>
            </form>
        </div>
    )
}
export default Signupform;
