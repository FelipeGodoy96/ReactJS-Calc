import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 20px;
    border: solid 2px transparent;
    background-color: rgb(100, 100, 100);
    color: white;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    border: solid 2px black;
    flex: 1;
    margin: 2px;
    border-radius: 10px;


    &:hover {
        opacity: 0.8;
        border: solid 2px white;
    }
`