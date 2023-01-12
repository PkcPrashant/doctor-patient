import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent implements OnInit {

  @Input() placeholder: string;
  @Input() id: string;
  @Input() controlName: string;
  @Input() form: FormGroup;

  tags: string[] = [];
  input: string ='';
  isKeyReleased = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChange = (e: any) => {
    const { value } = e.target;
    this.input = value;

    this.form.get(this.controlName)?.setValue([...this.tags, this.input]);
  };

  onKeyDown = (e: any) => {
    const { key } = e;
    const trimmedInput = this.input.trim();

    if( key === 'Enter') {
      e.preventDefault();
    }
  
    if ((key === ',' || key === 'Enter') && trimmedInput.length && !this.tags.includes(trimmedInput)) {
      e.preventDefault();
      this.tags = [...this.tags, trimmedInput];
      this.input = '';
    }
  
    if (key === "Backspace" && !this.input.length && this.tags.length && this.isKeyReleased) {
      const tagsCopy = [...this.tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      this.tags = tagsCopy;
      this.input = poppedTag || '';
  }

  this.isKeyReleased = false;
};

onKeyUp = () => {
  this.isKeyReleased = true;
}

deleteTag = (index: number) => {
  this.tags = this.tags.filter((tag, i) => i !== index);
}

}
