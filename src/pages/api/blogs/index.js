import { getAll } from "@/service/blogs"





export default function handler(req, res) {
    if(req.method==="GET"){
        const blogs =getAll()
        return res.status(200).json(blogs)
    }
    res.status(200).json()
  }