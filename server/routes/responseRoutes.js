const express = require("express");
const router = express.Router();
const Response = require("../models/Response");

// Get responses by formId
router.get("/:formId", async (req, res) => {
  try {
    const responses = await Response.find({
      formId: req.params.formId,
    }).sort({ submittedAt: -1 });

    res.json(responses);
  } catch (error) {
    console.log("Fetch responses error:", error);
    res.status(500).json({ message: "Failed to fetch responses" });
  }
});

// Save response
router.post("/", async (req, res) => {
  try {
    const { formId, answers } = req.body;

    if (!formId) {
      return res.status(400).json({ message: "Form ID is required" });
    }

    const newResponse = new Response({
      formId,
      answers,
    });

    const savedResponse = await newResponse.save();
    res.status(201).json(savedResponse);
  } catch (error) {
    console.log("Save response error:", error);
    res.status(500).json({ message: "Failed to save response" });
  }
});

module.exports = router;
