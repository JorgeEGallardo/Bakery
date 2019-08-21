import { Component, OnInit } from '@angular/core';
import { PastelesService } from 'src/app/services/pasteles.service';
import { RespuestaPasteles, Pastel } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.page.html',
  styleUrls: ['./cake-list.page.scss'],
})
export class CakeListPage implements OnInit {
pasteles:Pastel[] = [];
  constructor(private pastelesService:PastelesService, public router: Router) { }

  //Recibir lista de pasteles
  ngOnInit() {
    this.pasteles=[];
  this.pastelesService.getPasteles()
  .subscribe(resp=>{
    let x = [];
    x.push(resp);
    for(var pastel of x[0]){
    this.pasteles.push(pastel);
    }  });
  }
nueva(){
  this.router.navigate(['/new-cake']);
}
  detalle(id){
    this.router.navigate(['/cake-name/'+id]);
  }
  delete(id) {
    this.pastelesService.deletePastel(id)
      .subscribe(resp => {
        console.log(resp);
      });
    this.ngOnInit();
  }
}
