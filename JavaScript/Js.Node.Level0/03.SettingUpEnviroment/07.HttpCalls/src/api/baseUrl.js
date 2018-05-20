export default function getBaseUrl() {
  return window.location.hostname === 'localhost' ? 'http://localhost:3001/' : '/';
}
