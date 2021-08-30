const express = require("express");
const app = express();
const path = require("path");
const method = require("method-override");
const session = require("express-session");
const port = 3000;

//Server
app.set("port", process.env.PORT || port);
app.listen(app.get("port"), () =>
  console.log("Server live on http://localhost:" + app.get("port"))
);

//View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(method("_method"));
app.use(
  session({
    secret: "calza2",
    resave: false,
    saveUninitialized: false,
  })
);
app.use((req, res, next) => {
  app.locals.user = req.session.user;
  next();
});

//Public files
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

//Routes
app.use(require("./routes/main"));
app.use(require("./routes/products"));
app.use(require("./routes/users"));
app.use((req, res, next) => {
  res.status(404).send("<h1>Esta página todavia no existe :(</h1>");
});
