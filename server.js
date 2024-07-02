const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname));

app.post('/flip', (req, res) => {
    const { orValue, reValue } = req.body;

    if (!orValue || !reValue) {
        return res.status(400).json({ error: "Оба значения должны быть предоставлены" });
    }

    const randomValue = Math.random() < 0.5 ? orValue : reValue;
    res.json({ result: randomValue });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});