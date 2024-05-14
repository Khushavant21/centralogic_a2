// app.ts
import express from 'express';
import { Application, Request, Response } from 'express';
import pool from './pgConfig';
const port = 8000;

const app: Application = express();
app.use(express.json());

app.post('/filterAndStoreOrders', async (req: Request, res: Response) => {
  try {
    const { items } = req.body;

    const filteredItems = items
      .map((item: any) => ({ id: item.id, price: item.price })) 
      .filter((item: any) => item.price > 50); 

    for (const item of filteredItems) {
      await pool.query('INSERT INTO orders (orderID, price) VALUES ($1, $2) ON CONFLICT DO NOTHING', [item.id, item.price]);
    }

    res.status(200).send("Filtered orders stored successfully.");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

//  Excercise with the all array functions 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map(num => num * 2);
console.log("Mapped array (doubled):", doubledNumbers);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of all numbers:", sum);

console.log("Logging each number:");
numbers.forEach(num => console.log(num));

const reversedArray = numbers.reverse();
console.log("Reversed array:", reversedArray);

const moreNumbers = [11, 12, 13];
const concatenatedArray = numbers.concat(moreNumbers);
console.log("Concatenated array:", concatenatedArray);

// port number 
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
