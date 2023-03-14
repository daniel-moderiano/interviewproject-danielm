// Number and string types are supported to allow smoother interaction with number HTML inputs
export type Person = {
  firstName: string;
  lastName: string;
  email: string;
  age: number | string;
  income: number | string;
};
