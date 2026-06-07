import Project from '../models/Project.js';

export const getAllProjects = async (req, res) => {
  try {
    // Fetches all projects and sorts them by your defined order
    const projects = await Project.find().sort({ order: 1 });
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};