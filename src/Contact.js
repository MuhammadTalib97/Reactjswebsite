import React from 'react'

const contact = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Contact no</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Contact Number"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="submit" class="btn btn-outline-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact
