// keseringan programmer typescript menggunakan interface daripada type alias
export interface Seller {
  id: number;
  name: string;
  address?: string;
  // dengan readonly maka data yang dibuat tidak bisa diubah || readonly bisa digunkan dengan optional ? , tetapi sangat jarang menggunakannya
  readonly nib: string;
  readonly npwp: string;
}
