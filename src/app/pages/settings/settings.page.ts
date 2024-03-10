import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TopBarComponent } from 'src/app/components/top-bar/top-bar.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TopBarComponent]
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
