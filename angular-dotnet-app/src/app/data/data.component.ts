import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  items: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (data: any[]) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  // Function to handle two-way binding changes
  onItemNameChange(item: any, newName: string): void {
    item.name = newName;
  }
}
