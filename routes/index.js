import express from 'express'
const router = express.Router()

// HOMEPAGE
router.get('*', (req, res) => {
  res.render('index')
})

export default router
