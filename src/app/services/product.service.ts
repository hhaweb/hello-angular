import { Injectable } from "@angular/core";
import { AppSettings } from "../network/app-setting";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ProductServiceService {
  // product ={productId:"",productName:"",description:"",price:0}
  constructor(private http: HttpClient) {}

  addProduct(product: object): Observable<object> {
    console.log(product);
    return this.http.post(AppSettings.API_ENDPOINT + "save", product);
  }

  getProductsList(): Observable<any> {
    return this.http.get(AppSettings.API_ENDPOINT + "product");
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(AppSettings.API_ENDPOINT + `getProduct/${id}`);
  }

  deleteProduct(id: number) {
    return this.http.get(AppSettings.API_ENDPOINT + `delete/${id}`);
  }
}
