import express, { Request, Response, NextFunction } from "express";
import axios from "axios";
import dotenv from "dotenv";


dotenv.config();
const app = express();


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
  async (req: Request, res: Response) => {
    try {
      const headers = {
        // Authorization: "Bearer " + process.env.ZECORE_TOKEN,
        Accept: "application/json",
      };
      let request_body;
      if (!req.body) {
        request_body = {
          Id: 78912,
          Customer: "Jason Sweet",
          Quantity: 1,
          Price: 18.0,
        };
      } else {
        request_body = req.body;
      }

      // hacer request de otra api

      const response = await axios.get(
        "http://127.0.0.1:3000/",
        request_body
      );

      // respuesta de zecore
      return res.json(response.data);
    } catch (error) {
        console.log(error);
      return res
        .status(500)
        .json({ message: "Error al enviar la request a Zecore" });
    }
  }
);

// server
app.listen(process.env.PORT, () => {
  console.log(`app running on port ${process.env.PORT}'`);
});
