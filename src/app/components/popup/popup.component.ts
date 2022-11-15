import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() showPopup: boolean=false; // Show popup
  @Input() title: string=''; // Title popup
  @Output() closePopupEvent = new EventEmitter<boolean>(); // Event for close popup
  @Output() confirmPopupEvent = new EventEmitter<boolean>();  // Event for confirm popup
  constructor() { }

  ngOnInit(): void {
  }
  // Method for close popup
  closePopup() {
    this.closePopupEvent.emit(false);
  }
  // Method for confirm popup
  confirmPopup() {
    this.confirmPopupEvent.emit(true);
  }  
}
