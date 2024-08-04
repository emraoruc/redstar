import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../../components/modal/modal.service';
import { DataService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  image: any = {}; // Initialize with an empty object
  brochures: any[] = [];
  jobAdvertisements: any[] = [];
  redstarVoice: any[] = [];
  onLeave: any[] = [];
  plannedLeave: any[] = [];
  exchangeRates: any[] = [];
  crossRates: any[] = [];

  constructor(private http: HttpClient,private modalService: ModalService,private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.image = data.image;
      this.brochures = data.brochures;
      this.jobAdvertisements = data.jobAdvertisements;
      this.redstarVoice = data.redstarVoice;
      this.onLeave = data.onLeave;
      this.plannedLeave = data.plannedLeave;
      this.exchangeRates = data.exchangeRates;
      this.crossRates = data.crossRates;
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
