/* eslint-disable @typescript-eslint/no-unused-vars */
import {type NextRequest} from 'next/server'


export async function GET(request: NextRequest) {
  const res = await fetch('https://api.kyroskoh.xyz/valorant/v1/mmr/br/Superaks/4773?show=combo&display=1')
  const text = await res.text()
  return Response.json({response: text})
}