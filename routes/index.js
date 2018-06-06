import express from 'express'
const router = express.Router()

// HOMEPAGE
router.get('*', (req, res) => {
  throw new Error('Oops')
  res.render('index')
})

export default router
