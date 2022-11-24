import { createBrowserRouter } from "react-router-dom";
import ForgetPass from "../components/Authentication/ForgetPass";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
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
                path: '/blogs',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])