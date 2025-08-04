const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes (We'll define these files later)
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/borrow", require("./routes/borrowRoutes"));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// Server Listen
const PORT = process.env.PORT || 5000;
app.listenPORT, () => console.log( Serverrunningonport$(PORT));
const borrowRoutes = require("./borrowRoutes");
app.use("/api", borrowRoutes);