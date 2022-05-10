module.exports = (req, res) => {

    const content = req.rawText || req.body.snippet;
    if (!content) return res.status(400).json({message: "snippet not found"});
    req.models.snippets.create({content})
        .then(doc => {
            return res.status(201).json({id: `~${doc._id}`});
        });

};
