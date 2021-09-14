import styled from "styled-components";

const ColumnBox = styled.div`
display: flex;
flex-flow: column wrap;
border: 1px solid black;
cursor: pointer;
`;

function Thumbnail({ game, setGameSelection }) {

    const handleClick = () => {
        console.log("Game selection called for",game.id);
        setGameSelection(game.id)
    }

    return (
        <ColumnBox onClick={handleClick}>
            <p>{game.title}</p>
        </ColumnBox>
    )
}

export default Thumbnail;