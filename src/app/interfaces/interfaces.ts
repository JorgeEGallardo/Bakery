export interface RespuestaPasteles  {
  pasteles:Pastel[];
  }
  export interface Pastel{
    id: number;
    created_at: string;
    updated_at: string;
    nombre: string;
    sabor: string;
    descripcion: string;
    id_receta: string;
    image: string;
  }
  export interface GrupoReceta {
    Recetas:Receta[];  
  }
  export interface Receta{
    id: number;
    created_at: string;
    updated_at: string;
    id_grupo: string;
    id_procedimiento: string;
    id_g_ing:string;
  }
  export interface GruposIngredientes{
    Grupos:GrupoIngredientes;
  }
  export interface GrupoIngredientes{
      id: number;
      created_at: string;
      updated_at: string;
      id_ingrediente: string;
      id_grupo: string;
  }
  export interface Ingredientes{
    Ingredientes:Ingrediente[];
  }
  export interface Ingrediente{
    
      id: number;
      created_at: string;
      updated_at: string;
      nombre: string;
  }
  export interface Procedimientos{
    Ingredientes:Procedimiento[];
  }
  export interface Procedimiento{
    id: number;
  created_at: string;
  updated_at: string;
  procedimiento: string;
  }