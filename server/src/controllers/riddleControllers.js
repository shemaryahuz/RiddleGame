// handlers for riddles route

import { fetchAllRiddles } from "../dal/riddleDAL.js";
// import { addRiddle, deleteRiddleById, getAllRiddles, getRiddle, updateRiddleById } from "../services/riddleService.js";

export async function sendAllRiddles(req, res) {
    // get all riddles array
    const riddles = await fetchAllRiddles();
    res.send(riddles);
}

// export async function sendRiddle(req, res) {
//     // destruct id from request params
//     const riddleId = req.params?.riddleId;
//     // get the riddle by id
//     const riddle = await getRiddle(riddleId);
//     // if riddle is undefined, return message and status code of 'not found'
//     if (!riddle){
//         res.status(404).send({ error: "riddle id not found" });
//         return;
//     }
//     // if riddle found, convert to json string and send it
//     const riddleStr = JSON.stringify(riddle, null, 2);
//     res.send(riddleStr);
// }

// export async function addNewRiddle(req, res) {
//     // destruct the riddle from request body
//     const riddle = req.body;
//     // if body is not a json, return status code of bad request with error message
//     if (!riddle){
//         res.status(404).send({ error: "body is malformed" });
//         return;
//     }
//     // if body is not a valid format of riddle, return status code of bad request with error message
//     if (!riddle.name || !riddle.question || !riddle.answer){
//         res.status(400).send({ error: "riddle format is invalid" });
//         return;
//     }
//     // add the new riddle and get the created riddle with its id
//     const createdRiddle = await addRiddle(riddle);
//     // if not added, response with error message and status code of error
//     if (!createdRiddle){
//         res.status(500).json({ error: "error adding riddle to the database"});
//         return;
//     }
//     // if added response with succeded message and the created riddle as json string
//     const response = { message: "riddle added successfuly", riddle: createdRiddle };
//     const resStr = JSON.stringify(response, null, 2);
//     res.send(resStr);
// }

// export async function updateRiddle(req, res){
//     // destruct id from request params
//     const riddleId = req.params?.riddleId;
//     // destruct the riddle from request body
//     const riddle = req.body;
//     // if body is not a json, return status code of bad request with error message
//     if (!riddle){
//         res.status(404).send({ error: "body is malformed" });
//         return;
//     }
//     // if body is not a valid format of riddle, return status code of bad request with error message
//     if (!riddle.name || !riddle.question || !riddle.answer){
//         res.status(400).send({ error: "riddle format is invalid" });
//         return;
//     }
//     // update the riddle
//     const updatedRiddle = await updateRiddleById(riddleId, riddle);
//     // if not updated response with error message and status code of 'not found'
//     if (!updatedRiddle){
//         res.status(404).send({ error: "riddle id not found" });
//         return;
//     }
//     // if updated, response with succeded message and the updated riddle as json string
//     const response = { message: "riddle updated successfuly", riddle: updatedRiddle };
//     const resStr = JSON.stringify(response, null, 2);
//     res.send(resStr);
// }

// export async function deleteRiddle(req, res){
//     // destruct id from request params
//     const riddleId = req.params?.riddleId;
//     // delete riddle by id
//     const deleted = await deleteRiddleById(riddleId);
//     // if not deleted, return message with error message
//     if (!deleted){
//         res.status(404).send({ error: "riddle id not found" });
//         return;
//     }
//     // response with status code of 'ok' to send succeded message
//     res.status(200).json({ message: "riddle deleted successfuly" });
//}