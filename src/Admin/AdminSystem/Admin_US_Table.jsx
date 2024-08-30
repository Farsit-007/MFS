/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Admin_US_Table = ({ user }) => {
    return (
        <tr className="text-center" key={user._id}>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    {user.name}
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className={`whitespace-no-wrap `}>
                    {user?.email}
                </p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className={`whitespace-no-wrap `}>
                    {user?.phone}
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <Link
                    to={`/system/US-Details/${user?.phone}`}
                    className="btn btn-sm rounded-3xl font-semibold transition-colors duration-300 transform  text-rose-100 badge bg-[#5D0911] hover:bg-rose-100 hover:text-[#5D0911]">
                    Details
                </Link>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <Link
                    to={`/system/US-History/${user?.phone}`}
                    className="btn btn-sm rounded-3xl font-semibold transition-colors duration-300 transform  text-rose-100 badge bg-[#5D0911] hover:bg-rose-100 hover:text-[#5D0911]">
                    Views
                </Link>
            </td>

        </tr>
    );
};

export default Admin_US_Table;