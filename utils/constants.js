import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)

// export const EXECUTABLE_PATH =
//   '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
export const EXECUTABLE_PATH =
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
export const ENTRY_URL = 'https://apkpure.com/tw/'
export const GAME_URL = 'https://apkpure.com/tw/game/'
export const GAME_CASUAL = 'https://apkpure.com/tw/game_casual'

export const filename = 'apkpure_source.csv'

export const urlList = [
  { url: 'https://apkpure.com/tw/game_casual', name: 'casual-game' },
  { url: 'https://apkpure.com/tw/game_action', name: 'action-game' },
  { url: 'https://apkpure.com/tw/game_adventure', name: 'adventure-game' },
  { url: 'https://apkpure.com/tw/game_simulation', name: 'simulation-game' },
  { url: 'https://apkpure.com/tw/game_sports', name: 'sport-game' },
  { url: 'https://apkpure.com/tw/game_arcade', name: 'arcade-game' },
  { url: 'https://apkpure.com/tw/game_role_playing', name: 'roleplaying-game' },
  { url: 'https://apkpure.com/tw/tools', name: 'toolsi-app' },
  { url: 'https://apkpure.com/tw/communication', name: 'communication-app' },
  { url: 'https://apkpure.com/tw/social', name: 'social-app' },
  { url: 'https://apkpure.com/tw/entertainment', name: 'entertainment-app' },
  { url: 'https://apkpure.com/tw/video_players', name: 'videoplayers-app' },
  { url: 'https://apkpure.com/tw/productivity', name: 'productivity-app' },
  { url: 'https://apkpure.com/tw/shopping', name: 'shopping-app' },
]
