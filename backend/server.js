import express from 'express';
import { json } from 'body-parser';
import { post } from 'axios';

const app = express();
const PORT = process.env.PORT || 5000;
const TELEGRAM_TOKEN = '7017260199:AAFFqmeAG69fJyW_M4NwhehxiXdy32EpkpI';

app.use(json());

app.post('/api/order', async (req, res) => {
  const { user, order } = req.body;
  const message = `Hello ${user}, you ordered: ${order.join(', ')}. Total: $${order.length * 10}`;
  
  try {
    await post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      chat_id: `@${user}`, // using username to send the message
      text: message,
    });
    res.status(200).json({ message: 'Order placed successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error placing order' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
