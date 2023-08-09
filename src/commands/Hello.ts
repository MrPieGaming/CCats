import {ApplicationCommandType, BaseInteraction, Client, Interaction} from "discord.js";
import {Command} from "../Command";

export const Hello: Command = {
    name: "hello",
    description: "says hello",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: Interaction) => {
        const content = "Hello World!";
    }
}