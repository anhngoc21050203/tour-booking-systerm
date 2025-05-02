import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone: true,
  imports: [NgFor, MatCardModule, MatButtonModule, MatIconModule]
})
export class AdminComponent {
  adminModules = [
    { title: 'Quản lý người dùng', content: 'Quản lý thông tin tất cả người dùng.', icon: 'people' },
    { title: 'Cài đặt hệ thống', content: 'Thay đổi cài đặt hệ thống.', icon: 'settings' },
    { title: 'Báo cáo & Thống kê', content: 'Xem báo cáo và số liệu thống kê.', icon: 'bar_chart' },
    { title: 'Cơ sở dữ liệu', content: 'Quản lý cơ sở dữ liệu.', icon: 'storage' }
  ];
}
