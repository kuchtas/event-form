import { validateUser } from "./formValidator";

test("does not allow user to have no name specified - empty string", () => {
  const user = {
    name: "",
    surname: "Surname",
    email: "example@mail.com",
    date: "2021-06-28",
  };
  expect(validateUser(user)).toEqual({ name: "Name is required" });
});

test("does not allow user to have no name specified - null", () => {
  const user = {
    name: null,
    surname: "Surname",
    email: "example@mail.com",
    date: "2021-06-28",
  };
  expect(validateUser(user)).toEqual({ name: "Name is required" });
});

test("does not allow user to have no surname specified - empty string", () => {
  const user = {
    name: "Name",
    surname: "",
    email: "example@mail.com",
    date: "2021-06-28",
  };
  expect(validateUser(user)).toEqual({ surname: "Surname is required" });
});

test("does not allow user to have no surname specified - null", () => {
  const user = {
    name: "Name",
    surname: null,
    email: "example@mail.com",
    date: "2021-06-28",
  };
  expect(validateUser(user)).toEqual({ surname: "Surname is required" });
});

test("does not allow user to have no email specified - empty string", () => {
  const user = {
    name: "Name",
    surname: "Surname",
    email: "",
    date: "2021-06-28",
  };
  expect(validateUser(user)).toEqual({ email: "Email is required" });
});

test("does not allow user to have no email specified - null", () => {
  const user = {
    name: "Name",
    surname: "Surname",
    email: null,
    date: "2021-06-28",
  };
  expect(validateUser(user)).toEqual({ email: "Email is required" });
});

test("does not allow user to have invalid email specified - 'mail'", () => {
  const user = {
    name: "Name",
    surname: "Surname",
    email: "mail",
    date: "2021-06-28",
  };
  expect(validateUser(user)).toEqual({ email: "Email is invalid" });
});

test("does not allow user to have invalid email specified - 'mail@'", () => {
  const user = {
    name: "Name",
    surname: "Surname",
    email: "mail@",
    date: "2021-06-28",
  };
  expect(validateUser(user)).toEqual({ email: "Email is invalid" });
});

test("does not allow user to have invalid email specified - 'mail@co.'", () => {
  const user = {
    name: "Name",
    surname: "Surname",
    email: "mail@co.",
    date: "2021-06-28",
  };
  expect(validateUser(user)).toEqual({ email: "Email is invalid" });
});

test("does not allow user to have no date specified - empty string", () => {
  const user = {
    name: "Name",
    surname: "Surname",
    email: "example@mail.com",
    date: "",
  };
  expect(validateUser(user)).toEqual({ date: "Date is required" });
});

test("does not allow user to have no date specified - null", () => {
  const user = {
    name: "Name",
    surname: "Surname",
    email: "example@mail.com",
    date: null,
  };
  expect(validateUser(user)).toEqual({ date: "Date is required" });
});

test("correct data passed in", () => {
  const user = {
    name: "Name",
    surname: "Surname",
    email: "example@mail.com",
    date: "2021-06-28",
  };
  expect(validateUser(user)).toEqual({});
});
