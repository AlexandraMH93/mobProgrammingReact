import { createBrowserRouter, redirect } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Landing from '../pages/Landing'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Home from '../pages/Home'
import All from '../pages/All'
import One from '../pages/One'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Landing />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'home',
                element: <Home />,
                loader: () => {
                    if(localStorage.getItem('token')) {
                        return null 
                    } else {
                        return redirect('/') //si tienes token te lleva al home
                    }
                }
            },
            {
                path: 'all',
                element: <All />
            },
            {
                path: 'one',
                element: <One />
            }
        ]
    }
])