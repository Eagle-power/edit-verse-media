// server/repositories/contactRepository.js
import Contact from '../models/Contact.js';

export const createContact = async (contactData) => {
  try {
    const newContact = new Contact(contactData);
    return await newContact.save();
  } catch (error) {
    throw new Error(`Database Error: ${error.message}`);
  }
};