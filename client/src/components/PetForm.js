import React, { useState } from "react";

const PetForm = (props) => {
    const { initialName, initialType, initialDescription, initialSkill_1, initialSkill_2, initialSkill_3, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    const [description, setDescription] = useState(initialDescription);
    const [skill_1, setSkill_1] = useState(initialSkill_1);
    const [skill_2, setSkill_2] = useState(initialSkill_2);
    const [skill_3, setSkill_3] = useState(initialSkill_3);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({
            name:name,
            type:type,
            description:description,
            skill_1:skill_1,
            skill_2:skill_2,
            skill_3:skill_3
        });
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Pet Name:</label>
                    <input type = "text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Pet Type:</label>
                    <input type = "text" name="type" value={type} onChange={(e) => setType(e.target.value)}/>
                </div>
                <div>
                    <label>Pet Description:</label>
                    <input type = "text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <h5>Skills (optional):</h5>
                <div>
                    <label>Skill 1:</label>
                    <input type = "text" name="skill_1" value={skill_1} onChange={(e) => setSkill_1(e.target.value)}/>
                </div>
                <div>
                    <label>Skill 2:</label>
                    <input type = "text" name="skill_2" value={skill_2} onChange={(e) => setSkill_2(e.target.value)}/>
                </div>
                <div>
                    <label>Skill 3:</label>
                    <input type = "text" name="skill_3" value={skill_3} onChange={(e) => setSkill_3(e.target.value)}/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )

}


export default PetForm;