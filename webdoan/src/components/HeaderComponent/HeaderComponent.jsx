import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './headerComponent.scss';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { FaShippingFast } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Popover } from 'antd';
import { WrapperContentPopup } from './style';
import {toast} from 'react-toastify';
import { logout } from '../../redux/slides/authActions';
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();

    const isOnAdminPage = location.pathname === '/admin';
    //Sử dụng state để kiểm soát hiển thị của Navbar
    const [showNavbar, setShowNavbar] = useState(true);

    const username = useSelector((state) => state.auth.username);
    const navigate = useNavigate();
    //hàm remove token
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/");
        toast.success("Đăng xuất thành công");
        //gọi login của redux để đăng xuất
        dispatch(logout());
    }

    const content = (
        <div>
            <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
            <WrapperContentPopup onClick={() => navigate('/profile-user')}>Thông tin người dùng</WrapperContentPopup>
        </div>
    );

    useEffect(() => {
        if (isOnAdminPage) {
            setShowNavbar(false); //Ẩn Navbar nếu là trang admin
        } else {
            setShowNavbar(true);
        }
    }, [isOnAdminPage]);

    const toggleMobileMenu = () => {
        setIsMobile(!isMobile);
    }

    return (
        showNavbar && (
            <nav className={`navbar ${isOnAdminPage ? 'admin-page' : ''}`}>
                <button className='mobile-menu-icon' onClick={toggleMobileMenu}>
                    {isMobile ? <ImCross /> : <FaBars />}
                </button>
                <FaShippingFast className="icon-shipping" />
                <h3 className='title'>Vận chuyển</h3>

                <div className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
                    <Link to='/'>
                        <li>Trang chủ</li>
                    </Link>
                    <Link to='/about'>
                        <li>Về chúng tôi</li>
                    </Link>
                    <div className="nav-dropdown">
                        <li className="dropdown">
                            Dịch vụ <BiChevronDown className="icon-down" />
                            <ul className="dropdown-content">
                                <Link to='/delivery-service'><li>Dịch vụ giao hàng</li></Link>
                                <Link to='/car-service'><li>Dịch vụ xe</li></Link>
                                <Link to='/business-service'><li>Dịch vụ doanh nghiệp</li></Link>
                            </ul>
                        </li>
                    </div>
                    <div className="nav-dropdown">
                        <li className="dropdown">
                            Tài xế <BiChevronDown className="icon-down" />
                            <ul className="dropdown-content">
                                <Link to='/driver-registration'><li>Đăng ký tài xế</li></Link>
                                <Link to='/driver-guide'><li>Cẩm nang tài xế</li></Link>
                            </ul>
                        </li>
                    </div>

                    <Link to='/contact'>
                        <li>Liên hệ</li>
                    </Link>

                    <div className='btn-login'>
                        {username ? (
                            <>
                                <Popover content={content} trigger="click">
                                    <p style={{cursor:'pointer'}}>Chào mừng, {username}!</p>

                                </Popover>
                            </>
                        ) : (
                            <Link to='/login'>
                                <button className="delivery-button">Đăng nhập</button>
                            </Link>
                        )}
                    </div>

                </div>
            </nav>
        )
    );
};

export default Navbar;
