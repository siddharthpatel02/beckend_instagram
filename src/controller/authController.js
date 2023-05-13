
//Signup Route

exports.signUp = (req, res) => {
    res.status(200).json({
        statusbar: 'success',
        message: 'Create SignUp Success'
    })
    console.log(req.body)
}

//Signin Route

exports.signIn = (req, res) => {
    res.status(200).json({
        statusbar: 'success',
        message: ' SignIn Successfully'
    })
    const userId = req.params.id;
    const userId2 = req.params.pass;
    console.log(userId, userId2)
}