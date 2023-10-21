import MainLayout from "../MainLayout/MainLayout";
import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Lognin from "../Pages/Login/Lognin";
import Register from "../Pages/Register/Register";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import AddProducts from "../Pages/BrandProducts/AddProducts";
import ProductsDetails from "../Pages/BrandProducts/ProductsDetails";
import MyCart from "../Pages/MyCart/MyCart";
import UpdateProducts from "../Pages/BrandProducts/UpdateProducts";
import PrivateRoute from "./PrivateRoute";
import ErrorRoute from "./ErrorRoute";
const BrandShopRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorRoute></ErrorRoute>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/carBrands.json')
            },
            {
                path: '/brandproducts/:brand',
                element: <BrandProducts></BrandProducts>,
                loader: ({params}) => fetch(`http://localhost:5500/${params.brand}`)
            },
            {
                path: '/productsdetails/:brand/:id',
                element: <PrivateRoute><ProductsDetails></ProductsDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5500/${params.brand}/${params.id}`)
            },
            {
                path: '/addproducts',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path: '/updateproducts/:brand/:id',
                element: <UpdateProducts></UpdateProducts>,
                loader: ({params}) => fetch(`http://localhost:5500/${params.brand}/${params.id}`)
            },
            {
                path: '/mycart',
                element: <MyCart></MyCart>,
                loader: () => fetch('http://localhost:5500/cart')
            },
            {
                path: '/login',
                element: <Lognin></Lognin>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default BrandShopRouter;