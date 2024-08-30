/* eslint-disable react/prop-types */

const AgentHistryTable = ({ user }) => {
    return (
        <tr className="text-center" key={user._id}>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                     {
                        user?.type === "Cash In" ? user?.recipient?.name : user?.sender?.name
                     }
                </p>
                <p className='text-gray-900 whitespace-no-wrap'>
                     {
                        user?.type === "Cash In" ? user?.recipient?.phone : user?.sender?.phone
                     }
                </p>

            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className={`whitespace-no-wrap `}>
                    {user?.type}
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
                    {user?.type === "Cash In" ? "-" : "+"} ( <span className="text-xl">৳</span>  {user?.amount} )
                </p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className={`whitespace-no-wrap `}>
                   + ( <span className="text-xl">৳</span> {user?.cost?.toFixed(2)} )
                </p>
            </td>
           
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <small className={`whitespace-no-wrap `}>
                    {user?._id}
                </small>
            </td>

        </tr>
    );
};

export default AgentHistryTable;