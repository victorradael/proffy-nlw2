import kenx from "knex";
import path from "path";

const db = kenx({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});

export default db;
