import {Command} from "../Command";
import {
    ApplicationCommandOptionData,
    ApplicationCommandOptionType,
    ApplicationCommandType,
    Client,
    CommandInteraction
} from "discord.js";
import * as process from "process";

export const Meow: Command = {
    name: "meow",
    description: "summons a cat",
    type: ApplicationCommandType['ChatInput'],
    options: [
        {
            type: ApplicationCommandOptionType['Integer'],
            name: "cats",
            description: "number of cats to summon",
            required: false,
            max_value: 100
        } as ApplicationCommandOptionData
    ],
    run: async (client: Client, interaction: CommandInteraction) => {
        // console.log("the interaction:");
        // console.log(interaction);
        const limit = interaction.options.get('cats');
        const url = limit ?
            `https://api.thecatapi.com/v1/images/search?limit=${limit}` :
            "https://api.thecatapi.com/v1/images/search";
        const options = {
            method: 'GET',
            headers: {
                'x-api-key': process.env.CATS_API_KEY
            }
        } as RequestInit;
        const res = await fetch(url, options);
        const cats = await res.json();

        console.log(url);
        console.log(cats);

        await interaction.followUp({
            ephemeral: true,
            content: cats.length > 0 ? cats[0].url : "Something went wrong :("
        });
    }
}