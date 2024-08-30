import { NavLink } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
const AdminMenu = () => {
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
        <li><NavLink
            to='/alluser'
            end
            className={({ isActive }) =>
                `flex items-center px-4 py-2 my-5 font-medium transition-colors duration-300 transform  hover:bg-rose-100 rounded-md  hover:text-[#5D0911] ${isActive ? 'bg-rose-100  text-[#5D0911]' : 'text-white'
                }`
            }>
            <MdDashboardCustomize className='w-5 h-5 ' />
            <span className='mx-3 font-medium'>User Management</span>

        </NavLink></li>
        <li><NavLink to='/system'
            className={({ isActive }) =>
                `flex items-center px-4 py-2 my-5 font-medium transition-colors duration-300 transform  hover:bg-rose-100 rounded-md  hover:text-[#5D0911] ${isActive ? 'bg-rose-100  text-[#5D0911]' : 'text-white'
                }`
            }>
            <VscGitPullRequestGoToChanges className='w-5  h-5' />
            <span className='mx-3 font-medium'>System Monitoring</span>

        </NavLink></li>
       
        

    </ul>
    );
};

export default AdminMenu;