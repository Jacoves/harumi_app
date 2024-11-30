import { type NextRequest } from "next/server";
import 'dotenv/config'


export async function GET(request: NextRequest) {
  const WEBHOOK_LOG = 'https://webhook.site/dde3db59-0914-4885-a7c9-e99982a52b9d'
  await fetch(WEBHOOK_LOG, {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(request.nextUrl.searchParams || {}))
  })
  return new Response("Autenticação criada com sucesso!");
}

// export async function POST(request: NextRequest) {

// }
