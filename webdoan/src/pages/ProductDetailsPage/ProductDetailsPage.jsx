import { Col, Row, Image } from 'antd';
import React from 'react';
import imageProduct from '../../assets/images/anh_home.jpg'
import ProductDetailsComponent from '../ProductDetailsComponent/ProductDetailsComponent';
const ProductDetailsPage = () => {
    return (
        <div style={{ padding: '0 120px', background: '#efefef' }}>
            <h5>Trang chủ</h5>
                <ProductDetailsComponent />
        </div>

    );
}

export default ProductDetailsPage;