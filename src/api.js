const express = require('express');
const serverless = require('serverless-http');

const app =express();
const router= express.Router();
const QuestionsAPI= [
	{
		"_id": "63cd73d50b419b287b87eeeb",
		"question": "Where do you most want to go in the world?",
		"createdAt": "2023-01-22T17:35:17.684Z",
		"updatedAt": "2023-01-22T17:35:17.684Z",
		"__v": 0
	},
	{
		"_id": "63d697898c1b73526a9f677c",
		"question": "What was your favorite subject in school as a child?",
		"createdAt": "2023-01-29T15:58:01.177Z",
		"updatedAt": "2023-01-29T15:58:01.177Z",
		"__v": 0
	},
	{
		"_id": "63d699608c1b73526a9f677f",
		"question": "What is your favorite season and why?",
		"createdAt": "2023-01-29T16:05:52.537Z",
		"updatedAt": "2023-01-29T16:05:52.537Z",
		"__v": 0
	},
	{
		"_id": "63d6998a8c1b73526a9f6781",
		"question": "If you could be any animal, what would you be?",
		"createdAt": "2023-01-29T16:06:34.629Z",
		"updatedAt": "2023-01-29T16:06:34.629Z",
		"__v": 0
	},
	{
		"_id": "63d699dc8c1b73526a9f6783",
		"question": "What is your favorite snack?",
		"createdAt": "2023-01-29T16:07:56.964Z",
		"updatedAt": "2023-01-29T16:07:56.964Z",
		"__v": 0
	},
	{
		"_id": "63d69a3e8c1b73526a9f6785",
		"question": "What is a good movie you've watched lately?",
		"createdAt": "2023-01-29T16:09:34.040Z",
		"updatedAt": "2023-01-29T16:09:34.040Z",
		"__v": 0
	},
	{
		"_id": "63d69a7f8c1b73526a9f6787",
		"question": "What superhero do you feel is underrated?",
		"createdAt": "2023-01-29T16:10:39.548Z",
		"updatedAt": "2023-01-29T16:10:39.548Z",
		"__v": 0
	},
	{
		"_id": "63d69af58c1b73526a9f6789",
		"question": "Would you rather have the ability to see 10 minutes into the future or 150 years into the future?",
		"createdAt": "2023-01-29T16:12:37.774Z",
		"updatedAt": "2023-01-29T16:12:37.774Z",
		"__v": 0
	},
	{
		"_id": "63d69bd08c1b73526a9f678b",
		"question": "What was your favorite childhood game?",
		"createdAt": "2023-01-29T16:16:16.028Z",
		"updatedAt": "2023-01-29T16:16:16.028Z",
		"__v": 0
	},
	{
		"_id": "63d6a1108c1b73526a9f678d",
		"question": "If you were allowed to learn another language at the click of a button, what would that language be?",
		"createdAt": "2023-01-29T16:38:40.985Z",
		"updatedAt": "2023-01-29T16:38:40.985Z",
		"__v": 0
	},
	{
		"_id": "63d6a12d8c1b73526a9f678f",
		"question": "What is your favorite pizza topping/s?",
		"createdAt": "2023-01-29T16:39:09.621Z",
		"updatedAt": "2023-01-29T16:39:09.621Z",
		"__v": 0
	},
	{
		"_id": "63d6a36a8c1b73526a9f6791",
		"question": "What hobby do you want to start or what hobby have you started?",
		"createdAt": "2023-01-29T16:48:42.745Z",
		"updatedAt": "2023-01-29T16:48:42.745Z",
		"__v": 0
	},
	{
		"_id": "63d6a3ab8c1b73526a9f6793",
		"question": "What is your favorite exercise or activity to stay healthy?",
		"createdAt": "2023-01-29T16:49:47.791Z",
		"updatedAt": "2023-01-29T16:49:47.791Z",
		"__v": 0
	},
	{
		"_id": "63d6a4358c1b73526a9f6795",
		"question": "Would you rather have the ability to fly superfast or become invisible at will?",
		"createdAt": "2023-01-29T16:52:05.806Z",
		"updatedAt": "2023-01-29T16:52:05.806Z",
		"__v": 0
	},
	{
		"_id": "63d6a54a8c1b73526a9f6797",
		"question": "What is your favorite dessert?",
		"createdAt": "2023-01-29T16:56:42.642Z",
		"updatedAt": "2023-01-29T16:56:42.642Z",
		"__v": 0
	},
	{
		"_id": "63d6a5958c1b73526a9f6799",
		"question": "What is your favorite fast food restaurant?",
		"createdAt": "2023-01-29T16:57:57.003Z",
		"updatedAt": "2023-01-29T16:57:57.003Z",
		"__v": 0
	},
	{
		"_id": "63d6a7498c1b73526a9f679b",
		"question": "What is your favorite kind of cookie?",
		"createdAt": "2023-01-29T17:05:13.006Z",
		"updatedAt": "2023-01-29T17:05:13.006Z",
		"__v": 0
	},
	{
		"_id": "63d6a87e8c1b73526a9f679d",
		"question": "What is your favorite candy?",
		"createdAt": "2023-01-29T17:10:22.021Z",
		"updatedAt": "2023-01-29T17:10:22.021Z",
		"__v": 0
	},
	{
		"_id": "63d6a9c68c1b73526a9f67a0",
		"question": "What song motivates or inspires you?",
		"createdAt": "2023-01-29T17:15:50.616Z",
		"updatedAt": "2023-01-29T17:15:50.616Z",
		"__v": 0
	},
	{
		"_id": "63d6aeb78c1b73526a9f67a2",
		"question": "If you could meet any fictional character from any book or movie, who would it be?",
		"createdAt": "2023-01-29T17:36:55.734Z",
		"updatedAt": "2023-01-29T17:36:55.734Z",
		"__v": 0
	},
	{
		"_id": "63d6aefc8c1b73526a9f67a4",
		"question": "If you could talk to any historical figure from any time period for a day, who would it be?",
		"createdAt": "2023-01-29T17:38:04.925Z",
		"updatedAt": "2023-01-29T17:38:04.925Z",
		"__v": 0
	}
]

router.get('/', (req, res)=>{
    res.json({
        QuestionsAPI
    })
})

app.use('/.netlify/functions/api', router)


module.exports.handler = serverless(app)