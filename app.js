import express from 'express'
import router from './router.js';

const app = express();

router(app)

app.listen(4444)
