import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { OrdersService } from '../services/orders.service';



const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})

export class ExcelService {
 
  constructor(private ordersService: OrdersService) { }
  clicked() {
    this.exportAsExcelFile(this.ordersService.ordersList, "orders");
  }
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    var ws = XLSX.utils.json_to_sheet(json);

    /* add to workbook */
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "People");

    /* generate an XLSX file */
    XLSX.writeFile(wb, "sheetjs.xlsx");
    //const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    //const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    //this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}
