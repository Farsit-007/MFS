import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Login = () => {
    const { login ,error} = useContext(AuthContext);
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
        const { userEmail, userPassword } = data;
        try {
            await login(userEmail, userPassword);
            navigate('/profile')
          } catch (error) {
            console.log('Invalid credentials');
          }
    }
    return (
        <div className="">
           <div className="bg-[#5D0911] w-[90%] rounded-xl lg:w-[70%] mx-auto mt-20 p-5 md:p-10 lg:p-20">
           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">

                    <div>
                        <label htmlFor="email" className="block mb-2 text-white  text-sm">Email address</label>
                        <input type="text" placeholder="Enter your email/Phone Number" className="w-full text-white px-3 py-2 rounded-lg border outline-none  border-gray-200 bg-transparent  "  {...register("userEmail",
                            {
                                required: true,
                            }
                        )} />
                        {error === "Wrong Number/Email" && <small className="text-red-500 font-bold">{ error}</small>}

                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm text-white">Pin</label>

                        </div>
                        <div className="relative">
                            <input type={show ? "text" : "password"} placeholder="Enter your Pin " className="w-full text-white rounded-lg outline-none px-3 py-2 border  border-gray-200 bg-transparent  "
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
                                {!show ? <IoEyeOff size={20} className="text-white"/> : <IoEye size={20} className="text-white" />}
                            </span>
                        </div>
                        {errors.userPassword && <small className="text-red-500 font-bold">{errors.userPassword.message}</small>}
                        {error === "Wrong password"  && <small className="text-red-500 font-bold">{ error}</small>}
                    </div>

                </div>
                <div className="space-y-2">
                    <div>
                        <button  type="submit" className="bg-transparent w-full text-lg font-bold border   p-2 flex gap-1 items-center rounded-lg text-white justify-center px-4 transition-all duration-1000 ">Login</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-300">Don't have any account?
                        <Link to="/register" className="hover:underline pl-1 text-red-600 font-extrabold">Register</Link>
                    </p>
                </div>
            </form>
           </div>
        </div>
    );
};

export default Login;