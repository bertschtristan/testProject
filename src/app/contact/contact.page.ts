import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Person} from '../person';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  selected: Person;
  sreya: Person = new Person("sreya", "karumanchi.sreya@gmail.com", "7203782679", "6510 Pine Street", 17, "no middle name")
  people: Person [] = []
  fname: string = ""

  changePage(){this.navController.navigateRoot('/home')}

  constructor(private navController: NavController) { }

  ngOnInit() {
    this.people = [this.sreya, new Person("Joe", "joemama@gmail.com", "4021111111", "your mom's house", 21, "has no mama"), 
    new Person("Joe 2", "joemama2@gmail.com", "4021111112", "your mom house", 22, "has 2 mamas")]

    for (var i =0; i<this.people.length; i++)
    (console.log(this.people[i]))

    console.log (this.sreya.name + " " + this.sreya.phoneNumber)
    console.log (this.sreya.email)
  }
onClick(person: Person) {this.selected = person}
}
