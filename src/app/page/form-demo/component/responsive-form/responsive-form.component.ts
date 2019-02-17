import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-responsive-form',
  templateUrl: './responsive-form.component.html',
  styleUrls: ['./responsive-form.component.css']
})
export class ResponsiveFormComponent implements OnInit {

  private formModel: FormGroup;
  private fb: FormBuilder = new FormBuilder();

  constructor() { 
    // this.formModel = new FormGroup({
    //   nickname: new FormControl('atom'),
    //   mobile: new FormControl(),
    //   passwordInfo: new FormGroup({
    //     password: new FormControl(),
    //     passwordConfirm: new FormControl(),
    //   }),
    //   emails: new FormArray([
    //     new FormControl(),
    //   ])
    // });

    this.formModel = this.fb.group({
      nickname: ['atom'],
      mobile: [''],
      passwordInfo: this.fb.group({
        password: [''],
        passwordConfirm: [''],
      }),
      emails: this.fb.array([
        [''],
      ])
    });
  }

  ngOnInit() {
  }

  createUser() {

  }

  addEmail() {
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }
}
