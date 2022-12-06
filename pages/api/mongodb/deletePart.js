import connectMongo from "../../../lib/mongodb";
import partModel from "../../../models/part";
const cloudinary = require("cloudinary").v2

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_CLOUDNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})


export default async function deletePart(req, res) {
  try {
    console.log('connecting to mongo')
    await connectMongo()
    console.log('connected to mongo')
    console.log('this was received from front end mongodb ID: ', req.body._id)
    let mongoId = req.body._id
    if (req.body.pictures) { //if there are pictures associated to this part than delete them
      let cloudinaryIds = req.body.pictures.map(item => item.cloudinaryId)
      let responses = []
      cloudinaryIds.forEach(id => {
        cloudinary.uploader.destroy(id)
        .then( result => {
          console.log(result)
          responses.push(result.result)
          console.log(responses)
        })
      })
    }
    console.log('retrieving documents')
    const mongoRes = await partModel.findByIdAndDelete({"_id":mongoId}).exec()
    console.log('documents received')
    res.json({ mongoRes })
  } catch(error) {
    console.log(error)
    res.json({ error })
  }
}