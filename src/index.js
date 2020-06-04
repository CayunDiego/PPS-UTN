import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { FirebaseAppProvider } from 'reactfire'
import firebaseConfig from './config/firebase-config'
import Spinner from './components/Spinner'

ReactDOM.render(
  <React.StrictMode>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Suspense fallback={<Spinner/>}>
           <App />
        </Suspense>
      </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
