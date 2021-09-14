import PreviewArea from "./PreviewArea";
import SearchArea from "./SearchArea";
import ThumbnailArea from "./ThumbnailArea";
import styled from "styled-components";

const Page = styled.div`
    display: flex;
    flex-flow: column wrap;
    border: 1px solid black;
`;

function ViewPage() {
    return (
        <Page>
            <SearchArea />
            <PreviewArea />
            <ThumbnailArea />
        </Page>
    )
}

export default ViewPage;