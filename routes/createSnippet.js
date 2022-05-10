module.exports = (req, res) => {

    const content = req.rawText || req.body.snippet;
    if (!content) return res.redirect('/');
    fetch("/create", {
      "method": "POST",
      "body": JSON.stringify({
        snippet: content
      })
    }
        .then(doc => {
            return res.redirect(`/${doc.id}`);
        });

};
