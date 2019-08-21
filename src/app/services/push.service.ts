import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotificationPayload, OSNotification } from '@ionic-native/onesignal/ngx';
import { async } from '@angular/core/testing';
import { IonicStorageModule, Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PushService {
  mensajes: OSNotificationPayload[] = [
/*     {
      title: 'Titulo del push',
      body: 'Body del push',
      date: new Date()
    } */
  ];

  pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(private oneSignal: OneSignal, private storage: Storage) {
    this.cargarMensajes();
  }

  async getMensajes() {
    await this.cargarMensajes();
    return [...this.mensajes];
  }

  configuracionInicial() {
    this.oneSignal.startInit('a1a60bb6-9c68-44a6-8154-4ca4f2103c07', '391210431666');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
    // do something when notification is received
    console.log('Notificacion recibida', noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe(async (noti) => {
      // do something when a notification is opened
      console.log('Notificacion abierta', noti);
      await this.notiRecibida(noti.notification);
    });

    this.oneSignal.endInit();
  }

  async notiRecibida(noti: OSNotification) {

    await this.cargarMensajes();

    const payload = noti.payload;
    const existePush = this.mensajes.find(mensaje => mensaje.notificationID === payload.notificationID);
    if (existePush) {
      return;
    }
    this.mensajes.unshift(payload);
    this.pushListener.emit(payload);
    await this.guardarMensajes();
  }

  guardarMensajes() {
    this.storage.set('mensajes', this.mensajes);
  }

  async cargarMensajes() {
    this.mensajes = await this.storage.get('mensajes') || [];
    return this.mensajes;
  }
}
