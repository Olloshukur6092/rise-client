import React from 'react'

const Login = () => {
  return (
    <div>
      <section id='login-section' className="vh-100" style={{ backgroundColor: '#508bfc' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5">
                  <h3 className="mb-5 text-center">Sign in</h3>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                  </div>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" />
                    <label className="form-check-label ms-2" htmlFor="form1Example3"> Remember password </label>
                  </div>
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login