import { useQuery } from "@tanstack/react-query";
import UserTranTable from "./UserTranTable";
import useAuth from "../../Components/Hook/useAuth";
import useAxiosSecure from "../../Components/Hook/useAxiosSecure";
const UserTransection = () => {
    const {user:user1} = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: allusers = [], refetch, isLoading } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/US-transectionHistory/${user1?.phone}`);
            return data;
        }
    });
    return (
        <div className=''>
            <div className=' mx-5 py-4 overflow-x-auto'>
                <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                    <table className='min-w-full font-semibold leading-normal text-center'>
                        <thead className="bg-gradient-to-r  from-[#5D0911] to-[#ac0000]" >
                            <tr>


                                <th
                                    scope='col'
                                    className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                                >
                                    Sender
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                                >
                                    {" "}
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                                >
                                    Receiver
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
                                    Tran. Type
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
                                allusers.slice(0,10).map((user, index) =>
                                    <UserTranTable key={user._id} user={user} user1={user1} index={index} refetch={refetch}></UserTranTable>
                                )}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserTransection;