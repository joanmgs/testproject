import express from "express";

// router let you create the routes for the server
const router = express.Router();

router.get("/send", (req, res) => {
  res.send("Sended!");
  res.redirect('/');
});

export default router;
