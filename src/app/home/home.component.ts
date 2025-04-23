import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  welcomeMsg :string = 'Welcome to Angular'
  homeImg:string="https://img.freepik.com/free-vector/customer-support-illustration_23-2148890148.jpg?semt=ais_hybrid&w=740"
  
}
