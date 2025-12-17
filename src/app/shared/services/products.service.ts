import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Product } from '../types/product.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  currency: string = "INR";

  constructor(private _httpClient: HttpClient, private _toastr: ToastrService) { }

  private allProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(environment.BASE_API_PATH + "ProductMaster/GetProductList");
  }

  getProducts(): Observable<Product[]> {
    return this.allProducts();
  }
}
