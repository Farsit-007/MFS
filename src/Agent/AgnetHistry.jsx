
import { useQuery } from "@tanstack/react-query";
import AgentHistryTable from "./AgentHistryTable";
import useAuth from "../Components/Hook/useAuth";
import useAxiosSecure from "../Components/Hook/useAxiosSecure";

const AgnetHistry = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: allusers = [], refetch, isLoading } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/US-transectionHistory/${user?.phone}`);
            return data;
        }
    });
    return ( 
                <div className=' mx-5 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                        <table className='min-w-full font-semibold leading-normal text-center'>
                            <thead className="bg-gradient-to-r  from-[#5D0911] to-[#ac0000]" >
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                                    >
                                        Transaction
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                                    >
                                        Tran. Type
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                                    >
                                        Date & Time
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                                    >
                                        Amount in Tk.
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                                    >
                                        Charge in Tk.
                                    </th>
                                    
                                    <th
                                        scope='col'
                                        className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                                    >
                                        Tran. Id
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allusers.slice(0,20).map((user) =>
                                        <AgentHistryTable key={user._id} user={user} refetch={refetch}></AgentHistryTable>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
    );
};

export default AgnetHistry;