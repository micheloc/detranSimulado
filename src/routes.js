import React from 'react';

const PagePrincipal = React.lazy(() => import('./components/Home/home'));

// Simulado 1 
const S1question1 = React.lazy(() => import('./components/simulado1/frmPagina'));
const S1question2 = React.lazy(() => import('./components/simulado1/question2'));
const S1question3 = React.lazy(() => import('./components/simulado1/question3'));
const S1question4 = React.lazy(() => import('./components/simulado1/question4'));
const S1question5 = React.lazy(() => import('./components/simulado1/question5'));
const S1question6 = React.lazy(() => import('./components/simulado1/question6'));
const S1question7 = React.lazy(() => import('./components/simulado1/question7'));
const S1question8 = React.lazy(() => import('./components/simulado1/question8'));
const S1question9 = React.lazy(() => import('./components/simulado1/question9'));
const S1question10 = React.lazy(() => import('./components/simulado1/question10'));
const S1question11 = React.lazy(() => import('./components/simulado1/question11'));
const S1question12 = React.lazy(() => import('./components/simulado1/question12'));
const S1question13 = React.lazy(() => import('./components/simulado1/question13'));
const S1question14 = React.lazy(() => import('./components/simulado1/question14'));
const S1question15 = React.lazy(() => import('./components/simulado1/question15'));
const S1question16 = React.lazy(() => import('./components/simulado1/question16'));
const S1question17 = React.lazy(() => import('./components/simulado1/question17'));
const S1question18 = React.lazy(() => import('./components/simulado1/question18'));
const S1question19 = React.lazy(() => import('./components/simulado1/question19'));
const S1question20  = React.lazy(() => import('./components/simulado1/question20'));
const S1question21 = React.lazy(() => import('./components/simulado1/question21'));
const S1question22 = React.lazy(() => import('./components/simulado1/question22'));
const S1question23 = React.lazy(() => import('./components/simulado1/question23'));
const S1question24 = React.lazy(() => import('./components/simulado1/question24'));
const S1question25 = React.lazy(() => import('./components/simulado1/question25'));
const S1question26 = React.lazy(() => import('./components/simulado1/question26'));
const S1question27 = React.lazy(() => import('./components/simulado1/question27'));
const S1question28 = React.lazy(() => import('./components/simulado1/question28'));
const S1question29 = React.lazy(() => import('./components/simulado1/question29'));
const S1question30 = React.lazy(() => import('./components/simulado1/question30'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Pagina Inicial', component: PagePrincipal },

  // Simulado 1. 
  { path: '/nav/simulado1', name: 'Questão 1', component: S1question1 }, 
  { path: '/nav/simulado2', name: 'Questão 1', component: S1question2 }, 
  { path: '/nav/simulado3', name: 'Questão 1', component: S1question3 }, 
  { path: '/nav/simulado4', name: 'Questão 1', component: S1question4 }, 
  { path: '/nav/simulado5', name: 'Questão 1', component: S1question5 }, 
  { path: '/nav/simulado6', name: 'Questão 1', component: S1question6 }, 
  { path: '/nav/simulado7', name: 'Questão 1', component: S1question7 }, 
  { path: '/nav/simulado8', name: 'Questão 1', component: S1question8 }, 
  { path: '/nav/simulado9', name: 'Questão 1', component: S1question9 },
  { path: '/nav/simulado10', name: 'Questão 1', component: S1question10 },  
  { path: '/nav/simulado11', name: 'Questão 1', component: S1question11 },
  { path: '/nav/simulado12', name: 'Questão 1', component: S1question12 },
  { path: '/nav/simulado13', name: 'Questão 1', component: S1question13 },
  { path: '/nav/simulado14', name: 'Questão 1', component: S1question14 },
  { path: '/nav/simulado15', name: 'Questão 1', component: S1question15 },
  { path: '/nav/simulado16', name: 'Questão 1', component: S1question16 },
  { path: '/nav/simulado17', name: 'Questão 1', component: S1question17 },
  { path: '/nav/simulado18', name: 'Questão 1', component: S1question18 },
  { path: '/nav/simulado19', name: 'Questão 1', component: S1question19 },
  { path: '/nav/simulado20', name: 'Questão 1', component: S1question20 },  
  { path: '/nav/simulado21', name: 'Questão 1', component: S1question21 },
  { path: '/nav/simulado22', name: 'Questão 1', component: S1question22 },
  { path: '/nav/simulado23', name: 'Questão 1', component: S1question23 },
  { path: '/nav/simulado24', name: 'Questão 1', component: S1question24 },
  { path: '/nav/simulado25', name: 'Questão 1', component: S1question25 },
  { path: '/nav/simulado26', name: 'Questão 1', component: S1question26 },
  { path: '/nav/simulado27', name: 'Questão 1', component: S1question27 },
  { path: '/nav/simulado28', name: 'Questão 1', component: S1question28 },
  { path: '/nav/simulado29', name: 'Questão 1', component: S1question29 },
  { path: '/nav/simulado30', name: 'Questão 1', component: S1question30 },  
];

export default routes;
