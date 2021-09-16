import styled from "styled-components";
import Thumbnail from "./Thumbnail";

const RowBox = styled.div`
display: flex;
flex-flow: row wrap;
border: 1px solid black;
border-radius: 10px;
margin-top:19vh;
margin-left: .6vw;
padding:5px;
gap: 5px;
background-color:#111;
width:98vw;



`;

function ThumbnailArea({ games, setGameSelection }) {
    return (
        <RowBox>
            {games ? games.map(
                game => <Thumbnail 
                    key={game.id}
                    game={game}
                    setGameSelection={setGameSelection}
                    />
            ) : "Loading Games..."}
        </RowBox>
    )
}

export default ThumbnailArea;