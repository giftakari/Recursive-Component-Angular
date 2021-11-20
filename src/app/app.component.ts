import { Component, Input } from '@angular/core';

let instances = 0;
interface NodeModel {
  type: 'folder' | 'file' | 'unset' | null;
  name?: string;
  children?: NodeModel[];
  id: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  title = 'recursive-component';
  node = {
    name: ' The Root Folder',
    children: [
      {
        name: 'my_first_folder',
        children: [
          {
            name: 'second_doc.png',
            children: [
              { name: 'file_in_second.txt', children: [] },
              {
                name: 'second_in_second.css',
                children: [
                  {
                    name: 'another_foler',
                    children: [
                      { name: 'random.txt', children: [] },
                      { name: 'another_file.png', children: [] },
                      { name: 'helloworld.html', children: [] },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
}
