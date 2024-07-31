import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../../components/modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any[] = [];
box: any;

  constructor(private http: HttpClient,private modalService: ModalService) { }

  ngOnInit(): void {
    this.loadData();
  }
  

  loadData(): void {
    this.http.get<any[]>('assets/data.json').subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (error) => {
        console.error('Error loading JSON data', error);
      }
    });
  }

  openHtmlModal() {
    this.modalService.openModal({
      title: 'HTML İçeriği',
      htmlContent: '<img src="assets/images/profile1.jpg" style="width:100%;display:inline-block;">'
    }).subscribe(result => {
      console.log('Modal kapatıldı:', result);
    });
  }
  


  openJobDetailModal(role: string, department: string,content:string): void {
    this.modalService.openJobDetailModal(role, department,content).subscribe(result => {
      console.log('Modal kapatıldı:', result);
    });
  }
  
}
