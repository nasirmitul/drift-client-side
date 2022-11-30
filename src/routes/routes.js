import { createBrowserRouter } from "react-router-dom";
import AllBuyers from "../components/Admin/AllBuyers";
import AllSellers from "../components/Admin/AllSellers";
import ForgetPass from "../components/Authentication/ForgetPass";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import Blog from "../components/Blog/Blog";
import MyOrders from "../components/Buyers/MyOrders";
import MyWishList from "../components/Buyers/MyWishList";
import Payment from "../components/Buyers/Payment";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import Profile from "../components/Profile/Profile";
import AddProduct from "../components/Sellers/AddProduct";
import MyProduct from "../components/Sellers/MyProduct";
import Admin from "../layouts/Admin";
import Main from "../layouts/Main";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";


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
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`https://drift-server.vercel.app/category/${params.id}`)
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
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/myOrders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/myWishlist',
                element: <BuyerRoute><MyWishList></MyWishList></BuyerRoute>
            },
            {
                path: '/dashboard/myOrders/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader: ({params})  => fetch(`https://drift-server.vercel.app/myOrder/${params.id}`)
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myProduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])