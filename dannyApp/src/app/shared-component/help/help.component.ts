import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  helpForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(){
    
  }
}
