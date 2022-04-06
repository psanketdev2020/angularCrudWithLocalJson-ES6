import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  laptopStatus: any = '';
  constructor() {}

  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black',
    status: 'avaliable',
  };

  hp = {
    brand: 'HP',
    hardDisk: '1 TB',
    color: 'Silver',
    status: 'avaliable',
  };

  noAval = {
    brand: 'Not Avaliable',
    status: 'not-avaliable'
  }

  DellLaptop() {
    return true;
  }

  HpLaptop() {
    return false;
  }

  ngOnInit(): void {
    let laptopBook = new Promise((resolve, reject) => {
      if (this.DellLaptop()) {
        return setTimeout(() => {
          // resolve('Dell Laptop Purchased');
          resolve(this.dell);
        }, 5000);
      } else if (this.HpLaptop()) {
        return setTimeout(() => {
          // resolve('HP Laptop Purchased');
          resolve(this.hp);
        }, 5000);
      } else {
        return setTimeout(() => {
          // reject('Laptop is not avaliable on store');
          reject(this.noAval);
        }, 3000);
      }
    });

    laptopBook
      .then((res) => {
        console.log('then code: ' + JSON.stringify(res));
        // this.laptopStatus = res;
      })
      .catch((err) => {
        console.error('catch code: ' + JSON.stringify(err));
        // this.laptopStatus = err;
      });
  }
}
