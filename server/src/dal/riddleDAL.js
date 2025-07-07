// Data access layer for riddles

import fs from "fs/promises";

const PATH = "../data/riddles.txt";

export async function readRiddels(){
    return fs.readFile(PATH, 'utf-8');
}