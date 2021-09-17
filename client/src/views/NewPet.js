import React, {useState} from "react";
import axios from "axios";
import {
    Link, useHistory
} from "react-router-dom";
import PetForm from '../components/PetForm';

const NewPet = () => {
    const [pet, setPet] = useState([]);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const createPet = (newPet) => {
        axios.post("http://localhost:8000/api/pet", newPet)
            .then(res => {
                setPet([...pet, res.data]);
                history.push("/");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }


    return (
        <>
            <h1>Pet Shelter</h1>
            <Link to="/">back to home</Link>
            <h3>Know a pet needing a home?</h3>
            <hr/>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <PetForm onSubmitProp={createPet} initialName="" initialType="" initialDescription="" initialSkill_1="" initialSkill_2="" initialSkill_3=""/>
        </>
    )
}
export default NewPet;