import dotenv from "dotenv";
import app from "./app"; // Certifique-se de que o caminho está correto

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}.`);
});
