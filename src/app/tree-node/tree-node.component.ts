import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
})
export class TreeNodeComponent implements OnInit {
  showChildren: boolean = true;
  @Input() node: any;
  constructor() {}

  ngOnInit(): void {}
  hideShowChildren() {
    this.showChildren = !this.showChildren;
  }
}
