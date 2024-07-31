import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-generic-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  sanitizedHtmlContent: SafeHtml | undefined;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer
  ) {

    if (data.htmlContent) {
      this.sanitizedHtmlContent = this.sanitizer.bypassSecurityTrustHtml(data.htmlContent);
    }
   }
  

  onClose(): void {
    this.dialogRef.close();
  }

}
