import React from 'react'
import Navbar from './Navbar'

const Login = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h3>
                               LOGIN
                            </h3>
                        </div>
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <label htmlFor="link" className="form-label">Forget Password?</label>
                        </div>
                        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-dark">LOGIN WITH GOOGLE</button>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h1>

                </h1>
                        </div>
                    
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-dark">LOGIN WITH APPLE</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login