import connectMongo from "../../../lib/mongodb";
import partModel from "../../../models/part";

export default async function createPlant(req, res) {
  try {
    console.log('connecting to mongo')
    await connectMongo()
    console.log('connected to mongo')
    console.log('this was received from front end for req.body: ', req.body)
    const filter = {"_id":"6356c4877d50c97bbdd59b7d"} //req.body.filter
    const update = {
      name: 'retainer cap',
      tricanPartNumber: '123456',
      } //req.body.update (what the document will be replaced with)
    const options = {new: true} //return the document as it was *after* MongoDB applied the given update 
    console.log('retrieving documents')
    const mongoRes = await partModel.findOneAndUpdate(filter, update, options).exec()
    console.log('documents received')
    res.json({ mongoRes })
  } catch(error) {
    console.log(error)
    res.json({ error })
  }
}