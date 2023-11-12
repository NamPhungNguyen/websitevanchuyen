import React, { useState } from 'react';
import { WrapperContentProfile, WrapperHeader, WrapperInput, WrapperLable } from './style';
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
const ProfilePage=() => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [avatar, setAvatar] = useState('')

    const handleOnChangeEmail = () => {

    }

    return (
        <div style={{width:'1270px', margin:'0 auto', height:'500px'}}>
            <WrapperHeader>Thông tin người dùng</WrapperHeader>
            <WrapperContentProfile>
                <WrapperInput>
                    <WrapperLable htmlFor='email'>Email</WrapperLable>
                    <InputForm style={{width:'300px'}} id="email" value={email} onChange={handleOnChangeEmail}/>
                    <ButtonComponent
                        size={40}
                        styleButton={{
                            height: '30px',
                            width: 'fit-content',
                            borderRadius: '4px',
                            padding: '4px 6px 6px'
                        }}
                        textButton={'Cập nhật'}
                        styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize:'15px', fontWeight:'700' }}
                    >
                    </ButtonComponent>
                </WrapperInput>

                <WrapperInput>
                    <WrapperLable htmlFor='email'>Email</WrapperLable>
                    <InputForm style={{width:'300px'}} id="email" value={email} onChange={handleOnChangeEmail}/>
                    <ButtonComponent
                        size={40}
                        styleButton={{
                            height: '30px',
                            width: 'fit-content',
                            borderRadius: '4px',
                            padding: '4px 6px 6px'
                        }}
                        textButton={'Cập nhật'}
                        styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize:'15px', fontWeight:'700' }}
                    >
                    </ButtonComponent>
                </WrapperInput>

                <WrapperInput>
                    <WrapperLable htmlFor='email'>Email</WrapperLable>
                    <InputForm style={{width:'300px'}} id="email" value={email} onChange={handleOnChangeEmail}/>
                    <ButtonComponent
                        size={40}
                        styleButton={{
                            height: '30px',
                            width: 'fit-content',
                            borderRadius: '4px',
                            padding: '4px 6px 6px'
                        }}
                        textButton={'Cập nhật'}
                        styleTextButton={{ color: 'rgb(26, 148, 255)', fontSize:'15px', fontWeight:'700' }}
                    >
                    </ButtonComponent>
                </WrapperInput>
            </WrapperContentProfile>
        </div>
    );
}

export default ProfilePage;