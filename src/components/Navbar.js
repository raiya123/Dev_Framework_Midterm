import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo2.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               <Link to='/'>
                  <img src={logo} alt="store" className="navbar-brand" height="70px" width="50px"/>
               </Link> 
               <ul className="navbar-nav ml-5 ">
                    <Link to="/" className="nav-link">
                       Home
                    </Link>
               </ul>
               <ul className="navbar-nav ml-5">
                    <Link to="/product" className="nav-link">
                       Products
                    </Link>
               </ul>
               {/* <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                      <i className="fas fa-cart-plus">my cart</i>
                  </ButtonContainer>
               </Link> */}
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;
