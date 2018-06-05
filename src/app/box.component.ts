import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'box-keys',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class BoxComponent implements OnInit {
  public ngOnInit(): void {

    for (let i = 0; i < 20; i++) {
      $('#tableCode').append('<tr></tr>');
    }

    let cont = 0;

    for (let i = 0; i < 21; i++) {
      $('#tableCode tr:nth-child(' + i + ')').each(function(){
        for (let j = 0; j < 20; j++) {
          $(this).append('<td id="cell' + cont + '"></td>');
          cont++;
        }
      });
    }
  }

}
