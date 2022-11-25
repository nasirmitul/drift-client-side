import { createBrowserRouter } from "react-router-dom";
import AllBuyers from "../components/Admin/AllBuyers";
import AllSellers from "../components/Admin/AllSellers";
import ForgetPass from "../components/Authentication/ForgetPass";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import Blog from "../components/Blog/Blog";
import MyOrders from "../components/Buyers/MyOrders";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import Profile from "../components/Profile/Profile";
import Admin from "../layouts/Admin";
import Main from "../layouts/Main";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/registration',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/forget',
                element: <ForgetPass></ForgetPass>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/category/:id',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Admin></Admin>,
        children: [
            {
                path: '/dashboard',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])