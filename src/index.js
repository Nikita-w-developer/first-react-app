import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Store from './pages/Store';
import ErrorPage from './pages/Error'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Favorite from './pages/Favorite';

const router = createBrowserRouter([
    
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {path: "/", element: <Store />},
            {path: "/favorites", element: <Favorite />}
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />

);

