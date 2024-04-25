import React, { useState } from 'react';
import { IonInput, IonButton, IonAlert } from '@ionic/react';
//import AuthService from './AuthService';
import './Login.css';
import { loginUser } from '../firebaseConfig';
import { toast } from '../toast';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      //await AuthService.login(email, password);
      // Handle successful login, redirect user to profile page, etc.
    } catch (error) {
      //setError(error.message);
    }
  };

  async function login(){
   
        const res = await loginUser(email,password)
        if (!res)
            //presentToast('Error, user not found!')
        console.log(`${res ? 'Login successful' : 'Login failed'}`)
   
  }

  return (
    <>
      <IonInput
        type="email"
        placeholder="Email"
        value={email}
        onIonChange={(e) => setEmail(e.detail.value!)}
      />
      <IonInput
        type="password"
        placeholder="Password"
        value={password}
        onIonChange={(e) => setPassword(e.detail.value!)}
      />
      <IonButton expand="block" onClick={login}>Login</IonButton>
      <IonButton expand="block" routerLink="/register">Register</IonButton>
      <IonAlert isOpen={!!error} /*message={error}*/ buttons={['OK']} onDidDismiss={() => setError(null)} />
    </>
  );
};
export default Login;