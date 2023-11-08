import React, { Component } from 'react';
import { Col, Row } from 'antd'

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>col-8</Col>
                    <Col span={12}>col-8</Col>
                    <Col span={6}>col-8</Col>
                </Row>
            </div>
        );
    }
}

export default HeaderComponent;