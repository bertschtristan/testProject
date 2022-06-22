import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.page.html',
  styleUrls: ['./new-page.page.scss'],
})
export class NewPagePage implements OnInit {

  changePage(name:string){this.navController.navigateRoot(name)}
  

  constructor(private navController: NavController) { 
    
  }

  ngOnInit() {
  }

}
