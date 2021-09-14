import styled from "styled-components";

const RowBox = styled.div`
display: flex;
flex-flow: row wrap;
border: 1px solid black;
`;

function ThumbnailArea() {
    return (
        <RowBox>
            This is the ThumbnailArea.
        </RowBox>
    )
}

export default ThumbnailArea;