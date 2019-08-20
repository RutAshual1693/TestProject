import { Routes } from "@angular/router";
import { HomeComponent } from "./components/client-components/home/home.component";
import { LinksComponent } from "./components/client-components/links/links.component";
import { ProductsComponent } from "./components/client-components/products/products.component";
import { AddComponent } from "./components/administor-components/add/add.component";
import { AdministorComponent } from "./components/administor-components/administor/administor.component";
import { MainComponent } from "./components/administor-components/main/main.component";
import { CustomersAndOrdersComponent } from "./components/administor-components/customers-and-orders/customers-and-orders.component";
import { StoreSettingsComponent } from "./components/administor-components/store-settings/store-settings.component";
import { StoreManagementComponent } from "./components/administor-components/store-management/store-management.component";
import { EditProductsComponent } from "./components/administor-components/edit-products/edit-products.component";
import { CategoriesComponent } from "./components/administor-components/categories/categories.component";
import { AddCategoryComponent } from "./components/administor-components/add-category/add-category.component";
import { EditCategoryComponent } from "./components/administor-components/edit-category/edit-category.component";
import { ProductOptionsComponent } from "./components/administor-components/product-options/product-options.component";
import { ClientComponent } from "./components/client-components/client/client.component";
import { EditProductOptionComponent } from "./components/administor-components/edit-product-option/edit-product-option.component";
import { CustomersComponent } from "./components/administor-components/customers/customers.component";
import { AddCustomerComponent } from "./components/administor-components/add-customer/add-customer.component";
import { EditCustomerComponent } from "./components/administor-components/edit-customer/edit-customer.component";
import { ProductsBaseComponent } from "./components/administor-components/products-base/products-base.component";
import { CategoriesBaseComponent } from "./components/administor-components/categories-base/categories-base.component";
import { CustomersBaseComponent } from "./components/administor-components/customers-base/customers-base.component";
import { ProductOptionsBaseComponent } from "./components/administor-components/product-options-base/product-options-base.component";
import { Component } from "@angular/core/src/metadata/directives";
import { DisplayProductsComponent } from "./components/client-components/display-products/display-products.component";
import { BaseClientPComponent } from "./components/client-components/base-client-p/base-client-p.component";
import { ProductDetailsComponent } from "./components/client-components/product-details/product-details.component";
import { EditProductComponent } from "./components/administor-components/edit-product/edit-product.component";
import { DesignSettingComponent } from "./components/administor-components/design-setting/design-setting.component";
import { AddProductOptionComponent } from "./components/administor-components/add-product-option/add-product-option.component";
import { EditParentCategoryComponent } from "./components/administor-components/edit-parent-category/edit-parent-category.component";
import { AddParentCategoryComponent } from "./components/administor-components/add-parent-category/add-parent-category.component";
import { ParentCategoriesBaseComponent } from "./components/administor-components/parent-categories-base/parent-categories-base.component";
import { ParentCategoryComponent } from "./components/administor-components/parent-category/parent-category.component";
import { DiscountBaseComponent } from "./components/administor-components/discount-base/discount-base.component";
import { DiscountComponent } from "./components/administor-components/discount/discount.component";
import { ShoppingCartService } from "./services/shopping-cart.service";
import { SoppingCartComponent } from "./components/client-components/sopping-cart/sopping-cart.component";
import { DisplayCartComponent } from "./components/client-components/display-cart/display-cart.component";
import { AnotherDetailOfCustomComponent } from "./components/client-components/another-detail-of-custom/another-detail-of-custom.component";
import { OrdersComponent } from "./components/administor-components/orders/orders.component";
import { SalesComponent } from "./components/administor-components/sales/sales.component";
import { SalesBaseComponent } from "./components/administor-components/sales-base/sales-base.component";
import { EditSaleComponent } from "./components/administor-components/edit-sale/edit-sale.component";
import { AuthGuard } from "../app/auth.guard";
import { LoginAdministratorComponent } from "./components/administor-components/login-administrator/login-administrator.component";
import { BaseAdminComponent } from "./components/administor-components/base-admin/base-admin.component";
import { AboutAsComponent } from "./components/client-components/about-as/about-as.component";

