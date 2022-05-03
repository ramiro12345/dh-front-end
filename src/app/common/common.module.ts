import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordSecretPipe } from './pipes/password-secret.pipe';



@NgModule({
  declarations: [
    PasswordSecretPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [PasswordSecretPipe]
})
export class CommonModules { }
