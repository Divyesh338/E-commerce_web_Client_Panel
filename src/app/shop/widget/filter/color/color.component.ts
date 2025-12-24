import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {
  @Input() colors: any[] = [];
  activeColor: any = "";
  @Output() colorFilter: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.colors);
    $("#colorToggleId").on('click', function (e) {
      e.preventDefault();
      $(this).next("#colorToggle").slideToggle();
    })
  }

  selectColor(cls: any) {
    this.activeColor = cls.color;

    if (cls.color) {
      this.colorFilter.emit([cls]);
    } else {
      this.colorFilter.emit([]);
    }
  }
}
