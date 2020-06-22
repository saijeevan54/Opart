import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {BridgetComponent} from '../bridget/bridget.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{path: '', component: BridgetComponent}]),
  ],
  exports: [
    BridgetComponent
  ],
  declarations: [BridgetComponent]
})
export class BridgetModule {}
