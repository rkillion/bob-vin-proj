import styled from "styled-components";

const RowBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    border: 1px solid black;
    margin-bottom:5px;
    border-radius: 5px;
    background-color:#191919;
    width: 30%

`;

function InfoNav() {
    return (
        <RowBox>
            This is the InfoNav.
        </RowBox>
    )
}

export default InfoNav;