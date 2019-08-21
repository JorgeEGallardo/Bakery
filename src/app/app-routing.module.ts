import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cake-list', pathMatch: 'full' },
  { path: 'cake-list', loadChildren: './pages/cake-list/cake-list.module#CakeListPageModule' },
  { path: 'cake-name/:id', loadChildren: './pages/cake-name/cake-name.module#CakeNamePageModule' },
  { path: 'recipe-name/:id', loadChildren: './pages/recipe-name/recipe-name.module#RecipeNamePageModule' },
  { path: 'new-recipe/:id', loadChildren: './pages/new-recipe/new-recipe.module#NewRecipePageModule' },
  { path: 'new-cake', loadChildren: './pages/new-cake/new-cake.module#NewCakePageModule' },
  { path: 'up-cake/:id', loadChildren: './pages/up-cake/up-cake.module#UpCakePageModule' },
  { path: 'up-recipe/:id', loadChildren: './pages/up-recipe/up-recipe.module#UpRecipePageModule' },
  { path: 'noti', loadChildren: './pages/noti/noti.module#NotiPageModule' },
  { path: 'geolocal', loadChildren: './pages/geolocal/geolocal.module#GeolocalPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
