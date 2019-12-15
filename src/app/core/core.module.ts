import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {router} from './core.router';




@NgModule({
  declarations: [HeaderComponent, MainareaComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  
  

  ],
  exports: [
    HeaderComponent,
    MainareaComponent,
    

  ]

})
export class CoreModule { }
