import mongoose from 'mongoose';

const { Schema } = mongoose;

export const expenseSchema = new mongoose.Schema({
  description: { type: String },
  amount: { type: Number },
  date: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const projectSchema = new Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, unique: true, required:true },
  description: { type: String },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  budget: { type: Number },
  totalSpent: { type: Number, default: 0 },
  category: { type: String },
  expenses: [expenseSchema],
  pic: { type: String },
  billFile: { type: String },
  splitMethod: { type: String, enum: ['equitative', 'percentage']},
  splitDetails: [
    {
      member: { type: mongoose.Schema.Types.ObjectId, ref: 'User', },
      share: { type: Number},
      percentage: { type: Number }
    }
  ],
}, {
  timestamps: true,
});

export default mongoose.model('Project', projectSchema);
