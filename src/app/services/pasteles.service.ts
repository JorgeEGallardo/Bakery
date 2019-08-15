import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { RespuestaPasteles, Pastel, GrupoReceta, Receta, GrupoIngredientes, Ingrediente, GruposIngredientes, Procedimiento, Ingredientes } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PastelesService {

  constructor( private http:HttpClient) { }

  getPasteles(){
    return this.http.get<RespuestaPasteles>('http://erkapi.site/APIpastel/public/api/pasteles');
  }
  getPastel(id){
    return this.http.get<Pastel>('http://erkapi.site/APIpastel/public/api/pastel/'+id);
  }
  getRecetas(){
    return this.http.get<GrupoReceta>('http://erkapi.site/APIpastel/public/api/recetas');
  }
  getReceta(id){
    return this.http.get<Receta>('http://erkapi.site/APIpastel/public/api/receta/'+id);  
  }
  getGrupos(){
    return this.http.get<GruposIngredientes>('http://erkapi.site/APIpastel/public/api/in_grupos');
  }
  getGrupo(id){
    return this.http.get<GrupoIngredientes>('http://erkapi.site/APIpastel/public/api/in_grupo/'+id);  
  }
  getIngrediente(id){
    return this.http.get<Ingrediente>('http://erkapi.site/APIpastel/public/api/ingrediente/'+id);  
  }
  
  getIngredientes(){
    return this.http.get<Ingredientes>('http://erkapi.site/APIpastel/public/api/ingredientes');  
  }
  getProcedimiento(id){
    return this.http.get<Procedimiento>('http://erkapi.site/APIpastel/public/api/procedimiento/'+id);
  }


  insertProcedimiento(txt){
    let postData= {
      "procedimiento":txt
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'Access-Control-Allow-Headers',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET'
      })
    };

    return this.http.post('http://erkapi.site/APIpastel/public/api/procedimiento',postData, httpOptions);
  }
}
