
import { usePlatform } from './platform.mjs'

const version = async (platform) => {
  platform = platform || usePlatform().pf
  const response = await fetch(`https://witsyai.com/update/${platform}`, {
    mode: 'cors'
  })
  const info = await response.json()
  return info.name
}

const url = async (version, platform, arch) => {
  platform = platform || usePlatform().pf
  let filename = `Witsy-${version}-${platform}-${arch}.zip`
  if (platform == 'darwin') {
    filename = `Witsy-${version}-${platform}-${arch}.dmg`
  } else if (platform == 'win32' && arch == 'x64') {
    filename = `Witsy-${version}-${platform}-${arch}.Setup.exe`
  } else if (platform == 'linux') {
    if (arch == 'rpm') {
      filename = `witsy-${version}-1.x86_64.rpm`
    } else if (arch == 'deb') {
      filename = `witsy_${version}_amd64.deb`
    }
  }
  return `https://github.com/nbonamy/witsy/releases/download/v${version}/${filename}`
}

export const useDownload = () => {
  return { version, url }
}
