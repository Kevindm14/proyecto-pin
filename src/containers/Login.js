import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;
      
      return (
        <div>
            {
              user
                ? <small className="mx-4">Hola, {user.displayName}</small> : <small className="mx-4">Hola, invitado</small>
            }
  
            {
              user
                ? 
                  <button className="btn btn-danger" onClick={signOut}>Cerrar sesion</button>
                : 
                  <button className="btn btn-success"  onClick={signInWithGoogle}>Inicia sesion con google</button>
            }
        </div>
      );
    }
  }


const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);