// data access layer for players
import supabase from "../../database/playerDB.js";

export async function fetchAllPlayers() {
    // fetch all players from the supabase database
    const { data, error } = await supabase
        .from("players")
        .select("*");
    if (error){
        console.error(`Error fetching players from database: ${error}`);
        throw new Error(error.message);
    }
    return data; // [data] | null
}

export async function fetchPlayer(username) {
    // fetch player from the database by username
    const { data, error } = await supabase
        .from("players")
        .select("*")
        .eq("username", username);
    if (error){
        console.error(`Error fetching player from database: ${error}`);
        throw new Error(error.message);
    }
    return data; // [data] | null
}

export async function insertPlayer(username){
    // create new player in database
    const { data, error } = await supabase
        .from("players")
        .insert([{ username: username }])
        .select();
    if (error){
        console.error(`Error adding player to database: ${error}`);
        throw new Error(error.message);
    }
    return data; // [inserted data] | null
}

export async function fetchBestTime(username){
    // fetch player's best time (fastest time of riddle solving)
    const { data, error } = await supabase
        .from("players")
        .select("best_time")
        .eq("username", username);
    if (error){
        console.error(`Error fetching best time from database: ${error}`);
        throw new Error(error.message);
    }
    return data; // [data] | null
}

export async function updateBestTime(username, bestTime) {
    // update the best time of player
    const { data, error } = await supabase
        .from("players")
        .update({ best_time: bestTime })
        .eq("username", username)
        .select("*");
    if (error){
        console.error(`Error updating best time in database: ${error}`);
        throw new Error(error.message);
    }
    return data; // [updated data] | null
}

export async function fetchScore(username){
    // fetch player's score
    const { data, error } = await supabase
        .from("players")
        .select("score")
        .eq("username", username);
    if (error){
        console.error(`Error fetching score from database: ${error}`);
        throw new Error(error.message);
    }
    return data; // [data] | null
}

export async function updateScore(username, newScore) {
    // update the score of player
    const { data, error } = await supabase
        .from("players")
        .update({ score: newScore })
        .eq("username", username)
        .select();
    if (error){
        console.error(`Error updating score in database: ${error}`);
        throw new Error(error.message);
    }
    return data; // [updated data] | null
}

export async function updateUsername(username, newName) {
    // update the username of player
    const { data, error } = await supabase
        .from("players")
        .update({ username: newName })
        .eq("username", username)
        .select();
    if (error){
        console.error(`Error updating username in database: ${error}`);
        throw new Error(error.message);
    }
    return data; // [updated data] | null
}

export async function deletePlayer(username) {
    // delete player
    const { data, error } = await supabase
        .from("players")
        .delete()
        .eq("username", username)
        .select();
    if (error){
        console.error(`Error deleting player from database: ${error}`);
        throw new Error(error.message);
    }
    return data; // [deleted data] | null
}