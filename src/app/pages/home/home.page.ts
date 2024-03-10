import { Component } from '@angular/core';
import { IonContent, IonIcon, IonRippleEffect } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForwardCircle } from 'ionicons/icons';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonRippleEffect, IonIcon, IonContent, RouterLinkWithHref],
})
export class HomePage {
  constructor() {
    addIcons({ arrowForwardCircle })
  }
}
