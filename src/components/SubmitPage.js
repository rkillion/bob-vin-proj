import styled from "styled-components";
import { useEffect, useState } from "react";
import { API } from "../api";
import SubmitForm from "./SubmitForm";

const Page = styled.div`
    display: flex;
    flex-flow: column wrap;
    border: 1px solid black;
`;

const RowBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid black;
`;

function SubmitPage() {
    const [developers,setDevelopers] = useState([]);
    const [features,setFeatures] = useState([]);

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
                <button>View Games</button>
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