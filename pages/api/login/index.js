export default (req, res) => {
  const data = JSON.parse(req.body);
  res.status(200).json({ "data": data });
};
