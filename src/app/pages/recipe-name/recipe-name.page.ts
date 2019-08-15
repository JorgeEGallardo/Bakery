import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PastelesService } from 'src/app/services/pasteles.service';
import { Receta, Ingrediente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-recipe-name',
  templateUrl: './recipe-name.page.html',
  styleUrls: ['./recipe-name.page.scss'],
})
export class RecipeNamePage implements OnInit {
id="";
procedimiento="";
receta:Receta;
ingredientes:Ingrediente[]=[];
  constructor(public router: Router,private route: ActivatedRoute, private pastelesService: PastelesService) {
  }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.id=id;
    this.pastelesService.getReceta(id)
    .subscribe(resp => {
      console.log(resp);
      this.receta = resp;
      this.getProcedimiento(this.receta.id_procedimiento);
      this.getGrupo(id);
      })
}
getProcedimiento(id){
  this.pastelesService.getProcedimiento(id)
    .subscribe(resp => {
      this.procedimiento = resp.procedimiento;
    });
}
getGrupo(id) {
  this.pastelesService.getGrupos()
    .subscribe(resp => {
      let x = [];
      x.push(resp);
      for (var grupo of x[0]) {
        if (grupo.id_grupo == id) {
          this.getIngrediente(grupo.id_ingrediente);
        }
      }
     ;
    });
}

getIngrediente(id){
  this.pastelesService.getIngrediente(id)
  .subscribe(resp => {
    this.ingredientes.push(resp);
  });
}

nueva(){
  let id = this.receta.id_grupo;
  console.log(id);
  this.router.navigate(['/new-recipe/' + id]);
}
}


