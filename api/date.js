module.exports = (req, res) => {
  res.json({
    date: new Date().getDate()
  })
}
