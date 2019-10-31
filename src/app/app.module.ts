import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {ListProductComponent} from './pages/list-product/list-product.component';
import {HeaderComponent} from './shared/layout/header/header.component';
import {FooterComponent} from './shared/layout/footer/footer.component';
import {SliderMainComponent} from './shared/slider-main/slider-main.component';
import {CategoryFeaturedComponent} from "./shared/category-featured/category-featured.component";
import {ProductFeaturedComponent} from './shared/product-featured/product-featured.component';
import {BoxContentComponent} from './shared/box-content/box-content.component';
import {SubFooterComponent} from './shared/layout/sub-footer/sub-footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FiltersProductComponent } from './shared/filters-product/filters-product.component';
import { BannerComponent } from './shared/banner/banner.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ListProductComponent,
        HeaderComponent,
        FooterComponent,
        SliderMainComponent,
        CategoryFeaturedComponent,
        ProductFeaturedComponent,
        BoxContentComponent,
        SubFooterComponent,
        FiltersProductComponent,
        BannerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
