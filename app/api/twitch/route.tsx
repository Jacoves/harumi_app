/* eslint-disable @typescript-eslint/no-unused-vars */
import {type NextRequest} from 'next/server'

export async function GET(request: NextRequest) {
  const webhook_url = `https://webhook.site/71be7601-2806-4a68-aacb-47bb788095e7`
  request.json().then(console.log)
  fetch(webhook_url, {
    method: 'POST',
    body: JSON.stringify(
      {nome: 'ok'}
    )
  })
  return Response.json(request.json())
}

export async function POST(request: NextRequest) {
  const webhook_url = `https://webhook.site/71be7601-2806-4a68-aacb-47bb788095e7`
  request.json().then(response => {
    fetch(webhook_url, {
      method: 'POST',
      body: JSON.stringify(
        response
      )
    })
  })
  return Response.json({
    nome: 'ok'
  })
}