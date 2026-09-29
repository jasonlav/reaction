import express, { Application } from "express";
const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/api/subscribe", (req, res) => {
  const payload = req.body ?? {};

  const email = payload.data?.email ?? null;
  if (!email) {
    return res.status(422).json({
      error: "Email is required",
    });
  }

  if (
    new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email) === false ||
    email.length >= 255
  ) {
    return res.status(422).json({
      error: "Invalid email format",
    });
  }

  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
