import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReporText } from './style';
import { StarFilled } from '@ant-design/icons'
const CardComponent = (props) => {
    const {customerId, orderedDate,arrivedDate} = props
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{width:'200px', height:'200px'}}
            style={{
                width: 200,
            }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <StyleNameProduct>{customerId}</StyleNameProduct>
            <WrapperReporText>
                <span style={{marginRight:'4px'}}>
                    <span>4.96 </span> <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                </span>
                <span>| Đang chờ</span>
            </WrapperReporText>
            <WrapperPriceText>{orderedDate}
                <WrapperDiscountText>
                    {arrivedDate}
                </WrapperDiscountText>
            </WrapperPriceText>

        </WrapperCardStyle>
    )
}

export default CardComponent;