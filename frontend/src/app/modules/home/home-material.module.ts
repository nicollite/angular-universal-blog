import { NgModule } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  exports: [MatDividerModule, MatCardModule],
})
export class HomeMaterialModule {}
