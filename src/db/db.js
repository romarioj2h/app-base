import Dexie from "dexie";
export const db = new Dexie("database");

db.open();
