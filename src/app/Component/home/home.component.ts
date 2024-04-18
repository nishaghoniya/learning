import { Component } from '@angular/core';
import { HomeServiceService } from '../../Services/home-service.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productData: any = []
  // public loading$: Observable<boolean>;


  constructor(private productService: HomeServiceService) {
    productService.getProductData().subscribe((data: any) => this.productData = data)
    console.log(this.productData)
    // this.loading$ = this.productService.getLoading();
    // console.log(this.loading$)

  }
}
