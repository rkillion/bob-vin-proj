import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import GameFeatureInput from "./GameFeatureInput";
import { FormButton } from "./SubmitPage";

const FormBox = styled.form`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    padding: 5px;
    border: 1px solid black;
    background-color: #222;
`;

const FormSection = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: stretch;
    align-content: stretch;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    background-color: #111;
    border-radius: 10px;
`;

const FormSectionHeader = styled.h2`
    
`;

const FormRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
`;

const FormColumn = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: stretch;
    padding: 5px;
`;

const SelectorInput = styled.select`
    border-radius: 5px;
`;

const TextInput = styled.input`
    border-radius: 5px;
`;

const TextAreaInput = styled.textarea`
    width: 65%;
    min-width: 200px;
    min-height: 100px;
    border-radius: 10px;
`;

const CheckBox = styled.input`
`;

const InputLabel = styled.label`

`;

let nextGameFeatureId = 1;

function SubmitForm({ developers, features, fetchAddress }) {
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
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        //add the developer to the list in state
        //add the game to the list in state
        let finalData = JSON.parse(JSON.stringify(formData));
        finalData.game_features = JSON.parse(JSON.stringify(gameFeatureInputs));
        fetch(fetchAddress("games"),{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(finalData)
        }).then(r=>r.json()).then(console.log);
        history.push("/");
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

    function addFeature(e) {
        e.stopPropagation();
        let newFeature = {
            compID: nextGameFeatureId,
            feature_explanation: "",
            feature: ""
        };
        nextGameFeatureId++;
        setGameFeatureInputs([...gameFeatureInputs,newFeature]);
    }

    function handleGameFeatureChange(e,gameFeatureID) {
        let newGameFeatureInputs = JSON.parse(JSON.stringify(gameFeatureInputs));
        if (e.target.name==="feature"||e.target.name==="newFeature") {
            newGameFeatureInputs.find(f=>f.compID===gameFeatureID).feature = e.target.value;
        }
        if (e.target.name==="featureExplanation") {
            newGameFeatureInputs.find(f=>f.compID===gameFeatureID).feature_explanation = e.target.value;
        }
        setGameFeatureInputs(newGameFeatureInputs)
    }

    function deleteGameFeatureField(gameFeatureID) {
        let filteredInputs = gameFeatureInputs.filter(feature=>feature.compID!==gameFeatureID);
        setGameFeatureInputs(filteredInputs);
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
                    <FormColumn>
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
                    </FormColumn>
                </FormRow>
            </FormSection>
            <FormSection>
                <FormSectionHeader>Features</FormSectionHeader>
                {gameFeatureInputs.map(feature=>{
                    return (<GameFeatureInput 
                        key={feature.compID}
                        gameFeatureInput={feature}
                        handleGameFeatureChange={handleGameFeatureChange}
                        features={features}
                        deleteGameFeatureField={deleteGameFeatureField}
                    />)
                })}
                <FormButton
                    onClick={addFeature}
                    type="button"
                >Add Feature</FormButton>
            </FormSection>
            <FormButton type="submit">Submit</FormButton>
        </FormBox>
    )
}

export default SubmitForm;
export { FormRow, SelectorInput, TextAreaInput, InputLabel, TextInput, FormColumn };