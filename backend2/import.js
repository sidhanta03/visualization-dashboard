const fs = require('fs');
const path = require('path');
const connectDB = require('./db');
const Insight = require('./models/insight');
require('dotenv').config();

const importData = async () => {
  try {
    await connectDB();

    // Read the JSON file
    const filePath = path.join(__dirname, 'data.json');
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Insert into MongoDB
    await Insight.insertMany(jsonData);
    console.log("✅ Data imported successfully!");

    process.exit();
  } catch (err) {
    console.error("❌ Error importing data:", err);
    process.exit(1);
  }
};

importData();
