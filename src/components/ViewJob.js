import React, { useEffect, useState } from "react";


const ViewJob = () => {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  
  const fetchprimary = () => {
      let apiUrl = "http://localhost:8080/alljobs";
      if (searchQuery !== "") {
          apiUrl = `http://localhost:8080/search/${searchQuery}`;
      }
      return fetch(apiUrl, {
          method: "GET",
      })
          .then((res) => res.json())
          .then((d) => setFilteredJobs(d));
  };
  
  useEffect(() => {
      fetchprimary();
  }, [searchQuery]);
  
  return (
      <>
          <div className="container">
              <div className="row d-flex align-items-center mt-5">
                  <div className="col-lg-8">
                      <h1 className="text-center my-5 d-inline fw-bolder">All Jobs</h1>
                  </div>
                  <div className="col-lg-4 container mt-2">
                    <div class="row align-items-center ms-auto">
                        <div class="col-auto">
                          <label for="search" class="col-form-label">Search</label>
                        </div>
                        <div class="col">
                            <input
                                type="text"
                                name="search"
                                id="search"
                                className="form-control"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        </div>
                  </div>
              </div>
              <div className="row my-3">
                  {filteredJobs.map((dataObj) => {
                      return (
                          <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                              <div class="card">
                                  <div class="card-body">
                                      <div className="row d-flex align-items-center">
                                          <div className="col">
                                            <img src={dataObj.companyLogo} alt="!Logo Not Found!" className="img-fluid" />
                                          </div>
                                          <div className="col">
                                            <h3 class="card-title text-primary fw-bolder">
                                                {dataObj.profile
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    dataObj.profile.slice(1)}
                                            </h3>
                                            <h5 class="card-title fw-bold">
                                                Salary : {dataObj.salary}
                                            </h5>
                                          </div>
                                      </div>
                                      <h6 class="card-title">
                                          Company Name : {dataObj.companyName}
                                      </h6>
                                      <h6 class="card-title">
                                          Exprience : {dataObj.exp}
                                      </h6>
                                      <p class="card-text">{dataObj.desc}</p>
                                      <h6>Skills</h6>
                                      {dataObj.techs.map((hobby, index) => (
                                          <span class="badge text-white fw-bold bg-primary p-2 m-1">
                                              {hobby.charAt(0).toUpperCase() +
                                                  hobby.slice(1)}
                                          </span>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      );
                  })}
              </div>
          </div>
      </>
  );
}

export default ViewJob