export const routes: Routes = [
  {
    path: "client",
    component: ClientComponent,
    children: [
      {
        path: "anotherDetails",
        component: AnotherDetailOfCustomComponent
      },
      {
        path: "aboutAs",
        component: AboutAsComponent
      },
      //{
      //  path: "home",
      //  component: HomeComponent,
      //  children: [
      {
        path: "baseClientP",
        component: BaseClientPComponent,
        children: [
          {
            path: "",
            component: DisplayProductsComponent
          },
          {
                path: "anotherDetails",
                component: AnotherDetailOfCustomComponent
          },
          {
            path: "displayCart",
            component: DisplayCartComponent
          },
          //{
          //  path: "productDetails",
          //  component: ProductDetailsComponent,
          //  children: [
         
          //    {
          //      path: "baseClientP",
          //      component: BaseClientPComponent,
          //      children: [
          //        {
          //          path: "",
          //          component: DisplayCartComponent
          //        }
          //      ]
          //    },
          //  ]
          //}
          ]    
        }
        ]
      },
  {
    path: "myOnlineStore",
    component: BaseAdminComponent,
    children: [
     {
        path: "",
        component: LoginAdministratorComponent
      },    
  {
    canActivate: [AuthGuard],
    path: "administor",
    component: AdministorComponent,
    children: [
      {
        path: "orders",
        component: OrdersComponent

      },

          {
            path: "designSetting",
            component: DesignSettingComponent
          },
          {
            path: "productsBase",
            component: ProductsBaseComponent,
            children: [
              {
                path: "add",
                component: AddComponent,
              },
              {
                path: "editProduct2",
                component: EditProductComponent,
              },
              {
                path: "",
                component: EditProductsComponent,
              },
            ]
          },
          {
            path: "main",
            component: MainComponent,
          },
          {
            path: "customersBase",
            component: CustomersBaseComponent,
            children: [
              {
                path: "addCustomer",
                component: AddCustomerComponent,
              },
              {
                path: "editCustomer",
                component: EditCustomerComponent,
              },
              {
                path: "",
                component: CustomersComponent,
              },
            ]
          },
          {
            path: "storeSettings",
            component: StoreSettingsComponent,
          },
          {
            path: "storeManagement",
            component: StoreManagementComponent,
          },
          {
            path: "parentCategoriesBase",
            component: ParentCategoriesBaseComponent,
            children: [
              {
                path: "addParentCategory",
                component: AddParentCategoryComponent
              },
              {
                path: "editParentCategory",
                component: EditParentCategoryComponent
              },
              {
                path: "",
                component: ParentCategoryComponent
              }
            ]
          },
      {
        path: "saleBase",
        component: SalesBaseComponent,
        children: [
          {
            path: "addSale",
            component: DiscountComponent
          },
          {
            path: "editSale",
            component: EditSaleComponent
          },
          {
            path: "",
            component: SalesComponent
          }
        ]
      },
          {
            path: "categoriesBase",
            component: CategoriesBaseComponent,
            children: [
              {
                path: "addCategory",
                component: AddCategoryComponent
              },
              {
                path: "editCategory",
                component: EditCategoryComponent
              },
              {
                path: "",
                component: CategoriesComponent
              }
            ]
          },
          {
            path: "productOptionsBase",
            component: ProductOptionsBaseComponent,
            children: [{
              path: "editProductOption",
              component: EditProductOptionComponent
            },
            {
              path: "addProductOption",
              component: AddProductOptionComponent
            },
            {
              path: "",
              component: ProductOptionsComponent
            }

            ]
          }
        ]
      }]
  },
    ]

