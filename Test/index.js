import BodyParser from "body-parser"
import Express, { request, response }  from "express"

const app = Express ()
app.use(BodyParser.json())

const PORT = 8000;
const users = [
    {
        id: 1,
        name: 'bat'
    },
    {
        id: 2,
        name: 'bata'
    },
    {
        id: 3,
        name: 'bataa'
    },
];
app.get('/', (req, res) => {
    res.send({success: true, users: users}).end();

});
app.post('/', (req, res) => {
    res.send({success: true, users: users}).end();
    const data = request.body;
    users.push(data);

});
app.put('/:id', (req, res) => {
    const id = request.params.id;

    users.map((user) => {
        if (use.id === parseInt(id)){
            console.log(id);
            user.name = request.body.name;
        }
    })

    res.send({success: true, users: users}).end();
});

app.delete('/:id', (request, response) => {
    const id = request.params.id;

    const deleteUserId = users.findIndex((user) => user.id === parseInt(id));

    users = users.slice(0, deleteUserId);
    response.send({success: true, users: users }).end;
})

app.listen(PORT, () => {
    console.log('hello')
});