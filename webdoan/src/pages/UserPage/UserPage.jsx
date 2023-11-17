import React from "react"
import { Link } from 'react-router-dom';
import { HiSearch } from 'react-icons/hi';
import { BsPinMapFill } from 'react-icons/bs';
import { BsBoxSeamFill } from 'react-icons/bs'
import { FaTruck } from 'react-icons/fa'
import { AiOutlineFieldTime } from 'react-icons/ai'
import Footer from "../Footer/Footer";
import './userpage.scss'
import CardComponent from "../../components/CardComponent/CardComponent";
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { WrapperProducts } from "../../MenuNavbar/style";
import * as ProductService from '../../services/ProductService'
import { useQuery } from 'react-query'
import HeaderUser from "../../pages/UserPage/HeaderUser"
const Home = () => {

    const fetchProductAll = async () => {
        const res = await ProductService.getAllProduct()
        console.log('res', res)
        return res
    }
    const { isLoading, data: products } = useQuery(['products'], fetchProductAll, { retry: 3, retryDelay: 1000 })
    console.log('data', products)
    return (

        <React.Fragment>
            <div><HeaderUser/></div>
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

            <div className="body" style={{ width: '100%', backgroundColor: '#efefef' }}>
                <div id="container" style={{ height: '1000px', width: '1270px', margin: '0 auto' }}>
                    <WrapperProducts>
                        {products?.map((product) => {
                            return (
                                <CardComponent
                                    key={product.orderId}
                                    customerId={product.customerId}
                                    orderedDate={product.orderedDate}
                                    arrivedDate={product.arrivedDate}
                                />
                            );
                        })}

                    </WrapperProducts>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                        <ButtonComponent className="btn_AddView" textButton="Xem thêm" styleButton={{
                            border: '1px solid rgb(11, 116, 229)', color: 'rgb(11,116,229)',
                            width: '240px', height: '38px', borderRadius: '4px'
                        }}
                            styleTextButton={{ fontWeight: 500 }} />
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Home