export type Person = {
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  income: number;
};

export type PersonFormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number | string;
  income: number | string;
};
