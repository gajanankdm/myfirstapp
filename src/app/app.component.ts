import { Component } from '@angular/core';
import { Istudent } from './modules/students';
import { Iproduct } from './modules/product';
import { IEmployee } from './modules/employee';
import { IOrder } from './modules/order';
import { IUser } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myfirstapp';
  studentArr: Array<Istudent> = [
    { fname: "Rahul", lname: "Sharma", email: "rahul@gmail.com", contact: 9876543210 },
    { fname: "Amit", lname: "Patil", email: "amit@gmail.com", contact: 9123456780 },
    { fname: "Sneha", lname: "Deshmukh", email: "sneha@gmail.com", contact: 9988776655 },
    { fname: "Priya", lname: "Kadam", email: "priya@gmail.com", contact: 9090909090 },
    { fname: "Rohit", lname: "Jadhav", email: "rohit@gmail.com", contact: 8899776655 },
    { fname: "Neha", lname: "Kulkarni", email: "neha@gmail.com", contact: 7766554433 },
    { fname: "Sagar", lname: "More", email: "sagar@gmail.com", contact: 6655443322 },
    { fname: "Pooja", lname: "Chavan", email: "pooja@gmail.com", contact: 9988665544 },
    { fname: "Vikas", lname: "Bhosale", email: "vikas@gmail.com", contact: 8877665544 },
    { fname: "Anjali", lname: "Joshi", email: "anjali@gmail.com", contact: 7766889900 }
  ];
  productArr:Array<Iproduct>=[
  { id: 1, name: "iPhone 14", brand: "Apple", price: 79999, inStock: true },
  { id: 2, name: "Galaxy S23", brand: "Samsung", price: 74999, inStock: true },
  { id: 3, name: "Redmi Note 12", brand: "Xiaomi", price: 17999, inStock: true },
  { id: 4, name: "OnePlus Nord", brand: "OnePlus", price: 29999, inStock: false },
  { id: 5, name: "Realme Narzo", brand: "Realme", price: 15999, inStock: true },
  { id: 6, name: "Vivo V27", brand: "Vivo", price: 32999, inStock: false },
  { id: 7, name: "Oppo Reno 8", brand: "Oppo", price: 28999, inStock: true },
  { id: 8, name: "Moto Edge 40", brand: "Motorola", price: 26999, inStock: true },
  { id: 9, name: "Nothing Phone (1)", brand: "Nothing", price: 31999, inStock: false },
  { id: 10, name: "iQOO Neo 7", brand: "iQOO", price: 34999, inStock: true }
];
empArr:Array<IEmployee>=[ { id: 1, name: "Aakash", role: "Developer", salary: 40000 },
  { id: 2, name: "Ravi", role: "Tester", salary: 30000 },
  { id: 3, name: "Kiran", role: "Designer", salary: 35000 },
  { id: 4, name: "Pankaj", role: "HR", salary: 28000 },
  { id: 5, name: "Nilesh", role: "Manager", salary: 60000 },
  { id: 6, name: "Sonal", role: "Developer", salary: 42000 },
  { id: 7, name: "Meena", role: "Tester", salary: 31000 },
  { id: 8, name: "Raj", role: "Support", salary: 25000 },
  { id: 9, name: "Komal", role: "Designer", salary: 36000 },
  { id: 10, name: "Arjun", role: "Developer", salary: 45000 }
];
OrderArr:Array<IOrder>=[
  { orderId: 1, product: "iPhone", quantity: 1, total: 80000 },
  { orderId: 2, product: "Galaxy", quantity: 2, total: 140000 },
  { orderId: 3, product: "Redmi", quantity: 3, total: 54000 },
  { orderId: 4, product: "OnePlus", quantity: 1, total: 35000 },
  { orderId: 5, product: "Realme", quantity: 2, total: 30000 },
  { orderId: 6, product: "Vivo", quantity: 1, total: 30000 },
  { orderId: 7, product: "Oppo", quantity: 1, total: 28000 },
  { orderId: 8, product: "Moto", quantity: 2, total: 50000 },
  { orderId: 9, product: "Nothing", quantity: 1, total: 32000 },
  { orderId: 10, product: "iQOO", quantity: 1, total: 34000 }
];

userArr:Array<IUser>=[
  { id: 1, username: "rahul123", email: "rahul@gmail.com", isActive: true },
  { id: 2, username: "amit45", email: "amit@gmail.com", isActive: true },
  { id: 3, username: "sneha89", email: "sneha@gmail.com", isActive: false },
  { id: 4, username: "priya22", email: "priya@gmail.com", isActive: true },
  { id: 5, username: "rohit77", email: "rohit@gmail.com", isActive: true },
  { id: 6, username: "neha11", email: "neha@gmail.com", isActive: false },
  { id: 7, username: "sagar99", email: "sagar@gmail.com", isActive: true },
  { id: 8, username: "pooja66", email: "pooja@gmail.com", isActive: true },
  { id: 9, username: "vikas33", email: "vikas@gmail.com", isActive: false },
  { id: 10, username: "anjali88", email: "anjali@gmail.com", isActive: true }

];
}
