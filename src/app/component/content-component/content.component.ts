import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent {

    items = [{ 'title': 'Nike', 'desc': 'Sneakers', 'price': '$15' }, { 'title': 'Nike', 'desc': 'Sneakers', 'price': '$15' },
    { 'title': 'Puma', 'desc': 'Running shoes', 'price': '$35' }, { 'title': 'Puma', 'desc': 'Joggers', 'price': '$35' },
    { 'title': 'Reebok', 'desc': 'Sneakers', 'price': '$25' }, { 'title': 'Nike', 'desc': 'Sneakers', 'price': '$15' }];

    constructor(public dialog: MatDialog) { }

    /**
     * This function is triggered when user clicks the convert button
     * and it opens up a dialog box for conversion
     * @returns void
     */
    openDialogBox(): void {
        this.dialog.open(ConvertCurrencyComponent);
    }
}

@Component({
    selector: 'app-dialog',
    templateUrl: 'convert.component.html',
    styleUrls: ['./convert.component.scss']
})
export class ConvertCurrencyComponent implements OnInit {
    sourceAmount: number;
    sourceCurrency: string;
    destCurrency: string;
    outputAmount: number;
    allCurrencies = [];
    constructor(public dialogRef: MatDialogRef<ConvertCurrencyComponent>, private http: Http) { }

    // Called after the constructor has been initialized
    ngOnInit() {
        // This will fetch all the currencies from the response and add them to a array
        this.getCurrencies().subscribe((response) => {
            for (const keys of Object.keys(response['rates'])) {
                this.allCurrencies.push(keys);
            }
        });
    }

    /**
     * This function will make an api call to get the currencies details (their names and rates)
     * @returns Observable
     */
    getCurrencies(): Observable<object> {
        const url = 'https://data.fixer.io/api/latest?access_key=a22225565c9b3d18d2ebb3694ef5f6e4';
        const headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json; Charset=UTF-8');
        const options = new RequestOptions({ headers: headers });
        return this.http.get(url, options).map((res: Response) => res.json());
    }

    /**
     * This function gets triggered whenever the user clicks the convert button
     * and it will call other function to fetch the converted amount
     * @return void
     */
    covertAmount(): void {
        this.getConvertedAmount().subscribe((response) => {
            this.outputAmount = response['result'];
        });
    }

    /**
     * This function will make the api call to convert the amount from one currency to
     * another currency
     * @returns Observable
     */
    getConvertedAmount(): Observable<object> {
        const api_url = 'https://data.fixer.io/api/convert?access_key=a22225565c9b3d18d2ebb3694ef5f6e4&from=' +
            this.sourceCurrency + '&to=' + this.destCurrency + '&amount=' + this.sourceAmount;
        const headers = new Headers();
        headers.append('Content-type', '*/*');
        const options = new RequestOptions({ headers: headers });
        return this.http.get(api_url, options).map((res: Response) => res.json());
    }
}
