import { useEffect, useState } from "react";
import styled from "styled-components";

const FormBox = styled.form`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    padding: 5px;
    border: 1px solid black;
`;

const FormSection = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: stretch;
    align-content: stretch;
    padding: 5px;
    border: 1px solid black;
`;

const FormRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    border: 1px solid black;
`;

const SelectorInput = styled.select`

`;

const TextInput = styled.input`
    type: text;
`;

function SubmitForm({ developers }) {
    const [formData,setFormData] = useState({
        developer: "",
        developer_github: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        //add the developer to the list in state
        //add the game to the list in state
        console.log("Select value is: ",e.target.selectedDeveloper.value)
        console.log(formData)
    }

    const handleFormChange = e => {
        let field;
        switch (e.target.name) {
            case "newDeveloper" :
                field = "developer";
                break;
            case "selectedDeveloper" :
                field = "developer";
                break;
            case "newDeveloperGithub" :
                field = "developer_github";
                break;
            default:
                field = undefined;
        }
        let newData = JSON.parse(JSON.stringify(formData));
        newData[field] = e.target.value
        setFormData(newData);
    }

    return (
        <FormBox onSubmit={handleSubmit}>
            <FormSection>
                <h2>Developer Info</h2>
                <FormRow>
                    <p>Select a Developer: </p>
                    <SelectorInput
                        name="selectedDeveloper"
                        value={formData.developer}
                        onChange={handleFormChange}
                    >
                        <option>{""}</option>
                        {developers[0] ? developers.map(developer=><option key={developer.id}>{developer.name}</option>) : ""}
                    </SelectorInput>
                </FormRow>
                OR
                <FormRow>
                    <p>New Developer: </p>
                    <TextInput 
                        name="newDeveloper"
                        value={formData.developer}
                        onChange={handleFormChange}
                    />
                    <TextInput 
                        name="newDeveloperGithub"
                        value={formData.developer_github}
                        onChange={handleFormChange}
                    />
                </FormRow>
            </FormSection>
            <button type="submit">Submit</button>
        </FormBox>
    )
}

export default SubmitForm;