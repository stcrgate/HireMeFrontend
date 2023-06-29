import React, { useState } from 'react'
import { AuthContext } from "../context/AuthContext";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const AddJob = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

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
  const [data, setData] = useState({title:"", desc:"", exp:"" , techs:[], companyName:"", salary:"", companyLogo:"",createdBy:""});

  const handleChange = (e) => {
      setData({ ...data, techs: [...data.techs, e.target.value] });
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log(data.title + data.desc + data.exp + data.techs, data.salary, data.companyName, data.companyLogo,user.id);
    const response = await fetch(`http://localhost:8080/addjobs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ profile:data.title, desc:data.desc, exp:data.exp, techs:data.techs, salary:data.salary, companyName:data.companyName, companyLogo:data.companyLogo, createdBy:user.id }),
        });
        const dataJson = await response.json();
        console.log(dataJson);
        setData({ title: "", desc: "", exp: "", techs: [] , salary:"", companyName:"", companyLogo:"", createdBy:"" });
        navigate("/view");
  }
  const onChange = (e) =>{
      setData({ ...data, [e.target.name]: e.target.value });
  }

  if(!user){
        return (
            <h1 className="text-center my-5">
                Please Sign up or Login to access this Add Job Page
            </h1>
        );

  }
  return (
      <div>
          <h1 className="text-center my-3">Add Job</h1>
          <div className="container">
              <form
                  className="w-50 text-center mx-auto"
                  onSubmit={handleSubmit}
              >
                  <h1 className="h3 mb-2">Enter Job Details</h1>
                  <div className="row">
                      <div className="col-lg-6 col-md-12">
                          <div className="form-floating">
                              <input
                                  type="text"
                                  className="form-control my-3"
                                  id="title"
                                  name="title"
                                  placeholder="John Doe"
                                  onChange={onChange}
                              />
                              <label htmlFor="floatingInput">Job Title</label>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                          <div className="form-floating">
                              <input
                                  type="text"
                                  className="form-control my-3"
                                  id="companyName"
                                  name="companyName"
                                  placeholder="John Doe"
                                  onChange={onChange}
                              />
                              <label htmlFor="floatingInput">
                                  Company Name
                              </label>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-6 col-md-12">
                          <div className="form-floating">
                              <input
                                  type="text"
                                  className="form-control my-3"
                                  id="salary"
                                  name="salary"
                                  placeholder="John Doe"
                                  onChange={onChange}
                              />
                              <label htmlFor="floatingInput">
                                  Expected Salary
                              </label>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                          <div className="form-floating">
                              <input
                                  type="text"
                                  className="form-control my-3"
                                  id="exp"
                                  name="exp"
                                  placeholder="John Doe"
                                  onChange={onChange}
                              />
                              <label htmlFor="floatingInput">
                                  Exprience Required
                              </label>
                          </div>
                      </div>
                  </div>
                  <div className="form-floating">
                      <textarea
                          className="form-control my-3"
                          id="desc"
                          name="desc"
                          placeholder="John Doe"
                          style={{ height: "100px" }}
                          onChange={onChange}
                      ></textarea>
                      <label htmlFor="floatingInput">Job Description</label>
                  </div>
                  <div className="form-floating">
                      <input
                          type="text"
                          className="form-control my-3"
                          id="companyLogo"
                          name="companyLogo"
                          placeholder="John Doe"
                          onChange={onChange}
                      />
                      <label htmlFor="floatingInput">Company Logo URL</label>
                  </div>
                  <div className="row mt-3">
                      <label className="text-start mb-2">Skills Required</label>
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
                              Add Job
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
}

export default AddJob