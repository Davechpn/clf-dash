import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Output() onClose = new EventEmitter
  @Input()content_type
  constructor() { }

  ngOnInit() {
  }

  close(){
    this.onClose.emit()
  }

}
