import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: Product;

  private baseUrl = 'http://localhost:58821/api';

  constructor(private http: HttpClient) { }
  getProduct(id:number): Observable<any>
  
  {
    return this.http.get(this.baseUrl+'/products/'+id);
  }
  getProductsList(): Observable<any>
  {
    return this.http.get(this.baseUrl+ '/products');
  }

  addProducts(product: Product)
  {
    return this.http.post(this.baseUrl+'/products',product);
  }

  updateProduct(productid: number,product: Product)
  {
    return this.http.put(this.baseUrl+'/products/'+productid,product);
  }
   
  deleteProduct(productid: number)
  {
    return this.http.delete(this.baseUrl+'/products/'+productid);
  }
}
