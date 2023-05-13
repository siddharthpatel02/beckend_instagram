
//Story Routes
exports.createStory = (req, res) => {
    res.status(200).json({
        statusbar: 'success',
        message: 'create Story Success'
    })
    console.log(req.body)
};
exports.deleteStory = (req, res) => {
    res.status(200).json({
        statusbar: 'success',
        message: 'Delete Story Success'
    })
}
exports.getStory = (req, res) => {
    res.status(200).json({
        statusbar: 'success',
        message: 'Get Story Success'
    })
}
// Profile Routes

exports.createProfile = (req, res) => {
    res.status(200).json({
        statusbar: 'success',
        message: 'Create Profile Success'
    })
    console.log(req.body)
};
exports.deleteProfile = (req, res) => {
    res.status(200).json({
        statusbar: 'success',
        message: 'Delete Profile Success'
    })
}
exports.getProfile = (req, res) => {
    res.status(200).json({
        statusbar: 'success',
        message: 'Get Profile Success'
    })
}
exports.updateProfile = (req, res) => {
    res.status(200).json({
        statusbar: 'success',
        message: 'Update Profile Success'
    })
}

// Newsfeed Routes
exports.getNewsFeed = (req, res) => {
    const userid = req.params.id;
    console.log(userid);
    res.status(200).json({
        statusbar: 'success',
        message: 'Get NewsFeed Success'
    });
}