import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'box-keys',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})

export class BoxComponent implements OnInit {
  public ngOnInit(): void {

    for (let i = 0; i < 11; i++) {
      $('#tableCode').append('<tr></tr>');
    }

    for (let i = 0; i < 10; i++) {
      $('#tableCode tr:nth-child(' + i + ')').each(function(){
        for (let j = 0; j < 10; j++) {
          $(this).append('<td></td>');
        }
      });
    }

    $('#tableCode').css('border', '1px solid black');
  }

}
