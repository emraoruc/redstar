// job-detail-content.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-job-detail-content',
  styleUrls: ['./modal.component.scss'],
  template: `
    <div>
      <h2>Job Advertisement</h2>
      <p><strong>Role:</strong> {{data.role}}</p>
      <p><strong>Department:</strong> {{data.department}}</p>
      <p><strong>Content:</strong></p>
      <p>{{data.content}}</p>
    </div>
  `
})
export class JobDetailContentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { role: string; department: string; content: string }) {}
}
