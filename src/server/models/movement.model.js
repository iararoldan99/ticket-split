import mongoose from 'mongoose';

const { Schema } = mongoose;

const movementSchema = new Schema(
  {
    userId: {
      type: String,
    },
    projectId: {
      type: String,
    },
    amount: {
      type: Number,
    },
    type: {
      type: String,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    splitMethod: { type: String, enum: ['equitative', 'percentage']},
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Movement', movementSchema);
