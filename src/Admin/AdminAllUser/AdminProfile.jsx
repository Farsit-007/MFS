import { useEffect } from "react";
import UseStatus from "../../Components/Hook/UseStatus";
import useAuth from "../../Components/Hook/useAuth";

const AdminProfile = () => {
    const { user } = useAuth()
    const [status, isLoading, refetch] = UseStatus();
    console.log(status);
    useEffect(() => {
        refetch()
    }, [refetch]);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className=" my-5 mx-5 py-10 rounded-lg bg-gradient-to-r  from-[#5D0911] to-[#ac0000]">
                <div className="flex justify-between items-center px-5">
                    <div>
                        <h1 className="text-2xl p-2 px-5 text-white font-bold ">{user.name}</h1>
                    </div>
                    <div>
                        {
                          status === 'admin' && <div className="flex text-2xl p-2 px-5 text-white font-bold  gap-3 items-center">Admin</div> 
                        }
                         
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminProfile;