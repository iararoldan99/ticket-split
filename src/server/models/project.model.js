import mongoose from 'mongoose';

const {Schema} = mongoose;
export const expenseSchema = new mongoose.Schema({
  id: String,
  description: String,
  amount: Number,
  splitMethod: String,
  splitDetails: [
    {
      member: String,
      share: Number,
      percentage: Number
    }
  ],
});

const projectSchema = new Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
    members: [
      {
        username: {type: String, required: false},
      },
    ],
    budget: {type: Number},
    totalSpent: {type: Number},
    category: {type: String},
    expenses: [expenseSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Project', projectSchema);
