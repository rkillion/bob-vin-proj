import InformationWindow from "./InformationWindow";
import styled from "styled-components";

const RowBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    
    height: 50vh;
    
     
`;

const VidBox = styled.iframe`
    margin-top: 2vh;
    width: 60%;
    aspect-ratio: 16 / 9;
    border: 1px solid black;
    border-radius: 10px;
    
`;

function PreviewArea({ selectedGame }) {
    console.log("Selected Game is: ", selectedGame);

    return (
        <RowBox>
            
            {selectedGame? <VidBox src={`https://www.youtube.com/embed/${selectedGame.preview_href}`}>
            video isn't supportes
            </VidBox> : "loading..."}
            
             
            {/* {selectedGame? <iframe width={320*2.75} height={(320*2.75)*.5625} src={`https://www.youtube.com/embed/${selectedGame.preview_href}`}>
            video isn't supportes
            </iframe> : "loading..."} */}
            
            <InformationWindow 
                selectedGame={selectedGame}
            />
            
        </RowBox>
    )
}

export default PreviewArea;