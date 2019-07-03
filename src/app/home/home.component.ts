import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DogDataService} from '../dog-data.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profileForm = new FormGroup({
    dogName: new FormControl(''),
  });
  public DogDataService: any;

  dogURL = ''
  currentDog = ''

  constructor(private dogDataService: DogDataService) { this.dogDataService.getAllDogs(); }
  dogs = this.dogDataService.dogsList

  onSubmit() {
    const dog = this.profileForm.value.dogName;
    this.dogDataService.getOneDog(dog).subscribe(dog => {this.dogURL = dog})
    this.currentDog = dog;
    this.dogURL = this.dogDataService.dogURL;
    console.log(this.dogURL)
  }


  ngOnInit() {
  }

}
