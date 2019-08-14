import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CakeListPage } from './cake-list.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: CakeListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [CakeListPage]
})
export class CakeListPageModule {}
