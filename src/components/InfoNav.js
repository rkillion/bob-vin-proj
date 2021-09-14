import styled from "styled-components";

const RowBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    border: 1px solid black;
`;

function InfoNav() {
    return (
        <RowBox>
            This is the InfoNav.
        </RowBox>
    )
}

export default InfoNav;