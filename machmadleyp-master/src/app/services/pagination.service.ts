import { Injectable } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
 // private allItems: object[];
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];
  category: string;
  baseCategory: string;
  constructor(private productsService: ProductsService) { }
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 9) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= 9) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 8;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.getPager(this.productsService.listProductByCategory.length, page);
    // get current page of items
    this.pagedItems = this.productsService.listProductByCategory.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
