import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  result = [];
  constructor(public http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('https://localhost:8089/services/search/jobs/export', {
        params: {
          preview: 'false',
          output_mode: 'json_rows',
          search: 'search index="_audit" | head 4 | table action, host',
        },
        headers: {
          Authorization:
            'Bearer eyJraWQiOiJzcGx1bmsuc2VjcmV0IiwiYWxnIjoiSFM1MTIiLCJ2ZXIiOiJ2MiIsInR0eXAiOiJzdGF0aWMifQ.eyJpc3MiOiJhZG1pbiBmcm9tIDYxODEyZDcwOWUzMCIsInN1YiI6ImFkbWluIiwiYXVkIjoidGVzdGluZyIsImlkcCI6IlNwbHVuayIsImp0aSI6IjBkMGZkYzBhZDJhNjFhYTAyNGM3ZTMwNDA1NDY2NTE1YzQxMTA3Zjc1ODliMjExZmU0ODkwZDIwYTk3NzlhNmEiLCJpYXQiOjE3MzUwNDc1MzYsImV4cCI6MTczNzYzOTUzNiwibmJyIjoxNzM1MDQ3NTM2fQ.EvEFdlCKjWDdlKmMil_V_G1vrw0FA7ACoXe2z1lzL_Qt8YQICiBOIdE2hj6ZxBA7Lktqpzk5ogvMdRx-Yomlxg',
        },
      })
      .subscribe((res: any) => {
        this.result = res['rows'];
      });
  }
}
