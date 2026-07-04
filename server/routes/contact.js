const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST /api/contact - create a new inquiry
router.post("/", async (req, res) => {
  try {
    const { companyName, contactName, email, phone, subject, message } = req.body;

    if (!companyName || !contactName || !email || !message) {
      return res.status(400).json({ error: "Please fill in all required fields." });
    }

    const contact = await Contact.create({
      companyName,
      contactName,
      email,
      phone,
      subject,
      message,
    });

    res.status(201).json({ success: true, contact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

// GET /api/contact - list inquiries (for an admin dashboard later)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Could not load inquiries." });
  }
});

module.exports = router;
