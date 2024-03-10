import { Component, Input } from '@angular/core';
import { IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBack } from 'ionicons/icons';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton]
})
export class TopBarComponent {

  @Input() path = '/home';

  constructor(private navController: NavController) {
    addIcons({ chevronBack });
  }

  goBack() {
    if (this.path) {
      this.navController.navigateBack(this.path);
    } else {
      this.navController.pop();
    }
  }

}
