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

  ngOnInit() { }

  getTableLetters() {
    //resetear variables
    this.table = [];
    this.letters = [];
    //consumo de API
    this.getLettersService.letters().subscribe(data => {
      this.array = data.data;
      console.log(this.array)
      this.removeSpecialChar(this.array)
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
    this.createObjLetters(this.table)
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

  // createTable(arr) {
  //   this.abc.forEach(a => {
  //     arr.forEach(b=> {
  //       if (b[a] === a){

  //       }
  //     })  
  //   })
  // };

  // createObjLetters(arr) {
  //   arr.forEach((a)=> {
  //     a = a.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").split('').forEach(a => {
  //       if (this.map2.has(a)) {
  //         this.map2.set(a, this.map2.get(a) + 1)
  //       } else {
  //         this.map2.set(a, 1)
  //       }
  //     })
  //   })
  //   console.log(this.map2)
  // };
  // createObjLetters(arr: Map<number, number>) {
  //   let counter = 0;
  //   arr.forEach((a, b) => {
  //     console.log(a, b)
  //     this.table.push({
  //       counter: counter = counter + 1,
  //       letter: b,
  //       quantity: a
  //     })
  //   })
  //   console.log(this.table)
  // };
}
// a.paragraph.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").split('').forEach(a => {
