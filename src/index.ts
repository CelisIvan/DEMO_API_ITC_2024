import express, { Request, Response, NextFunction } from "express";
import 'reflect-metadata'
import axios from "axios";
import dotenv from "dotenv";
import { startServer } from "./app";

dotenv.config();

async function main(){
    const app = await startServer();
    app.listen(process.env.PORT);
    console.log("app listening on port " + process.env.PORT);
}
main()

// función para validar que venga un token
const validateToken = (req: Request, res: Response, next: NextFunction) => {
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
