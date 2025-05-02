import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: true,
  imports: [NgFor, MatCardModule, MatButtonModule, MatIconModule]
})
export class UserComponent {
  userCards = [
    { title: 'Thông tin cá nhân', content: 'Xem và cập nhật thông tin cá nhân của bạn.', icon: 'account_circle' },
    { title: 'Thông báo', content: 'Xem tất cả thông báo mới nhất.', icon: 'notifications' },
    { title: 'Tin nhắn', content: 'Quản lý tin nhắn của bạn.', icon: 'mail' }
  ];
}
