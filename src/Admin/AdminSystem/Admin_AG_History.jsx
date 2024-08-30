import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Components/Hook/useAxiosSecure";

const Admin_AG_history = () => {
    const { phone } = useParams();
    const axiosSecure = useAxiosSecure()
    const { data: History = [], isLoading, error } = useQuery({
        queryKey: ['History', phone],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/AG-history/${phone}`);
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
                            History.map(history => <tr className="text-center" key={history._id}>

                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className='text-gray-900 whitespace-no-wrap'>
                                        {
                                            history?.type === "Cash In" ? history?.recipient?.name : history?.sender?.name
                                        }
                                    </p>
                                    <p className='text-gray-900 whitespace-no-wrap'>
                                        {
                                            history?.type === "Cash In" ? history?.recipient?.phone : history?.sender?.phone
                                        }
                                    </p>

                                </td>
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className={`whitespace-no-wrap `}>
                                        {history?.type}
                                    </p>
                                </td>

                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className={`whitespace-no-wrap `}>
                                        {new Date(history?.createdAt).toLocaleDateString()}
                                    </p>
                                    <small className={`whitespace-no-wrap `}>
                                        {new Date(history?.createdAt).toLocaleTimeString()}
                                    </small>

                                </td>
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className={`whitespace-no-wrap `}>
                                        {history?.type === "Cash In" ? "-" : "+"} ( <span className="text-xl">৳</span>  {history?.amount} )
                                    </p>
                                </td>

                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className={`whitespace-no-wrap `}>
                                        + ( <span className="text-xl">৳</span> {history?.cost?.toFixed(2)} )
                                    </p>
                                </td>

                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <small className={`whitespace-no-wrap `}>
                                        {history?._id}
                                    </small>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin_AG_history;