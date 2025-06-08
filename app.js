import express from 'express';

const app = express();

app.get('/', (req, res) => {
 res.send("Welcome to the Subscription tracker API!");
});

const PORT = 3000;
app.listen(PORT, () => {
 console.log(`Subscription Tracker API is running on http://localhost:${PORT}`)
});

export default app;