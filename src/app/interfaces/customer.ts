import { Address } from './address';

export interface Customer {
  id: number;
  name: string;
  alias: string;
  address: Address;
}