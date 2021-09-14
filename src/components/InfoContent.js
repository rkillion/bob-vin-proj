import styled from "styled-components";

const ColumnBox = styled.div`
    display: flex;
    flex-flow: column wrap;
    border: 1px solid black;
`;

function InfoContent({ selectedGame }) {
    return (
        <ColumnBox>
            <li>{selectedGame.developer.name}</li>
            <li>Features: {selectedGame.game_features.map(feature => feature.feature.title).join(", ")}</li>
            <li>{selectedGame.description}</li>
        </ColumnBox>
    )
}

export default InfoContent;