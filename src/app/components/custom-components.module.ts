import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { ShowingtimeSearchbarComponent } from "./showingtime-searchbar/showingtime-searchbar.component";
import { ShowingtimeSideMenuComponent } from "./showingtime-side-menu/showingtime-side-menu.component";
import { ShowingtimeTabsMenuComponent } from "./showingtime-tabs-menu/showingtime-tabs-menu.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [
    ShowingtimeSearchbarComponent,
    ShowingtimeSideMenuComponent,
    ShowingtimeTabsMenuComponent,
  ],
  exports: [
    ShowingtimeSearchbarComponent,
    ShowingtimeSideMenuComponent,
    ShowingtimeTabsMenuComponent,
  ],
})
export class CustomComponentsModule {}
