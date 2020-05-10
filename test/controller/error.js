exports.display404Page = (req, res) => {
    res.render('404',{
        title:'404 Error Page'
    });
}