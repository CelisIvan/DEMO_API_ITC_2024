"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
dotenv_1.default.config();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield (0, app_1.startServer)();
        app.listen(process.env.PORT);
        console.log("app listening on port " + process.env.PORT);
    });
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
