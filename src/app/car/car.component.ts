import { Component, OnInit } from '@angular/core';
import { CarService} from 'src/app/car.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars : Array<any>
  data :Array<any>
 
  location_input;

  constructor(private showCar: CarService ,private route: ActivatedRoute) { 
    
  }

   getCars(){
     return this.showCar.getData().subscribe((result) =>{
        this.cars=result;
       console.log(this.cars);
       
     })
   }



  ngOnInit() {
   this.getCars();

   this.location_input=this.route.snapshot.params['name']

   console.log(this.location_input);


  }


}
