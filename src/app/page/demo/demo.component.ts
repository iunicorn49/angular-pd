import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  private form = {
    name: ''
  };

  private searcher: FormControl = new FormControl();

  constructor() {
    this.searcher.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      this.handleSearch(value);
    });
  }

  ngOnInit() {
  }

  handleSearch(value: string) {
    console.log(value);
  }

  handleInput(value: string) {
    console.log(value);
  }

  handleClick() {
    console.log(this.form);
  }

}
