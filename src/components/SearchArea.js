import styled from "styled-components";

const Page = styled.div`
display: flex;
flex-flow: column wrap;
border: 1px solid black;
height: 10vh;
background-color: #111111;
`;

function SearchArea() {
    return (
        <Page>
            This is the SearchArea.
        </Page>
    )
}

export default SearchArea;