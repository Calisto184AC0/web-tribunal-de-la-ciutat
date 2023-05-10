declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_STRAPI_API_KEY: string
      NEXT_PUBLIC_STRAPI_URL: string
    }
  }
}

export {}
