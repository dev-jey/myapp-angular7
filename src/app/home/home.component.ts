import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  h1Style: boolean = true;
  btnContent: string = "Dark Theme";
  todoData: any = []
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(
      data => {
        console.log('data', data)
        this.todoData = data;
      },
      error => {
        this.todoData = []
      })
  }


  firstClick = () => {
    this.h1Style = !this.h1Style;
    if (this.btnContent == "Light Theme") {
      this.btnContent = "Dark Theme";
    } else {
      this.btnContent = "Light Theme";
    }
  }

}
