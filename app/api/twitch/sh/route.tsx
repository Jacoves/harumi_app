/* eslint-disable @typescript-eslint/no-unused-vars */
import {type NextRequest, NextResponse} from 'next/server'
import { NextApiRequest } from 'next'
import { TwitchApi } from '@/helper/twitch'

export async function GET(request: NextRequest) {
  const twitchApi = new TwitchApi()
  // const user = request.query
  const nome = request.nextUrl.searchParams.get('nome')
  if(nome) {
    const dataUser = await twitchApi.getUserInfoByName(nome)
    const userId = dataUser.data[0].id || null
    if(userId) {
      const newDataUser = await twitchApi.getUserByBroadcastId(userId)
      if(newDataUser.data[0].broadcaster_id) {
        const {game_name} = newDataUser.data[0]
        return new Response('Seu último game foi: '+game_name);
      } else {
        return new Response('')
      }
    }
  }
  return new Response('ok')
}
