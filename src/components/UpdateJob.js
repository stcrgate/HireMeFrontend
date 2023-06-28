import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const UpdateJob = () => {
    const skillSet = [
        {
            name: "Javascript",
        },
        {
            name: "Java",
        },
        {
            name: "Python",
        },
        {
            name: "Django",
        },
        {
            name: "Rust",
        },
    ];

    const [data, setData] = useState({
        id:"",
        profile: "",
        desc: "",
        exp: "",
        techs: [],
    });

    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (location.state && location.state.job) {
            const jobData = location.state.job;
            setData({
                id:jobData.id,
                profile: jobData.profile || "",
                desc: jobData.desc || "",
                exp: jobData.exp || "",
                techs: jobData.techs || [],
            });
        }
    }, [location.state]);

    const handleChange = (e) => {
        setData({ ...data, techs: [...data.techs, e.target.value] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data.id+data.profile + data.desc + data.exp + data.techs);
        const response = await fetch(
            `http://localhost:8080/updatejob/${data.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    profile: data.profile,
                    desc: data.desc,
                    exp: data.exp,
                    techs: data.techs,
                }),
            }
        );
        if (response.ok) {
            const dataJson = await response.json();
            console.log(dataJson);
            setData({ profile: "", desc: "", exp: "", techs: [] });
            navigate("/admin")
        } else {
            console.error("Error updating job");
        }
    };

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1 className="text-center my-3">Update Job</h1>
            <div className="container">
                <form
                    className="w-50 text-center mx-auto"
                    onSubmit={handleSubmit}
                >
                    <h1 className="h3 mb-2">Enter Job Details</h1>

                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control my-3"
                            id="profile"
                            name="profile"
                            placeholder="John Doe"
                            value={data.profile}
                            onChange={onChange}
                        />
                        <label htmlFor="floatingInput">Job Title</label>
                    </div>
                    <div className="form-floating">
                        <textarea
                            className="form-control my-3"
                            id="desc"
                            name="desc"
                            placeholder="John Doe"
                            value={data.desc}
                            style={{ height: "100px" }}
                            onChange={onChange}
                        ></textarea>
                        <label htmlFor="floatingInput">Job Description</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control my-3"
                            id="exp"
                            name="exp"
                            placeholder="John Doe"
                            value={data.exp}
                            onChange={onChange}
                        />
                        <label htmlFor="floatingInput">
                            Exprience Required
                        </label>
                    </div>
                    <label>Skills Required</label>
                    <div className="row mt-3">
                        {skillSet.map((dataObj) => (
                            <div className="col">
                                <div class="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id={`custom-checkbox`}
                                        name={dataObj.name}
                                        value={dataObj.name}
                                        onChange={handleChange}
                                    />
                                    <label
                                        className="form-check-label"
                                        for="flexCheckDefault"
                                    >
                                        {dataObj.name}
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row mt-4">
                        <div className="col">
                            <button
                                className="btn btn-success w-100 py-2"
                                type="submit"
                            >
                                Update Job
                            </button>
                        </div>
                        <div className="col">
                            <button
                                className="btn btn-danger w-100 py-2"
                                type="reset"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                    {/* <div className="message mt-3">
                      {message ? (
                          <div className="alert alert-info" role="alert">
                              {message}
                          </div>
                      ) : null}
                  </div> */}
                </form>
            </div>
        </div>
    );
};

export default UpdateJob;
