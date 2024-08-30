import {useQuery} from '@tanstack/react-query'
import useAuth from './useAuth';
import axios from 'axios';
const useRole = () => {
    const {user,loading} = useAuth()
    const{data : role ,isLoading,refetch} = useQuery({
        queryKey : ['role',user?.email,user?.phone],
        enabled :!loading && !!user?.email && !!user?.phone,
        queryFn : async ()=>{
          const{data} = await axios.get(`http://localhost:5000/userRole/${user?.email || user?.phone}`)
          return data.role
        }
    })
    console.log(role);
    
    return [role,isLoading,refetch];
};

export default useRole;