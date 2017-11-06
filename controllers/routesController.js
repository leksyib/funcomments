exports.home = (req, res) => {
    const title = 'Fun Comments!'
    res.render('index', {title: title});
    req.flash("info", `welcome to ${title}`);
};

exports.signup = (req, res) => {
    res.render('sign-up', {title: 'Sign up'});
    req.flash("info", `Fill in the sign-up form to get in!`);
};

exports.login = (req, res) => {
    res.render('login', {title: 'login'});
    req.flash("info", `Enter your username and your password!`);
};

exports.error = (req, res) => {
    res.render('error', {title: 'error!'});
};

exports.profile = (req, res) => {
    const title = `${user.name}'s profile`;
    res.render('userprofile', );
};