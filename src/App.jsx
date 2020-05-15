import React, { Fragment } from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './assets/themeConfig';
import { Route , Switch } from 'react-router-dom';
import { AuthCheck } from 'reactfire'

import IndexWithoutLogin from './pages/IndexWithoutLogin';
import IndexWithLogin from './pages/IndexWithLogin'
import Denuncia from './pages/Denuncia';
import Profile from './pages/Profile'
import Auth from './components/Auth'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <AuthCheck fallback={ 
              <Fragment>
                <Route exact path="/" component={IndexWithoutLogin}/>
                <Route exact path="/denuncia/" component={Denuncia}/>
                <Route exact path="/signin/" component={ () => <Auth type='signin'/>}/>
                <Route exact path="/login/" component={ () => <Auth type='login'/>}/>
              </Fragment>
            }>
            <Route exact path="/" component={IndexWithLogin}/>
            <Route exact path="/profile/" component={Profile}/>
          </AuthCheck>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
