import React, { useEffect, useState } from "react";

// const data = [
//     {
//         id: "6490b3cfd77a0f020de54d50",
//         profile: "developer",
//         desc: "Software engineer who can work on enterprise projects using spring boot and mongodb and react",
//         exp: 1,
//         techs: ["java", "jee", "spring", "springbot", "microservices"],
//     },
//     {
//         id: "6490b3f4d77a0f020de54d51",
//         profile: "Architect",
//         desc: "Assoicate consultant architecture of software, Agile, Devops ",
//         exp: 10,
//         techs: [
//             "java",
//             "jee",
//             "spring",
//             "springbot",
//             "microservices",
//             "AWZ",
//             "Azure",
//             "devops",
//         ],
//     },
//     {
//         id: "6490b3fcd77a0f020de54d52",
//         profile: "java developer",
//         desc: "Seniour Software engineer with java skillset expert in core java and concurrency",
//         exp: 5,
//         techs: [
//             "java",
//             "jee",
//             "spring",
//             "springbot",
//             "microservices",
//             "threads",
//         ],
//     },
//     {
//         id: "6490b40bd77a0f020de54d53",
//         profile: "Senior Architect",
//         desc: "Senior Associate consultant for Mumbai Location",
//         exp: 15,
//         techs: ["java", "jee", "spring", "springboot", "microservices"],
//     },
//     {
//         id: "6490b414d77a0f020de54d54",
//         profile: "Senior Manager",
//         desc: "Manager for onsite projects in US and UK",
//         exp: 15,
//         techs: ["Java", "Blockchain", "android", "datascience"],
//     },
//     {
//         id: "6490b422d77a0f020de54d55",
//         profile: "development",
//         desc: "Devops Engineer worked on kubernetes, ansible, docker",
//         exp: 12,
//         techs: ["c", "c++", "java", "kubernetes"],
//     },
//     {
//         id: "6490b42cd77a0f020de54d56",
//         profile: "development",
//         desc: "Senior Software engineer for a Data department",
//         exp: 15,
//         techs: ["microservices", "hadoop", "bigdata"],
//     },
//     {
//         id: "6490b434d77a0f020de54d57",
//         profile: "Junior DataScientist",
//         desc: "DataScientiest who has end-to-end project experience",
//         exp: 12,
//         techs: ["python", "numpy", "pandas", "matplotlib"],
//     },
//     {
//         id: "6490b43ed77a0f020de54d58",
//         profile: "Expert Datascientist",
//         desc: "Senior Data Scientist",
//         exp: 15,
//         techs: ["python", "libraries"],
//     },
//     {
//         id: "6490eebe55d93a5ff5688b19",
//         profile:
//             "A skilled blockchain developer who is well versed in Solidity",
//         desc: "Blockchain Developer",
//         exp: 5,
//         techs: [
//             "java",
//             "jee",
//             "design patterns",
//             "springboot",
//             "cloud",
//             "microservices",
//         ],
//     },
// ];


const ViewJob = () => {
  
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
  
  return (
      <>
          <div className="container">
              <h1 className="text-center my-5">All Jobs</h1>
              <div className="row my-3">
                  {data.map((dataObj) => {
                    return (
                        <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                              <div class="card">
                                  <div class="card-body">
                                      <h5 class="card-title">
                                          {dataObj.profile}
                                      </h5>
                                      <h6 class="card-title">
                                          Exprience : {dataObj.exp}
                                      </h6>
                                      <p class="card-text">
                                          {dataObj.desc}
                                      </p>
                                      <h6>Skills</h6>
                                      {dataObj.techs.map((hobby, index) => (
                                        <span class="badge bg-secondary p-2 m-1">{hobby}</span>
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