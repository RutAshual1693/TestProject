import { Component, OnInit } from '@angular/core';
import { TypesService } from './../../../services/types.service';
import { CategoriesService } from '../../../services/categories.service';
import { ProductsService } from '../../../services/products.service';
import { PaginationService } from '../../../services/pagination.service';
import { forEach } from '@angular/router/src/utils/collection';
declare var $: any;
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  homePage = true;
  constructor(private typesService: TypesService,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private paginationService: PaginationService) {
  }
  homePageClick() {
    this.productsService.homePage = true;
    //document.getElementById("navbar").style.border = "0";
  }
  chooseCategory(typeId, category) {
    this.paginationService.baseCategory = this.typesService.listTypes.find(x => x["_id"] == typeId)["name"];
    this.paginationService.category = this.categoriesService.listCategories.find(y => y["_id"] == category._id)["name"];
    //document.getElementById("navbar").style.borderBottomColor = "darkcyan";
    //document.getElementById("navbar").style.borderBottom = "solid";
    this.productsService.homePage = false;
    this.productsService.listProductByCategory = this.productsService.listProducts
      .filter(x => x["categories"]
        .find(y => (y["_id"]) == category._id) != null && x["typeAnimal"]
          .find(y1 => y1["_id"] == typeId) != null);
    this.paginationService.setPage(1);
    this.productsService.showHome = false;
  }
  ngOnInit() {
    $(document).ready(function () {
      // Add smooth scrolling to all links in navbar + footer link
      $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

    });
    $.noConflict();
    $(document).ready(function () {

      $('#myCarousel').carousel({
        interval: 3000,
      });
      $('#myCarousel1').carousel({
        interval: 6000,
      });
      $('#myCarousel2').carousel({
        interval: 1000,
      });
    });
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {

      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "0px 10px";
        document.getElementById("logo").style.fontSize = "25px";
        document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.46)";
      } else {
        document.getElementById("navbar").style.padding = "5px 10px";
        document.getElementById("logo").style.fontSize = "35px";

        document.getElementById("navbar").style.backgroundColor = "transparent";
      }
    }

  }

}

