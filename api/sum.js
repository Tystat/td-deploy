module.exports = (req, res) => {
  n1 = parseInt(req.query.n1, 10);
  n2 = parseInt(req.query.n2, 10);
  res.json({
    n1: n1,
    n2: n2,
    sum: n1+n2
  })
}
