import styled from "styled-components";

const FormRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    border: 1px solid black;
`;

function GameFeatureInput() {
    return (
        <FormRow>
            Game feature input area.
        </FormRow>
    )
}

export default GameFeatureInput;