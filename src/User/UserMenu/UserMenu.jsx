import { NavLink } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { useEffect } from "react";
import UseStatus from "../../Components/Hook/UseStatus";
const UserMenu = () => {
    const [status, isLoading, refetch] = UseStatus();
    console.log(status);
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
                        title={`User account is ${status}`}
                    >
                        <MdDashboardCustomize className='w-5 h-5 ' />
                        <span className='mx-3 font-medium'>Send Money</span>
                    </span>
                ) : (
                    <NavLink
                        to='/sendmoney'
                        end
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5 font-medium transition-colors duration-300 transform  hover:bg-rose-100 rounded-md  hover:text-[#5D0911] ${isActive ? 'bg-rose-100  text-[#5D0911]' : 'text-white'
                            }`
                        }>
                        <MdDashboardCustomize className='w-5 h-5 ' />
                        <span className='mx-3 font-medium'>Send Money</span>

                    </NavLink>
                )}
            </li>
            <li>
                {status !== 'active' ? (
                    <span
                        className="flex items-center rounded-md px-4 py-2 my-5 cursor-not-allowed bg-gray-200 text-gray-400"
                        title={`User account is ${status}`}
                    >
                        <VscGitPullRequestGoToChanges className='w-5  h-5' />
                        <span className='mx-3 font-medium'>Cash-Out</span>
                    </span>
                ) : (
                    <NavLink to='/cashout'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5 font-medium transition-colors duration-300 transform  hover:bg-rose-100 rounded-md  hover:text-[#5D0911] ${isActive ? 'bg-rose-100  text-[#5D0911]' : 'text-white'
                            }`
                        }>
                        <VscGitPullRequestGoToChanges className='w-5  h-5' />
                        <span className='mx-3 font-medium'> Cash-Out </span>
                    </NavLink>
                )}

            </li>
            <li>
                {status !== 'active' ? (
                    <span
                        className="flex items-center rounded-md px-4 py-2 my-5 cursor-not-allowed bg-gray-200 text-gray-400"
                        title={`User account is ${status}`}
                    >
                        <VscGitPullRequestGoToChanges className='w-5  h-5' />
                        <span className='mx-3 font-medium'>Cash-in</span>
                    </span>
                ) : (
                    <NavLink to='/cashin'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5 font-medium transition-colors duration-300 transform  hover:bg-rose-100 rounded-md  hover:text-[#5D0911] ${isActive ? 'bg-rose-100  text-[#5D0911]' : 'text-white'
                            }`
                        }>
                        <VscGitPullRequestGoToChanges className='w-5  h-5' />
                        <span className='mx-3 font-medium'>Cash-in</span>
                    </NavLink>
                )}

            </li>

            <li>
                {status !== 'active' ? (
                    <span
                        className="flex items-center rounded-md px-4 py-2 my-5 cursor-not-allowed bg-gray-200 text-gray-400"
                        title={`User account is ${status}`}
                    >
                        <VscGitPullRequestGoToChanges className='w-5  h-5' />
                        <span className='mx-3 font-medium'>Transactions History</span>
                    </span>
                ) : (
                    <NavLink to='/userhistory'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5 font-medium transition-colors duration-300 transform  hover:bg-rose-100 rounded-md  hover:text-[#5D0911] ${isActive ? 'bg-rose-100  text-[#5D0911]' : 'text-white'
                            }`
                        }>
                        <VscGitPullRequestGoToChanges className='w-5  h-5' />
                        <span className='mx-3 font-medium'> Transactions History </span>

                    </NavLink>
                )}

            </li>
        </ul>
    );
};

export default UserMenu;