import React, { Component } from 'react';
import Product from "./Product";
import logo from '../homepage.png';
export default class Homepage extends Component {
    render() {
        return (
          <div className='container py-5'>
             <div className='col-2 mx-auto col-md-6 my-6'></div>
              <div className='col-8 mx-auto col-md-6 my-6'>
                <h1 className='text-capitalize'> Welcome into our moto shop</h1>
                <img src={logo} className="img-fluid" />
              </div>
              <div className='col-2 mx-auto col-md-6 my-6'></div>
          </div>
          
        );
    }
}