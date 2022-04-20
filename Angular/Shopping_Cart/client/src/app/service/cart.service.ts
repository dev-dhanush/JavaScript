import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');

  constructor() {}
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {

    // const alreadyExist 

    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  removefromcart(product: any) {
    this.cartItemList = this.cartItemList.filter((pro:any) => pro.id !== product.id);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += Number(a.total);
    });
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList = this.cartItemList.filter((pro:any) => pro.id !== product.id);
    // this.cartItemList.map((a: any, index: any) => {
    //   if (product.id === a.id) {
    //     this.cartItemList.splice(index, 1);
    //   }
    // });
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
