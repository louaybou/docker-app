
function urlcontroller(req, res ,next) {
    const url = req.body
    if (!url){
        return res.status(400).json({
            error: 'URL is required'
        })
    }   }