import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 't-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input() checked: boolean;
  @Input() svgClass: string;

  @Output() checkedChange = new EventEmitter<boolean>();

  readonly checkedPath =
    'M18 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12zm-2.457 4.293l-5.293 5.293-1.793-1.793a1 1 0 1 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l6-6a1 1 0 1 0-1.414-1.414z';
  readonly emptyPath =
    'M18 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12zm0 1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z';

  @HostListener('click') check(): void {
    this.checkedChange.emit(!this.checked);
  }
}
