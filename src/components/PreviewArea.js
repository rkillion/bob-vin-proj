import InformationWindow from "./InformationWindow";
import styled from "styled-components";

const RowBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    border: 1px solid black;
`;

function PreviewArea({ selectedGame }) {
    console.log("Selected Game is: ", selectedGame);

    return (
        <RowBox>
            {selectedGame? <iframe width={320*2.75} height={(320*2.75)*.5625} src={`https://www.youtube.com/embed/${selectedGame.preview_href}`}>
            video isn't supportes
            </iframe> : "loading..."}
            
            <InformationWindow 
                selectedGame={selectedGame}
            />
        </RowBox>
    )
}

export default PreviewArea;