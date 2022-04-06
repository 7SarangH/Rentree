import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Registration() {

  return (
    <div>

      <div class="row first-row col-lg-12">
        <div class="container col-lg-1"></div>
        <div class="container col-lg-5 p-5">
          <img class ="shadow" src="https://images.pexels.com/photos/6498272/pexels-photo-6498272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image here" />
        {/* this is something  */}
        </div>


        <div class="container col-lg-5 p-5 ">
          <form  className='border p-5 shadow' id="login">
            {/* float-end */}
{/* 
            <div class="mb-3 ">
              <label class="form-label" for="formBasicEmail">Name</label>
              <input classname="md-2" placeholder="Enter email" type="name" id="formBasicEmail" class="form-control" />
              <small class="text-muted form-text"></small>
            </div>

            <div class="mb-3">
              <label class="form-label" for="formBasicEmail">Address</label>
              <input placeholder="Enter email" type="address" id="formBasicEmail" class="form-control" />
              <small class="text-muted form-text"></small>
            </div>

            <div class="mb-3">
              <label class="form-label" for="formBasicEmail">Pin Code</label>
              <input placeholder="Enter email" type="pin" id="formBasicEmail" class="form-control" />
              <small class="text-muted form-text"></small>
            </div>

            <div class="mb-3">
              <label class="form-label" for="formBasicEmail">Contact Details</label>
              <input placeholder="Enter email" type="contact no" id="formBasicEmail" class="form-control" />
              <small class="text-muted form-text">We'll never share your Contact Number with anyone else.</small>
            </div> */}

            <div class="mb-3">
              <label class="form-label" for="formBasicEmail">Email address</label>
              <input placeholder="Enter email" type="email" id="formBasicEmail" class="form-control" />
              <small class="text-muted form-text"></small>
            </div>

            <div class="mb-3">
              <label class="form-label" for="formBasicPassword">Password</label>
              <input placeholder="Password" type="password" id="formBasicPassword" class="form-control" />
            </div>

            <div class="mb-3">
              <div class="form-check">
                <input type="checkbox" id="formBasicCheckbox" class="form-check-input" />
                <label title="" for="formBasicCheckbox" class="form-check-label">I do agree to the Terms and Conditions*</label>
              </div>
            </div>

            <div class="mb-3">
              <div class="form-check">
                
                <label>New here? Why don't you try registering with us!!</label>
              </div>
            </div>

            <div className='text-center'>
                <button type="submit" className="btn btn-primary px-4 my-2" id ="button">Submit</button>
                <button type="Resgister" className="btn btn-primary px-4 mx-2" id ="button"><Link to='/register' className='text-white'>Register</Link></button>
            </div>
          </form>
        </div>
        <div class="container col-lg-1"></div>
      </div>


    </div>

  );
}

export default Registration;