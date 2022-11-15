import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() showPopup: boolean=false;
  @Input() title: string='';
  @Output() closePopupEvent = new EventEmitter<boolean>();
  @Output() confirmPopupEvent = new EventEmitter<boolean>(); 
  constructor() { }

  ngOnInit(): void {
  }

  closePopup() {
    this.closePopupEvent.emit(false);
  }

  confirmPopup() {
    this.confirmPopupEvent.emit(true);
  }  
}
