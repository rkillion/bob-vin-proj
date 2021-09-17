import styled from "styled-components";

const RowBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    border: 1px solid black;
    margin-bottom:5px;
    border-radius: 5px;
    background-color:#191919;
    width: 30%

`;

function InfoNav({ selectedGame }) {
    return (
        <RowBox>
           {selectedGame ? 
           selectedGame.github_link? <a href={selectedGame.github_link }>GitHub Repository</a> : `No repository found :(`
           :''}
        </RowBox>
    )
}

export default InfoNav;