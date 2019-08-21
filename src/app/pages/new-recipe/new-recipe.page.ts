import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PastelesService } from 'src/app/services/pasteles.service';
import { Ingrediente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.page.html',
  styleUrls: ['./new-recipe.page.scss'],
})
export class NewRecipePage implements OnInit {
  ingredientes: Ingrediente[] = [];
  selected_value: string;
  ing: number[] = [];
  instrucciones: string;
  idProcedimiento: string;
  idGReceta: string;
  idPastel:string;
  constructor(private route: ActivatedRoute,public router: Router, private pastelesService: PastelesService) { }

  ngOnInit() {
    this.idPastel = this.route.snapshot.paramMap.get('id');
    this.pastelesService.getIngredientes()
      .subscribe(resp => {
        let x = [];
        x.push(resp);
        for (var ingrediente of x[0]) {
          this.ingredientes.push(ingrediente);
        };
      });

  }
  showselected() {
    this.ing.push(parseInt(this.selected_value));
  }
  getLastProcID() {
    this.pastelesService.getProcedimientos()
      .subscribe(resp => {
        let x = [];
        x.push(resp);
        for (var procedimiento of x[0]) {
          this.idProcedimiento = procedimiento.id;
        }
      });
  }
  getLastRecetasID() {
    this.pastelesService.getGrupos()
      .subscribe(resp => {
        let x = [];
        let G: string;
        G="0";
        x.push(resp);
        for (var grupo of x[0]) {
          G = grupo.id_grupo;
        }
        G = parseInt(G) + 1 + "";
        for (var i of this.ing) {
          this.pastelesService.insertGrupo(G, i).subscribe(resp => {
            console.log(resp);
          });
        }
        this.pastelesService.insertReceta(this.idProcedimiento, this.idPastel, G).subscribe(resp => {
          console.log(resp);
          this.router.navigate(['/cake-name/' + this.idPastel]);
        });
      });
  }

  insert() {
    this.pastelesService.insertProcedimiento(this.instrucciones)
      .subscribe(resp => {
        this.getLastProcID();
        this.getLastRecetasID();

      });
  }
}

