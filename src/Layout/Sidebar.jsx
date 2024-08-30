import { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineBars } from 'react-icons/ai'
import { FaUserCog } from 'react-icons/fa'
import { GrLogout } from 'react-icons/gr'
import { AuthContext } from '../Components/AuthProvider/AuthProvider'
import UseRole from '../Components/Hook/UseRole'
import UserMenu from '../User/UserMenu/UserMenu'
import AgentMenu from '../Agent/AgentMenu/AgentMenu'
import AdminMenu from '../Admin/AdminMenu/AdminMenu'
const Sidebar = () => {
    const { user, logout } = useContext(AuthContext);
    const [role, isLoading, refetch] = UseRole()
    console.log(role);
    const [isActive, setActive] = useState(false)
    const handleToggle = () => {
        setActive(!isActive)
    }
    useEffect(() => {
        refetch()
    }, [user, refetch]);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <>

            <div className='bg-[#5D0911] text-white flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            {/* <img
                                src={logo}
                                alt='logo'
                                width='200'
                            /> */}
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none '
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>


            <div
                className={`z-10 md:fixed flex flex-col justify-between  overflow-x-hidden bg-[#5D0911] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
                            <Link to='/'>
                                {/* <img
                                    
                                    src={logo}
                                    alt='logo'
                                    width='280'
                                /> */}
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col  justify-between flex-1 mt-6'>

                        <nav>
                            {role === 'user' && <UserMenu></UserMenu>}
                            {role === 'agent' && <AgentMenu></AgentMenu>}
                            {role === 'admin' && <AdminMenu></AdminMenu>}
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    {!user && <NavLink
                        to='/register'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-rose-100 rounded-md  hover:text-[#5D0911] ${isActive ? 'bg-rose-100  text-[#5D0911]' : 'text-white'
                            }`
                        }
                    >
                        <FaUserCog className='w-5 h-5 ' />
                        <span className='mx-3 font-medium'>Register</span>
                    </NavLink>
                    }
                  {
                    !user &&   <NavLink
                    to='/'
                    className={({ isActive }) =>
                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-rose-100 rounded-md  hover:text-[#5D0911] ${isActive ? 'bg-rose-100  text-[#5D0911]' : 'text-white'
                        }`
                    }
                >
                    <FaUserCog className='w-5 h-5 ' />
                    <span className='mx-3 font-medium'>Login</span>
                </NavLink>
                  }
                    {
                        user && <button
                            onClick={logout}
                            className='flex w-full rounded-md items-center px-4 py-2 mt-5 text-white hover:bg-rose-100   hover:text-[#5D0911] transition-colors duration-300 transform'
                        >
                            <GrLogout className='w-5 h-5' />

                            <span className='mx-3 font-medium'>Logout</span>
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default Sidebar