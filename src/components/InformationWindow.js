import InfoContent from "./InfoContent";
import InfoNav from "./InfoNav";

function InformationWindow() {
    return (
        <div>
            This is the InformationWindow.
            A header goes here.
            <InfoNav />
            <InfoContent />
        </div>
    )
}

export default InformationWindow;