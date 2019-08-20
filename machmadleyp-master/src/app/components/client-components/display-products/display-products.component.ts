import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { PaginationService } from '../../../services/pagination.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { ProductOptionsComponent } from '../../../components/administor-components/product-options/product-options.component';
import { SalesService } from '../../../services/sales.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  public options: Array<object> = new Array<object>();
  arr = ["AKC6338 מיטה מלבנית משובצת.JPG", "AKC4600 מיטת אביב מלבנית.JPG", "AKC1500 מיטה אורטופדית דוגמת מעוין.JPG", "AKC3115 מיטת 80 מרובעת3.JPG", "מיטת-זמש-אורטופדית-250x150.jpg", "AKC3462 מיטה פסים עגולה2.JPG", "מיטת-זמש-אורטופדית-250x150.jpg", "מיטת-זמש-אורטופדית-250x150.jpg"]
  listProductByCategoryForSort;
  listSales = [];
  arrProductOption = [];
  constructor(private productsService: ProductsService,
    private paginationService: PaginationService,
    private shoppingCartService: ShoppingCartService,
    private salesService: SalesService
  ) {

    salesService.getListSales().subscribe(
      (data: Array<object>) => {
        this.listSales = data;
      });
    this.productOption();
  }
  ngOnInit() {

    this.listProductByCategoryForSort = this.productsService.listProductByCategory.filter(x => x['_id'] != "");
    this.paginationService.setPage(1);

  }

  productOption() {
    let haveOption = false;
    let i = 0;
    for (let pOptinItem in this.productsService.listProductOptions) {
      for (let pItem in this.productsService.listProductByCategory) {
        for (let pProductOption in this.productsService.listProductByCategory[pItem]["options"]) {
          if (this.productsService.listProductOptions[pOptinItem]["_id"] == this.productsService.listProductByCategory[pItem]["options"][pProductOption]["_id"]) {

            haveOption = true;
          }
        }
      }
      if (haveOption == true)
        this.arrProductOption[i++] = this.productsService.listProductOptions[pOptinItem];
    }
  }
  //getCurrentlyPrice(p): number {
  //  for (var i = 0; i < this.salesService.listSale.length; i++) {
  //    if (p._id == this.salesService.listSale[i]['_id'])
  //  }
  //}
  maxPrice() {
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    this.productsService.listProductByCategory = this.productsService.listProductByCategory.sort((a, b) => this.shoppingCartService.currentlyPrice(b) - a['price']);
    this.paginationService.setPage(1);
  }
  minPrice() {
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    this.productsService.listProductByCategory = this.productsService.listProductByCategory.sort((a, b) => this.shoppingCartService.currentlyPrice(a) - b['price']);
    this.paginationService.setPage(1);
  }
  orders() {
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    this.productsService.listProductByCategory = this.productsService.listProductByCategory.filter((a, b) => b["numOfOrders"] - a["numOfOrders"]);
    this.paginationService.setPage(1);
  }
  search(str) {
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    this.productsService.listProductByCategory = this.productsService.listProductByCategory.filter(x => x["name"].indexOf(str) >= 0);
    this.paginationService.setPage(1);
  }

  refresh() {
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    this.paginationService.setPage(1);

  }
  checkClicked(values: Array<string>) {
    let arrCheck;
    let checkes = [];
    let i = 0;
    let isChecked = false;
    //שמירת כל ערכי אפשרויות המוצר הקיימות לקטגוריה זו
    arrCheck = document.getElementsByClassName("check");
    //checkes בדיקת הערכים שנבחרו ושמירתם במערך  
    for (let item of arrCheck) {
      if (item.checked)
        checkes[i++] = item.value;
    }
    i = 0;
    //arrSortProducts שמירת כל המוצרים במערך
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    let arrSortProducts = this.productsService.listProductByCategory;
    //הקצאת מערך לשימוש זמני השומר בכל סיבוב של הלולאה את המוצרים
    //העומדים בתנאי הסינון של האפשרות מוצר הנוכחית
    let arrP2 = [];
    let isProductOptionChecked = false;;
    //מעבר על מערך אפשרויות מוצר
    for (let option of this.arrProductOption) {
      //מעבר על רשימת המוצרים
      i = 0;
      for (let product of arrSortProducts) {
        //במעבר למוצר הבא איפוס הסימון
        isChecked = false;
        //מעבר על אמערך אפשרויות מוצר ברשימת המוצרים
        for (let productOption of product["options"]) {
          //מעבר על ערכי אפשרויות המוצר
          for (let item of productOption["values"]) {
            //מעבר על האינפוטים שנבחרו
            for (let value of checkes) {
              //בדיקה האם אחד מערכי אפשרויות המוצר הוא נבחר והוא מהקטגוריה הנוכחית
              for (let op of option["values"]) {
                if (value == op) {
                  if (value == item) {
                    // סימון המוצר
                    isChecked = true;
                  }
                  //סימון האפשרות מוצר 
                  isProductOptionChecked = true;
                }
              }
            }
          }
        }
        //אם המוצר מסומן
        if (isChecked) {
          //הוספת המוצר לרשימת המוצרים
          arrP2[i++] = product;
        }


      }
      //אם המשתמש סינן את אחד הערכים מהאפשרות המוצר הנוכחית
      if (isProductOptionChecked) {
        //הכנסת המוצרים המסוננים למערך וסינון מחדש...
        arrSortProducts = arrP2;
        //איפוס המערך להכנסת המוצרים המסוננים
        arrP2 = [];
        //איפוס סימון האפשרות מוצר הנוחית
        isProductOptionChecked = false;
      }
    }
    //שמירת המוצרים המסוננים לצורך הצגתם
    this.productsService.listProductByCategory = arrSortProducts;
    this.paginationService.setPage(1);
  }

  viewPrductDetails(product) {
    console.log(this.productsService.showProductDetails['options']);
    this.productsService.showProductDetails = product;
    this.productsService.showProductOptions = this.productsService.listProductOptions.filter(x => product.options.find(y => y._id == x["_id"]) != null);

  }
  //quantity = 1;
  //checkQuantity(q) {
  //  if (this.quantity > 0 || q == 1)
  //    this.quantity += q;
  //}
  //check(val) {
  //  if (val <= 0)
  //    this.quantity = 1;
  //  else
  //    this.quantity = val;
  //}
}
