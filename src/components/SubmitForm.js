import { useState } from "react";
import styled from "styled-components";
import GameFeatureInput from "./GameFeatureInput";

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

const FormSectionHeader = styled.h2`
    
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
`;

const TextAreaInput = styled.textarea`
    width: 70%;
    min-width: 200px;
    min-height: 100px;
`;

const CheckBox = styled.input`
`;

const InputLabel = styled.label`

`;

function SubmitForm({ developers }) {
    const [formData,setFormData] = useState({
        developer: {
            name: "",
            github_profile: ""
        },
        title: "",
        github_link: "",
        preview_href: "",
        description: "",
        language: "",
        ["has_comments?"]: false,
        file_size: 0,
        ["keyboard?"]: false,
        ["controller?"]: false,
        game_features: []
    });
    const [gameFeatureInputs,setGameFeatureInputs] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        //add the developer to the list in state
        //add the game to the list in state
        console.log(formData)
    }

    const handleFormChange = e => {
        let field;
        let subfield;
        let checkbox = false;
        switch (e.target.name) {
            case "newDeveloper" :
                field = "developer";
                subfield = "name";
                break;
            case "selectedDeveloper" :
                field = "developer";
                subfield = "name";
                break;
            case "newDeveloperGithub" :
                field = "developer";
                subfield = "github_profile";
                break;
            case "title" :
                field = "title";
                break;
            case "githubLink" :
                field = "github_link";
                break;
            case "previewHref" :
                field = "preview_href";
                break;
            case "language" :
                field = "language";
                break;
            case "description" :
                field = "description";
                break;
            case "hasComments?" :
                field = "has_comments?";
                checkbox = true;
                break;
            case "keyboard?" :
                field = "keyboard?";
                checkbox = true;
                break;
            case "controller?" :
                field = "controller?";
                checkbox = true;
                break;
            default:
                field = undefined;
        }
        let newData = JSON.parse(JSON.stringify(formData));
        if(subfield) {
            newData[field][subfield] = e.target.value;
        } else if (checkbox) {
            newData[field] = e.target.checked;
        } else {
            newData[field] = e.target.value
        }
        setFormData(newData);
    }

    function addFeature() {
        let newFeature = {
            compID: gameFeatureInputs.length+1,
            feature_explanation: "",
            feature: ""
        };
        setGameFeatureInputs([...gameFeatureInputs,newFeature]);
    }

    return (
        <FormBox onSubmit={handleSubmit}>
            <FormSection>
                <FormSectionHeader>Developer Info</FormSectionHeader>
                <FormRow>
                    <p>Select a Developer: </p>
                    <SelectorInput
                        name="selectedDeveloper"
                        value={formData.developer.name}
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
                        value={formData.developer.name}
                        onChange={handleFormChange}
                        placeholder="Name"
                    />
                    <TextInput 
                        name="newDeveloperGithub"
                        value={formData.developer.github_profile}
                        onChange={handleFormChange}
                        placeholder="Github Profile Link"
                    />
                </FormRow>
            </FormSection>
            <FormSection>
                <FormSectionHeader>Game Details</FormSectionHeader>
                <FormRow>
                    <TextInput 
                        name="title"
                        value={formData.title}
                        onChange={handleFormChange}
                        placeholder="Title"
                    />
                    <TextInput 
                        name="githubLink"
                        value={formData.github_link}
                        onChange={handleFormChange}
                        placeholder="Github Link"
                    />
                    <TextInput 
                        name="previewHref"
                        value={formData.preview_href}
                        onChange={handleFormChange}
                        placeholder="Youtube ID"
                    />
                    <TextInput 
                        name="language"
                        value={formData.language}
                        onChange={handleFormChange}
                        placeholder="Programming Language"
                    />
                </FormRow>
                <FormRow>
                    <TextAreaInput
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                        placeholder="Description"
                    />
                    <FormSection>
                        <FormRow>
                            <CheckBox 
                                type="checkbox"
                                name="hasComments?"
                                id="has-comments"
                                onChange={handleFormChange}
                                checked={formData["has_comments?"]}
                            />
                            <InputLabel htmlFor="has-comments">
                                In-code comments?
                            </InputLabel>
                        </FormRow>
                        <FormRow>
                            <CheckBox 
                                type="checkbox"
                                name="keyboard?"
                                id="keyboard"
                                onChange={handleFormChange}
                                checked={formData["keyboard?"]}
                            />
                            <InputLabel htmlFor="keyboard">
                                Keyboard controls?
                            </InputLabel>
                        </FormRow>
                        <FormRow>
                            <CheckBox 
                                type="checkbox"
                                name="controller?"
                                onChange={handleFormChange}
                                id="controller"
                                checked={formData["controller?"]}
                            />
                            <InputLabel htmlFor="controller">
                                Game controller?
                            </InputLabel>
                        </FormRow>
                    </FormSection>
                </FormRow>
            </FormSection>
            <FormSection>
                <FormSectionHeader>Features</FormSectionHeader>
                {gameFeatureInputs.map(feature=>{
                    return (<GameFeatureInput 
                        key={feature.compID}
                    />)
                })}
                <button
                    onClick={addFeature}
                >Add Feature</button>
            </FormSection>
            <button type="submit">Submit</button>
        </FormBox>
    )
}

export default SubmitForm;