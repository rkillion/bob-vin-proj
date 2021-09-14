import PreviewArea from "./PreviewArea";
import SearchArea from "./SearchArea";
import ThumbnailArea from "./ThumbnailArea";

function ViewPage() {
    return (
        <div>
            This is the ViewPage.
            <SearchArea />
            <PreviewArea />
            <ThumbnailArea />
        </div>
    )
}

export default ViewPage;