import { Component } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})


export class InputsComponent {
  options: any[] = [
    { value: 'option1', viewValue: 'Option 1' },
    { value: 'option2', viewValue: 'Option 2' },
    { value: 'option3', viewValue: 'Option 3' }
  ];

  selectedOptions: string[] = [];

  optionGroups = [
    {
      name: 'Group 1',
      options: [
        { value: 'option1', viewValue: 'Option 1' },
        { value: 'option2', viewValue: 'Option 2' },
        { value: 'option3', viewValue: 'Option 3' }
      ]
    },
    {
      name: 'Group 2',
      options: [
        { value: 'option4', viewValue: 'Option 4' },
        { value: 'option5', viewValue: 'Option 5' },
        { value: 'option6', viewValue: 'Option 6' }
      ]
    }
  ];
}
