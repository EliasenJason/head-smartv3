import { Schema, model, models } from 'mongoose'

const partSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tricanPartNumber: {
    type: String,
    required: false
  },
  venderPartNumber: {
    type: String,
    required: false
  },
  pictures: {
    type: [{
      date: Date,
      url: String,
      cloudinaryId: String
    }],
    default: undefined,
    required: false
  }
})

const partModel = models.part || model('part', partSchema)

export default partModel