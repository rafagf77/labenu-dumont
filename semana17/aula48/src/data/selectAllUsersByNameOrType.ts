import { connection } from '../index'

export default async function selectAllUsersByNameOrType(orderBy: string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ORDER BY ${orderBy};
    `)
 
    return result[0]
 }