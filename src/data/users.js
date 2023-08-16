export const users = [
  {
    id: 'a',
    username: 'Anurak',
    email: 'a@test.com',
    password: 'abc123',
  },
  {
    id: 'b',
    username: 'Wanna',
    email: 'w@test.com',
    password: '123abc',
  },
];

export function signin(email, password) {
  return new Promise((resolve, reject) => {
    const foundUser = users.find(
      user => user.email === email && user.password === password
    );

    setTimeout(() => {
      if (foundUser) {
        resolve(foundUser);
      } else {
        reject('Email or password is invalid');
      }
    }, 3000);
  });
}
