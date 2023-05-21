const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoutes = require("./routes/auth");

const app = express();



app.use(cookieSession({name: "session", keys: ["fintech"] ,maxAge: 24 * 60 * 60 * 1000}  
));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({ 
    origin: "http://localhost:3000",
    methods: "GET,PUT,POST,DELETE",
    credentials: true,
 })
);

app.use("/auth", authRoutes);



app.listen("5000", () => {
    console.log("Server is running!")
})