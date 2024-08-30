import { useQuery } from "@tanstack/react-query";
import {  useState } from "react";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";
import useAuth from "../../Components/Hook/useAuth";
import useAxiosSecure from "../../Components/Hook/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const UserCashIn = () => {
    const [show, setShow] = useState(false)
    const [agent, setAgent] = useState()
    const navigate = useNavigate()
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const togglePasswordVisibility = () => {
        setShow(!show);
    };

    const onSubmit = async (data) => {
        const { userPassword,userAmount } = data;
        try {
            const userInfo = {
                agent : agent,
                amount : parseInt(userAmount),
                password : userPassword,
                status : "pending",
                requesterId : user?.id,
                requesterName : user?.name,
                requesterPhone : user?.phone,
                 requesterEmail: user?.email,
            };
            const { data } = await axiosSecure.post(`/cashin`, userInfo);
            if(data.acknowledged === true){
               navigate('/profile')
               toast.success('Cash In Request Send to Agent')
            }
            return data;
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handleRoleChange = (event) => {
        const sltRole = event.target.value;
        setAgent(sltRole)
    };
    const { data: Alluser} = useQuery({
        queryKey: ['Alluser'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/allusers`)
            return data
        }
    })

    return (
        <div className="bg-[#5D0911] w-[90%] rounded-xl lg:w-[70%] mx-auto mt-20 p-5 md:p-10 lg:p-14">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                    
                    <div className="w-full">
                        <label htmlFor="district" className="block text-white mb-2 text-sm">
                            Agent
                        </label>
                        <select
                            className="w-full px-3 text-white py-2 border outline-none rounded-lg bg-transparent "
                            {...register("Role", {
                                required: "Select Role",
                            })}
                            onChange={handleRoleChange}
                        >
                            <option disabled selected value="" className="text-black" >
                              Select Agent
                            </option>
                            {
                                Alluser?.filter(a => a?.role === "agent")?.map(ag=> <option value={ag.phone} key={ag._id} className="text-black">
                                   {ag.phone}
                                </option>)
                            }

                        </select>

                    </div>
                    <div>
                        <label htmlFor="Phone" className="block text-white  mb-2 text-sm">Amount</label>
                        <input type="number" placeholder="Enter your amount" className="w-full px-3 py-2 border outline-none rounded-lg text-white bg-transparent " {...register("userAmount", {
                            required: true,
                        })} />
                    </div>


                    <div className="">
                        <div className="w-full">
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm text-white">Pin</label>

                            </div>
                            <div className="relative">
                                <input type={show ? "text" : "password"} placeholder="Enter your Pin " className="w-full rounded-lg outline-none px-3 text-white py-2 border  border-gray-200 bg-transparent  "
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


                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="bg-transparent w-full text-lg font-bold border text-white  p-2 flex gap-1 items-center rounded-lg justify-center  px-4 transition-all duration-1000 ">Cash In </button>
                    </div>
                    
                </div>
            </form>
        </div>
    );
};

export default UserCashIn;