import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '../pages/Home';
import ProductPage from '../pages/Products';
import RootLayout from '../pages/RootLayout';

// Create router as JS object, this will latest which work React version > 6.4
const router = createBrowserRouter(
    [
      {path: '', element: <RootLayout/>, 
      children: [
        {path: '', element: <HomePage/>}, //define as jsx element or compnent name
        {path: '/product', Component: ProductPage},
      ]},
      
    ]
);

const CustomRouter = () => {
    return (<RouterProvider router={router}/>)
}

export default CustomRouter;