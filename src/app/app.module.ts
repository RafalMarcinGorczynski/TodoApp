import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksTypingComponent } from './tasks-typing/tasks-typing.component';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksService } from 'src/services/tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksTypingComponent,
    ListComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [TasksService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
})
export class AppModule {}
