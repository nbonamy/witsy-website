
const platform = () => {
  const ua = window.navigator.userAgent.toLocaleLowerCase();
  if (ua.includes('macintosh')) return 'darwin';
  if (ua.includes('mac os x')) return 'darwin';
  if (ua.includes('windows')) return 'win32';
  if (ua.includes('win32')) return 'win32';
  if (ua.includes('linux')) return 'linux';
  if (ua.includes('unix')) return 'linux';
  return null
}

const os = () => {
  const pf = platform();
  if (pf === 'darwin') return 'macOS';
  if (pf === 'win32') return 'Windows';
  if (pf === 'linux') return 'Linux';
  return null;
}

export const usePlatform = () => {

  return {
    ua: window.navigator.userAgent,
    pf: platform(),
    os: os(),
  }

}
