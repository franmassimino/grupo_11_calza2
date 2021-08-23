const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

module.exports = {
  dir: path.resolve(__dirname, "../data", "users.json"),
  write: function (data) {
    return fs.writeFileSync(this.dir, JSON.stringify(data, null, 2));
  },

  all: function () {
    return JSON.parse(fs.readFileSync(this.dir));
  },

  one: function (id) {
    return this.all().find((user) => user.id == id);
  },

  findByEmail: function (email) {
    return this.all().find((user) => user.email == email);
  },

  create: function (data, file) {
    let users = this.all();
    let lastUser = users[users.length - 1];
    let newUser = {
      id: users.length > 0 ? lastUser.id + 1 : 1,
      user: data.user
        ? data.user
        : String(data.email)
            .trim()
            .replace(/\s/g, "")
            .split("@")[0]
            .toLowerCase(),
      email: String(data.email),
      password: bcrypt.hashSync(data.password, 10),
      img: `/img/uploads/users/${file.filename}`,
    };
    users.push(newUser);
    this.write(users);
  },

  update: function (data, file, id) {
    let users = this.all();
    users.map((user) => {
      if (user.id == id) {
        user.name = data.name
          ? data.name
          : String(data.email)
              .trim()
              .replace(/\s/g, "")
              .split("@")[0]
              .toLowerCase();
        user.email = String(data.email);
        user.admin =
          String(data.email).includes("@digitalhouse") ||
          user.data.email.include("@dh")
            ? true
            : false;
        user.password = bcrypt.hashSync(data.password, 10);
        user.avatar = file ? file.filename : null;
        return user;
      }
      return user;
    });
    this.write(users);
  },
};
