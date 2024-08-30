import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import axios from 'axios';

const UseStatus = () => {
    const {user,loading} = useAuth()
    const{data : status ,isLoading,refetch} = useQuery({
        queryKey : ['status',user?.email,user?.phone],
        enabled :!loading && !!user?.email && !!user?.phone,
        queryFn : async ()=>{
          const{data} = await axios.get(`http://localhost:5000/userStatus/${user?.email || user?.phone}`)
          return data.status
        }
    }) 
    return [status,isLoading,refetch];
};

export default UseStatus;