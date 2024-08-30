import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Dash from "../Components/Dash/Dash";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import UserSend from "../User/UserSendMoney/UserSend";
import UserCash from "../User/UserCashOut/UserCash";
import UserCashIn from "../User/UserCashIn/UserCashIn";
import UserTransection from "../User/UserTransection/UserTransection";
import AdminAllUser from "../Admin/AdminAllUser/AdminAllUser";
import AllProfile from "../Layout/AllProfile";
import AgentTransection from "../Agent/AgentTransection";
import AgnetHistry from "../Agent/AgnetHistry";
import AdminSystem from "../Admin/AdminSystem/AdminSystem";
import Admin_AG_Details from "../Admin/AdminSystem/Admin_AG_Details";
import Admin_AG_History from "../Admin/AdminSystem/Admin_AG_History";
import Admin_US_Details from "../Admin/AdminSystem/Admin_US_Details";
import Admin_US_History from "../Admin/AdminSystem/Admin_US_History";
import Register_Ag from "../Components/Register/Register_Ag";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/register/ag-register",
                element: <Register_Ag></Register_Ag>
            },
            {
                path: "/dash",
                element: <PrivateRoute><Dash></Dash></PrivateRoute>
            },

            //User 
            {
                path: "/profile",
                element: <PrivateRoute><AllProfile></AllProfile></PrivateRoute>
            },
            {
                path: "/sendmoney",
                element: <PrivateRoute><UserSend></UserSend></PrivateRoute>
            },
            {
                path: "/cashout",
                element: <PrivateRoute><UserCash></UserCash></PrivateRoute>
            },
            {
                path: "/cashin",
                element: <PrivateRoute><UserCashIn></UserCashIn></PrivateRoute>
            },
            {
                path: "/userhistory",
                element: <PrivateRoute><UserTransection></UserTransection></PrivateRoute>
            },

            //Admin
            {
                path: "/alluser",
                element: <PrivateRoute><AdminAllUser></AdminAllUser></PrivateRoute>
            },
            {
                path: "/system",
                element: <PrivateRoute><AdminSystem></AdminSystem></PrivateRoute>
            },
            {
                path: "/system/Ag-Details/:phone",
                element: <PrivateRoute><Admin_AG_Details></Admin_AG_Details></PrivateRoute>
            },
            {
                path: "/system/Ag-History/:phone",
                element: <PrivateRoute><Admin_AG_History></Admin_AG_History></PrivateRoute>
            },
            {
                path: "/system/US-Details/:phone",
                element: <PrivateRoute><Admin_US_Details></Admin_US_Details></PrivateRoute>
            },
            {
                path: "/system/US-History/:phone",
                element: <PrivateRoute><Admin_US_History></Admin_US_History></PrivateRoute>
            },
            //Agent 
            {
                path: "/AG-transaction",
                element: <PrivateRoute><AgentTransection></AgentTransection></PrivateRoute>
            },
            {
                path: "/AG-history",
                element: <PrivateRoute><AgnetHistry></AgnetHistry></PrivateRoute>
            },
        ]
    },
]);

export default router;