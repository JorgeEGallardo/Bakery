import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PastelesService } from 'src/app/services/pasteles.service';
import { Receta, Procedimiento, Ingrediente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-up-recipe',
  templateUrl: './up-recipe.page.html',
  styleUrls: ['./up-recipe.page.scss'],
})
export class UpRecipePage implements OnInit {
  idReceta: string;
  procedimiento:Procedimiento;
  receta:Receta;
  selected_value: string;
  ultG:string;
  ingredientes:Ingrediente[]=[];
  ing: number[] = [];
  instrucciones: string;
  constructor(private route: ActivatedRoute,public router: Router, private pastelesService: PastelesService) { }

  ngOnInit() {
    this.pastelesService.getIngredientes()
    .subscribe(resp => {
      let x = [];
      x.push(resp);
      for (var ingrediente of x[0]) {
        this.ingredientes.push(ingrediente);
      };
    });
    this.idReceta = this.route.snapshot.paramMap.get('id');
    this.pastelesService.getReceta(this.idReceta)
      .subscribe(resp => {
          this.receta=resp;
          this.pastelesService.getProcedimiento(this.receta.id_procedimiento)
          .subscribe(resp => {
              this.procedimiento=resp;
              this.pastelesService.getGrupos()
              .subscribe(resp => {
                let x = [];
                let G: string;
                G="0";
                x.push(resp);
                for (var grupo of x[0]) {
                  G = grupo.id_grupo;
                }
                this.ultG = parseInt(G) + 1 + "";
              });
          });
      });
  }
  showselected() {
    this.ing.push(parseInt(this.selected_value));
  }

  insert(){
    for (var i of this.ing) {
      this.pastelesService.insertGrupo(this.ultG, i).subscribe(resp => {
        console.log(resp);
      });
  }
  this.pastelesService.updateReceta(this.receta.id, this.receta.id_procedimiento, this.receta.id_grupo,this.ultG).subscribe(resp => {
    console.log(resp);
  });
  this.pastelesService.updateProcedimiento(this.receta.id_procedimiento, this.instrucciones).subscribe(resp => {
    this.router.navigate(['/cake-list']);
      
  });
}
}
