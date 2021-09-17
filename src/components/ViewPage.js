import PreviewArea from "./PreviewArea";
import SearchArea from "./SearchArea";
import ThumbnailArea from "./ThumbnailArea";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { API } from "../api";

const Page = styled.div`
    display: flex;
    flex-flow: column wrap;
    
    height: 100vh;
    color: #fff;
`;

function ViewPage() {
    const [games,setGames] = useState([])
    const [gameSelection,setGameSelection] = useState(1);

    useEffect(()=>{
        fetchGames();
    },[])

    function fetchGames(id="") {
        let address = id ? `${API}/games/${id}` : `${API}/games`;
        fetch(address).then(r=>r.json()).then(data=>{
            setGames(data);
            setGameSelection(data[0].id);
        });
    }

    console.log(games);
    return (
        <Page>
            <SearchArea />
            <PreviewArea 
                selectedGame={games ? games.find(e=> e.id === gameSelection) : {}}
            />
            <ThumbnailArea 
                games={games}
                setGameSelection={setGameSelection}
            />
        </Page>
    )
}

export default ViewPage;