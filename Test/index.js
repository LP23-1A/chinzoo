import BodyParser from "body-parser"
import Express, { request, response }  from "express"
import mongoose from "mongoose"
import Url from "./schema/url.js"

const app = Express ()
app.use(BodyParser.json())

const PORT = 8000;
const MONGODB_URL =  "mongodb+srv://admin:admin1234@cluster0.s1i7wtf.mongodb.net/?retryWrites=true&w=majority"

app.get('/', async (request, response) =>{
    const res = await Url.find();
    response.send({ success:true, res}).end();
});
 app.post('/', async (request, response)=> {
    const {url} = request.body
    const newUrl = await Url.create(
        {
            LongUrl : url,
            ShortUrl : model.id = nanoid(10)

        }
    )
    response.send({ success: true, urls: newUrl}).end();
 });

 app.listen(PORT, async ()=> {
    try{
        await mongoose.connect(MONGODB_URL);
        console.log('DB Connection success');
    } catch (error){
        console.log(error);
    }
 })


// const users = [
//     {
//         id: 1,
//         name: 'bat'
//     },
//     {
//         id: 2,
//         name: 'bata'
//     },
//     {
//         id: 3,
//         name: 'bataa'
//     },
// ];
// app.get('/', (req, res) => {
//     res.send({success: true, users: users}).end();

// });
// app.get('/:id', (request, response) => {
//     const id = request.params.id;
//     const filterData = users.filter((user) => user.id === parseInt(id));
//     response.send({ success: true, users: filterData}).end();
// })
// app.post('/', (req, res) => {
//     res.send({success: true, users: users}).end();
//     const data = request.body;
//     users.push(data);

// });
// app.put('/:id', (req, res) => {
//     const id = request.params.id;

//     users.map((user) => {
//         if (use.id === parseInt(id)){
//             console.log(id);
//             user.name = request.body.name;
//         }
//     })

//     res.send({success: true, users: users}).end();
// });

// app.delete('/:id', (request, response) => {
//     const id = request.params.id;

//     const deleteUserId = users.findIndex((user) => user.id === parseInt(id));
//     if(deleteUserId !== -1){
//     users.splice(deleteUserId, 1);
//     }
//     response.send({success: true, users: users }).end;
// })

// app.listen(PORT, () => {
//     console.log('hello')
// });