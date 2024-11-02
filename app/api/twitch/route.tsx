/* eslint-disable @typescript-eslint/no-unused-vars */
import {type NextRequest} from 'next/server'

export async function GET(request: NextRequest) {
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

export async function POST(request: NextRequest) {
  const webhook_url = `https://webhook.site/71be7601-2806-4a68-aacb-47bb788095e7`
  const response = await request.json()
  const res = await fetch('https://api.kyroskoh.xyz/valorant/v1/mmr/br/Superaks/4773?show=combo&display=1')
  const text = await res.text()
  const webhook = await fetch(webhook_url, {
    method: 'POST',
    body: JSON.stringify(
      response
    )
  })
  return Response.json({original: response, text, webhook})
}