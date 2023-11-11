import About from "../MenuNavbar/About";
import Contact from "../MenuNavbar/Contact";
import Driver from "../MenuNavbar/Driver";
import Home from "../MenuNavbar/Home";
import RegisterDriver from "../MenuNavbar/RegisterDriver";
import Services from "../MenuNavbar/Services";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AdminLayout from '../components/auth_admin/AdminLayout'
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductDetailsComponent from "../pages/ProductDetailsComponent/ProductDetailsComponent";

 export const routes = [
    {
        path: '/',
        page: Home,
        isShowHeader: true
    },

    {
        path: '/about',
        page: About,
        isShowHeader: true
    },

    {
        path: '/services',
        page: Services,
        isShowHeader: true
    },

    {
        path: '/driver',
        page: Driver,
        isShowHeader: true
    },

    {
        path: '/contact',
        page: Contact,
        isShowHeader: true
    },

    {
        path: '/login',
        page: Login,
        isShowHeader: false
    },

    {
        path: '/register',
        page: Register,
        isShowHeader: true
    },

    {
        path: '/driver-registration',
        page: RegisterDriver,
        isShowHeader: true
    },

    {
        path: '/admin',
        page: AdminLayout,
        isShowHeader: false
    },

    
    {
        path: '/product-details',
        page: ProductDetailsPage,
        isShowHeader: true
    },
    

    {
        path: '*',
        page: NotFoundPage
    }
    
    
]