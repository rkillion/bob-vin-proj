import styled from "styled-components";

const Page = styled.div`
display: flex;
flex-flow: column wrap;
border: 1px solid black;
`;

function SearchArea() {
    return (
        <Page>
            This is the SearchArea.
        </Page>
    )
}

export default SearchArea;