import {Client} from "discord.js";
import * as process from "process";
import 'dotenv/config.js'
import ready from "./listeners/ready";
import interactionCreate from "./interactionCreate";

console.log("bot is starting...");

const token = process.env.DISCORD_API_KEY;
const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(token);