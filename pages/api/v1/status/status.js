const { exportPages } = require("next/dist/export/worker");

function status(request, response) {
  response.status(200).json({ muito: "top" });
}

export default status;
