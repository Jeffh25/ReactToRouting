import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Films from './pages/Films';
import People from './pages/People';
import FilmDetail from './pages/FilmDetail';
import PeopleDetail from './pages/PeopleDetail';
import Navbar from './components/Navbar'
// import Navbar from './components/Navbar';

const App = () => {
return (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/films'>
                <Films />
            </Route>
            <Route exact path='/films/:filmid'>
                <FilmDetail />
            </Route>
            <Route exact path='/people'>
                <People />
            </Route>
            <Route exact path='/people/:peopleid'>
                <PeopleDetail />
            </Route>
        </Switch>
    </BrowserRouter>
)
}

export default App;