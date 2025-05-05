import database from "../../../../infra/database.js";

const { exportPages } = require("next/dist/export/worker");

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1;");
  console.log(result);
  response.status(200).json({ muito: "top" });
}

export default status;
