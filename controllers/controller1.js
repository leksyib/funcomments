exports.home = (req, res) => {
    res.render('index', {title: 'Fun Comments!'});
};

exports.signup = (req, res) => {
    res.render('sign-up', {title: 'Sign up'});
};