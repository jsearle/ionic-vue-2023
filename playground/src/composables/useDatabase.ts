import { onMounted } from 'vue'
import { useSQLite } from 'vue-sqlite-hook'

export default function useDatabase(){
  let db:any = null
  const sql = useSQLite()


  const connectToDb = async () => {
    const isConnected = await db?.isExists()
    if (!isConnected) {
      db = await sql.createConnection('playground')
      await db?.open()
    }
  }

  const inicializarDb = async () => {
    await connectToDb()
    await db.execute(`DROP TABLE IF EXISTS users;`);
    await db.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)");
  }

  const seedDb = async () => {
    await connectToDb()
    await db.execute("INSERT INTO users (name, age) VALUES ('Juan', 45)");
    await db.execute("INSERT INTO users (name, age) VALUES ('Pedro', 34)");
    await db.execute("INSERT INTO users (name, age) VALUES ('María', 40)");
    await db.execute("INSERT INTO users (name, age) VALUES ('Fernando', 19)");
  }

  const obtenerDbUsers = async () => {
    await connectToDb()
    const res:any = await db.query("SELECT * FROM users");
    return res.values;
  }


  const insertarDbUser = async (name:string, age:number) => {
    await connectToDb()
    const res:any = await db.execute(`INSERT INTO users (name, age) VALUES ('${name}', ${age})`);
    return res
  }

  onMounted( () => {
    connectToDb()
  })


  return {
    inicializarDb,
    seedDb,
    obtenerDbUsers,
    insertarDbUser
  }
}