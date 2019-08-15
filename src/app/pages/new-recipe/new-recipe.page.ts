import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  ing:number[]=[];
  instrucciones:string;
  constructor(private route: ActivatedRoute, private pastelesService: PastelesService) { }

  ngOnInit() {
    this.pastelesService.getIngredientes()
      .subscribe(resp => {
        let x = [];
        x.push(resp);
        for (var ingrediente of x[0]) {
          this.ingredientes.push(ingrediente);
        }

        ;
      });

  }
  showselected(){
    this.ing.push(parseInt(this.selected_value));
  }
  

  insert(){
    
    this.pastelesService.insertProcedimiento(this.instrucciones)
    .subscribe(resp => {
      console.log(resp);
     }, error => {
      console.log(error);
    });    
  }
}

