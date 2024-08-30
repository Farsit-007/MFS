import { useEffect } from "react";
import UseStatus from "../Components/Hook/UseStatus";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Components/Hook/useAuth";
import useAxiosSecure from "../Components/Hook/useAxiosSecure";

const AgentProfile = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [status, isLoading, refetch] = UseStatus();
    useEffect(() => {
        refetch()
    }, [refetch]);
    const { data: balance = [] } = useQuery({
        queryKey: ['balance'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/userBalance/${user?.id}`);
            return data;
        }
    });
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
        <div className=" my-5 mx-5 py-10 rounded-lg bg-gradient-to-r  from-[#5D0911] to-[#ac0000]">
            <div className="flex justify-between items-center px-5">
                <div>
                    <h1 className="text-2xl p-2 px-5 text-white font-bold ">{user.name}</h1>
                </div>
                <div>
                    {
                        status === 'pending' ? <><div className="flex text-2xl p-2 px-5 text-white font-bold  gap-3 items-center">
                        <h1>N/A</h1>
                     </div></> :  <div className="flex text-2xl p-2 px-5 text-white font-bold  gap-3 items-center">
                        <h1>Blance : </h1>
                        <div className="flex p-2 justify-start bg-slate-100 rounded-xl items-center">
                             <h1 className="text-[#5D0911]"><span className="text-xl font-extrabold">৳</span> {balance?.balance?.toFixed(2)}</h1>
                        </div>
                     </div>
                    }
                     
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center">
        {
                        status === 'pending' && <div>Your account is on pending . Please wait for Admin Approval</div>
                    }
                    {
                        status === 'blocked' && <div>Your account is blocked . Please contact with Admin </div>
                    }
        </div>
    </div>
    );
};

export default AgentProfile;