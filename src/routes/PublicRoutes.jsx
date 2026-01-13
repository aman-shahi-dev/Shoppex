
import { Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout.jsx";

import Home from '../pages/public/Home.jsx'
import ProductDetails from '../components/Product/ProductDetails.jsx'
import Products from '../pages/public/Products.jsx'
import Cart from '../pages/public/Cart.jsx'

import SignIn from '../pages/public/auth/SignIn.jsx'
import SignUp from '../pages/public/auth/SignUp.jsx'
import OurStory from "../pages/public/OurStory.jsx";
import ContactUs from "../pages/public/ContactUs.jsx";

function PublicRoutes() {
  return (
    <>
        <Route element={ <PublicLayout/> }>
            <Route path="/" element={ <Home/> } />
            <Route path="/products" element={ <Products/> } />
            <Route path="/product/:id" element={ <ProductDetails/> } />
            <Route path="/cart" element={ <Cart/> } />
            <Route path="/ourstory" element={ <OurStory/> } />
            <Route path="/contact" element={ <ContactUs/> } />

            <Route path="/signin" element={ <SignIn/> } />
            <Route path="/signup" element={ <SignUp/> } />
        </Route>
    </>
  )
}

export default PublicRoutes;