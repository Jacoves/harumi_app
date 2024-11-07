type userBroadcastId = {
  data: [
    {
      broadcaster_id: string,
      broadcaster_login: string,
      broadcaster_name: string,
      game_name: string
    }
  ]
}

class TwitchApi {
  CLIENT_ID = 'x31cey3uqqi7pnn8tsqsvuu0k3pezn';
  SECRET = 'kziru21ok4ufzp9vhuz81nm4o6hbkc';
  WEBHOOKS = 'https://webhook.site/71be7601-2806-4a68-aacb-47bb788095e7';
  USER_TOKEN = 'k0v62f8cvyh81tgt238f0io0dln9ll';
  APP_TOKEN = `pfle1do2py06of6r3vol0w8zkv2ve8`;
  BROADCAST_ID = '47973161';

  async getUserInfoByName(username: string) {
    const response = await fetch('https://api.twitch.tv/helix/users?login='+username, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + this.APP_TOKEN,
        'Client-Id': this.CLIENT_ID,
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
    return response
  }

  getUserByBroadcastId(broadcast_id: number) {
    const response: Promise<userBroadcastId> = fetch('https://api.twitch.tv/helix/channels?broadcaster_id='+broadcast_id, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + this.APP_TOKEN,
        'Client-Id': this.CLIENT_ID,
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
    return response
  }
}

export {
  TwitchApi
}