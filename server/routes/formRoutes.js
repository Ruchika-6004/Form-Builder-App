const express = require("express");
const router = express.Router();
const Form = require("../models/Form");

// Create form
router.post("/", async (req, res) => {
  try {
    const { title, fields } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Form title is required" });
    }

    const newForm = new Form({
      title,
      fields,
    });

    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    console.log("Create form error:", error);
    res.status(500).json({ message: "Failed to create form" });
  }
});

// Get all forms
router.get("/", async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    res.json(forms);
  } catch (error) {
    console.log("Fetch forms error:", error);
    res.status(500).json({ message: "Failed to fetch forms" });
  }
});

// Get single form
router.get("/:id", async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);

    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }

    res.json(form);
  } catch (error) {
    console.log("Fetch form error:", error);
    res.status(500).json({ message: "Failed to fetch form" });
  }
});

// Delete form
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Form.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Form not found" });
    }

    res.json({ message: "Form deleted successfully" });
  } catch (error) {
    console.log("Delete form error:", error);
    res.status(500).json({ message: "Failed to delete form" });
  }
});

module.exports = router;
