import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { ShowingtimeSearchbarComponent } from "./showingtime-searchbar/showingtime-searchbar.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ShowingtimeSearchbarComponent],
  exports: [ShowingtimeSearchbarComponent],
})
export class CustomComponentsModule {}
