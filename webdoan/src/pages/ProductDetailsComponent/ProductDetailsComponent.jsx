import { Col, Row, Image } from 'antd';
import React from 'react';
import imageProduct from '../../assets/images/anh_home.jpg'
import imageContainer from '../../assets/images/anhcontainer.jpg'
import { WrapperPriceAddressProduct, WrapperPriceProduct, WrapperPriceTextProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct } from './style';
import { StarFilled } from '@ant-design/icons'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
const ProductDetailsComponent = () => {
    return (
        <Row style={{ padding: '16px', background: '#fff' }}>
            <Col span={10}>
                <Image src={imageProduct} alt="image product" preview='false' />
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleColImage span={4} >
                        <WrapperStyleImageSmall src={imageContainer} alt='image small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageContainer} alt='image small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageContainer} alt='image small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageContainer} alt='image small' preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14}>
                <WrapperStyleNameProduct>Hàng đông lạnh - Hoa quả Cao Bằng</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                    <span> | Dang cho</span>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>3.000.000</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperPriceAddressProduct>
                    <span>Giao đến</span>
                    <span className='address'>Q.1, Thành phố Hồ Chí Minh</span>
                    <span className='change-address'>Đổi địa chỉ</span>
                </WrapperPriceAddressProduct>
                <div style={{ alignItems:'center'}}>
                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: 'rgb(255, 57, 69)',
                            height: '48px',
                            width: '220px',
                            border: 'none',
                            borderRadius: '4px'
                        }}
                        textButton={'Nhận hàng'}
                        styleTextButton={{ color: '#fff' }}
                    >
                    </ButtonComponent>
                </div>
            </Col>
        </Row>
    );
}

export default ProductDetailsComponent;