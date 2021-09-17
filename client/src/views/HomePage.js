import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const HomePage = () => {
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet')
            .then(res=>{
                setPet(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    if (loaded === false) {
        return "Page is Loading...";
    }

    return (
        <>
            <h1>Pet Shelter</h1>
            <Link to="/new">add a pet to the shelter</Link>
            <h3>These pets are looking for a good home</h3>
            <hr/>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                {pet.map((pet, index) => {
                    return <tr key={index}>
                        <td>{pet.name}</td>
                        <td>{pet.type}</td>
                        <td>
                            <Link to={`/pets/${pet._id}`}>Details</Link> {" | "}
                            <Link to={`/pets/${pet._id}/edit`}>Edit</Link>
                        </td>
                    </tr>
                })}
            </table>
        </>

    )
}
export default HomePage;