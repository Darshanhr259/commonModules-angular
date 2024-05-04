
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';




@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
 
 

// pagination table
dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
displayedColumns: string[] = ['position', 'name'];


@ViewChild(MatPaginator) paginator!: MatPaginator;

ngAfterViewInit(): void {
  this.dataSource.paginator = this.paginator;
}
}

export interface PeriodicElement {
name: string;
position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, name: 'Hydrogen'},
{position: 2, name: 'Helium'},
{position: 3, name: 'Lithium'},
{position: 4, name: 'Beryllium'},
{position: 5, name: 'Boron'},
{position: 6, name: 'Carbon'},
{position: 7, name: 'Nitrogen'},
{position: 8, name: 'Oxygen'},
{position: 9, name: 'Fluorine'},
{position: 10, name: 'Neon'},
];
 
