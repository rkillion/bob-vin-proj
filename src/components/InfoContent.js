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
            <p>By: <a href={selectedGame.developer.github_profile}>{selectedGame.developer.name}</a><br></br>
            Coded in {selectedGame.language}<br></br>
            Features: {selectedGame.game_features.map(feature => feature.feature.title).join(", ")}<br></br>
            {selectedGame.description}
            </p>
        </ColumnBox>
    )
}

export default InfoContent;