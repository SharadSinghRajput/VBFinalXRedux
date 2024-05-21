// pages/api/razorpay.js
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'GET') {
        const response = await fetch(`https://api.razorpay.com/v1/payments/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Basic cnpwX3Rlc3RfYkpTaGc0cHk2bW5RZTA6a293emlsQnJldHVoN0FhNzJmOFZRZFps'
            }
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
