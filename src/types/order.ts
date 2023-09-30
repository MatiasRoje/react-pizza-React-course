import { PizzaCart } from "./menu";

export type Order = {
  id: string;
  customer: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: PizzaCart[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
  status: string;
};

export type OrderPostRequest = {
  customer: string;
  phone: string;
  address: string;
  cart: PizzaCart[];
  priority: boolean;
};

export type CartState = {
  cart: PizzaCart[];
};
