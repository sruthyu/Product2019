import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../shared/product.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  formProduct: FormGroup;
  product: Product= new Product();

  constructor(private service: ProductService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.formProduct=this.formBuilder.group({
     productname:['',[Validators.required]],
     productdescription:['',[Validators.required]],
     promfgdate:['',[Validators.required]],
     productprice:['',[Validators.required]]
    });
  }
  get formControls()
  {
    return this.formProduct.controls;
  }
  addProduct()
  {
   this.product.productname=this.formProduct.controls.productname.value;
   this.product.productdescription=this.formProduct.controls.productdescription.value;
   this.product.promfgdate=this.formProduct.controls.promfgdate.value;
   this.product.productprice=this.formProduct.controls.productprice.value;
   console.log(this.product);
   this.service.addProducts(this.product).subscribe();
   this.toastr.success('Success :)', 'Product added successfully');
  }

}
