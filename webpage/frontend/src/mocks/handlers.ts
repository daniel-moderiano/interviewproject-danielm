import { rest } from "msw";

export const mockPeopleData = [
  {
    firstName: "Dennis",
    lastName: "Reynolds",
    email: "dennis@paddys.com",
    age: 40,
    income: 30000,
  },
];

export const handlers = [
  rest.get("http://127.0.0.1:8000/api/people/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockPeopleData));
  }),

  rest.post("http://127.0.0.1:8000/api/people/", (req, res, ctx) => {
    return res(ctx.status(201));
  }),
];
