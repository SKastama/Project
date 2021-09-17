import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useHistory } from "react-router-dom";

const OnePet = (props) => {
    const [pet, setPet] = useState(null);
    const [click, setClick] = useState(false);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
        .then(res => setPet(res.data))
        .catch(err => console.error(err));
    }, [id]);

    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then((res) => {
                history.push("/");
            })
            .catch(err => console.error(err));
    }

    const handleLikes = (elementLiked) => {
        if (click === false) {
            const likedPet = {likeCount: elementLiked.likeCount + 1 };
            axios.put('http://localhost:8000/api/pet/' + id, likedPet)
            .then((res) => {
                setPet(res.data);
                setClick(true);
                console.log("Pet was liked!");
            })
            .catch((err) => {
                console.log(err.response);
            });
        }
    }

    if (pet === null) {
        return "Page is Loading...";
    }

    return (
        <>
            <h1>Pet Shelter</h1>
            <Link to="/">back to home</Link>
            <h3>Details about: {pet.name}</h3>
            <button onClick={(e)=>{deletePet(pet._id)}}>Adopt {pet.name}</button>
            <hr/>
            <div>
                <p>Pet type: {pet.type}</p>
                <p>Description: {pet.description}</p>
                <div>
                    <p>Skills:</p> 
                    <p>{pet.skill_1}</p>
                    <p>{pet.skill_2}</p>
                    <p>{pet.skill_3}</p>
                </div>
                <button onClick={(e) => {handleLikes(pet)}}>Like {pet.name}</button>
                <span value={pet.likeCount}>{pet.likeCount} like(s)</span>
            </div>
        </>
    )
}

export default OnePet;
