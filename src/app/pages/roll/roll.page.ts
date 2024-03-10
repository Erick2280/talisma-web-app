import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopBarComponent } from 'src/app/components/top-bar/top-bar.component';
import { IonContent, IonIcon, IonText, IonSpinner } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { dice, arrowUpCircle, arrowDownCircle } from 'ionicons/icons';
import { StorageService } from 'src/app/services/storage.service';
import axios from 'axios';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.page.html',
  styleUrls: ['./roll.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonText, IonContent, CommonModule, FormsModule, TopBarComponent, IonContent, IonIcon]
})
export class RollPage implements OnInit {

  inputValue: number = 50;
  lastRoll: any = 0;
  CurrentStatus = CurrentStatus;
  status: CurrentStatus = CurrentStatus.Ready;
  address: string = '';
  constructor(private storageService: StorageService) {
    addIcons({ arrowUpCircle, arrowDownCircle, dice });
  }

  ngOnInit() {
    this.storageService.get('address').then(address => this.address = address);
  }

  startMove() {
    this.status = CurrentStatus.Dragging;
  }
  async endMove() {
    this.status = CurrentStatus.Rolling;
    try {
      const { result } = await this.fetchWebcamData();
      const parsedResult = parseInt(result);
      if (!isNaN(parsedResult)) {
        this.lastRoll = parsedResult;
        this.performRoll();
        this.inputValue = 0;
        this.status = CurrentStatus.Ready;
      } else {
        this.lastRoll = "!!!";
        console.log('Não foi possível identificar o valor do dado');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }

  performRoll() {
    console.log('performRoll');
    this.storageService.appendToArray({ value: this.lastRoll, time: new Date() });
  }

  private async fetchWebcamData(): Promise<{ result: string }> {
    const url: string = `http://${this.address}/webcam?number=${this.inputValue}`;
    try {
        const response = await axios.get<{ result: string }>(url);
        this.status = CurrentStatus.Ready;
        return response.data;
    } catch (error) {
        console.error(`Error fetching webcam data from ${url}:`, error);
        throw error; 
    }
  }
}

enum CurrentStatus {
  Ready = 'ready', 
  Dragging = 'dragStarted',
  Rolling = 'rolling',
}