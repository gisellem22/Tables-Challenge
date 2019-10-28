import { Component, OnInit } from '@angular/core';
import { GetLettersService } from '../../services/get-letters.service';

@Component({
  selector: 'app-table-letters',
  templateUrl: './table-letters.component.html',
  styleUrls: ['./table-letters.component.css']
})
export class TableLettersComponent implements OnInit {

  constructor(public getLettersService: GetLettersService) { }
  array: string[];
  ngOnInit() {
  }
  getTableLetters() {
    //consumo de API
    this.getLettersService.letters().subscribe(data => {
      this.array= data.data;
      console.log(this.array)
  })
};
}
