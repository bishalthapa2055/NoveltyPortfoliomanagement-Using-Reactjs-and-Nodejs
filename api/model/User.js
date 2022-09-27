// npm install mongoose
import mongoose from "mongoose";

// Connect with database server
mongoose
  .connect("mongodb://localhost:27017/portfoliomanagement")
  .then(() => console.log("Connected to MongoDB server successfully!"))
  .catch((err) => console.error("Error to connect with database server", err));

// Creating Schema
const userSchema = new mongoose.Schema({
  SN: { type: Number, required: true, unique: true },
  Stockname: { type: String, required: true, trim: true, unique: true },
  TransactionType: { type: String, required: true, trim: true },
  Quantity: { type: Number, required: true, trim: true },
  Rate: { type: Number, required: true, trim: true },
  Amount: { type: Number, required: true, trim: true },
  TransactionDate: { type: String, required: true, trim: true },
  TotalBalance: { type: Number, required: true, trim: true },
  Status: { type: String, required: true, trim: true },
  NetBalance: { type: Number, required: true, trim: true },
});

// Creating Model
const User = mongoose.model("User", userSchema);

export { User };
