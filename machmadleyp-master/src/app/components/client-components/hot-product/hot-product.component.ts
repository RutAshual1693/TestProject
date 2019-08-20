import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { StoreSettingService } from '../../../services/store-setting.service';
import { ProductsService } from '../../../services/products.service';
import { SalesService } from '../../../services/sales.service';
declare var $: any;
@Component({
  selector: 'app-hot-product',
  templateUrl: './hot-product.component.html',
  styleUrls: ['./hot-product.component.css']
})
export class HotProductComponent implements OnInit {

  arr = [{ "name": 'מזרן AKC810.gif' }, { "name": 'AKC7002 איגלו קטן.JPG' }, { "name": 'מזרן פוך פרוותי2.gif' }];
  arr1 = [{ "name": 'מיטה 6370.gif' }, { "name": 'מיטה ויסקו חימום עצמי חום.jpg' }, { "name": 'מיטת-זמש-אורטופדית-250x150.jpg' }];
  arr2 = [];
  constructor(
    private shoppingCartService: ShoppingCartService,
    private storeSettingService: StoreSettingService,
    private productsService: ProductsService,
    private salesService: SalesService
  ) {
    this.hotProducts();
  }
  viewProductDetails(product) {
    this.productsService.showProductDetails = product;
    console.log(this.productsService.showProductDetails['options']);
  }
  id;
  clicked(i: number) {
    this.id = "addToCart" + i;
  }
  viewPrductDetails(product) {
    console.log(this.productsService.showProductDetails['options']);
    this.productsService.showProductDetails = product;
    this.productsService.showProductOptions = this.productsService.listProductOptions.filter(x => product.options.find(y => y._id == x["_id"]) != null);

  }
  //ngOnInit() {
  //  for (let i = 0; i < this.arr.length; i++)
  //    this.arr2[i] = this.arr[i].slice(0, this.arr[i].length - 4);
  //  $(window).scroll(function () {
  //    $(".slideanim").each(function () {
  //      var pos = $(".slideanim").offset().top;

  //      var winTop = $(window).scrollTop();
  //      if (pos < winTop + 600) {
  //        $(".slideanim").addClass("slide");
  //      }
  //      else {
  //        $(".slideanim").removeClass("slide");
  //      }
  //    });
  //  });
  //}
  hotProducts() {
    let prod = [], i = 0;
    for (let product of this.storeSettingService.storeSetting["hotProducts"])
      prod[i++] = this.productsService.listProducts.find(x => x["_id"] == product["_id"]);
    for (let product in prod) {
      if (parseInt(product) < 3)
        this.arr[product] = prod[product];
      else
        this.arr1[parseInt(product) - 3] = prod[product];
    }
  }
  ngOnInit() {

    $(window).scroll(function () {
      $(".moveR").each(function () {
        var pos = $(".moveR").offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(".moveR").addClass("proMoveR");
        }
        else {
          $(".moveR").removeClass("proMoveR");
        }
      });
      $(".moveL").each(function () {
        var pos = $(".moveL").offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(".moveL").addClass("proMoveL");
        }
        else {
          $(".moveL").removeClass("proMoveL");
        }
      });
      $(".moveR1").each(function () {
        var pos = $(".moveR1").offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(".moveR1").addClass("proMoveR");
        }
        else {
          $(".moveR1").removeClass("proMoveR");
        }
      });
      $(".moveL1").each(function () {
        var pos = $(".moveL1").offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(".moveL1").addClass("proMoveL");
        }
        else {
          $(".moveL1").removeClass("proMoveL");
        }
      });
    });
  }
}
