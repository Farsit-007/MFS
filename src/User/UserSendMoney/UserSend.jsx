import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";
import useAuth from "../../Components/Hook/useAuth";
import useAxiosSecure from "../../Components/Hook/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const UserSend = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
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
        const { userPhone, userPassword, userAmount } = data;
        try {
            const { data } = await axiosSecure.patch('/sendMoeny', {
                phone: userPhone,
                pin: userPassword,
                amount: parseInt(userAmount),
                senderId : user?.id
            });
            if(data.result.modifiedCount > 0){
                navigate('/profile')
                toast.success('Send Money Done')
            }
            return data;
        } catch (error) {
            toast.error(error.response.data.message)
        }

    }
    return (
        <div className="bg-[#5D0911] w-[90%] rounded-xl lg:w-[70%] mx-auto mt-20 p-5 md:p-10 lg:p-14">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                    <div>
                        <label htmlFor="Phone" className="block mb-2 text-white text-sm">Reciever Number</label>
                        <input type="phone" placeholder="+880 1*********" className="w-full px-3 py-2 border outline-none bg-transparent text-white rounded-lg " {...register("userPhone", {
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
                    <div>
                        <label htmlFor="Phone" className="block  text-white mb-2 text-sm">Amount</label>
                        <input type="number" placeholder="Enter your amount" className="w-full px-3 py-2 border outline-none text-white rounded-lg bg-transparent " {...register("userAmount", {
                            required: true,
                        })} />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm text-white">Pin</label>
                        </div>
                        <div className="relative">
                            <input type={show ? "text" : "password"} placeholder="Enter your Pin " className="w-full outline-none text-white rounded-lg px-3 py-2 border  border-gray-200 bg-transparent  "
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
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="bg-transparent w-full text-lg font-bold border rounded-lg text-white  p-2 flex gap-1 items-center justify-center  px-4 transition-all duration-1000 ">Send Money</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserSend;