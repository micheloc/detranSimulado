import React from 'react';

const PagePrincipal = React.lazy(() => import('./components/Home/home'));

// Simulado 1 
const simulado1 = React.lazy(() => import('./components/simulado1/frmPagina'));
const simulado2 = React.lazy(() => import('./components/simulado2/frmPagina'));
const simulado3 = React.lazy(() => import('./components/simulado3/frmPagina'));
const simulado4 = React.lazy(() => import('./components/simulado4/frmPagina'));
const simulado5 = React.lazy(() => import('./components/simulado5/frmPagina'));
const simulado6 = React.lazy(() => import('./components/simulado6/frmPagina'));
const simulado7 = React.lazy(() => import('./components/simulado7/frmPagina'));
const simulado8 = React.lazy(() => import('./components/simulado8/frmPagina'));
const simulado9 = React.lazy(() => import('./components/simulado9/frmPagina'));
const simulado10 = React.lazy(() => import('./components/simulado10/frmPagina'));
const simulado11 = React.lazy(() => import('./components/simulado11/frmPagina'));
const simulado12 = React.lazy(() => import('./components/simulado12/frmPagina'));
const simulado13 = React.lazy(() => import('./components/simulado13/frmPagina'));
const simulado14 = React.lazy(() => import('./components/simulado14/frmPagina'));
const simulado15 = React.lazy(() => import('./components/simulado15/frmPagina'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Pagina Inicial', component: PagePrincipal },

  // Simulado 1. 
  { path: '/nav/simulado1', name: 'Simulado 1', component: simulado1 }, 
  { path: '/nav/simulado2', name: 'Simulado 2', component: simulado2 }, 
  { path: '/nav/simulado3', name: 'Simulado 3', component: simulado3 }, 
  { path: '/nav/simulado4', name: 'Simulado 4', component: simulado4 }, 
  { path: '/nav/simulado5', name: 'Simulado 5', component: simulado5 }, 
  { path: '/nav/simulado6', name: 'Simulado 6', component: simulado6 }, 
  { path: '/nav/simulado7', name: 'Simulado 7', component: simulado7 }, 
  { path: '/nav/simulado8', name: 'Simulado 8', component: simulado8 }, 
  { path: '/nav/simulado9', name: 'Simulado 9', component: simulado9 }, 
  { path: '/nav/simulado10', name: 'Simulado 10', component: simulado10 }, 
  { path: '/nav/simulado11', name: 'Simulado 11', component: simulado11 }, 
  { path: '/nav/simulado12', name: 'Simulado 12', component: simulado12 },  
  { path: '/nav/simulado13', name: 'Simulado 13', component: simulado13 }, 
  { path: '/nav/simulado14', name: 'Simulado 14', component: simulado14 }, 
  { path: '/nav/simulado15', name: 'Simulado 15', component: simulado15 }, 



];

export default routes;
