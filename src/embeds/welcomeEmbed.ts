import { Colors, EmbedBuilder, GuildMember} from "discord.js";
export class WelcomeEmbed
{
    public buildWelcomeEmbed(member: GuildMember) : EmbedBuilder
    {
        const embed = new EmbedBuilder();
        try 
        {
            const welcomeMessage = "**Hier erwartet dich ein Paradies für Gaming-Enthusiasten. Trete ein und finde Gleichgesinnte, lebhafte Diskussionen über Spiele, Turniere, Hilfestellungen und unvergessliche Gaming-Momente. Sei Teil unserer Gamer-Familie und lass uns gemeinsam die Welt der Videospiele erkunden!** 🎮🚀";


            embed.setAuthor({
                iconURL: member.displayAvatarURL(),
                name: member.user.tag + " hat den Server betreten"
            })
            .setColor('#FF7F00')
            .setDescription(welcomeMessage)
            .setFields([
                {
                    name: '‎',
                    value: `**_"Tritt ein, `+member.user.username+`, wir haben Dich bereits erwartet. Wärme Dich auf, genieß' das Ambiente und fühl' Dich wie zu Hause."_** 🔥`
                }])
        } 
        catch (error) 
        {
            console.log(error);
        }
            return embed;
    }
}