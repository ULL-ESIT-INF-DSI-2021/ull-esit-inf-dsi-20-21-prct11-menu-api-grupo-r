import express from 'express';
//import './database/mongoose';
import {defaultRouter} from './client/default';
import {deleteRouter} from './client/delete';
import {getRouter} from './client/get';
import {patchRouter} from './client/patch';
import {postRouter} from './client/post';

const app = express();
app.use(express.json());
app.use(defaultRouter);
app.use(deleteRouter);
app.use(getRouter);
app.use(patchRouter);
app.use(postRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
