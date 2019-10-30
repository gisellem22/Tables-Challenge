import { Component, OnInit } from '@angular/core';
import { GetNumbersService } from '../../services/get-numbers.service';
import { Numbers } from '../../models/numbers';


@Component({
  selector: 'app-table-numbers',
  templateUrl: './table-numbers.component.html',
  styleUrls: ['./table-numbers.component.css']
})
export class TableNumbersComponent implements OnInit {
  array: number[];
  errMsg: string;
  table: Numbers[] = [];
  myMap = new Map();
  sortedArray: number[];

  constructor(public getNumbersService: GetNumbersService) { }

  ngOnInit() { }

  getTableNumbers() {
    //resetear variables
    this.table = [];
    this.myMap.clear();
    this.errMsg = "";
    //consumo de API
    this.getNumbersService.numbers().subscribe(data => {
      console.log(data)
      this.array = data.data;
      console.log(this.array)
    //Respuesta nula o valida
      if (data.data === null) {
        this.errMsg = "try again!";
      } else {
        this.createMap(this.array);
        this.sortedArray = this.arraySort(this.array)
      }
    })
  };
  //Mapear el arreglo
  createMap(array: number[]) {
    array.forEach(a => {
      if (this.myMap.has(a)) {
        this.myMap.set(a, this.myMap.get(a) + 1)
      } else {
        this.myMap.set(a, 1)
      }
    })
    console.log(this.myMap)
    this.createObj(this.myMap)
  };
//Crear objeto para cada numero del arreglo
  createObj(arr: Map<number, number>) {
    let counter = 0;
    arr.forEach((a, b) => {
      console.log(a, b)
      this.table.push({
        counter: counter = counter + 1,
        number: b,
        quantity: a,
        first: this.array.indexOf(b),
        last: this.array.lastIndexOf(b),
        color: this.colorTheLine(a)
      })
    })
    console.log(this.table)
  };
  //Definir el color de la fila
  colorTheLine(num: number) {
    let lineColor = "";
    if (num >= 2) {
      lineColor = "table-success"; //verde
    } else if (num === 1) {
      lineColor = "table-warning"; //amarillo
    } else if (num < 1) {
      lineColor = "table-secondary"; //gris
    } else {
      lineColor = "";
    }
    return lineColor
  };
  //Ordenar los valores de menor a mayor
  arraySort (arr:number[]) {
    let result = Array.from(arr);
        for (let i = 1; i < result.length; i++) {
            for (let j = 0; j < (result.length - i); j++) {
                if (result[j] > result[j + 1]) {
                    let tmp = result[j];
                    result[j] = result[j + 1];
                    result[j + 1] = tmp;
                }
            }
        }
        console.log("resultado: ", result) 
        return result;
      };
}
