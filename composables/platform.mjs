
import UAParser from 'https://cdn.jsdelivr.net/npm/ua-parser-js@1.0.39/dist/ua-parser.min.js'

const system = () => {
  const ua = new UAParser(window.navigator.userAgent)
  const os = ua.getOS()
  return (os.name === 'Mac OS') ? 'macOS' : os.name
}

const version = () => {
  const ua = new UAParser(window.navigator.userAgent)
  const os = ua.getOS()
  return os.version
}

const platform = () => {
  const os = system()
  if (os === 'macOS') return 'darwin'
  if (os === 'Windows') return 'win32'
  if (os === 'Linux') return 'linux'
  if (os === 'iOS') return 'ios'
  return null
}

export const usePlatform = () => {
  return {
    ua: window.navigator.userAgent,
    pf: platform(),
    os: system(),
    ver: version(),
  }
}
