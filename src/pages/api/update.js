export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json({ name: 'Mohit Raj Parit', email: '2004mohitraj@gmail.com' });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  