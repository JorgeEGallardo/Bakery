import { Component, OnInit, ApplicationRef } from '@angular/core';
import { PushService } from 'src/app/services/push.service';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-noti',
  templateUrl: './noti.page.html',
  styleUrls: ['./noti.page.scss'],
})
export class NotiPage implements OnInit {
  mensajes: OSNotificationPayload[] = [];


  constructor( private pushService: PushService, private applicationRef: ApplicationRef, public geolocation: Geolocation) { }

  ngOnInit() {
    this.pushService.pushListener.subscribe( noti => {
      this.mensajes.unshift(noti);
      this.applicationRef.tick();
    });
    this.geolocationNative();
  }

    async ionViewEillEnter() {
      this.mensajes = await this.pushService.getMensajes();
    }

    geolocationNative() {
      this.geolocation.getCurrentPosition().then((getposition: Geoposition) => {
        console.log(getposition);
      });
    }
}
