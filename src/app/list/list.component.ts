import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HttpClientModule , MatTableModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  http = inject(HttpClient);
  data: any;
  displayedColumns: string[] = ['id', 'name', 'email'];
  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((x) => {
        this.data = x;
        console.log('this.data', this.data);
      });
  }
}
