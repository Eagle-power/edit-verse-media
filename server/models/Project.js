import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true }, // e.g., "Thumbnails", "Reels"
  description: { type: String, required: true },

  // This is where you store the Cloudinary link!
  mediaUrl: { type: String, required: true },

  // To distinguish between an image and a video
  mediaType: { type: String, enum: ['image', 'video', 'icon'], default: 'image' },

  order: { type: Number, default: 0 }, // Helps you sort them on the frontend
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Project', projectSchema);