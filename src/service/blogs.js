import fs from "fs";
import path from "path";


const filePath = path.join(process.cwd(),"src","database","blogs.json")

export function getAll(){
const data = fs.readFileSync(filePath)
return (JSON.parse(data))

}