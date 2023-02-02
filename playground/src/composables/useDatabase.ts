import { onMounted } from 'vue'
import { useSQLite } from 'vue-sqlite-hook'

export default function useDatabase(){
  // declaramos la variable que contendrá la conexión a la base de datos
  let db:any = null
  // instanciamos el hook de sqlite
  const sql = useSQLite()

  // conectamos a la base de datos
  const connectToDb = async () => {
    // verificamos si ya estamos conectados
    const isConnected = await db?.isExists()
    // si no lo estamos, creamos la conexión y la abrimos
    if (!isConnected) {
      db = await sql.createConnection('playground')
      await db?.open()
    }
  }

  // borramos la base de datos y la volvemos a crear
  const inicializarDb = async () => {
    await connectToDb()
    await db.execute(`DROP TABLE IF EXISTS users;`);
    await db.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)");
  }

  // insertamos una serie de datos de prueba
  const seedDb = async () => {
    await connectToDb()
    await db.execute("INSERT INTO users (name, age) VALUES ('Juan', 45)");
    await db.execute("INSERT INTO users (name, age) VALUES ('Pedro', 34)");
    await db.execute("INSERT INTO users (name, age) VALUES ('María', 40)");
    await db.execute("INSERT INTO users (name, age) VALUES ('Fernando', 19)");
  }

  // cargamos los datos de la tabla users
  const obtenerDbUsers = async () => {
    await connectToDb()
    const res:any = await db.query("SELECT * FROM users");
    return res.values;
  }

  // insertamos un nuevo usuario en la tabla users
  const insertarDbUser = async (name:string, age:number) => {
    await connectToDb()
    const res:any = await db.execute(`INSERT INTO users (name, age) VALUES ('${name}', ${age})`);
    return res
  }

  // al montar el composable, conectamos a la base de datos para acelerar la próxima llamada
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