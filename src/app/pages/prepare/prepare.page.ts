import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopBarComponent } from 'src/app/components/top-bar/top-bar.component';
import { NavController } from '@ionic/angular';
import { IonButton, IonContent, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-prepare',
  templateUrl: './prepare.page.html',
  styleUrls: ['./prepare.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, TopBarComponent, IonButton, IonInput]
})
export class PreparePage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  commitAddress() {
    this.navController.navigateForward('/roll');
  }

}
