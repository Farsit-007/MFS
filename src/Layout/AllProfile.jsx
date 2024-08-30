import { useEffect} from "react";
import useRole from "../Components/Hook/UseRole";
import UserProfile from "../User/UserProfile/UserProfile";
import AdminProfile from "../Admin/AdminAllUser/AdminProfile";


const AllProfile = () => {
    const [role, isLoading, refetch] = useRole()
    console.log(role);
  
    useEffect(() => {
        refetch()
    }, [ refetch]);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {
                role === 'user' && <UserProfile></UserProfile>
            }
            {
                role === 'agent' && <UserProfile></UserProfile>
            }
            {
                role === 'admin' && <AdminProfile></AdminProfile>
            }
        </div>
    );
};

export default AllProfile;