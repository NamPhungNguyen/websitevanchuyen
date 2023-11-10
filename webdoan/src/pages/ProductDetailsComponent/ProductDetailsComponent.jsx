import { Col, Row, Image } from 'antd';
import React from 'react';
import imageProduct from '../../assets/images/anh_home.jpg'
import imageContainer from '../../assets/images/anhcontainer.jpg'
import { WrapperStyleColImage, WrapperStyleImageSmall } from './style';
const ProductDetailsComponent = () => {
    return (
        <Row style={{padding:'16px'}}> 
            <Col span={10}>
                <Image src={imageProduct} alt="image product" preview='false'/>
                <Row style={{paddingTop:'10px', justifyContent:'space-between'}}>
                    <WrapperStyleColImage span={4} >
                        <WrapperStyleImageSmall src={imageContainer} alt='image small' preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageContainer} alt='image small' preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageContainer} alt='image small' preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageContainer} alt='image small' preview={false}/>
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14}>col-12</Col>
        </Row>
    );
}

export default ProductDetailsComponent;