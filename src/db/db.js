import Dexie from "dexie";

export const db = new Dexie("bootapp");

//create your tables here
//import this file to use db

db.open();
