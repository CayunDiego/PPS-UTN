import React, { Fragment } from 'react';
import './App.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/themeConfig';
import { Route } from 'wouter';
import { AuthCheck } from 'reactfire'
import HomeUnregistered from './pages/Home/HomeUnregistered';
import HomeRegistered from './pages/Home/HomeRegistered';
import AuthPage from './pages/AuthPage';
import Profile from './pages/Profile';
import AuthConfirm from './pages/AuthConfirm';
import NewDenuncia from './pages/NewDenuncia';
import Detail from './pages/Detail';
import MapComplaints from './pages/MapComplaints';

//conntext
import { ComplaintsContextProvider } from './context/ComplaintsContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <AuthCheck fallback={ 
              <Fragment>
                <Route path="/" component={HomeUnregistered}/>
                <Route path="/newdenuncia/" component={NewDenuncia}/>
                <Route path="/signin/" component={ () => <AuthPage type='Sign in'/>}/>
                <Route path="/login/" component={ () => <AuthPage type='Log In'/>}/>
              </Fragment>
            }>
              <ComplaintsContextProvider>
                <Route path="/" component={HomeRegistered}/>
                <Route path="/profile/" component={Profile}/>
                <Route path="/signin/" component={AuthConfirm}/>
                <Route path="/newdenuncia/" component={NewDenuncia}/>
                <Route path="/denuncia/:id" component={Detail}/>
                <Route path="/maps/" component={MapComplaints}/>
              </ComplaintsContextProvider>
          </AuthCheck>
      </div>
    </ThemeProvider>
  );
}

export default App;







//////////////////////////////////////////////////////////////////////////////////////////////
const css = "text-shadow: -1px -1px hsl(0,100%,50%), 1px 1px hsl(5.4, 100%, 50%), 3px 2px hsl(10.8, 100%, 50%), 5px 3px hsl(16.2, 100%, 50%), 7px 4px hsl(21.6, 100%, 50%), 9px 5px hsl(27, 100%, 50%), 11px 6px hsl(32.4, 100%, 50%), 13px 7px hsl(37.8, 100%, 50%), 14px 8px hsl(43.2, 100%, 50%), 16px 9px hsl(48.6, 100%, 50%), 18px 10px hsl(54, 100%, 50%), 20px 11px hsl(59.4, 100%, 50%), 22px 12px hsl(64.8, 100%, 50%), 23px 13px hsl(70.2, 100%, 50%), 25px 14px hsl(75.6, 100%, 50%), 27px 15px hsl(81, 100%, 50%), 28px 16px hsl(86.4, 100%, 50%), 30px 17px hsl(91.8, 100%, 50%), 32px 18px hsl(97.2, 100%, 50%), 33px 19px hsl(102.6, 100%, 50%), 35px 20px hsl(108, 100%, 50%), 36px 21px hsl(113.4, 100%, 50%); font-size: 40px;";
console.log("%cHolis ", css);
const imgConsola = 
`░█▀▀▄░░░░░░░░░░░▄▀▀█
  ░█░░░▀▄░▄▄▄▄▄░▄▀░░░█
  ░░▀▄░░░▀░░░░░▀░░░▄▀
  ░░░░▌░▄▄░░░▄▄░▐▀▀
  ░░░▐░░█▄░░░▄█░░▌▄▄▀▀▀▀█
  ░░░▌▄▄▀▀░▄░▀▀▄▄▐░░░░░░█
  ▄▀▀▐▀▀░▄▄▄▄▄░▀▀▌▄▄▄░░░█
  █░░░▀▄░█░░░█░▄▀░░░░█▀▀▀
  ░▀▄░░▀░░▀▀▀░░▀░░░▄█▀
  ░░░█░░░░░░░░░░░▄▀▄░▀▄
  ░░░█░░░░░░░░░▄▀█░░█░░█
  ░░░█░░░░░░░░░░░█▄█░░▄▀
  ░░░█░░░░░░░░░░░████▀
  ░░░▀▄▄▀▀▄▄▀▀▄▄▄█▀`;
 console.log(`%cI ${imgConsola}`, "color: yellow");