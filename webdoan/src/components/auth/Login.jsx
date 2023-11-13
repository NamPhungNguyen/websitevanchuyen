import React, { useEffect, useState } from 'react';
import './login.scss';
import { IoIosArrowBack } from 'react-icons/io';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsername } from '../../redux/slides/authActions';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [roleId, setRoleId] = useState(0); // Khởi tạo roleId là 1
    const navigate = useNavigate(); // Sử dụng useNavigate để thực hiện chuyển hướng
    const dispatch = useDispatch();

    const loginApi = (email, password) => {
        return axios.post("https://localhost:7156/api/Login", { email, password });
    }

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Email/Password là bắt buộc");
            return;
        }
    
        try {
            const res = await loginApi(email, password);
    
            if (res.data && res.data.username) {
                const { token, username } = res.data;
    
                // Lưu username và token vào localStorage
                localStorage.setItem('token', token);
                localStorage.setItem('username', username);
    
                // Cập nhật state username bằng Redux
                dispatch(setUsername(username));
    
                // Điều hướng dựa trên roleId
                if (res.data.roleId === 1) {
                    navigate('/admin');
                } else if (res.data.roleId === 4) {
                    navigate('/');
                } else if (res.data.roleId === 3) {
                    navigate('/');
                } else {
                    // Xử lý trường hợp khác
                }
    
                toast.success("Đăng nhập thành công");
            } else {
                if (res && res.status === 200) {
                    toast.error("Tài khoản hoặc mật khẩu không chính xác")
                }
            }
        } catch (error) {
            console.error("Đăng nhập thất bại: ", error);
        }
    };

    return (
        <>
            <div className='login-container col-4'>
                <div className='title-login'>Đăng nhập</div>
                <div className='txtE_U'>Email hoặc Username</div>
                <input className='input' type='text' placeholder='Email hoặc Username...' value={email} onChange={(event) => setEmail(event.target.value)} />
                <div className='input-2'>
                    <input className='input'
                        type={isShowPassword === true ? 'text' : 'password'}
                        placeholder='Password...'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <div className='eye-container' onClick={() => setIsShowPassword(!isShowPassword)} >
                        {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                </div>
                <a href='#' className='forgot-password'>Quên mật khẩu?</a>
                <button id='btn-login'
                    className={email && password ? "active" : ""}
                    disabled={email && password ? false : true}
                    onClick={handleLogin}
                >Đăng nhập</button>
                <div className='back'>
                    <IoIosArrowBack className="icon-back" /> <a className='btn-back' href='/'>Quay lại</a>
                </div>
                <div className='question-signup'>
                    <p>Bạn chưa có tài khoản?<a href='/register' className='link-signup'> Đăng ký ngay</a> </p>
                </div>
            </div>
        </>
    )
};

export default Login;