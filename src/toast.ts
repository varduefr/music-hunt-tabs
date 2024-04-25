import { IonButton, useIonToast } from '@ionic/react';

export function toast(message: string, duration = 2000) {
//export async function toast(message: string, duration = 2000) {
    const [present] = useIonToast();

    const presentToast = () => {
        present({
          message: message,
          duration: duration,
          position: 'bottom',
        });
      };
    /*  
    const toast = document.createElement('ion-toast')
      toast.message= message
      toast.duration= duration
      //toast.position= 'bottom'

      document.body.appendChild(toast)
      return toast.present()
      */
}
export default toast;