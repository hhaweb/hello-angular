import { Component, OnInit } from "@angular/core";
import { Product } from "../../model/product";
import { ProductServiceService } from "../../services/product.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  product: Product = new Product();

  constructor(
    private productService: ProductServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let productId = null;
    productId = this.route.snapshot.paramMap.get("productId");
    if (productId != null) {
      this.getProductById(productId);
    }
  }
  /* 
  private initForm() {
    this.productForm = new FormGroup({
      id: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      brand: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      price: new FormControl(0, [Validators.required])
    });
  }
 */

  getProductById(id) {
    this.productService.getProduct(id).subscribe(data => {
      console.log("response", data);
      this.product = data.repObj;
    });
  }
  save() {
    if (this.checkData(this.product)) {
      /*   this.product.id = this.productForm.controls["id"].value;
      this.product.name = this.productForm.controls["name"].value;
      this.product.brand = this.productForm.controls["brand"].value;
      this.product.madein = this.productForm.controls["country"].value;
      this.product.price = this.productForm.controls["price"].value;
      console.log("product ::", this.product); */
      this.productService.addProduct(this.product).subscribe(data => {
        console.log(data);
        this.gotoList();
      });
    } else {
      alert("Please fill data");
    }
  }

  checkData(data: Product) {
    if (this.checkNull(data.name)) {
      return false;
    } else if (this.checkNull(data.brand)) {
      return false;
    } else if (this.checkNull(data.madein)) {
      return false;
    } else if (this.checkNull(data.price)) {
      return false;
    } else return true;
  }

  checkNull(data: any) {
    return data == null || data == "" ? true : false;
  }

  gotoList() {
    this.router.navigate(["/product-list"]);
  }
}
