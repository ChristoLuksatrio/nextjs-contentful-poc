export default async (req, res) => {
  res.setPreviewData({});
  res.redirect(req.query.redirect);
};
