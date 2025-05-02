import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedIconsModule } from '../../../shared/shared-icons.module'; // <-- mới tạo



@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule, SharedIconsModule // <-- đúng cú pháp
  ], templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
