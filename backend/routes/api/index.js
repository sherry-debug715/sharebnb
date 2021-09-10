const router = require('express').Router();

module.exports = router;

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});

const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');

// Testing setTokenCookie middleware from utils/auth.js
router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      },
    })
  setTokenCookie(res, user);
  return res.json({ user });
}));

// Testing restoreUser middleware from utils/auth.js
router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);

// Testing requireAuth middleware from utils/auth.js: If there is no session user, the route will return an error. Otherwise it will return the session user's information.
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);
