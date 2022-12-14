// Express dependency and init.
const router = require("express").Router()

const { attachment } = require("express/lib/response");
const authCtrl = require("../controllers/auth");

// Routes
router.get("/auth/signup", authCtrl.auth_signup_get);
router.post("/auth/signup", authCtrl.auth_signup_post);
router.get("/auth/login", authCtrl.auth_login_get);
router.post("/auth/login", authCtrl.auth_login_post);
router.get("/auth/logout", authCtrl.auth_logout_get);
router.get("/auth/profile", authCtrl.auth_profile_get);

module.exports = router;