import { Schema, model, models } from 'mongoose'

const partSchema = new Schema({
  partName: {
    type: String,
    required: true
  },
  tricanNum: {
    type: String,
    required: true,
    unique: true
  },
  vendorNum: {
    type: String,
    required: false
  },
  isTest: {
    type: Boolean,
    default: false
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


