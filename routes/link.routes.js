const {Router} = require('express')
const config = require('config')
const shortid = require('shortid')
const auth = require('../middlware/auth.middlware')
const Link = require('../models/Link')
const router = Router()

router.post('/generate', auth, async (req, res) => {
    try {
        const {from} = req.body
        
        const existing = await Link.findOne({ from })
        if (existing) return res.json({ link: existing })
       
        const baseUrl = config.get('baseUrl')
        const code = shortid.generate()
        const to = baseUrl + '/t/' + code
        const link = new Link({
            code, to, from, owner: req.user.userId
        })

        await link.save()
        res.status(201).json({ link })
    } catch (error) {
        res.status(500).json({ message: `Server Error: ${error.message}` });
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const links = await Link.find({ owner: req.user.userId })
        res.json(links)
    } catch (error) {
        res.status(500).json({ message: `Server Error: ${error.message}` });
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        const link = await Link.findById(req.params.id)
        res.json(link)
    } catch (error) {
        res.status(500).json({ message: `Server Error: ${error.message}` });
    }
})

module.exports = router