import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate();

    const url = "http://localhost:8080/alljobs";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return fetch(url, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((d) => setData(d));
    };

    useEffect(() => {
        fetchInfo();
    }, []);
    
    const handleDelete = (id) => {
        // Delete document with the given ID
        fetch(`http://localhost:8080/deletejob/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    // Document deleted successfully, update the data in the state
                    fetchInfo();
                } else {
                    console.error("Failed to delete document");
                }
            })
            .catch((error) => console.error(error));
    };
    const handleUpdate = (dataObj) => {
        navigate("/update", { state: { job: dataObj } });
    };
    return (
        <>
            <div className="container">
                <h1 className="text-center my-5">All Jobs</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Job Title</th>
                            <th scope="col">Job Desc</th>
                            <th scope="col">Skills</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((dataObj,index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{dataObj.profile}</td>
                                    <td>{dataObj.desc}</td>
                                    <td>
                                        {dataObj.techs.map((hobby, index) => (
                                            <span className="badge bg-secondary p-2 m-1">
                                                {hobby}
                                            </span>
                                        ))}
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-info"
                                            onClick={() =>
                                                handleUpdate(dataObj)
                                            }
                                        >
                                            Update
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                handleDelete(dataObj.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Admin;