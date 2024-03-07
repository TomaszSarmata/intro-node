import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const DB_PATH = fileURLToPath(new URL("../db.json", import.meta.url));

//getting data from the db
export const getDB = async () => {
  const db = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(db);
};

//saving data into db

export const saveDB = async () => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
  return db;
};
