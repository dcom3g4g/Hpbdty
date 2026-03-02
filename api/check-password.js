export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { password } = req.body;
console.log('Received password:', password); // Debugging log
console.log('Received password:11', process.env.SITE_PASSWORD); // Debugging log
  if (password === process.env.SITE_PASSWORD) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false });
  }
}