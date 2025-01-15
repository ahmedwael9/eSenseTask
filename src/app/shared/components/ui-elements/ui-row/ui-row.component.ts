import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "ui-row",
  templateUrl: "./ui-row.component.html",
  styleUrls: ["./ui-row.component.scss"],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [],
})

export class UiRowComponent implements OnInit {
  @Input() noGutters = false;
  @Input() alignX?: "start" | "center" | "end";
  @Input() alignY?: "start" | "center" | "end";

  @HostBinding("class") hostClasses!: string;

  private isInitialized = false;

  ngOnInit() {
    if (!this.isInitialized) {
      this.isInitialized = true;
      this.hostClasses = this.getRowClasses();
    }
  }

  private getRowClasses(): string {
    const classes = ["ui-row"];

    if (this.alignX) {
      classes.push(`ui-row-align-x-${this.alignX}`);
    }
    if (this.alignY) {
      classes.push(`ui-row-align-y-${this.alignY}`);
    }
    if (this.noGutters) {
      classes.push("ui-row-no-gutters");
    }
    return classes.join(" ");
  }

}
