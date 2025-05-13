const sqlite3=require('sqlite3').verbose();
const {open} = require('sqlite');
const path = require('path');
const {v4:uuidv4} = require('uuid');

const initializeDB=async()=>{
    try{
       const db = await open({
        filename:path.join(__dirname,'../../tasks.db'),
        driver:sqlite3.Database
       });

       await db.exec(`CREATE TABLE IF NOT EXISTS tasks(
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        due_date TEXT,
        status TEXT,
        remarks TEXT,
        created_on TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_on  TEXT DEFAULT CURRENT_TIMESTAMP,
        created_by TEXT,
        updated_by TEXT
        )`);
       console.log('Database connected and initialized successfully');
       return db;
    }
    catch(err){
        console.log(`Error in Initializeing DB ${err.message}`);
        throw err;
    }
}

module.exports = initializeDB;