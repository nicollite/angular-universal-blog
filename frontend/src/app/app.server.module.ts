import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { AppModule } from "./app.module";
import { ServerModule, ServerTransferStateModule } from "@angular/platform-server";
import { FlexLayoutServerModule } from "@angular/flex-layout/server";

@NgModule({
  imports: [AppModule, ServerModule, ServerTransferStateModule, FlexLayoutServerModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
