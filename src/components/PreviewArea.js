import InformationWindow from "./InformationWindow";
import styled from "styled-components";

const RowBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    border: 1px solid black;
`;

function PreviewArea() {
    return (
        <RowBox>
            This is the PreviewArea.
            A video would go here.
            <InformationWindow />
        </RowBox>
    )
}

export default PreviewArea;