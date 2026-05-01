import mongoose from 'mongoose';

const AffiliateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: String, required: true }, // or product model
  link: { type: String, required: true },
  clicks: { type: Number, default: 0 },
  conversions: { type: Number, default: 0 },
  commission: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Affiliate || mongoose.model('Affiliate', AffiliateSchema);