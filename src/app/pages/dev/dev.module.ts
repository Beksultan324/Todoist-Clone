import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevComponent } from './dev.component';
import { OverlayExampleComponent } from './overlay-example/overlay-example.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { DatabaseModule } from '@angular/fire/database';
import { environment } from 'environments/environment';

@NgModule({
  declarations: [DevComponent, OverlayExampleComponent],
  imports: [CommonModule, AngularFirestoreModule, AngularFireModule, DatabaseModule],
  exports: [DevComponent, OverlayExampleComponent],
})
export class DevModule {}
