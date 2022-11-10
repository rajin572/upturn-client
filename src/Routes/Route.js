import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddServices from "../Pages/AddServices/AddServices/AddServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Services from "../Pages/Services/Services/Services";
import SingleService from "../Pages/Services/SingleService/SingleService";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path:'/services/:id',
                element: <SingleService></SingleService>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/myreviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:'/addservices',
                element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    }
])



export default route