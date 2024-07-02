const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 9876;

const windowSize = 10;
let windowState = [];

const apiEndpoints = {
  p: 'primes',
  f: 'fibo',
  e: 'even',
  r: 'rand'
};

const fetchNumbers = async (type) => {
  const endpoint = apiEndpoints[type];
  if (!endpoint) throw new Error('Invalid number type');
  const response = await axios.get(`http://20.244.56.144/test/${endpoint}`);
  return response.data.numbers;
};

const calculateAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return (sum / numbers.length).toFixed(2);
};

app.get('/numbers/:type', async (req, res) => {
  const { type } = req.params;
  
  try {
    const newNumbers = await fetchNumbers(type);
    const uniqueNumbers = newNumbers.filter(num => !windowState.includes(num));
    windowState = [...windowState, ...uniqueNumbers].slice(-windowSize);
    const avg = calculateAverage(windowState);
    
    const response = {
      windowPrevState: windowState.slice(0, -uniqueNumbers.length),
      windowCurrState: windowState,
      numbers: uniqueNumbers,
      avg
    };
    
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
