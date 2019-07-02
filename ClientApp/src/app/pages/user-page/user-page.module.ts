import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserPageComponent } from './user-page.component';

@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserPageComponent
  ],
  providers: [],
  bootstrap: [UserPageComponent]
})
export class UserPageModule { }
