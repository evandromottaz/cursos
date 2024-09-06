import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS videos`.then(() =>
// 	console.log("Tabela apagada com sucesso")
// );

sql`
    CREATE TABLE IF NOT EXISTS videos (
        id TEXT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        duration INTEGER NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
`.then(() => console.log("Tabela criada com sucesso"));
