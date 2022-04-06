import React, { Component } from 'react'
import Header from '../Home/Header'
import Images from '../Home/Images'
import Registration from '../Home/Login_Registration/Registration'
import RegistrationBooks from '../Home/Login_Registration/RegistrationBooks'

export default class Homepage extends Component {
  render() {
    return (
      <div>
         <Header />
        <Images />
         <Registration />
       <RegistrationBooks />
      </div>
    )
  }
}

