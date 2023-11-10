import React from "react"
import { Link } from 'react-router-dom';
import ListOrderCard from "../order_item/ListOrderCard";
import OrderCard from "../order_item/OrderCard";
import { HiSearch } from 'react-icons/hi';
import { BsPinMapFill } from 'react-icons/bs';
import { BsBoxSeamFill } from 'react-icons/bs'
import { FaTruck } from 'react-icons/fa'
import { AiOutlineFieldTime } from 'react-icons/ai'
import Footer from "../pages/Footer/Footer";
import './home.scss'
import CardComponent from "../components/CardComponent/CardComponent";
import ButtonComponent from '../components/ButtonComponent/ButtonComponent'
import { WrapperProducts } from "./style";


const Home = () => {
    return (
        <React.Fragment>
            <div className="home-header-banner">
                <div className="content-up">
                    <div className="title1">Giao hàng tận nhà-Có mặt tận nơi</div>
                    <div className="title2">Ứng dụng giao hàng chuyên nghiệp-tin cậy</div>
                    <div className="search">
                        <HiSearch className="icon-search-home" />
                        <input type="text" placeholder="Nhập đơn hàng để tra cứu..." />
                    </div>
                </div>
                <div className="content-down">
                    <div className="options">
                        <div className="option-child">
                            <div className="icon-child"><BsPinMapFill /></div>
                            <div className="text-child">Giao nhận tại nơi</div>
                        </div>

                        <div className="option-child">
                            <div className="icon-child"><BsBoxSeamFill /></div>
                            <div className="text-child">Chuyển giao hỏa tốc</div>
                        </div>

                        <div className="option-child">
                            <div className="icon-child"><FaTruck /></div>
                            <div className="text-child">Chuyển hàng giá trị cao</div>
                        </div>

                        <div className="option-child">
                            <div className="icon-child"><AiOutlineFieldTime /></div>
                            <div className="text-child">Chuyển phát tiết kiệm</div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="container" style={{ background: 'rgb(230 247 255)', padding: '0 120px', height: '1000px', width:'100%' }}>
                <WrapperProducts>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />

                </WrapperProducts>
                <div style={{width:'100%',  display:'flex', justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
                    <ButtonComponent className="btn_AddView" textButton="Xem thêm" styleButton={{
                        border: '1px solid rgb(11, 116, 229)', color: 'rgb(11,116,229)',
                        width: '240px', height: '38px', borderRadius: '4px'
                    }}
                        styleTextButton={{ fontWeight: 500 }} />
                </div>

            </div>

            <div>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Home