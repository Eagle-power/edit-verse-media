// server/controllers/contactController.js
import * as contactRepository from '../repositories/contactRepository.js';
import nodemailer from 'nodemailer';

// 1. Configure the Email Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Standard configuration for Gmail
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, service, message } = req.body;

    // Basic Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide your name, email, and a message.' 
      });
    }

    // 2. Pass data to the Repository to save to the database FIRST
    const savedContact = await contactRepository.createContact({
      name,
      email,
      service,
      message
    });

    // 3. Setup Admin Notification Email (Goes to you)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending it to your own inbox
      subject: `🚀 New EditVerse Lead: ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p style="padding: 12px; border-left: 4px solid #FFD600; background: #f9f9f9; color: #333;">
          ${message}
        </p>
      `,
    };

    // 4. Setup Client Auto-Reply Email (Goes to the user)
    const clientMailOptions = {
      from: `"EditVerse Media" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out to EditVerse Media, ${name}!`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px;">
          <h2>Hi ${name},</h2>
          <p>Thanks for getting in touch! We've received your inquiry regarding <strong>${service}</strong>.</p>
          <p>Harsh or someone from the team will review your project details and get back to you within 24 hours.</p>
          <p>Let's build something great together 🚀</p>
          <br/>
          <p>Best,<br/><strong>The EditVerse Media Team</strong></p>
        </div>
      `,
    };

    // 5. Attempt to send the emails
    try {
      await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(clientMailOptions)
      ]);
      console.log('📧 Emails sent successfully for lead:', name);
    } catch (emailError) {
      // If .env is missing or auth fails, log it but DO NOT crash the request
      console.error('⚠️ Lead saved to DB, but emails failed to send:', emailError.message);
    }

    // 6. Send Success Response to Frontend
    return res.status(201).json({
      success: true,
      message: 'Thanks for reaching out! We will get back to you shortly.',
      data: {
        id: savedContact._id,
        name: savedContact.name
      }
    });

  } catch (error) {
    console.error('Contact Form Submission Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.' 
    });
  }
};