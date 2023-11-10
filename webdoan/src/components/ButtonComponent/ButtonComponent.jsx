import { Button } from 'antd';
import React from 'react';

const ButtonComponent = ({ size, styleButton, styleTextButton, textButton, ...rest }) => {
    return (
        <Button
            size={size}
            style={{ background: backgroundColorButton, border: !bordered && 'none' }}
        >
            <span style={{ color: colorButton }}>{textButton}</span>
        </Button>
    );
}

export default ButtonComponent;