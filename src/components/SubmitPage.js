import styled from "styled-components";
import { useEffect, useState } from "react";
import { API } from "../api";
import SubmitForm from "./SubmitForm";
import { useHistory } from "react-router";

const Page = styled.div`
    display: flex;
    color: white;
    flex-flow: column wrap;
    border: 1px solid black;
`;

const RowBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid black;
    background-color: #111;
    padding: 5px;
`;

const FormButton = styled.button`
    color: white;
    background-color: #444;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    max-width: 200px;
    align-self: center;
`;

function SubmitPage() {
    const [developers,setDevelopers] = useState([]);
    const [features,setFeatures] = useState([]);
    const history = useHistory();

    useEffect(()=> {
        fetch(fetchAddress("developers")).then(r=>r.json().then(data=>{setDevelopers(data)}));
        fetch(fetchAddress("features")).then(r=>r.json().then(data=>{setFeatures(data)}));
    },[])

    function fetchAddress(dataTable,id="") {
        return id ? `${API}/${dataTable}/${id}` : `${API}/${dataTable}`;
    }

    return (
        <Page>
            <RowBox>
                <h1>Share your work with other developers!</h1>
                <FormButton
                    type="button"
                    onClick={()=>history.push("/")}
                >View Games</FormButton>
            </RowBox>
            <SubmitForm 
                developers={developers}
                features={features}
                fetchAddress={fetchAddress}
            />
        </Page>
    )
}

export default SubmitPage;
export { FormButton };