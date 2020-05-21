export default function authHeader() {
  const member = JSON.parse(localStorage.getItem('member'));

  if (member && member.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': member.accessToken };
  } else {
    return {};
  }
}
