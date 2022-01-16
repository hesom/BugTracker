const express = require("express");
var cors = require('cors');

const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())

let data = [
{
    id: "1",
    short: "Javascript warnings",
    description: "The project still throws lots of Javascript warnings. Each one of them should be addressed",
    reporter: "Hendrik",
    date: "12/01/2022",
    status: "open",
    assignedTo: "Hendrik",
    severity: "low",
},
{
    id: "2",
    short: "Implement forum",
    description: "The forum button still does nothing",
    reporter: "Hendrik",
    date: "12/01/2022",
    status: "closed",
    assignedTo: "Hendrik",
    severity: "medium",
},
{
    id: "3",
    short: "Data leak",
    description: "Our whole database is all over the internet. Maybe saving the passwords in clear text was a bad idea after all",
    reporter: "Hendrik",
    date: "12/01/2022",
    status: "in-progress",
    assignedTo: "Hendrik",
    severity: "critical",
},
]

let nextId = data.length + 1;

app.get('/bugs', (req, res) => {
    res.json(data);
});

app.put('/bugs', (req, res) => {

    const newBug = req.body
    req.body.id = nextId
    nextId += 1

    data = [...data, newBug]

    res.json(newBug);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});