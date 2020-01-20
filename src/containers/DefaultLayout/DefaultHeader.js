import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, InputGroup, InputGroupAddon, Input} from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.jpg'; 
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile  />
        {/*
         <AppNavbarBrand
          full={{ src: logo, width: 89, height: 45,  alt: 'Sua empresa' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
         /> 
        */}
        <AppSidebarToggler className="d-md-down-none" display="lg"/>{''}
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Principal</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          {/* Menu de Cadastro é compra */}
          <NavItem className="px-3">
             <Link to="/dashboard" className="nav-link">Lista de Desejos</Link>
          </NavItem>
         
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              Meu Cadastro
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Minha Conta</strong></DropdownItem>
              <DropdownItem> Perfil </DropdownItem>
              <DropdownItem> Minhas Compras </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Sair </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>  
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
