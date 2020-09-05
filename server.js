const express= require('express');
const mongoose= require('mongoose');

const users= require ('./src/routers/api/users');
const profile= require ('./src/routers/api/profile');
const posts= require ('./src/routers/api/posts');

const app= express();
const db= require('./src/config/keys').mongoURI;
mongoose
    .connect(db)
    .then(()=>console.log('Mongo connected'))
    .catch(err=>console.log(err));

app.get('/', (req, res)=>res.send('Hello world') );

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port= process.env.PORT || 5000;

app.listen(port, ()=>console.log(`your APP  is running on port ${port}`));

