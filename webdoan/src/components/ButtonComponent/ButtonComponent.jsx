import { Button } from 'antd';
import React from 'react';

const ButtonComponent = ({ size, backgroundColorButton, styleButton, styleTextButton, textButton, ...rests }) => {
    return (
        <Button
            size={size}
            style={{ background: backgroundColorButton, border: styleButton && styleButton.border ? styleButton.border : 'none' }}

            {...rests}
        >
            <span style={styleTextButton}>{textButton}</span>
        </Button>
    );
}

export default ButtonComponent;
