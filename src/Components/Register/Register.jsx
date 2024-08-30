import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Register = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const togglePasswordVisibility = () => {
        setShow(!show);
    };

    const onSubmit = async (data) => {
        const { userEmail, userPassword, userName, userPhone } = data;
        try {
            const userInfo = {
                name: userName,
                email: userEmail,
                phone: userPhone,
                password: userPassword,
                status: "pending",
                role: 'user',
            };
            const { data } = await axios.post(`http://localhost:5000/register`, userInfo);
            if(data.acknowledged === true){
                navigate('/')
                toast.success('Welcome to Taka Pathao')
             }
            return data;
        } catch (error) {
            toast.error(error.message);
        }
    }

   
    return (
        <div className="bg-[#5D0911] w-[90%] rounded-xl lg:w-[70%] mx-auto mt-5 p-5 md:p-10 lg:p-14">
            <div className="flex justify-between">
                <div>
                   <h1 className="text-3xl font-bold text-white">Register User</h1>
                </div>
                <div>
                <Link  to='/register/ag-register' className="btn">Register As Agent</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                    <div>
                        <label htmlFor="name" className="block  text-white mb-2 text-sm">Username</label>
                        <input type="text" placeholder="Enter your Name" className="w-full px-3 py-2 border outline-none rounded-lg text-white  bg-transparent  "
                            {...register("userName",{
                                required : true
                            })}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-white  text-sm">Email address</label>
                        <input type="email" placeholder="Enter your email address" className="w-full px-3 py-2 border rounded-lg outline-none text-white border-gray-200 bg-transparent  "  {...register("userEmail",
                            {
                                required: true,
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid Email"
                                }
                            }
                        )} />
                        {errors.userEmail && <small className="text-red-500 font-bold">{errors.userEmail.message}</small>}

                    </div>
                    <div>
                        <label htmlFor="photo" className="block  text-white mb-2 text-sm">Phone Number</label>
                        <input type="phone" placeholder="+880 1*********" className="w-full px-3 py-2 border outline-none text-white rounded-lg bg-transparent  " {...register("userPhone", {
                            required: true,
                            minLength: {
                                value: 11,
                                message: "Phone number must be in 11 digit"
                            },
                            maxLength: {
                                value: 11,
                                message: "Phone number must be in 11 digit"
                            },
                        })} />
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="w-full">
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm text-white">Pin</label>

                            </div>
                            <div className="relative">
                                <input type={show ? "text" : "password"} placeholder="Enter your Pin " className="w-full rounded-lg text-white outline-none px-3 py-2 border  border-gray-200 bg-transparent  "
                                    {...register("userPassword",
                                        {
                                            required: true,
                                            minLength: {
                                                value: 5,
                                                message: "Pin must be in 5 Digit"
                                            },
                                            maxLength: {
                                                value: 5,
                                                message: "Pin must be in 5 Digit"
                                            },
                                            pattern: {
                                                value: /^\d+$/,
                                                message: "Pin must be in digit"
                                            }
                                        }
                                    )}
                                />
                                <span onClick={togglePasswordVisibility} className="absolute right-[2%] top-[31%]">
                                    {!show ? <IoEyeOff size={20} className="text-white"/> : <IoEye size={20} className="text-white"/>}
                                </span>

                            </div>
                            {errors.userPassword && <small className="text-red-500 font-bold">{errors.userPassword.message}</small>}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <input type="checkbox"  {...register("userTerms", { required: true })} />
                        <label className="block text-white" htmlFor="term">Accept Privacy Policy</label>
                        {errors.userTerms && <small className="text-red-500 font-bold">(Please accept Privacy Policy)</small>}
                    </div>

                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="bg-transparent w-full text-lg font-bold border rounded-lg  p-2 flex gap-1 items-center  text-white justify-center px-4 transition-all duration-1000 ">Register</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-300">Already have an account?
                        <Link to="/" className="hover:underline pl-1 text-red-600 font-extrabold">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;