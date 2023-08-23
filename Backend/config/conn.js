import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://fatsdesai2018:sZ8E77h4ys3fWPpE@crown-clothing.0lzibjt.mongodb.net/crown-clothing?retryWrites=true&w=majority"
    );
    console.log(
      `Database connected: ${connect.connection.host} ${connect.connection.name}`
    );
    const db = connect.connection.db;

    // Now you can use the db object to interact with the database
    return db;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
export default connectDB;
