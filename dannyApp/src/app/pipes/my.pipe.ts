import { Pipe, PipeTransform } from '@angular/core';
import { IProfile } from '../profile-component/profile.model';

@Pipe({
  name: 'myPipe',
})
export class MyPipe implements PipeTransform {
  transform(value: IProfile[], userInput: string) {
    userInput = userInput ? userInput.toLowerCase() : '';
    return userInput
      ? value.filter(
          (data) =>
            data.firstname.toLowerCase().indexOf(userInput) > -1 ||
            data.lastname.toLowerCase().indexOf(userInput) > -1
        )
      : value;
  }
}
