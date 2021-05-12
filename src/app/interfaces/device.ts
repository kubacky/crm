import { Customer } from './customer';
import { Address } from './address';
import { Service } from './service';

export interface Device {
  id: number;
  registryNo: string;
  price: number;
  purchaseDate: string;
  lastServiceDate: string;
  nextServiceDate: string;
  servicePeriod: number;
  customer: Customer;
  address: Address;
  services: Service[],
  comment: string;
  properties: any
}