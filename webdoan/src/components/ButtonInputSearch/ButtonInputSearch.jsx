
import React from 'react';
import InputComponent from '../InputComponent/InputComponent';
import { Button } from 'antd';
import {SearchOutlined} from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
    const {
        size, placeholder, textButton,
        bordered, backgroundColorInput = '#fff',
        backgroundColorButton = 'rgb(13, 92, 182)',
        colorButton = 'fff'
    } = props
    return (
        <div style={{display:'flex', }}>
            <InputComponent
                size={size}
                placeholder = {placeholder}
                bordered = {bordered}
                style = {{backgroundColor:backgroundColorInput}}
            />

            <ButtonComponent
                size={size}
                style={{background: backgroundColorButton, border:!bordered && 'none'}}
                icon={<SearchOutlined color={colorButton} style={{color: '#fff'}}/>}
                textButton={textButton}
            />
          
        </div>
    );
}

export default ButtonInputSearch;