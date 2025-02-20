const express = require('express');
const sqlite = require('sqlite3').verbose();
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
const querys=[
    `CREATE TABLE IF NOT EXISTS arts(
        id INTEGER PRIMARY KEY NOT NULL,
        name varchar(255),
        participant_code varchar(10),
        category_code varchar(255),
        mark INTEGER DEFAULT 0,
        dept varchar(255),
        position INTEGER DEFAULT 0
    )`,

    `CREATE TABLE IF NOT EXISTS sports(
    id INTEGER PRIMARY KEY NOT NULL,
        name varchar(255),
        participant_code varchar(10),
        category_code varchar(255),
        mark INTEGER DEFAULT 0,
        dept varchar(255),
        position INTEGER DEFAULT 0
    )`
        ]
const db = new sqlite.Database("./database.db");
for(let i=0;i<querys.length;i++){
    db.run(querys[i]);
}

app.post('/addarts', (req, res) => {
    const { participants } = req.body;
    if (!participants || !Array.isArray(participants)) {
        return res.status(400).json({ error: "Invalid data format" });
    }
    console.log("Received Participants:", participants);
    try{
        participants.map((participant) => {
            db.run("INSERT INTO arts (name, participant_code, category_code, mark,dept, position) VALUES (?, ?, ?, ?,?, ?)", [participant.name.toLowerCase(), participant.participantCode.toLowerCase(), participant.categoryCode.toLowerCase(),participant.mark, participant.department.toLowerCase(), participant.position]);
        })
        console.log("Data added successfully!");
    }catch(e){
        console.log({"adding error": e});
    }
    res.json({ message: "Data received successfully" });
});

app.get('/getIndividualArts', (req, res) => {
    const { code } = req.query;

    if (!code) {
        return res.status(400).json({ error: "Invalid data format" });
    }

    try {
        const query = "SELECT * FROM arts WHERE category_code = ?";
        db.all(query, [code.toLowerCase()], (err, rows) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ error: "Database error" });
            }
            console.log("Rows:", rows);
            res.json(rows);
        });
    } catch (e) {
        console.error("Error:", e);
        res.status(500).json({ error: "Internal server error" });
    }
});




app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
