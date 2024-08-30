import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Components/Hook/useAxiosSecure";
import Admin_US_Table from "./Admin_US_Table";

const Admin_US_Tab = () => {
    const axiosSecure = useAxiosSecure()
    const { data: allusers = [], refetch, isLoading } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/AD-US-Num`);
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
                                        Name 
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                                    >
                                        email
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                                    >
                                        Number
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                                    >
                                        
                                        Details
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3   border-b border-gray-200 text-white    text-sm uppercase font-semibold'
                                    >
                                         Tran. History
                                    </th>
                                    
                                  
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allusers.slice(0,20).map((user) =>
                                        <Admin_US_Table key={user._id} user={user} refetch={refetch}></Admin_US_Table>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
    );
};

export default Admin_US_Tab;