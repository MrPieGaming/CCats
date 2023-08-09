import {ApplicationCommandType, Client, CommandInteraction} from "discord.js";
import {Command} from "../Command";

export const Hello: Command = {
    name: "hello",
    description: "says hello",
    type: ApplicationCommandType["ChatInput"],
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Hello World!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}