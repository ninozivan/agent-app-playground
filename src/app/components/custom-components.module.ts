import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { ShowingtimeSearchbarComponent } from "./showingtime-searchbar/showingtime-searchbar.component";
import { ShowingtimeSideMenuComponent } from "./showingtime-side-menu/showingtime-side-menu.component";
import { ShowingtimeTabsMenuComponent } from "./showingtime-tabs-menu/showingtime-tabs-menu.component";
import { ShowingtimeListingPriceComponent } from "./showingtime-listing-price/showingtime-listing-price.component";
import { ShowingtimeListingAddressComponent } from "./showingtime-listing-address/showingtime-listing-address.component";
import { ShowingtimeListingAppointmentStatusBadgeComponent } from "./showingtime-listing-appointment-status-badge/showingtime-listing-appointment-status-badge.component";
import { ShowingtimeListingImageComponent } from "./showingtime-listing-image/showingtime-listing-image.component";
import { ShowingtimeListingInteriorDetailsComponent } from "./showingtime-listing-interior-details/showingtime-listing-interior-details.component";
import { ShowingtimeListingMlsDetailsComponent } from "./showingtime-listing-mls-details/showingtime-listing-mls-details.component";
import { ShowingtimeListingActionButtonsComponent } from "./showingtime-listing-action-buttons/showingtime-listing-action-buttons.component";
import { ShowingtimeListItemListingComponent } from "./showingtime-list-item-listing/showingtime-list-item-listing.component";
import { ShowingtimeLogoComponent } from "./showingtime-logo/showingtime-logo.component";
import { ShowingtimeHeaderComponent } from "./showingtime-header/showingtime-header.component";
import { ShowingtimeHeaderDecorationShapesComponent } from "./showingtime-header-decoration-shapes/showingtime-header-decoration-shapes.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [
    ShowingtimeSearchbarComponent,
    ShowingtimeSideMenuComponent,
    ShowingtimeTabsMenuComponent,
    ShowingtimeListingPriceComponent,
    ShowingtimeListingAddressComponent,
    ShowingtimeListingAppointmentStatusBadgeComponent,
    ShowingtimeListingImageComponent,
    ShowingtimeListingInteriorDetailsComponent,
    ShowingtimeListingMlsDetailsComponent,
    ShowingtimeListingActionButtonsComponent,
    ShowingtimeListItemListingComponent,
    ShowingtimeLogoComponent,
    ShowingtimeHeaderDecorationShapesComponent,
    ShowingtimeHeaderComponent,
  ],
  exports: [
    ShowingtimeSearchbarComponent,
    ShowingtimeSideMenuComponent,
    ShowingtimeTabsMenuComponent,
    ShowingtimeSearchbarComponent,
    ShowingtimeSideMenuComponent,
    ShowingtimeTabsMenuComponent,
    ShowingtimeListingPriceComponent,
    ShowingtimeListingAddressComponent,
    ShowingtimeListingAppointmentStatusBadgeComponent,
    ShowingtimeListingImageComponent,
    ShowingtimeListingInteriorDetailsComponent,
    ShowingtimeListingMlsDetailsComponent,
    ShowingtimeListingActionButtonsComponent,
    ShowingtimeListItemListingComponent,
    ShowingtimeLogoComponent,
    ShowingtimeHeaderDecorationShapesComponent,
    ShowingtimeHeaderComponent,
  ],
})
export class CustomComponentsModule {}
