import { Component, OnInit } from "@angular/core";
import { Product } from "../../model/product";
import { Observable } from "rxjs";
import { ProductServiceService } from "../../services/product.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  //productList: [Product];
  productList: Observable<Product[]>;
  constructor(
    private productService: ProductServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProductsList().subscribe(
      data => {
        console.log(data);
        this.productList = data;
      },
      error => console.log(error)
    );
  }

  deleteEmployee(id) {
    this.productService.deleteProduct(id).subscribe(
      data => {
        console.log(data);
        obj: this.getProductList();
      },
      error => console.log("hhhhhhh")
    );
  }

  updateEmployee(id) {
    alert(id);
  }

  employeeDetails(id) {
    this.router.navigate(["/product", { productId: id }]);
  }

  addProduct() {
    this.router.navigate(["/product"]);
  }
}
