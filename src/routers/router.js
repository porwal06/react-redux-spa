import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '../pages/Home';
import ProductPage from '../pages/Products';
import RootLayout from '../pages/RootLayout';
import ErrorPage from '../pages/Error';
import ProductDetailPage from '../pages/ProductDetail';

// Create router as JS object, this will latest which work React version > 6.4
const router = createBrowserRouter(
    [
      {path: '', element: <RootLayout/>,  errorElement: <ErrorPage/>,
      children: [
        {path: '', element: <HomePage/>}, //define as jsx element or compnent name
        {path: '/product', Component: ProductPage},
        {path: '/product/:productId', element: <ProductDetailPage />}
      ]},
      
    ]
);

const CustomRouter = () => {
    return (<RouterProvider router={router}/>)
}

export default CustomRouter;