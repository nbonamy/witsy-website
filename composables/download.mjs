
import { usePlatform } from './platform.mjs'

const version = async () => {
  const response = await fetch('https://witsyai.com/update', {
    mode: 'cors'
  })
  const info = await response.json()
  return info.name
}

const url = async (version, platform, arch) => {
  platform = platform || usePlatform().pf
  return `https://github.com/nbonamy/witsy/releases/download/v${version}/Witsy-${platform}-${arch}-${version}.zip`
}

export const useDownload = () => {
  return { version, url }
}
