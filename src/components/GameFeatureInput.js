// import styled from "styled-components";
import { useState } from "react";
import { FormRow, SelectorInput, TextAreaInput, TextInput } from "./SubmitForm";

function GameFeatureInput({ gameFeatureInput, handleGameFeatureChange, features, deleteGameFeatureField}) {
    const [selectFeature,setSelectFeature] = useState(true);

    return (
        <FormRow>
            <button
                type="button"
                onClick={()=>setSelectFeature(!selectFeature)}
            >{selectFeature ? "Click to add new" : "Click to select existing"}</button>
            {selectFeature ? <SelectorInput
                name="feature"
                value={gameFeatureInput.feature}
                onChange={e=>{handleGameFeatureChange(e,gameFeatureInput.compID)}}
            >
                <option>{""}</option>
                {features.length>0 ? features.map(feature=><option key={feature.id}>{feature.title}</option>) : ""}
            </SelectorInput> :
            <TextInput
                name="newFeature"
                value={gameFeatureInput.feature}
                onChange={e=>{handleGameFeatureChange(e,gameFeatureInput.compID)}}
            ></TextInput>
            }
            <TextAreaInput
                name="featureExplanation"
                value={gameFeatureInput.feature_explanation}
                onChange= {e=>{handleGameFeatureChange(e,gameFeatureInput.compID)}}
                placeholder="Describe how you used this feature."
            />
            <button
                type="button"
                onClick={()=>deleteGameFeatureField(gameFeatureInput.compID)}
            >❌</button>
        </FormRow>
    )
}

export default GameFeatureInput;