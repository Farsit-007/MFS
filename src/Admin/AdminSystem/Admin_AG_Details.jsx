import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Components/Hook/useAxiosSecure";

const Admin_AG_Details = () => {
    const { phone } = useParams()
    const axiosSecure = useAxiosSecure()
    const { data: details, isLoading } = useQuery({
        queryKey: ['details', phone],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/AG-details/${phone}`)
            return data
        }
    })
    const { data: cash = {} } = useQuery({
        queryKey: ['cash', phone],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/cash-count/${phone}`)
            return data
        }
    })
    return (
        <div className=" my-5 mx-5 py-10 rounded-lg bg-gradient-to-r  from-[#5D0911] to-[#ac0000]">
            <div className="flex justify-between items-center px-5">
                <div>
                    <h1 className="text-2xl p-2 px-5 text-white font-bold ">{details?.name}</h1>
                    <h1 className="text-2xl p-2 px-5 text-white font-bold ">{details?.email}</h1>
                    <h1 className="text-2xl p-2 px-5 text-white font-bold ">{details?.phone}</h1>
                </div>
                <div>
                <h1 className="text-2xl p-2 px-5 text-white font-bold ">Current Balance : {details?.balance?.toFixed(2)} Tk.</h1>
                <h1 className="text-2xl p-2 px-5 text-white font-bold ">Current Status : {details?.status}</h1>
                <h1 className="text-2xl p-2 px-5 text-white font-bold ">Total Cash In : {cash.cash?.toFixed(2)} Tk.</h1>
                <h1 className="text-2xl p-2 px-5 text-white font-bold ">Total Cash Out : {cash.cashout?.toFixed(2)} Tk.</h1>
                <h1 className="text-2xl p-2 px-5 text-white font-bold ">Total Charge : {cash.charge?.toFixed(2)} Tk.</h1>
                </div>
            </div>
        </div>

    );
};

export default Admin_AG_Details;