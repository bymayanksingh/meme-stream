const express = require("express");
const router = express.Router();
const Memes = require("../../models/meme.model");

router.get("/", async (req, res) => {
  Memes.find({}).sort({'updatedAt': 'desc'}).limit(100).exec((err, allMemes) => {
    if (err) {
      res.status(500).send();
    } else {
      res.send(allMemes);
    }
  });
});

router.get("/:id", async (req, res) => {
  const idToFind = req.params.id;
  Memes.findById(idToFind, (err, meme) => {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send(meme);
    }
  });
});

router.post("/", async (req, res) => {
  let newMeme = {
    name: req.body.name,
    caption: req.body.caption,
    url: req.body.url,
  };

  Memes.create(newMeme, async (err, newlyCreated) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send(newlyCreated);
    }
  });
});

router.patch("/", (req, res) => {
  const idToUpdate = req.body._id;
  const updatedMeme = {
    caption: req.body.caption,
    url: req.body.url,
  };

  Memes.findByIdAndUpdate(idToUpdate, updatedMeme, (err, doc) => {
    if (err) {
      res.status(500).send();
    } else if (doc == null) {
      res.status(400).send({ error: "Resource not found" });
    } else {
      res.status(204).send();
    }
  });
});

router.delete("/:id", (req, res) => {
  const IdToDelete = req.params.id;
  Memes.findByIdAndDelete(IdToDelete, (err, result) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  });
});

module.exports = router;
