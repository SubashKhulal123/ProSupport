const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

// GET /api/services
router.get("/", async (req, res) => {
  try {
    const services = await Service.find().sort({ order: 1 });
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: "Could not load services." });
  }
});

// POST /api/services - seed/add a service (admin use)
router.post("/", async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
