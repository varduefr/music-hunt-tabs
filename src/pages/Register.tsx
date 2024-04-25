import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Register.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegistration = async () => {
    console.log(email,password,cpassword)
    try {
      //await AuthService.login(email, password);
      // Handle successful login, redirect user to profile page, etc.
    } catch (error) {
      //setError(error.message);
    }
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonInput
        placeholder="email"
        value={email}
        onIonChange={(e) => setEmail(e.detail.value!)}
      />
      <IonInput
        type="password"
        placeholder="Password"
        value={password}
        onIonChange={(e) => setPassword(e.detail.value!)}
      />
      <IonInput
        type="password"
        placeholder="CPassword"
        value={password}
        onIonChange={(e) => setCPassword(e.detail.value!)}
      />
      <IonButton expand="block" onClick={handleRegistration}>Register</IonButton>
      <p>Already have an account <Link to="/login">Login</Link> 
      </p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
