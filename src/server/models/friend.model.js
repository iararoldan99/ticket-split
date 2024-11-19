import mongoose from 'mongoose';

const { Schema } = mongoose;

const friendSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    projectId: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Friend', friendSchema);
