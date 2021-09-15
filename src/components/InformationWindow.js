import InfoContent from "./InfoContent";
import InfoNav from "./InfoNav";
import styled from "styled-components";

const ColumnBox = styled.div`
    display: flex;
    flex-flow: column wrap;
    border: 1px solid black;
    width: 30%;
`;

function InformationWindow({ selectedGame }) {
    return (
        <ColumnBox>
            <h2>{selectedGame ? selectedGame.title : ""}</h2>
            <InfoNav />
            {selectedGame ? <InfoContent
                selectedGame={selectedGame}
            /> : "Loading Info..."}
        </ColumnBox>
    )
}

export default InformationWindow;