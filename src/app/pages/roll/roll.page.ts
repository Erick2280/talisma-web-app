import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopBarComponent } from 'src/app/components/top-bar/top-bar.component';
import { IonContent, IonIcon, IonText, IonSpinner } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { dice, arrowUpCircle, arrowDownCircle } from 'ionicons/icons';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.page.html',
  styleUrls: ['./roll.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonText, IonContent, CommonModule, FormsModule, TopBarComponent, IonContent, IonIcon]
})
export class RollPage implements OnInit {

  inputValue: number = 0;
  lastRoll: number = 6;
  CurrentStatus = CurrentStatus;
  status: CurrentStatus = CurrentStatus.Ready;

  constructor(private storageService: StorageService) {
    addIcons({ arrowUpCircle, arrowDownCircle, dice });
  }

  ngOnInit() {

  }

  startMove() {
    this.status = CurrentStatus.Dragging;
  }

  endMove() {
    this.performRoll();
    this.inputValue = 0;
    this.status = CurrentStatus.Rolling;
  }

  performRoll() {
    console.log('performRoll');
    // Adiciona no histórico
    this.storageService.appendToArray({ value: this.lastRoll, time: new Date() });
  }
}

enum CurrentStatus {
  Ready = 'ready', 
  Dragging = 'dragStarted',
  Rolling = 'rolling',
}