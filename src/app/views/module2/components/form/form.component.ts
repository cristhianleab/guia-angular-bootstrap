import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Output() emitter = new EventEmitter();
  pageForm: FormGroup;

  ngOnInit() {
    this.pageForm = this.formBuilder.group({
      pageNumber: ["", Validators.required],
    });
  }

  submit() {
    this.emitter.emit(this.pageForm.get("pageNumber").value);
    this.pageForm.reset();
  }

}
