const express = require('express');
const entityRouter = require('./routes/entity.routes');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use('/api', entityRouter);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});