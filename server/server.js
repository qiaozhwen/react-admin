import router from './router'
router.use('/api', router);
router.listen(8888, function () {
    console.log('server started')
});

