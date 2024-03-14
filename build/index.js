"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
dotenv_1.default.config();
function main() {
    (0, app_1.startServer)();
}
main();
// función para validar que venga un token
const validateToken = (req, res, next) => {
    const token = req.headers["authorization"];
    // validar token
    if (!token || token !== process.env.ZECORE_API_KEY) {
        return res.status(401).json({ message: "Acceso no autorizado. NO SE PUEDE" });
    }
    // token ok, seguir
    next();
};
// endpoint para recibir una venta de zecore
/*app.post(
  "/procesar-informacion",
  validateToken,
  async (req: Request, res: Response) => {
    try {
      // se guarda en la DB
      return res.json({ message: "Información procesada exitosamente" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error al procesar la información" });
    }
  }
);
*/
// endpoint para enviar a zecore
