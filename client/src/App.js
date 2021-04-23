import React , {useState } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import PostDetail from './components/Posts/PostDetail/PostDetail'


const App = () => {
   const [currentId, setCurrentId] = useState(0);


   return(
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar currentId={currentId} setCurrentId={setCurrentId}/>
        <Switch>
          <Route path="/" exact>
            <Home currentId={currentId} setCurrentId={setCurrentId}/>
          </Route>
          <Route path="/form" exact>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Route>
          <Route path="/posts/:id" exact component={PostDetail}/>
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  ); 
}

export default App;
