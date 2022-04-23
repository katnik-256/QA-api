//GET '/question'
const getAllQuestion = (req, res, next) => {
    res.json({message: "GET all question"});
};

//POST '/question'
const newQuestion = (req, res, next) => {
    res.json({message: "POST new question"});
};

//DELETE '/question'
const deleteAllQuestion = (req, res, next) => {
    res.json({message: "DELETE all question"});
};

//GET '/question/:name'
const getOneQuestion = (req, res, next) => {
    res.json({message: "GET 1 question"});
};

//POST '/question/:name'
const newComment = (req, res, next) => {
    res.json({message: "POST 1 tea comment"});
};

//DELETE '/question/:name'
const deleteOneQuestion = (req, res, next) => {
    res.json({message: "DELETE 1 tea"});
};

//export controller functions
module.exports = {
    getAllQuestion, 
    newQuestion,
    deleteAllQuestion,
    getOneQuestion,
    newComment,
    deleteOneQuestion
};

