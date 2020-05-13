import React, { Fragment } from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './assets/themeConfig';
import { Route , Switch } from 'react-router-dom';
import { AuthCheck } from 'reactfire'

import IndexSinLogin from './pages/IndexSinLogin';
import IndexConLogin from './pages/IndexConLogin'
import Denuncia from './pages/Denuncia';
import Login from './pages/Login';
//import Auth from './services/Auth'
import SignIn from './services/SignIn'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <AuthCheck fallback={ 
              <Fragment>
                <Route exact path="/" component={IndexSinLogin}/>
                <Route exact path="/denuncia/" component={Denuncia}/>
                <Route exact path="/login/" component={Login}/>
                <Route exact path="/signin/" component={SignIn}/>
              </Fragment>
            
            }>
            <Route exact path="/" component={IndexConLogin}/>
          </AuthCheck>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
