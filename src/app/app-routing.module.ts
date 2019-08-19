import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cake-list', pathMatch: 'full' },
  { path: 'cake-list', loadChildren: './pages/cake-list/cake-list.module#CakeListPageModule' },
  { path: 'cake-name', loadChildren: './pages/cake-name/cake-name.module#CakeNamePageModule' },
  { path: 'recipe-name', loadChildren: './pages/recipe-name/recipe-name.module#RecipeNamePageModule' },
  { path: 'new-recipe', loadChildren: './pages/new-recipe/new-recipe.module#NewRecipePageModule' },  { path: 'new-cake', loadChildren: './pages/new-cake/new-cake.module#NewCakePageModule' },
  { path: 'noti', loadChildren: './pages/noti/noti.module#NotiPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
