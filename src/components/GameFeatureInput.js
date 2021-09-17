// import styled from "styled-components";
import { useState } from "react";
import { FormColumn, FormRow, SelectorInput, TextAreaInput, TextInput } from "./SubmitForm";
import { FormButton } from "./SubmitPage";

function GameFeatureInput({ gameFeatureInput, handleGameFeatureChange, features, deleteGameFeatureField}) {
    const [selectFeature,setSelectFeature] = useState(true);

    return (
        <FormRow>
            <FormColumn
            >
                <FormButton
                    type="button"
                    onClick={()=>setSelectFeature(!selectFeature)}
                >{selectFeature ? "Click to add new" : "Click to select existing"}</FormButton>
                {selectFeature ? <SelectorInput
                    name="feature"
                    value={gameFeatureInput.feature}
                    onChange={e=>{handleGameFeatureChange(e,gameFeatureInput.compID)}}
                    style={{minHeight: '30px'}}
                >
                    <option>{""}</option>
                    {features.length>0 ? features.map(feature=><option key={feature.id}>{feature.title}</option>) : ""}
                </SelectorInput> :
                <TextInput
                    name="newFeature"
                    value={gameFeatureInput.feature}
                    onChange={e=>{handleGameFeatureChange(e,gameFeatureInput.compID)}}
                    style={{minHeight: '30px'}}
                ></TextInput>
                }
                <FormButton
                type="button"
                onClick={()=>deleteGameFeatureField(gameFeatureInput.compID)}
                style={{padding: `0px`, alignSelf: 'stretch'}}
                >❌</FormButton>
            </FormColumn>
            <TextAreaInput
                name="featureExplanation"
                value={gameFeatureInput.feature_explanation}
                onChange= {e=>{handleGameFeatureChange(e,gameFeatureInput.compID)}}
                placeholder="Describe how you used this feature."
            />
        </FormRow>
    )
}

export default GameFeatureInput;