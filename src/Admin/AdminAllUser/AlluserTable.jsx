/* eslint-disable react/prop-types */
import axios from "axios";
import useAxiosSecure from "../../Components/Hook/useAxiosSecure";
import toast from "react-hot-toast";

const AlluserTable = ({ user, refetch }) => {
   const axiosSecure = useAxiosSecure() 

    const handleStatusChange = async (id, status) => {
        refetch();
        try {
            const { data } = await axiosSecure.patch(`/adminupdatestatus/${id}`, { status });
            if (data.modifiedCount > 0) {
                refetch();
                toast.success(`User ${status === 'blocked' ? 'Blocked' : status === 'active' ? 'Approved' : "Unblocked"}`)
            }
        } catch (error) {
            alert(error.message);
        }
 
        console.log(id,status);
    };

    return (
        <tr className="text-center" key={user._id}>
           
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user.name}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{user.email}
                </p>
            </td>
            
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className={`badge p-3 font-semibold`}>
                    <p className={`whitespace-no-wrap `}>
                        {user.role === 'user' && 'User' ||
                            user.role === 'agent' && 'Agent' ||
                            user.role === 'admin' && 'Admin'}
                    </p>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <div className={`badge p-3 font-semibold `}>
                <p className={`whitespace-no-wrap `}>
                    {user.status === 'pending' && 'Pending' ||user.status === 'active' && 'Active' || user.status === 'blocked' && 'Blocked' || user.status === "admin" && 'Admin'}
                </p>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button disabled={user.role === 'admin'}
                    onClick={() => handleStatusChange(user._id, user.status === 'pending' ? 'active' : user.status === 'blocked' ? 'active' : 'blocked')}
                    className="btn btn-sm rounded-3xl font-semibold transition-colors duration-300 transform  text-rose-100 badge bg-[#5D0911] hover:bg-rose-100 hover:text-[#5D0911]">
                    {user.status === 'pending' ? 'Approve' : user.status === 'active' ? 'Block' : 'Unblock'}
                </button>
            </td>

            
           
        </tr>
    );
};

export default AlluserTable;