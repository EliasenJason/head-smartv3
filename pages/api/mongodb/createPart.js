import connectMongo from "../../../lib/mongodb";
import partModel from "../../../models/part";

export default async function addPart(req, res) {
  let message;
  try {
    console.log('createPart - connecting to mongo')
    await connectMongo()
    console.log('createPart - connected to mongo')
    console.log('createPart - this was received from front end for req.body: ')
    console.log(req.body)
    console.log('createPart - creating part')
    let mongoRes = await partModel.create(req.body)
    console.log('createPart - created document:')
    console.log(mongoRes)
    res.json(mongoRes)
  } catch (error) {
    console.log('createpart - Error in creating document')
    if (error.code === 11000){
      res.json({
        error: {
          message: `Part number ${error.keyValue.tricanNum} is already associated with a part`
        }
      })
    } else {
      console.log(error)
      res.json({ error })
    }
  }
}