import 'babel-polyfill';
import express from 'express';
const {ROLE_BUYER,ROLE_CREATIVE,CREATE, CHANGE, WATCH ,CONTESTS} = require('../utils/Consts');
const RIGHTS_OF_USERS = require('../utils/Permisions');

const router = express.Router();
const userController = require('../controlls/userController');
const verifyRefreshToken = require('../middleWare/verifyRefreshToken');
const verifyAccessToken = require('../middleWare/verifyAccessToken');
const refreshTokenFindAndCount = require('../middleWare/refreshTokenFindAndCount');
const verifyUser = require('../middleWare/verifyUser');
const checkCountRefreshToken = require('../middleWare/checkCountRefreshToken');
const role = require('../middleWare/checkPermissions');

router.post('/user', userController.createUser);
router.get('/user', verifyAccessToken.check, userController.getUser);
router.get('/getAllUsers',verifyAccessToken.check, userController.getAllUsers);
router.post('/refresh', verifyRefreshToken.check,refreshTokenFindAndCount.check, userController.refreshUser);
router.post('/login', verifyUser.verify, checkCountRefreshToken.check, userController.loginUser);
router.post('/banStatusUpdate/:id',verifyAccessToken.check, userController.updateUserBanStatus);
router.delete('/logout', userController.logout);

router.get('/test', (req, res, next) => {
    const result = role.verifyPermissions({ownerId:4},CONTESTS,CHANGE,{role:ROLE_BUYER,id:5});
    res.send(result);
});

module.exports = router;
