import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PastelesService } from 'src/app/services/pasteles.service';
import { Pastel } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-up-cake',
  templateUrl: './up-cake.page.html',
  styleUrls: ['./up-cake.page.scss'],
})
export class UpCakePage implements OnInit {

  constructor(private route: ActivatedRoute, private pastelesService: PastelesService, public router: Router) {
  }
  pastel:Pastel;
  sabor:string;
  nombre:string;
  descripcion:string;
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.pastelesService.getPastel(id)
    .subscribe(resp => {
      this.pastel=resp;
    });
  }
  insert(){
    this.pastelesService.updatePastel(this.pastel.id,this.sabor,this.nombre,this.descripcion)
    .subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/cake-list']);
    });
  }

}
