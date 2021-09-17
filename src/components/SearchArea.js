import styled from "styled-components";

const Page = styled.div`
display: flex;
flex-flow: column wrap;
border: 1px solid black;
height: 10vh;
background-color: #111111;
`;
const Creators = styled.div`
display: flex;
flex-flow: column wrap;
border: 1px solid black;
border-radius: 10px;
padding-left: 5px;
height: 7vh;
margin-top: 1.5vh;
width: 17vw;
background-color: #191919;
`;
const Button = styled.button`
    color: white;
    background-color: #444;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    aspect-ratio: 16/9;
    margin:auto;
    width: 4.5vw;
    align-self: center;
`;
function SearchArea() {
    return (
        <Page>
            <h1>Game Developer Hub</h1>
            <Creators>
            <h2>Creators: </h2><Button onClick={()=>{window.open("https://www.linkedin.com/in/robert-killion-51a45098/")}}>Bob</Button>
             <Button onClick={()=>{window.open("https://www.linkedin.com/in/vincent-orsini-73a14a218/")}}>Vincent</Button>
            </Creators>
        </Page>
    )
}

export default SearchArea;