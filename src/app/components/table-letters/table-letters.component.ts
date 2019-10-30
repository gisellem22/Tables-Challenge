import { Component, OnInit } from '@angular/core';
import { GetLettersService } from '../../services/get-letters.service';
import { Texts } from '../../models/texts';

@Component({
  selector: 'app-table-letters',
  templateUrl: './table-letters.component.html',
  styleUrls: ['./table-letters.component.css']
})
export class TableLettersComponent implements OnInit {

  constructor(public getLettersService: GetLettersService) { }
  array: Texts[];
  table: any[] = [];
  letters: any[] = [];
  abc: string[];
  numbers: any[] = [];

  ngOnInit() { }

  getTableLetters() {
    //resetear variables
    this.table = [];
    this.letters = [];
    this.numbers = [];
    //consumo de API
    this.getLettersService.letters().subscribe(data => {
      this.array = data.data;
      console.log(this.array)
      this.removeSpecialChar(this.array);
      this.sumNumbers(this.array);
    })
  };
  //quita caracteres especiales, espacios, numeros y mayúsculas
  removeSpecialChar(array: Texts[]) {
    array.forEach(a =>
      this.table.push(a.paragraph.toLowerCase().normalize('NFD')
        .replace(/[0-9`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
        .replace(/[_\s]/g, '').split(''))
    )
    console.log(this.table)
    this.createObjLetters(this.table);
  };
  //crea un objeto para contar las letras de cada paragraph
  createObjLetters(arr) {
    arr.forEach((a, b) => {
      this.letters.push(
        a.reduce((obj, char) => {
          obj["counter"] = b + 1;
          obj[char] = obj[char] + 1 || 1;
          return obj;
        }, {
          a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0,
          l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
        })
      )
    })
    console.log(this.letters)
    this.abc = Object.keys(this.letters[0]).splice(0,26);
    console.log( this.abc)
  };
  sumNumbers(arr){
    arr.forEach(a=> {
      var regex = /(\d+)/g;
      if ((a.paragraph.match(regex))===null){
      this.numbers.push(0)
      } else if((a.paragraph.match(regex)).length===1) {
      this.numbers.push(parseInt(a.paragraph.match(regex)));
      }else{
      let arr = a.paragraph.match(regex);
      let result= [];
      let total;
      arr.forEach(b=> {
      result.push(parseInt(b));
      })
      console.log(result)
      result.reduce((b,c) =>{
      return total= b+c;
      })
      this.numbers.push(total);
      }
      })
      console.log(this.numbers)
    };
}