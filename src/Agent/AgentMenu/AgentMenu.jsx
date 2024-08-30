import { NavLink } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import UseStatus from "../../Components/Hook/UseStatus";
import { useEffect } from "react";
const AgentMenu = () => {
    const [status, isLoading, refetch] = UseStatus();
    useEffect(() => {
        refetch()
    }, [refetch]);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <ul className="">
            <li><NavLink
                to='/profile'
                end
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5 font-medium transition-colors duration-300 transform  hover:bg-rose-100 rounded-md  hover:text-[#5D0911] ${isActive ? 'bg-rose-100  text-[#5D0911]' : 'text-white'
                    }`
                }>
                <MdDashboardCustomize className='w-5 h-5 ' />
                <span className='mx-3 font-medium'>Profile</span>

            </NavLink></li>

            <li>
                {status !== 'active' ? (
                    <span
                        className="flex items-center rounded-md px-4 py-2 my-5 cursor-not-allowed bg-gray-200 text-gray-400"
                        title={`Agent account is ${status}`}
                    >
                        <VscGitPullRequestGoToChanges className='w-5  h-5' />
                        <span className='mx-3 font-medium'>Transaction Management</span>
                    </span>
                ) : (
                    <NavLink
                        to='/AG-transaction'
                        end
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5 font-medium transition-colors duration-300 transform  hover:bg-rose-100 rounded-md  hover:text-[#5D0911] ${isActive ? 'bg-rose-100  text-[#5D0911]' : 'text-white'
                            }`
                        }>
                        <MdDashboardCustomize className='w-5 h-5 ' />
                        <span className='mx-3 font-medium'>Transaction Management</span>

                    </NavLink>
                )}
            </li>

            <li>
            {status !== 'active' ? (
                    <span
                        className="flex items-center rounded-md px-4 py-2 my-5 cursor-not-allowed bg-gray-200 text-gray-400"
                        title={`Agent account is ${status}`}
                    >
                        <VscGitPullRequestGoToChanges className='w-5  h-5' />
                        <span className='mx-3 font-medium'>Transactions History</span>
                    </span>
                ) : (
                    <NavLink to='/AG-history'
                    className={({ isActive }) =>
                        `flex items-center px-4 py-2 my-5 font-medium transition-colors duration-300 transform  hover:bg-rose-100 rounded-md  hover:text-[#5D0911] ${isActive ? 'bg-rose-100  text-[#5D0911]' : 'text-white'
                        }`
                    }>
                    <VscGitPullRequestGoToChanges className='w-5  h-5' />
                    <span className='mx-3 font-medium'>Transactions History</span>
    
                </NavLink>
                )}
                </li>



        </ul>
    );
};

export default AgentMenu;