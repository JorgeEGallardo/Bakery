import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PastelesService } from 'src/app/services/pasteles.service';

@Component({
  selector: 'app-new-cake',
  templateUrl: './new-cake.page.html',
  styleUrls: ['./new-cake.page.scss'],
})
export class NewCakePage implements OnInit {
sabor:string;
nombre:string;
descripcion:string; 
  constructor(public router: Router, private pastelesService: PastelesService) { }

  ngOnInit() {
  }
insert(){
  this.pastelesService.insertPastel(this.sabor,this.nombre,this.descripcion) 
  .subscribe(resp => {
    console.log(resp);
  });
}
}
