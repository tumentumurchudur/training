class User {
  constructor(users) {
    this.users = users
  }

  // Returns all users but is not iterable.
  getUsers() {
    return this.users
  }

  // Make User object iterable
  [Symbol.iterator]() {
    let i = 0;
    let users = this.users;

    return {
      next() {
        if (i < users.length) {
          return { done: false, value: users[i++] }
        }
        return { done: true }
      }
    }
  }
}

const allUsers = new User([
  { name: 'Tim' },
  { name: 'Tom' },
  { name: 'Kim' }
])

// Iterable objects can be iterated using the for of loop.
for (const user of allUsers) {
  console.log(user.name)
}
