import { Component, Input, EventEmitter, Output, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'acshb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges, OnDestroy {
  @Input() title: string;
  @Input() show: boolean;
  @Input() confirm: boolean;
  @Output() closeCallback: EventEmitter<any> = new EventEmitter();
  @Output() submitCallback: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.checkModalAndHadleScroll();
  }

  ngOnChanges(): void {
    this.checkModalAndHadleScroll();
  }

  ngOnDestroy(): void {
    document.body.classList.remove('overflow-hidden');
  }

  onClose() {
    if (this.closeCallback) {
      this.closeCallback.emit();
    }
  }

  onSubmit() {
    if (this.submitCallback) {
      this.submitCallback.emit();
    }
  }

  checkModalAndHadleScroll() {
    if (this.show) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }
}
