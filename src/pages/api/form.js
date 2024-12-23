let formState = {};

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(formState);
  } else if (req.method === 'POST') {
    formState = { ...formState, ...req.body };
    res.status(200).json({ message: 'Form updated successfully', formState });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
