export enum CustomerType {
  REGULAR = "REGULAR", // atau bisa juga number
  GOLD = "GOLD", // atau bisa juga number
  PLATINUM = "PLATINUM", // atau bisa juga number
}

export type Customer = {
  id?: number;
  name?: string;
  type?: CustomerType;
};
