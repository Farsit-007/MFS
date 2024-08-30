/* eslint-disable react/prop-types */
import { useState } from "react";
import useAxiosSecure from "../Components/Hook/useAxiosSecure";

const AgentTransactionTable = ({ user, refetch }) => {
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState('')
    const axiosSecure = useAxiosSecure()
    const [status, SetStatus] = useState('')
    const handleCancel = async (id, status) => {
        try {
            const { data } = await axiosSecure.patch(`/Ag-cashin/${id}`, { id, status });

            if (data.result3.modifiedCount > 0) {
                refetch();
            }
        } catch (error) {
            alert(error.message);
        }
    };
    const handleAccept = () => {
        setShowModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const pin = e.target.pin.value;
        try {
            const { data } = await axiosSecure.patch(`/Ag-cashin/${id}`, { id, status, amount: user.amount, agentPhone: user.agent, requesterPhone: user.requesterPhone, pin });
            closeModal()
            if (data.result3.modifiedCount > 0) {
                refetch();
            }
        } catch (error) {
            alert(error.message);
        }
    }

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <tr className="text-center" key={user._id}>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    {user.requesterName}
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    {user.requesterPhone}
                </p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className={`badge p-3 font-semibold`}>
                    <p className={`whitespace-no-wrap `}>
                        {user.requesterEmail}
                    </p>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className={`badge p-3 font-semibold `}>
                    <p className={`whitespace-no-wrap `}>
                        {user.amount}
                    </p>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                {
                    user.status !== "cancel" && <button disabled={user.status === 'accept'}
                        onClick={() => { handleAccept() }}
                        className="btn btn-sm rounded-3xl font-semibold transition-colors duration-300 transform  text-rose-100 mr-2 badge bg-[#5D0911] hover:bg-rose-100 hover:text-[#5D0911]">
                        {
                            user.status === 'accept' ? "Accepted" : "Accept"
                        }
                    </button>
                }
                {
                    user.status !== "accept" && <button disabled={user.status === 'cancel'}
                        onClick={() => { handleCancel(user._id, 'cancel') }}
                        className="btn btn-sm rounded-3xl  font-semibold transition-colors duration-300 transform  text-rose-100 badge bg-[#5D0911] hover:bg-rose-100 hover:text-[#5D0911]">
                        {
                            user.status === 'cancel' ? "Canceled" : "Cancel"
                        }
                    </button>
                }

                {showModal && (
                    <div className="fixed  inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                        <div className="relative w-[320px] p-6 my-8 mx-auto rounded-lg bg-[#5D0911] border border-[#5D0911] ">
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input type="password" name="pin" className="m-2 p-3 rounded-lg" placeholder="Enter pin" required />
                                    </div>
                                    <div>
                                        <input className="btn" onClick={() => { setId(user._id), SetStatus('accept') }} type="submit" value="Confirm" />
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                )}
            </td>


        </tr>

    );

};

export default AgentTransactionTable;