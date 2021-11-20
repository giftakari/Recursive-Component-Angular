import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TreeNodeComponent } from './tree-node/tree-node.component';
import { FolderIconComponent } from './folder-icon/folder-icon.component';
import { FileIconComponent } from './file-icon/file-icon.component';

@NgModule({
  declarations: [AppComponent, TreeNodeComponent, FolderIconComponent, FileIconComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
