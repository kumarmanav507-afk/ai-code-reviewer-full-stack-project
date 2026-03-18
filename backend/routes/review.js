const router = require("express").Router();

router.post("/", async (req, res) => {
  const { code } = req.body;

  const review = `
🔍 Review:
- Code readable hai 👍
- Variable naming improve karo
- Error handling add karo
`;

  res.json({ review });
});

module.exports = router;
