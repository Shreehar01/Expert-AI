import React from 'react';
import {Container} from '@material-ui/core';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'; 
import Home from './components/Home/Home';       
import Auth from './components/Auth/Auth';     
import HeartAttack from './components/HeartAttack/HeartAttack';
import Stroke from './components/Stroke/Stroke';
import Diabetes from './components/Diabetes/Diabetes';
import Credit from './components/Credit/Credit';
import Loan from './components/Loan/Loan';
import Divorce from './components/Divorce/Divorce';
import Grades from './components/Grades/Grades';
import House from './components/House/House';

const App = () => (
       <BrowserRouter>
        <Container maxwidth = "lg">
            <Navbar />
            <Switch>
                <Route path = "/" exact component = {Home} />
                <Route path = "/heart-attack" exact component = {HeartAttack} />
                <Route path = "/stroke" exact component = {Stroke} />
                <Route path = "/diabetes" exact component = {Diabetes} />
                <Route path = "/credit" exact component = {Credit} />
                <Route path = "/loan" exact component = {Loan} />
                <Route path = "/divorce" exact compoent = {Divorce} />
                <Route path = "/grades" exact component = {Grades} />
                <Route path = "housing-price" exact component = {House} />
                <Route path = "/auth" exact component = {Auth} />    
            </Switch>
        </Container>
       </BrowserRouter>
       
  );


export default App;