import React, { useState } from 'react';
import { Link } from 'react-router-dom';



export default function CreateCourse() {

    //state
    const [title, setTitle] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [description, setDescription] = useState('');
    const [materialsNeeded, setMaterialsNeeded] = useState('');

    const addNewCourse = (e) => {
        e.preventDefault();
        const newCourse = { title, estimatedTime, description, materialsNeeded }

        fetch('http://localhost:5000/api/courses', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Basic' + authenticatedUser
            },
            body: JSON.stringify({
                newCourse,

            })
        })
    }



    return (
        <main>
            <div className="wrap">
                <h2>Create Course</h2>

                <form>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle">Course Title</label>
                            <input
                                id="courseTitle"
                                name="courseTitle"
                                type="text"
                                value={title}
                                defaultValue=""
                                onChange={(e) => setTitle(e.tartget.value)} />

                            <p>By </p>

                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea
                                id="courseDescription"
                                name="courseDescription"
                                value={description}
                                defaultValue={""}
                                onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input
                                id="estimatedTime"
                                name="estimatedTime"
                                type="text"
                                value={estimatedTime}
                                defaultValue=""
                                onChange={(e) => setEstimatedTime(e.target.value)} />
                            <label htmlFor="materialsNeeded">Materials Needed</label>
                            <textarea
                                id="materialsNeeded"
                                name="materialsNeeded"
                                value={materialsNeeded}
                                defaultValue={""}
                                onChange={(e) => setMaterialsNeeded(e.target.value)} />
                        </div>
                    </div>
                    <button className="button" type="submit" onChange={addNewCourse}>Create Course</button><Link to="/"><button className="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button></Link>
                </form>
            </div>
        </main>
    );

}