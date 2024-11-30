/* eslint-disable @typescript-eslint/no-unused-vars */
import {type NextRequest, NextResponse} from 'next/server'

export async function GET(request: NextRequest) {
  const webhook_url = `https://webhook.site/dde3db59-0914-4885-a7c9-e99982a52b9d`
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
  const webhook_url = `https://webhook.site/dde3db59-0914-4885-a7c9-e99982a52b9d`
  const response = await request.json()
  const webhook = await fetch(webhook_url, {
    method: 'POST',
    body: JSON.stringify(
      response
    )
  })
  return new Response(response['challenge'])
}