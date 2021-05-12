import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/interfaces/customer';
import { MatTableDataSource} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CustomersService {

  private api: string = `${environment.api}/customers`;

  selectedCustomer: Subject<Customer> = new Subject<Customer>();

  selection: SelectionModel<Customer> = new SelectionModel<Customer>(true, []);
  customers: MatTableDataSource<Customer> = new MatTableDataSource();

  constructor(
    private http: HttpClient
  ) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.api}/get`);
  }

  getCustomer(customerId: number): Observable<Customer>{
    return this.http.get<Customer>(`${this.api}/get/customer/${customerId}`)
  }

  applyFilter(query: string): void {
    query = query.trim();
    query = query.toLowerCase();
    this.customers.filter = query;
  }

  create(customer: Customer): Observable<any> {
    return this.http.post(`${this.api}/create/customer`, customer);
  }

  find(query: string): Observable<Customer[]> {
    return this.http.post<Customer[]>(`${this.api}/find`, { query: query })
  }

  isCustomerNameTaken(query: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.api}/check`, { query: query })
  }

  getByCategory(type: string, parsedString: string): Observable<any> {
    return this.http.get(`${this.api}/get/${type}/${parsedString}`);
  }
}
