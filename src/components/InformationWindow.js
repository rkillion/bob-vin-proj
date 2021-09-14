import InfoContent from "./InfoContent";
import InfoNav from "./InfoNav";
import styled from "styled-components";

const ColumnBox = styled.div`
    display: flex;
    flex-flow: column wrap;
    border: 1px solid black;
`;

function InformationWindow() {
    return (
        <ColumnBox>
            This is the InformationWindow.
            A header goes here.
            <InfoNav />
            <InfoContent />
        </ColumnBox>
    )
}

export default InformationWindow;