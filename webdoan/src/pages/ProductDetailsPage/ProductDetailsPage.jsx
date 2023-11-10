import { Col, Row, Image } from 'antd';
import React from 'react';
import imageProduct from '../../assets/images/anh_home.jpg'
const ProductDetailsPage = () => {
    return (
        <Row>
            <Col span={10}>
                <Image src={imageProduct} alt="image product" preview='false'/>
                
            </Col>
            <Col span={14}>col-12</Col>
        </Row>
    );
}

export default ProductDetailsPage;