import { Component, OnInit, Input } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import { ActivatedRoute, Router } from '@angular/router';
import { PastelesService } from 'src/app/services/pasteles.service';
import { Pastel, GrupoReceta, Receta, Ingrediente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-cake-name',
  templateUrl: './cake-name.page.html',
  styleUrls: ['./cake-name.page.scss'],
})
export class CakeNamePage implements OnInit {
  pastel: Pastel;
  recetas: Receta[] = [];
  constructor(private route: ActivatedRoute, private pastelesService: PastelesService, public router: Router) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.pastelesService.getPastel(id)
      .subscribe(resp => {
        console.log(resp);
        this.pastel = resp;
        this.getRecetas(this.pastel.id);
      })
  };

  detalle(id) {
    this.router.navigate(['/recipe-name/' + id]);
  }

  getRecetas(id) {
    this.pastelesService.getRecetas()
      .subscribe(resp => {
        let x = [];
        x.push(resp);
        for (var receta of x[0]) {
          if (receta.id_grupo == id) {
            this.recetas.push(receta);
          }
        }
        console.log(this.recetas);
      });
  }
}
