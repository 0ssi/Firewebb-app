const cookieParser = require('cookie-parser')
const {auth, db} = require('./FBconfig')
const dbRef = db.ref('info')

exports.index = (req, res)=>{
    res.render('index')
}
exports.register = (req, res)=>{
    res.render('register')
}
exports.login = (req, res)=>{
        res.render('login')
}
exports.createUser = (req, res)=>{
    const {email, name, password} = req.body
    auth.createUser({
        displayName: name,
        email: email,
        password: password
    }).then((cred)=>{
        console.log(cred);
    }).catch((err)=>{
        console.log(err);
    })
    res.redirect('/login')
}
exports.profile = (req, res)=>{
    const user = req.currentUser
    let userInfo;
    dbRef.on('value', (snap)=>{
        userInfo = snap.val()[user.uid]
    })
    console.log(userInfo)

    res.render('profile', {
        info: user,
        userInfo: userInfo
    })
    //console.log(userInfo)
    //render profile + info från databasen och userinfo från token
}
exports.profileInfo = (req, res)=> {
    const info = req.body.info
    const user = req.currentUser
    //sparar till databasen
    dbRef.child(user.uid).set ({
        info: info
    })    
    res.redirect('/profile')

         
}

exports.signOut = (req, res)=>{
    res.cookie(' ', {maxAge: 0})
    res.redirect('/')
}


