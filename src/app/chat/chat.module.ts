import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [ChatPageComponent],
  imports: [
    CommonModule, BrowserAnimationsModule,
    ToastrModule.forRoot(),
     RouterModule.forChild([
      { path: 'chat', component: ChatPageComponent }
    ])
  ]
})
export class ChatModule { }
