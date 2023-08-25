function hasUser () {
    return (req, res, next) => {
        if (req.user != undefined) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    }
}

function isGuest() {
    return (req, res, next) => {
        if(req.user != undefined) {
            res.redirect('/');
        } else {
            next();
        }
    }
}

function hasRole(role) {
    return (req, res, next) => {
        if (req.user == undefined) {
            return res.redirect('/auth/login');
        } else if (!req.user.roles.includes(role)) {
            return res.redirect('/');
        }
        
        next();
    }
}

module.exports = {
    hasUser, 
    isGuest,
    hasRole
}