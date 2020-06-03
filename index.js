const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");

const env = require("./config");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");

require("./config/passport");

const PORT = env.PORT;

const app = express();

mongoose.connect(
  env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to mongodb database")
);

app.set("view engine", "ejs");
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["mysecretkey"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.get("/", (req, res) => {
  res.render("home", { user: req.user });
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
