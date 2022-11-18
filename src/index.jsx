import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './containers/pages/Accueil';
import FicheLogement from './containers/pages/FicheLogement';
import APropos from './containers/pages/APropos';
import Error from './containers/pages/error404'
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Accueil />} />
         <Route path="/fiche-logement" element={<FicheLogement />} />
         <Route path="/a-propos" element={<APropos />} />
         <Route path="*" element={<Error />} />
       </Routes>
     </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
