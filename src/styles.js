import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Calc = styled.div`
    background-color: black;
    width: 350px;
    padding: 1.25rem;
    border-radius: 2rem;
    min-height: auto;
    display: flex;
    flex-direction: column;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`