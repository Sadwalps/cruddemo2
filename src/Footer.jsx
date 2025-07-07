import React from 'react'

function Footer() {
    return (
        <>
            <div className='container-fluid bg-primary text-light'>
                <div className="row p-3">
                    <div className="col-5">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4 d-flex justify-content-center align-items-center p-2 ">
                                <img src="https://static.vecteezy.com/system/resources/previews/004/845/544/original/fish-logo-template-creative-symbol-free-vector.jpg" alt="" className='w-50 rounded-circle' />
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                    <div className="col-7 d-flex justify-content-center align-items-center">
                        <h5>Let's share your findings </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer