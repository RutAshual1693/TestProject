import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ActivatedRoute } from '@angular/router/src/router_state'
import { RouterModule } from '@angular/router';
import { routes } from './routes'
import { NgxStripeModule } from 'ngx-stripe';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { enableProdMode } from '@angular/core/src/application_ref';
import { indexDebugNode } from '@angular/core/src/debug/debug_node';
import { HomeComponent } from './components/client-components/home/home.component';
import { ProductsComponent } from './components/client-components/products/products.component';
import { LinksComponent } from './components/client-components/links/links.component';
import { ProductsService } from './services/products.service';
import { AddComponent } from './components/administor-components/add/add.component';
import { AdministorComponent } from './components/administor-components/administor/administor.component';
import { MainComponent } from './components/administor-components/main/main.component';
import { StoreSettingsComponent } from './components/administor-components/store-settings/store-settings.component';
import { CustomersAndOrdersComponent } from './components/administor-components/customers-and-orders/customers-and-orders.component';
import { StoreManagementComponent } from './components/administor-components/store-management/store-management.component';
import { EditProductsComponent } from './components/administor-components/edit-products/edit-products.component';
import { CategoriesComponent } from './components/administor-components/categories/categories.component';
import { CategoriesService } from './services/categories.service';
import { AddCategoryComponent } from './components/administor-components/add-category/add-category.component';
import { EditCategoryComponent } from './components/administor-components/edit-category/edit-category.component';
import { ProductOptionsComponent } from './components/administor-components/product-options/product-options.component';
import { ClientComponent } from './components/client-components/client/client.component';
import { CarouselAdvertisingComponent } from './components/client-components/carousel-advertising/carousel-advertising.component';
import { ListProductComponent } from './components/client-components/list-product/list-product.component';
import { EditProductOptionComponent } from './components/administor-components/edit-product-option/edit-product-option.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
//import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



import { EditorModule } from '@tinymce/tinymce-angular';
import { FileSelectDirective } from 'ng2-file-upload';

import { NavComponent } from './components/client-components/nav/nav.component';
import { CustomersComponent } from './components/administor-components/customers/customers.component';
import { AddCustomerComponent } from './components/administor-components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/administor-components/edit-customer/edit-customer.component';
import { GetCategoriesByTypePipe } from './pipes/get-categories-by-type.pipe';
import { ProductsBaseComponent } from './components/administor-components/products-base/products-base.component';
import { CategoriesBaseComponent } from './components/administor-components/categories-base/categories-base.component';
import { CustomersBaseComponent } from './components/administor-components/customers-base/customers-base.component';
import { ProductOptionsBaseComponent } from './components/administor-components/product-options-base/product-options-base.component';
import { AddProductOptionComponent } from './components/administor-components/add-product-option/add-product-option.component';
import { DisplayProductsComponent } from './components/client-components/display-products/display-products.component';
import { PaginationService } from './services/pagination.service';
import { TypesService } from './services/types.service';
import { CustomersService } from './services/customers.service';
import { ShoppingCartService } from './services/shopping-cart.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { SoppingCartComponent } from './components/client-components/sopping-cart/sopping-cart.component';
import { ProductDetailsComponent } from './components/client-components/product-details/product-details.component';
import { BaseClientPComponent } from './components/client-components/base-client-p/base-client-p.component';
import { RegistrationComponent } from './components/client-components/registration/registration.component';
import { LoginComponent } from './components/client-components/login/login.component';
import { EditProductComponent } from './components/administor-components/edit-product/edit-product.component';
import { DesignSettingComponent } from './components/administor-components/design-setting/design-setting.component';
import { HotCategoriesComponent } from './components/client-components/hot-categories/hot-categories.component';
import { HotProductsComponent } from './components/client-components/hot-products/hot-products.component';
import { ContactComponent } from './components/client-components/contact/contact.component';
import { AboutAsComponent } from './components/client-components/about-as/about-as.component';
import { OurCastomersSayComponent } from './components/client-components/our-castomers-say/our-castomers-say.component';
import { GetTypeAnimalPipe } from './pipes/get-type-animal.pipe';
import { AddImageComponent } from './components/administor-components/add-image/add-image.component';
import { HotProductComponent } from './components/client-components/hot-product/hot-product.component';
import { ParentCategoryComponent } from './components/administor-components/parent-category/parent-category.component';
import { ParentCategoriesBaseComponent } from './components/administor-components/parent-categories-base/parent-categories-base.component';
import { AddParentCategoryComponent } from './components/administor-components/add-parent-category/add-parent-category.component';
import { EditParentCategoryComponent } from './components/administor-components/edit-parent-category/edit-parent-category.component';
import { FooterComponent } from './components/client-components/footer/footer.component';
import { DiscountComponent } from './components/administor-components/discount/discount.component';
import { DiscountBaseComponent } from './components/administor-components/discount-base/discount-base.component';
import { GetSalePricePipe } from './pipes/get-sale-price.pipe';
import { NameLengthPipe } from './pipes/name-length.pipe';
import { DeleteOriginPricePipe } from './pipes/delete-origin-price.pipe';
import { OriginPricePipe } from './pipes/origin-price.pipe';
import { EmptyLinePipe } from './pipes/empty-line.pipe';
import { StripeComponent } from './components/client-components/stripe/stripe.component';
import { PaymentService } from './services/payment.service';
import { OrdersBaseComponent } from './components/administor-components/orders-base/orders-base.component';
import { OrdersComponent } from './components/administor-components/orders/orders.component';
import { DisplayCartComponent } from './components/client-components/display-cart/display-cart.component';
import { BaseDetailsComponent } from './components/client-components/base-details/base-details.component';
import { AnotherDetailOfCustomComponent } from './components/client-components/another-detail-of-custom/another-detail-of-custom.component';
import { LoginAdministratorComponent } from './components/administor-components/login-administrator/login-administrator.component';
import { SalesComponent } from './components/administor-components/sales/sales.component';
import { SalesBaseComponent } from './components/administor-components/sales-base/sales-base.component';
import { EditSaleComponent } from './components/administor-components/edit-sale/edit-sale.component';
import { CategoryAndParentCategoryPipe } from './pipes/category-and-parent-category.pipe';

import { AuthService } from './services/auth.service'
import { AuthGuard } from './auth.guard';
import { BaseAdminComponent } from './components/administor-components/base-admin/base-admin.component';
import { GetStringPipe } from './pipes/get-string.pipe';
import { ConfirmDeletionComponent } from './components/administor-components/confirm-deletion/confirm-deletion.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    LinksComponent,
    AddComponent,
    AdministorComponent,
    EditProductsComponent,
    MainComponent,
    StoreSettingsComponent,
    CustomersAndOrdersComponent,
    StoreManagementComponent,
    CategoriesComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ProductOptionsComponent,
    ClientComponent,
    ListProductComponent,
    EditProductOptionComponent,
    NavComponent,
    CustomersComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    GetCategoriesByTypePipe,
    ProductsBaseComponent,
    CategoriesBaseComponent,
    CustomersBaseComponent,
    ProductOptionsBaseComponent,
    AddProductOptionComponent,
    DisplayProductsComponent,
    SoppingCartComponent,
    ProductDetailsComponent,
    BaseClientPComponent,
    RegistrationComponent,
    LoginComponent,
    CarouselAdvertisingComponent,
    HotCategoriesComponent,
    HotProductsComponent,
    EditProductComponent,
    DesignSettingComponent,
    ContactComponent,
    AboutAsComponent,
    OurCastomersSayComponent,
    GetTypeAnimalPipe,
    AddImageComponent,
    FileSelectDirective,
    HotProductComponent,
    ParentCategoryComponent,
    ParentCategoriesBaseComponent,
    AddParentCategoryComponent,
    EditParentCategoryComponent,
    FooterComponent,
    DiscountComponent,
    DiscountBaseComponent,
    GetSalePricePipe,
    NameLengthPipe,
    DeleteOriginPricePipe,
    OriginPricePipe,
    EmptyLinePipe,
    StripeComponent,
    OrdersBaseComponent,
    OrdersComponent,
    DisplayCartComponent,
    BaseDetailsComponent,
    AnotherDetailOfCustomComponent,
    LoginAdministratorComponent,
    SalesComponent,
    SalesBaseComponent,
    EditSaleComponent,
    CategoryAndParentCategoryPipe,
    BaseAdminComponent,
    GetStringPipe,
    ConfirmDeletionComponent,
    SafeHtmlPipe
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgMultiSelectDropDownModule.forRoot(),
    EditorModule,
    FontAwesomeModule,
    Angular2FontawesomeModule,
    NgxStripeModule.forRoot('pk_test_2Xy7zYp54ZVOaiZYr61XYpTj')
  ],
  providers: [ProductsService, CategoriesService, PaginationService, TypesService, CustomersService, ShoppingCartService, PaymentService, AuthService, AuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
