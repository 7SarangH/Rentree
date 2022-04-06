import React, { Component } from 'react'
import {Navbar, Container, Nav, NavDropdown, FormControl, Form, Button} from 'react-bootstrap'

export default class MainRegistration extends Component {
  render() {
    return (
      <div>
         <Navbar bg="dark" variant="dark" expand="lg" >
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Games</Nav.Link>
              <Nav.Link href="#action2">Books</Nav.Link>

              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <div class="row first-row col-lg-12 p-5">
        <div class="container col-lg-4"></div>
        <div class="container col-lg-4 border p-5 shadow">
      <form >
            {/* float-end */}

            <div class="mb-3 ">
              <label class="form-label" for="formBasicEmail">Name</label>
              <input classname="md-2" placeholder="Enter your name" type="name" id="formBasicEmail" class="form-control" />
              <small class="text-muted form-text"></small>
            </div>

            <div class="mb-3">
              <label class="form-label" for="formBasicEmail">Address</label>
              <input placeholder="Enter your Address" type="address" id="formBasicEmail" class="form-control" />
              <small class="text-muted form-text"></small>
            </div>

            <div class="mb-3">
              <label class="form-label" for="formBasicEmail">Pin Code</label>
              <input placeholder="Enter Pincode" type="pin" id="formBasicEmail" class="form-control" />
              <small class="text-muted form-text"></small>
            </div>

            <div class="mb-3">
              <label class="form-label" for="formBasicEmail">Contact Details</label>
              <input placeholder="Enter your Number" type="contact no" id="formBasicEmail" class="form-control" />
              <small class="text-muted form-text">We'll never share your Contact Number with anyone else.</small>
            </div>

            <div class="mb-3">
              <label class="form-label" for="formBasicEmail">Email address</label>
              <input placeholder="Enter email id" type="email" id="formBasicEmail" class="form-control" />
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

            <div className='text-center'>
                <button type="submit" className="btn btn-primary px-4 my-2" id ="button">Submit</button>
                <button type="Resgister" className="btn btn-primary px-4 mx-2" id ="button">Register</button>
            </div>
          </form>
          </div>
          <div class="container col-lg-4"></div>
        </div>
      </div>
    )
  }
}
