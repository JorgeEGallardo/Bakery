import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { RespuestaPasteles, Pastel, GrupoReceta, Receta, GrupoIngredientes, Ingrediente, GruposIngredientes, Procedimiento, Ingredientes, Procedimientos } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PastelesService {

  constructor( private http:HttpClient) { }

  getPasteles(){
    return this.http.get<RespuestaPasteles>('http://apiav.site/APIpastel/public/api/pasteles');
  }
  getPastel(id){
    return this.http.get<Pastel>('http://apiav.site/APIpastel/public/api/pastel/'+id);
  }
  getRecetas(){
    return this.http.get<GrupoReceta>('http://apiav.site/APIpastel/public/api/recetas');
  }
  getReceta(id){
    return this.http.get<Receta>('http://apiav.site/APIpastel/public/api/receta/'+id);  
  }
  getGrupos(){
    return this.http.get<GruposIngredientes>('http://apiav.site/APIpastel/public/api/in_grupos');
  }
  getGrupo(id){
    return this.http.get<GrupoIngredientes>('http://apiav.site/APIpastel/public/api/in_grupo/'+id);  
  }
  getIngrediente(id){
    return this.http.get<Ingrediente>('http://apiav.site/APIpastel/public/api/ingrediente/'+id);  
  }
  
  getIngredientes(){
    return this.http.get<Ingredientes>('http://apiav.site/APIpastel/public/api/ingredientes');  
  }
  getProcedimiento(id){
    return this.http.get<Procedimiento>('http://apiav.site/APIpastel/public/api/procedimiento/'+id);
  }
  getProcedimientos(){
    return this.http.get<Procedimientos>('http://apiav.site/APIpastel/public/api/procedimientos');
  }


  //Inserts
  insertPastel(sabor,nombre,descripcion){
    let postData= {
      "sabor":sabor,
      "nombre":nombre,
      "descripcion":descripcion,
      "id_receta":1
    }
    console.log(postData);
    return this.http.post('http://apiav.site/APIpastel/public/api/pastel',postData);

  }
  insertProcedimiento(txt){
    let postData= {
      "procedimiento":txt
    }
    return this.http.post('http://apiav.site/APIpastel/public/api/procedimiento',postData);
  }
  insertGrupo(txt2, txt){
    let postData= {
      "id_ingrediente":parseInt(txt),
      "id_grupo":parseInt(txt2)
    }
    console.log(postData);
    return this.http.post('http://apiav.site/APIpastel/public/api/in_grupo',postData);
  }
  insertReceta(idProcedimiento, idGrupo,idIngredientes){
    let postData= {
      "id_grupo":parseInt(idGrupo),
      "id_procedimiento":parseInt(idProcedimiento),
      "id_g_ing":parseInt(idIngredientes)
    }
    console.log(postData);
    return this.http.post('http://apiav.site/APIpastel/public/api/receta',postData);
  }
//Delete this
deleteReceta(id){
  return this.http.delete('http://apiav.site/APIpastel/public/api/recetadestroy/'+id);
}
deletePastel(id){
  return this.http.delete('http://apiav.site/APIpastel/public/api/pasteldes/'+id);
}

//updates

updateReceta(id,idProcedimiento, idGrupo,idIngredientes){
  let postData= {
    "id_grupo":parseInt(idGrupo),
    "id_procedimiento":parseInt(idProcedimiento),
    "id_g_ing":parseInt(idIngredientes)
  }
  console.log(postData);
  return this.http.put('http://apiav.site/APIpastel/public/api/recetaupdate/'+id,postData);
}

updateProcedimiento(id,txt){
  let postData= {
    "procedimiento":txt
  }
  return this.http.put('http://apiav.site/APIpastel/public/api/procedimientoupdate/'+id,postData);
}

updatePastel(id,sabor,nombre,descripcion){
  let postData= {
    "sabor":sabor,
    "nombre":nombre,
    "descripcion":descripcion,
    "id_receta":1
  }
  console.log(postData);
  return this.http.put('http://apiav.site/APIpastel/public/api/pastelup/'+id,postData);

}
}


