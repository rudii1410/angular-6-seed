import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentModule } from '../../component/component.module';
import { PipesModule } from '../../pipeline/pipes.module';
import { RegisterPage } from './register.page';

export const routes: Routes = [
  {
      path: '',
      component: RegisterPage
  }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        CommonModule,
        ComponentModule,
        PipesModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        RegisterPage
    ]
})
export class RegisterPageModule { }