import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainComponent } from "./pages/main/main.component";

import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { HomeMaterialModule } from "./home-material.module";
import { PostListComponent } from './components/post-list/post-list.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, MainComponent, PostListComponent],
  imports: [CommonModule, FlexLayoutModule, SharedModule, HomeMaterialModule, HomeRoutingModule],
})
export class HomeModule {}
