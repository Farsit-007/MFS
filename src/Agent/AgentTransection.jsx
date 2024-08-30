import { useQuery } from "@tanstack/react-query";
import AgentTransactionTable from "./AgentTransactionTable";
import useAuth from "../Components/Hook/useAuth";
import useAxiosSecure from "../Components/Hook/useAxiosSecure";

const AgentTransection = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: req = [], refetch, isLoading } = useQuery({
        queryKey: ['req'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/Ag-Cashin/${user?.phone}`);
            return data;
        }
    });
    if (isLoading) return <div>Loading...</div>
    return (
        <div className=''>
        <div className=' mx-5 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full font-semibold leading-normal text-center'>
                    <thead className="bg-gradient-to-r  from-[#5D0911] to-[#ac0000]" >
                        <tr>
                            
                            <th
                                scope='col'
                                className='px-5 py-3  border-b border-gray-200 text-white   text-sm uppercase font-semibold'
                            >
                                Customer Name
                            </th>

                            <th
                                scope='col'
                                className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                            >
                                Customer Phone
                            </th>
                            <th
                                scope='col'
                                className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                            >
                                Customer Email
                            </th>
                            <th
                                scope='col'
                                className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                            >
                                Cash Amount
                            </th>
                            <th
                                scope='col'
                                className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                            >
                                Action
                            </th>
                         

                        </tr>
                    </thead>
                    <tbody>
                        {
                            req.map((user) =>
                                <AgentTransactionTable key={user._id} user={user}  refetch={refetch}></AgentTransactionTable>
                            )}
                    </tbody>

                </table>
            </div>
        </div>
    </div>
    );
};

export default AgentTransection;