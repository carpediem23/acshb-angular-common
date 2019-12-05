import { Component, ViewEncapsulation, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'acshb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() show: boolean;
  @Output() onCloseEvent: EventEmitter<any> = new EventEmitter();
  @Output() onSubmitEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.checkModalAndHadleScroll();
  }

  ngOnChanges(): void {
    this.checkModalAndHadleScroll();
  }

  ngOnDestroy(): void {
    document.body.classList.remove('overflow-hidden');
  }

  onClose() {
    if (this.onCloseEvent) {
      this.onCloseEvent.emit();
    }
  }

  onSubmit() {
    if (this.onSubmitEvent) {
      this.onSubmitEvent.emit();
    }
  }

  checkModalAndHadleScroll() {
    if (this.show) {
      document.body.classList.add('overflow-hidden');
    }

    else {
      document.body.classList.remove('overflow-hidden');
    }
  }
}
