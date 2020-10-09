module.exports = {
    // returns (simplified) user object, specifically for the header. 
    getUserViewModel: (req) => {
        console.log(`___authViewModel.js req.user = ${req.user}`);
        console.log(`___authViewModel.js session =`, req.session);

        var viewObject = {}
        if (req.user == undefined) {
            viewObject["user"] = { isLoggedIn: false };
            return viewObject;
        }
        else {
            viewObject["user"] = { isLoggedIn: true };
            viewObject["userDetails"] = req.user;
            return viewObject;
        }
    }
}