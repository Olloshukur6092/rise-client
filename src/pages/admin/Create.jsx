import React from 'react'
import './styles/Create.css'

const Create = () => {
    return (
        <div>
            <section id='gradient-custom' className="vh-100" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8">
                            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5">
                                    <h3 className="mb-5 text-center">Add posts</h3>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="title">Title</label>
                                        <input type="text" id="title" className="form-control form-control-lg" placeholder='Enter here Title' />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form4Example3">Description</label>
                                        <textarea className="form-control" id="form4Example3" rows={4} defaultValue={""} placeholder="Enter here decription" />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <div>
                                            <label htmlFor="formFileLg" className="form-label">Upload here image</label>
                                            <input className="form-control form-control-lg" id="formFileLg" type="file" />
                                        </div>
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

export default Create