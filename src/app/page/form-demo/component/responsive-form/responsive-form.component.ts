import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { mobileValidator, passwordValidator, mobileAsyncValidator } from 'src/app/validators/Validators';

@Component({
  selector: 'app-responsive-form',
  templateUrl: './responsive-form.component.html',
  styleUrls: ['./responsive-form.component.css']
})
export class ResponsiveFormComponent implements OnInit {

  private formModel: FormGroup;
  private fb: FormBuilder = new FormBuilder(); // 表单的构造器, 可以用简化的方式, 来写表单模型
  private mobileValidator(mobile: FormControl): any { // 自定义校验器
    const value = (mobile.value || '') + '';
    if (!value) {
      return {mobile: true, msg: '必填'};
    }
    const reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    const valid = reg.test(value);
    return valid ? null : {mobile: true, msg: '格式不正确'};
  }

  private passwordValidator(info: FormGroup): any { // 自定义校验器, 用来校验密码和确认密码
    const password: FormControl = info.get('password') as FormControl;
    const passwordConfirm: FormControl = info.get('passwordConfirm') as FormControl;
    if (password.value !== passwordConfirm.value) {
      return {password: true, msg: '两次密码不一致'};
    }
    return null; // 校验通过
  }

  constructor() {
    // 这个是原始写法, 下面是简化写法, 作用都是一样的
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
      nickname: ['atom', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordInfo: this.fb.group({
        password: ['', Validators.required],
        passwordConfirm: [''],
      }, {validator: passwordValidator}),
      emails: this.fb.array([
        [''],
      ])
    });
    console.log(this.formModel);
  }

  ngOnInit() {
  }

  createUser() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    } else {
      console.error(this.formModel);
    }
  }

  addEmail() {
    const emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }
}
