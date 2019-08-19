import { Component, OnInit, ApplicationRef } from '@angular/core';
import { PushService } from 'src/app/services/push.service';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-noti',
  templateUrl: './noti.page.html',
  styleUrls: ['./noti.page.scss'],
})
export class NotiPage implements OnInit {
  mensajes: OSNotificationPayload[] = [];


  constructor( private pushService: PushService, private applicationRef: ApplicationRef) { }

  ngOnInit() {
    this.pushService.pushListener.subscribe( noti => {
      this.mensajes.unshift(noti);
      this.applicationRef.tick();
    });
  }

    async ionViewEillEnter() {
      this.mensajes = await this.pushService.getMensajes();
    }
}
