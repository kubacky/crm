import { Technician } from './technician';

export interface Service {
  id: number;
  deviceId: number;
  customerId: number;
  date: string;
  isoDate: string;
  technician: Technician;
  technicianId: number;
  price: string;
  comment: string;
  status: string;
  statusId: number;
  type: string;
  typeId: number;
}