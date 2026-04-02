const validateAuthor = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  next();
};

const validateBook = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }
  next();
};

const validateStudent = (req, res, next) => {
  const { name, email, studentId } = req.body;
  if (!name || !email || !studentId) {
    return res.status(400).json({ message: "Name, email and studentId are required" });
  }
  next();
};

const validateAttendant = (req, res, next) => {
  const { name, staffId } = req.body;
  if (!name || !staffId) {
    return res.status(400).json({ message: "Name and staffId are required" });
  }
  next();
};

module.exports = {
  validateAuthor,
  validateBook,
  validateStudent,
  validateAttendant,
};