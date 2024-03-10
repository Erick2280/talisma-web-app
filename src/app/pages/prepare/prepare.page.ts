import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopBarComponent } from 'src/app/components/top-bar/top-bar.component';
import { NavController } from '@ionic/angular';
import { IonButton, IonContent, IonInput } from '@ionic/angular/standalone';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-prepare',
  templateUrl: './prepare.page.html',
  styleUrls: ['./prepare.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, TopBarComponent, IonButton, IonInput]
})
export class PreparePage implements OnInit {

  address: string = '';

  constructor(private navController: NavController, private storageService: StorageService) { }

  ngOnInit() {
  }

  async commitAddress() {
    await this.storageService.set('address', this.address);
    this.navController.navigateForward('/roll');
  }

}
