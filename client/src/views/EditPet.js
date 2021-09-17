import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";
import PetForm from '../components/PetForm';

const EditPet = (props) => {
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const updatePet = (editPet) => {
        axios.put('http://localhost:8000/api/pet/' + id, editPet)
            .then(res => {
                console.log(res.data);
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
            <h3>Edit {pet.name}</h3>
            <hr/>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            {loaded && (<PetForm onSubmitProp={updatePet} initialName={pet.name} initialType={pet.type} initialDescription={pet.description} initialSkill_1={pet.skill_1} initialSkill_2={pet.skill_2} initialSkill_3={pet.skill_3}/>)}
        </>
    )
}

export default EditPet;