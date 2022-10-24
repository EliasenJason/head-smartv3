import connectMongo from "../../../lib/mongodb";
import partModel from "../../../models/part";

export default async function createPlant(req, res) {
  try {
    console.log('connecting to mongo')
    await connectMongo()
    console.log('connected to mongo')
    console.log('this was received from front end for req.body: ', req.body)
    console.log('retrieving documents')
    const mongoRes = await partModel.find({}).exec()
    console.log('documents received')
    res.json({ mongoRes })
  } catch(error) {
    console.log(error)
    res.json({ error })
  }
}