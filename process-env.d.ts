declare global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        PORT: string;
        ZECORE_API_KEY: string;
      }
    }
  }