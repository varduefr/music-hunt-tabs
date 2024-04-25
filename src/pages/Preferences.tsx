import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Preferences: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profile" />
          </IonButtons>
          <IonTitle>Preferences</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Preferences</p>
      </IonContent>
    </React.Fragment>
  );
};

export default Preferences;
