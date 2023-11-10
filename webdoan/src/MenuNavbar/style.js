import styled from "styled-components";
import ButtonComponent from "../components/ButtonComponent/ButtonComponent";

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: rbg(13, 92, 182);
        span {
            color:#fff;
        }
    }
`

export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top:20px;
    flex-wrap: wrap;
`