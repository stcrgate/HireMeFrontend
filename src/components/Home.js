import React from 'react'
import { Link } from 'react-router-dom';
import HeroImg from "../assets/hero.jpg"

const Home = () => {
  return (
      <>
          <div className="container">
              <div className="row d-flex align-items-center my-5 pt-5">
                  <div className="col-lg-6 text-lg-start text-sm-center">
                      <h1 className="display-5 fw-bolder">
                          <span className="text-primary">Hire Me</span> -Find
                          your dream job today{" "}
                      </h1>
                      <p className="fs-5">
                          Easily find your desired job and make your dreams come
                          true.
                      </p>
                  </div>
                  <div className="col-lg-6 mb-5">
                      <img src={HeroImg} alt="" className="img-fluid" />
                  </div>
              </div>
              <div class="mt-5 p-3 mx-auto text-center">
                  <h3 class="">Features</h3>
                  <p class="fs-5 text-body-secondary">
                      Here are some of the features of this emersive Job
                      Platform
                  </p>
                  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                      <div class="col">
                          <div class="card mb-4 rounded-3 shadow-sm">
                              <div class="card-header py-3">
                                  <h4 class="my-0 fw-normal">For Recruiters</h4>
                              </div>
                              <div class="card-body">
                                  <h3 class="card-title pricing-card-title">
                                      Add Jobs Easily
                                  </h3>
                                  <p>
                                      All recruiters can easily add their job
                                      openings here so they can find potential
                                      candidate.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="col">
                          <div class="card mb-4 rounded-3 shadow-sm">
                              <div class="card-header py-3">
                                  <h4 class="my-0 fw-normal">For Job seekers</h4>
                              </div>
                              <div class="card-body">
                                  <h3 class="card-title pricing-card-title">
                                      Find Job Easily
                                  </h3>
                                  <p>
                                      All job seekers can easily find their desired job
                                      here and enhance your potential.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="col">
                          <div class="card mb-4 rounded-3 shadow-sm">
                              <div class="card-header py-3">
                                  <h4 class="my-0 fw-normal">For Admin</h4>
                              </div>
                              <div class="card-body">
                                  <h3 class="card-title pricing-card-title">
                                      Manage Jobs Easily
                                  </h3>
                                  <p>
                                      All admins can easily manage all existing job
                                      openings, update or delete.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                  <Link to="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <h3 className='text-primary fw-bold'>Hire Me</h3>
                  </Link>
                  <p class="col-md-4 mb-0 text-body-secondary">© 2023 Kanishka Malik</p>
                </footer>
              </div>
          </div>
      </>
  );
}

export default Home