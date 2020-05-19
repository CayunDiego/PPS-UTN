import React, { Fragment } from 'react';
import './App.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/themeConfig';
import { Route , Switch } from 'react-router-dom';
import { AuthCheck } from 'reactfire'

import IndexWithoutLogin from './pages/Home/Home';
import HomeRegistered from './pages/Home/HomeRegistered'
import AuthPage from './pages/AuthPage'
import Denuncia from './pages/Denuncia';
import Profile from './pages/Profile'
import AuthConfirm from './pages/AuthConfirm'
import NewDenuncia from './pages/NewDenuncia'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <AuthCheck fallback={ 
              <Fragment>
                <Route exact path="/" component={IndexWithoutLogin}/>
                <Route exact path="/denuncia/" component={Denuncia}/>
                <Route exact path="/signin/" component={ () => <AuthPage type='Sign in'/>}/>
                <Route exact path="/login/" component={ () => <AuthPage type='Log In'/>}/>
              </Fragment>
            }>
            <Route exact path="/" component={HomeRegistered}/>
            <Route exact path="/profile/" component={Profile}/>
            <Route exact path="/signin/" component={AuthConfirm}/>
            <Route exact path="/newdenuncia/" component={NewDenuncia}/>
          </AuthCheck>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;