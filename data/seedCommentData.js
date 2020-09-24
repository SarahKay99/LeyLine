(function (seedCommentData) {
    seedCommentData.initialComments = [
        {
            id: 1,
            name: "Bob",
            title: "I Hate This Bug",
            body: "I really hate the way you code guy, you are a mess, get more colours",
            date: Date.now()
        },
        {
            id: 2,
            name: "Ash",
            title: "WHAT IS THIS ERROR??????",
            body: "Hot Garbage!!",
            date: "07/07/2020"
        },
        {
            id: 3,
            name: "Tracy",
            title: "MongoDB Error",
            body: "How to save multiple collections into to MongoDB",
            date: Date.now()
        }
     ]
})(module.exports);