import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/';
import { map, catchError } from 'rxjs/operators';

import { IProduct } from '../../app/shared/interfaces';

@Injectable()
export class DataService {
    baseUrl: string = 'https://cors-anywhere.herokuapp.com/https://my.api.mockaroo.com/product_catalog.json?key=866ae800';

    constructor(private http: HttpClient) { }

    getProducts() : Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.baseUrl)
            .pipe(
                catchError(this.handleError)
            );
    }

    getProduct(id: number) : Observable<IProduct> {
        return this.http.get<IProduct[]>(this.baseUrl)
        .pipe(
            map(products => {
                let product = products.filter((product: IProduct) => product.product_id === id);
                return (product && product.length) ? product[0] : null;
            }),
            catchError(this.handleError)
        )
    }

    private handleError(error:any) {
        console.error('Error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Server Error');
    }
}