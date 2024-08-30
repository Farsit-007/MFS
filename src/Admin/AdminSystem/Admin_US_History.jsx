import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Components/Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const Admin_US_History = () => {
    const { phone } = useParams();
    const axiosSecure = useAxiosSecure()
    const { data: History = [], isLoading, error } = useQuery({
        queryKey: ['History', phone],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/US-history/${phone}`);
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
                                History.map((user) => <tr className="text-center" key={user._id}>

                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className='text-gray-900 whitespace-no-wrap'>
                                        {
                                            user?.sender?.role === "agent" ? "Agent" : user?.sender?.name
                                        }
                                    </p>
                                    <p className='text-gray-900 whitespace-no-wrap'>
                                        {user?.sender?.phone}
                                    </p>
                                </td>
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    
                                    <p className='text-gray-900 whitespace-no-wrap'>
                                      {"=>"}
                                    </p>
                                </td>
                    
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className='text-gray-900 whitespace-no-wrap'>
                                        {
                                            user?.recipient?.role === "agent" ? "Agent" : user?.recipient?.name
                                        }
                                    </p>
                                    <p className={`whitespace-no-wrap `}>
                                        {user?.recipient?.phone}
                                    </p>
                                </td>
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className={`whitespace-no-wrap `}>
                                        {new Date(user?.createdAt).toLocaleDateString()}
                                    </p>
                                    <small className={`whitespace-no-wrap `}>
                                        {new Date(user?.createdAt).toLocaleTimeString()}
                                    </small>
                    
                                </td>
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className={`whitespace-no-wrap `}>
                                        <span className="text-xl">৳</span>  {user?.amount} 
                                    </p>
                                </td>
                    
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className={`whitespace-no-wrap `}>
                                    <span className="text-xl">৳</span> {user?.sender?.phone ? user?.cost?.toFixed(2) : 0} 
                                    </p>
                                </td>
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className={`whitespace-no-wrap `}>
                                        {user?.type}
                                    </p>
                                </td>
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <small className={`whitespace-no-wrap `}>
                                        {user?._id}
                                    </small>
                                </td>
                            </tr>  
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
    );
};

export default Admin_US_History;