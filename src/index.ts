import express, { Request, Response, NextFunction } from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

// función para validar que venga un token
const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["token"];

  // validar token
  if (!token || token !== "token_de_ejemplo") {
    return res.status(401).json({ message: "Acceso no autorizado" });
  }

  // token ok, seguir
  next();
};  

app.get("/", (_, res) => {
  console.log("Hola ITC 2024");
  res.send("Hola ITC 2024");
});

app.get("/ping", (req, res) => {
  console.log("pong");
  res.send("pong");
});

// endpoint para recibir una venta de zecore
app.post(
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

// endpoint para enviar a zecore
app.post(
  "/enviar-request",
  validateToken,
  async (req: Request, res: Response) => {
    try {
      const headers = {
        Authorization: "Bearer token_de_ejemplo",
      };

      // hacer request de otra api
      const response = await axios.post("https://otra-api.com/ruta", {
        headers,
      });

      // respuesta de zecore
      return res.json(response.data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error al enviar la request a Zecore" });
    }
  }
);

// server
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}'`);
});
