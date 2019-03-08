import { FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export function mobileValidator(mobile: FormControl): any { // 自定义校验器
  const value = (mobile.value || '') + '';
  if (!value) {
    return {required: {msg: '必填'}};
  }
  const reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const valid = reg.test(value);
  return valid ? null : {reg: {msg: '格式不正确'}};
}

export function mobileAsyncValidator(mobile: FormControl): any { // 自定义校验器(异步)
  const value = (mobile.value || '') + '';
  if (!value) {
    return {required: {msg: '必填'}};
  }
  const reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const valid = reg.test(value);
  return of(valid ? null : {reg: {msg: '格式不正确'}}).pipe(delay(2000));
}

export function passwordValidator(info: FormGroup): any { // 自定义校验器, 用来校验密码和确认密码
  const password: FormControl = info.get('password') as FormControl;
  const passwordConfirm: FormControl = info.get('passwordConfirm') as FormControl;
  if (password != null && passwordConfirm != null) {
   const valid: boolean = password.value === passwordConfirm.value;
   return valid ? null : {unequal: {msg: '两次密码不一致'}};
  }
  return null; // 校验通过
}
