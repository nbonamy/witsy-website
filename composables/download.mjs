
import { usePlatform } from './platform.mjs'

const version = async () => {
  // const response = await fetch('https://update.electronjs.org/nbonamy/witsy/darwin-arm64/1.0.0', {
  //   mode: 'cors'
  // })
  // console.log(response)
  // const info = await response.json()
  // return info.name
  return '1.17.1'
}

const url = async (version, platform, arch) => {
  platform = platform || usePlatform().pf
  return `https://github.com/nbonamy/witsy/releases/download/v${version}/Witsy-${platform}-${arch}-${version}.zip`
}

export const useDownload = () => {
  return { version, url }
}
