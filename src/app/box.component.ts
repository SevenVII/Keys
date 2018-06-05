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

    $("td").on("click", function(){
      if($(this).text()=="") {
        $(this).text("X");
      }
    });

    $('#cell177').on("click", function(){
      $(this).text("");
      $(this).css("background-color", "black");
      alert("¡Black Spirit!");
    });

    /*
    let randomNumber = 0;

    randomNumber = Math.floor(Math.random() * 400);
    */


  }

}
