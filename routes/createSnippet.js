module.exports = (req, res) => {

    const content = req.rawText || req.body.snippet;
    if (!content) return res.redirect('/');
    req.models.snippets.create({content})
        .then(doc => {
            return res.status(201).json({id: `~${doc._id}`});
        });

};
