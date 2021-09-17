import styled from "styled-components";

const ColumnBox = styled.div`
    display: flex;
    flex-flow: column wrap;
    border: 1px solid black;
    height: 79%;
    border-radius: 5px;
    padding: 5px;
    background-color: #191919;
    
`;

function InfoContent({ selectedGame }) {
    return (
        <ColumnBox>
            <p>By: <a href={selectedGame.developer.github_profile}>{selectedGame.developer.name}</a><br></br> <br></br>
            Coded in {selectedGame.language}<br></br> <br></br>
            {selectedGame.has_comments ? "Code has comments" : "Code doesn't have comments"}<br></br> <br></br>
            What you need to play: <br></br>
            <ul>
            {selectedGame.controller? "" :<li>A controller</li>}
            {selectedGame.keyboard ? "":<li>A Keyboard</li>}
            </ul>
            {selectedGame.features}
            Features: {selectedGame.game_features.map(feature => feature.feature.title).join(", ")}<br></br><br></br>
            {selectedGame.description}
            </p>
        </ColumnBox>
    )
}

export default InfoContent;