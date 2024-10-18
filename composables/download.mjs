
import { usePlatform } from './platform.mjs'

const version = async () => {
  platform = platform || usePlatform().pf
  const response = await fetch(`https://witsyai.com/update/${platform}`, {
    mode: 'cors'
  })
  const info = await response.json()
  return info.name
}

const url = async (version, platform, arch) => {
  platform = platform || usePlatform().pf
  let filename = `Witsy-${platform}-${arch}-${version}.zip`
  if (platform == 'darwin') {
    filename = `Witsy-${version}-${arch}.dmg`
  } else if (plarform == 'win32' && arch == 'x64') {
    filename = `Witsy-${version}-win32-${arch} Setup.exe`
  }
  return `https://github.com/nbonamy/witsy/releases/download/v${version}/${filename}`
}

export const useDownload = () => {
  return { version, url }
}
