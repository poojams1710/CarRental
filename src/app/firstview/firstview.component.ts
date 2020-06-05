import { Component, OnInit } from '@angular/core';
import {CarService} from 'src/app/car.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import{Router} from'@angular/router' ;
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-firstview',
  templateUrl: './firstview.component.html',
  styleUrls: ['./firstview.component.css']
})
export class FirstviewComponent implements OnInit {
  location :Array<any>
  cars :Array<any>
  reactiveForm: FormGroup;

  constructor(private carData :CarService,private router: Router) {
    this.reactiveForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });

    this.location=[];
   }

  imageObject: Array<object> = [
    
    {
      image: 'https://images.unsplash.com/photo-1565548058707-d05a1994775e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      thumbImage: 'https://images.unsplash.com/photo-1565548058707-d05a1994775e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      title: 'Image title',
      alt: 'Image alt'
    },
    {
    image: 'https://images.unsplash.com/photo-1572816703439-d8b34c4dc93f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    thumbImage: 'https://images.unsplash.com/photo-1572816703439-d8b34c4dc93f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    alt: 'alt of image',
    title: 'title of image'
  }, {
    image: 'https://images.unsplash.com/photo-1529252147713-913c4e6fa9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    thumbImage: 'https://images.unsplash.com/photo-1529252147713-913c4e6fa9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://images.unsplash.com/photo-1498464619740-386503e7e7f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    thumbImage: 'https://images.unsplash.com/photo-1498464619740-386503e7e7f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    thumbImage: 'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/613/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/613/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://images.unsplash.com/photo-1587874335393-6a96e44c28a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    thumbImage: 'https://images.unsplash.com/photo-1587874335393-6a96e44c28a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://images.unsplash.com/photo-1529426301869-82f4d98d3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    thumbImage: 'https://images.unsplash.com/photo-1529426301869-82f4d98d3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    title: 'Image title',
    alt: 'Image alt'
  }
  ];

  

  getCarLoaction(){
    return this.carData.getData().subscribe(data=>{
           this.cars=Object.values(data);
           console.log(this.cars);

           for(var i=0;i<this.cars.length;i++){
             if(!this.location.includes(this.cars[i]['Location']))
            this.location.push(this.cars[i]['Location']);
          
           }

           console.log(this.location)

    })
  }



  onSubmit(form) {
    if (this.reactiveForm.valid) {
      const path = [
        'details',
        this.reactiveForm.controls.name.value,
        
      ];

      this.router.navigate(path);
    }
  }

  


  ngOnInit() :void {
    this.getCarLoaction();
    this.reactiveForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

}
