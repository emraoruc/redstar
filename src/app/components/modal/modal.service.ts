import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openModal(data: any) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      height:'600px',
      data: data
    });

    return dialogRef.afterClosed();
  }

  openJobDetailModal(role: string, department: string,content:string) {
    const htmlContent = `
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Department:</strong> ${department}</p>
      <p><strong>Content</strong>;<br/>${content}</p>
    `;

    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      height: '600px',
      data: { 
        title: 'Job Advertisements', // Başlık ekleniyor
        htmlContent
      }    });

    return dialogRef.afterClosed();
  }

}
