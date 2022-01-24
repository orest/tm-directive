import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CwsClickDirective } from '../directives/cws-click.directive';
import { CwsTmModalComponent } from '../components/cws-tm-modal/cws-tm-modal.component';
import { CwsTargetMessageComponent } from '../components/cws-target-message/cws-target-message.component';
import { CwsTargetBannerComponent } from '../components/cws-target-banner/cws-target-banner.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,

  ],
  declarations: [HomePage,CwsClickDirective,CwsTmModalComponent, CwsTargetMessageComponent, CwsTargetBannerComponent]
})
export class HomePageModule {}
