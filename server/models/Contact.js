// server/models/Contact.js
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'],
    trim: true 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    lowercase: true
  },
  service: { 
    type: String, 
    required: false, // Optional, in case they just want to ask a general question
    default: 'General Inquiry'
  },
  message: { 
    type: String, 
    required: [true, 'Message is required'] 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.model('Contact', contactSchema);