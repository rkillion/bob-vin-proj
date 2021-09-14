import styled from "styled-components";

const ColumnBox = styled.div`
    display: flex;
    flex-flow: column wrap;
    border: 1px solid black;
`;

function InfoContent() {
    return (
        <ColumnBox>
            This is the InfoContent.
        </ColumnBox>
    )
}

export default InfoContent;