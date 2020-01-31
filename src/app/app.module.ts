import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NaviComponent } from "./common/navi/navi.component";
import { PagerComponent } from "./common/pager/pager.component";
import { HomeComponent } from "./page/home/home.component";
import { ProductComponent } from "./page/product/product.component";
import { ProductListComponent } from "./page/product-list/product-list.component";
import { ProductServiceService } from "./services/product.service";
const appRouter: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "product",
    component: ProductComponent
  },
  {
    path: "produt/:productId",
    component: ProductComponent
  },
  {
    path: "product-list",
    component: ProductListComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NaviComponent,
    PagerComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter),
    SlimLoadingBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
