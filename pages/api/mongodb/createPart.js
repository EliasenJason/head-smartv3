import connectMongo from "../../../lib/mongodb";
import partModel from "../../../models/part";

export default async function addPart(req, res) {
  try {
    console.log('connecting to mongo')
    await connectMongo()
    console.log('connected to mongo')
    console.log('this was received from front end for req.body: ', req.body)
    console.log('creating part')
    let mongoRes = await partModel.create({name:'stuffing box'}) //req.body will replace object
    console.log('created document:')
    console.log(mongoRes)
    res.json(mongoRes)
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
}