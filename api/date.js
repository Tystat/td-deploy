date = new Date();
module.exports = (req, res) => {
  res.json({
    Day: date.getDate(),
    Month: date.getMonth()+1,
    Year: date.getFullYear()
  })
}
