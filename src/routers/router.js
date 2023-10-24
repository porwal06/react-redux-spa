import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '../components/Home';
import ProductPage from '../components/Products';

// Create router as JS object, this will latest which work React version > 6.4
const router = createBrowserRouter(
    [
      {path: '', element: <HomePage/>}, //define as jsx element or compnent name
      {path: '/product', Component: ProductPage},
    ]
);

const CustomRouter = () => {
    return (<RouterProvider router={router}/>)
}

export default CustomRouter;