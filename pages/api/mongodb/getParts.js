import connectMongo from "../../../lib/mongodb";
import partModel from "../../../models/part";

export default async function createPlant(req, res) {
  try {
    console.log('getParts - connecting to mongo')
    await connectMongo()
    console.log('getParts - connected to mongo')
    console.log('getParts - this was received from front end for req.body: ')
    console.log(req.body)
    console.log('getParts - retrieving documents')
    const mongoRes = await partModel.find({}).exec()
    console.log('getParts - documents received')
    res.json({ mongoRes })
  } catch(error) {
    console.log(error)
    res.json({ error })
  }
}