import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Admin = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [data, setData] = useState([]);
    
    const fetchInfo = () => {
        if (!user) {
            return;
        }
        else{
            const url = `http://localhost:8080/jobposted/${user.id}`;
            return fetch(url, {
                method: "GET",
            })
            .then((res) => res.json())
            .then((d) => setData(d));
        }
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
    
    if (!user) {
      return (
        <>
            <h1 className="text-center my-5">Please Sign up or Login to access this Admin Page</h1>
        </>
        )
    }
    else{
        return (
            <>
                <div className="container">
                    <h1 className="text-center my-5">All Jobs</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Job Title</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Salary</th>
                                <th scope="col">Experience</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((dataObj, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{dataObj.profile}</td>
                                        <td>{dataObj.companyName}</td>
                                        <td>{dataObj.salary}</td>
                                        <td>{dataObj.exp}</td>
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
    }
};

export default Admin;
