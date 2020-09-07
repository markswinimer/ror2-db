const ITEM_DATA = [
    {
      name: "Soldier's Syringe",
      icon: "SoldiersSyringe.png",
      id: "SoldiersSyringe",
      type: "common",
      text: "Increases attack speed.",
      description:
        "Increases <span style='color: #E5C962'>attack speed</span> by <span style='color: #E5C962'>15% <span style='color: #909090; font-size: %90; font-style: italic;'>(+15% per stack)</span>.",
      // lore:
      //   "\"I ain't much for drugs... but hell, when fortune is knockin', ya gotta greet that door with a smile and a nod. Salud!\"\r\n\r\n-Signal echoes, UES Contact Light\r\n",
    },
    {
      name: "Fresh Meat",
      icon: "FreshMeat.png",
      id: "FreshMeat",
      type: "common",
      text: "Regenerate health after killing an enemy.",
      description:
        "Increases<span style='color: #9CE562;'> base health regeneration</span> by <span style='color: #9CE562;'>+2 hp/s</span> for <span style='color: #95CDE5'>3s</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+3s per stack)</span> after killing an enemy.",
    },
    {
      name: "Focus Crystal",
      icon: "FocusCrystal.png",
      id: "FocusCrystal",
      type: "common",
      text: "Deal bonus damage to nearby enemies.",
      description:
        "Increase damage to enemies within <span style='color: #E5C962'>13m</span> by <span style='color: #E5C962'>15%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+15% per stack)</span>.",
    },
    {
      name: "Topaz Brooch",
      icon: "TopazBrooch.png",
      id: "TopazBrooch",
      type: "common",
      text: "Gain a temporary barrier on kill.",
      description:
        "Gain a <span style='color: #9CE562;'>temporary barrier</span> on kill for <span style='color: #9CE562;'>15 health <span style='color: #909090; font-size: %90; font-style: italic;'>(+15 per stack)</span>.",
      // lore:
      //   "Order: Topaz Brooch\r\nTracking Number: 442*****\r\nEstimated Delivery: 05/05/2056\r\nShipping Method: High Priority\r\nShipping Address: Locker #2, Parghos Resort, Venus\r\nShipping Details:\r\n\r\nThe locker combination is 33941. Inside the package, besides your standard equipment, you will find the brooch. The appearance of this item is meant to blend in at the party. Pin it to your body and the software inside will map your extents. Activation will briefly cover you in ultra-phasic shielding.\r\n\r\nWhen you have taken out the target, the shield will switch on to protect you from any immediate retaliation measures they have installed in the security system. If the time frame is not enough to make your escape, the shield can be... reactivated, but we\u2019d like to keep casualties to a minimum.\r\n\r\nGood luck.\r\n",
    },
    {
      name: "Energy Drink",
      icon: "EnergyDrink.png",
      id: "EnergyDrink",
      type: "common",
      text: "Sprint faster.",
      description:
        "<span style='color: #95CDE5; text-decoration: underline;'>Sprint speed</span> is improved by <span style='color: #95CDE5'>30%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+20% per stack)</span>.",
      // lore:
      //   "Order: NR-G Sports Soda (400)\r\nTracking Number: 49******\r\nEstimated Delivery: 03/12/2056\r\nShipping Method:  Standard\r\nShipping Address: Venetian Health & Public Services, Ridgelake, Venus\r\nShipping Details:\r\n\r\nYeah, so, uh this is the um, the energy drink that people were mixing during that disaster in Majora Minora a few weeks ago. \r\n\r\nA quick toxicology test on some of the victims has come back positive for um... all kinds of stuff, really. Methadone, phencyclidine, tetrahydrocannabinol, a variety of opiates, benzodiazepines, barbiturates, amphetamines... the list just goes on and on and on.\r\n\r\nRadical Drinks is insisting that NONE of those were from their energy drink - which I find pretty uh, unlikely. Maybe they REALLY know how to party in Violet Heights, huh?\r\n",
    },
    {
      name: "Backup Magazine",
      icon: "BackupMagazine.png",
      id: "BackupMagazine",
      type: "common",
      text: "Add an extra charge of your Secondary skill.",
      description:
        "Add <span style='color: #95CDE5'>+1</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+1 per stack)</span> charge of your <span style='color: #95CDE5'>Secondary skill</span>.",
    },
    {
      name: "Sticky Bomb",
      icon: "StickyBomb.png",
      id: "StickyBomb",
      type: "common",
      text: "Chance on hit to attach a bomb to enemies.",
      description:
        "<span style='color: #E5C962'>5%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+5% per stack)</span> chance on hit to attach a <span style='color: #E5C962'>bomb</span> to an enemy, detonating for <span style='color: #E5C962'>180%</span> TOTAL damage.",
      // lore:
      //   'In the blaring heat, a silhouette could be seen, hiding in the cool shade of a nearby cave. She was waiting for the sandstorm to pass.\r\n\r\nShe heard a noise and turned around, recognizing another silhouette. It bounded into the cave with excitement. As the figure got closer, she alarmingly noticed the cargo.\r\n\r\n"Woah, what the hell?! Why are you holding like, fifty bombs? Get away from me! "\r\n\r\n"What! We need these \u2013 this planet is trying to kill us! "\r\n\r\n"You\u2019re a walking bomb. Those are so unstable. Get away! Where did you even find those things? "\r\n\r\n"I found an industrial 3D printer nearby, and it was assigned to the blueprints of these bombs. Awesome, right? Unlimited bombs!"\r\n\r\n"\u2026What materials?"\r\n\r\n"Huh?"\r\n\r\n"What materials did you put in? We barely had anything."\r\n\r\n"I just put in everything."\r\n',
    },
    {
      name: "Rusted Key",
      icon: "RustedKey.png",
      id: "RustedKey",
      type: "common",
      text: "Gain access to a Rusty Lockbox that contains treasure.",
      description:
        "A <span style='color: #95CDE5'>hidden cache</span> containing an item will appear in a random location <span style='color: #95CDE5'>on each stage</span>. <span style='color: #909090; font-size: %90; font-style: italic;'>(Increases rarity of the item per stack)</span>.",
      // lore:
      //   "Order: Key\r\nTracking Number: 12******\r\nEstimated Delivery: 01/21/2056\r\nShipping Method: Standard\r\nShipping Address: |||||||, Druid Hills, Earth\r\nShipping Details:\r\n\r\nI don't trust UESC. Not one bit. Their Security Chests? Full of overrides and backdoors- I've got a cousin working in their factory, and they've got all kinds of weird things going on in those chests. I've seen so many of them in auctions - for the lost and unclaimed ones - and you just pay money, and it springs open on the spot. Are you kidding me?\r\n\r\nAnyways, I'm sending you exactly what I said I would - but it's too important to leave the security up to the UESC. So I'm sending the key to you - and the lockbox to Margaret. Like a two-factor authentication. Let me know when you get this.\r\n",
    },
    {
      name: "Armor-Piercing Rounds",
      icon: "ArmorPiercingRounds.png",
      id: "ArmorPiercindRounds",
      type: "common",
      text: "Deal extra damage to bosses.",
      description:
        "Deal an additional <span style='color: #E5C962'>20%</span> damage <span style='color: #909090; font-size: %90; font-style: italic;'>(+20% per stack)</span> to bosses.",
    },
    {
      name: "Repulsion Armor Plate",
      icon: "RepulsionArmorPlate.png",
      id: "RepulsionArmorPlate",
      type: "common",
      text: "Receive flat damage reduction from all attacks.",
      description:
        "Reduce all <span style='color: #E5C962'>incoming damage</span> by <span style='color: #E5C962'>5<span style='color: #909090; font-size: %90; font-style: italic;'> (+5 per stack)</span>. Cannot be reduced below <span style='color: #E5C962'>1</span>.",
      // lore:
      //   "Order: Repulsion Armor Replacement Piece\r\nTracking Number: 09******\r\nEstimated Delivery: 08/15/2056\r\nShipping Method:  Standard\r\nShipping Address: System Police Station 13, Port of Marv, Ganymede\r\nShipping Details:\r\n\r\nLuckily no one was hurt during the shootout. Just a few rough characters at the bar by the docks. Nothing we couldn\u2019t handle. Jaime took a shot to his shoulder but his armor took all the impact. We\u2019ll need to order him a replacement part before he can go back out in the field.\r\n\r\nThe segmented design is nice because I don\u2019t have to shell out the cash for a whole new set. Frankly, the station\u2019s coffers have seen better days. The next time a rookie damages their equipment they might be looking at a desk job for a while.\r\n",
    },
    {
      name: "Stun Grenade",
      icon: "StunGrenade.png",
      id: "StunGrenade",
      type: "common",
      text: "Chance to stun on hit.",
      description:
        "<span style='color: #95CDE5'>5%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+5% on stack)</span> chance on hit to <span style='color: #95CDE5'>stun</span> enemies for <span style='color: #95CDE5'>2 seconds</span>.",
    },
    {
      name: "Bundle of Fireworks",
      icon: "BundleOfFireworks.png",
      id: "BundleOfFireworks",
      type: "common",
      text:
        "Activating an interactable launches fireworks at nearby enemies.",
      description:
        "Activating an interactable <span style='color: #E5C962'>launches 8 <span style='color: #909090; font-size: %90; font-style: italic;'>(+4 per stack)</span> fireworks</span> that deal <span style='color: #E5C962'>300%</span> base damage.",
      // lore:
      //   "\"Hey, happy anniversary!\r\n\r\nYou really thought I forgot?\r\n\r\nAh, I thought I was the dumb one in our relationship. C'mon T, of course not! Well, I wasn't going to let a little alien death planet ruin our night. Right? Shh, just watch. Just watch. It's okay. Just watch. You'll love it - you really will. Then we can go home.\r\n\r\nYou can keep your eyes closed. Just listen. Ah - here it comes! In five... four... three... two... ONE...!\"\r\n",
    },
    {
      name: "Gasoline",
      icon: "Gasoline.png",
      id: "Gasoline",
      type: "common",
      text: "Killing enemies sets nearby enemies on fire.",
      description:
        "Killing an enemy <span style='color: #E5C962'>ignites</span> all enemies within <span style='color: #E5C962'>12m</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+4m per stack)</span>. Enemies <span style='color: #E5C962'>burn</span> for <span style='color: #E5C962'>150%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+75% per stack)</span> base damage.",
      // lore:
      //   "<span className='cMono>\r\nAudio transcription complete from signal echoes. Assigning generic tokens.</span>\r\n\r\n[Fire crackling]\r\n\r\nMAN 1: D-do you think they're gonna come for us?\r\n\r\nMAN 2: They'll try. It's going to be a very long while.\r\n\r\nMAN 1: What? Why?\r\n\r\nMAN 2: A long while. Even if they know where to look we'd be months out from the nearest port. And that's if they even have any ships as fast as ours \u2013 FTL ships are very rare nowadays.\r\n\r\nMAN 1: Months...?! And what do you mean if they know where? What about the other ships on our shipping routes?\r\n\r\nMAN 2: We weren't on the route.\r\n\r\n[Fire pops]\r\n\r\nMAN 1: What?!\r\n\r\nMAN 2: We should've been halfway to Procyon by the time we crashed... but we weren\u2019t. The ship never announced it was slowing down either, so that\u2019ll make triangulating our positions even harder.\r\n\r\nMAN 1: I-I don't get it. Who would take a UES train off course? That's completely insane!\r\n\r\nMAN 2: I don\u2019t know \u2013 only the Captain does. There\u2019s no reason to slow down in this star system - there's not even supposed to be a habitable planet out here.\r\n\r\n[Sizzling]\r\n\r\nMAN 2: This looks cooked to me. Can't vouch for how it'll taste - but we have to eat.\r\n\r\nMAN 1: I... I can't even think right now. I\u2019m not hungry.\r\n\r\nMAN 2: Eat. We've got a lot of traveling to do tomorrow and we'll need to keep our strength.\r\n\r\nMAN 1: Sure. Okay. Okay. Um\u2026 do you think it's poisonous?\r\n\r\nMAN 2: Eat.\r\n\r\n<span className='cMono>End of requested transcript. </span>\r\n",
    },
    {
      name: "Medkit",
      icon: "Medkit.png",
      id: "Medkit",
      type: "common",
      text: "Receive a delayed heal after taking damage.",
      description:
        "2 seconds after getting hurt, <span style='color: #9CE562;'>heal</span> for <span style='color: #9CE562;'>20</span> plus an additional <span style='color: #9CE562;'>5% <span style='color: #909090; font-size: %90; font-style: italic;'>(+5% per stack)</span> of <span style='color: #9CE562;'>maximum health</span>.",
      // lore:
      //   '\n<span className='cMono>"I suggest you stay indoors and rest."</span>\r\n\r\nMED-E, the medical bot, has been working overtime. The survivors felt very grateful that their escape pod landed near Med Bay cargo - they would have most likely perished without it.\r\n\r\n<span className='cMono>"I suggest you stay indoors and rest."</span>\r\n\r\nThe robot was speaking to a tall man, gaunt but strong. "I\'d love to, but we\'re running low on food." Even though his expression was hidden underneath his blue combat helmet, it was obvious the man was extremely tired. "And everyone else is recovering from last night\'s attacks. Without the enforcers, we probably wouldn\'t have-"\r\n\r\n<span className='cMono>"I suggest you stay indoors and rest." </span>\r\n\r\nIt was apparent that MED-E only had a limited set of lines. However, the man continued to respond. "I can\'t, MED-E. They\'re counting on me. You know that."\r\n\r\n<span className='cMono>"I suggest you stay indoors and rest." </span>\r\n\r\nThis time the man did not humor a reply. Grabbing his shotgun, he turned away from the echoing robot. Weaving his way between countless sleeping bags and stretchers, he set out into the wilderness again. Everyone was counting on him.\r\n\r\n<span className='cMono>"Please stay indoors and rest." </span>\r\n',
    },
    {
      name: "Cautious Slug",
      icon: "CautiousSlug.png",
      id: "CautiousSlug",
      type: "common",
      text: "Rapidly heal outside of danger.",
      description:
        "Increases <span style='color: #9CE562;'>base health regeneration</span> by <span style='color: #9CE562;'>+4 hp/s</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+4 hp/s per stack)</span>while outside of combat.",
    },
    {
      name: "Personal Shield Generator",
      icon: "PersonalShieldGenerator.png",
      id: "PersonalShieldGenerator",
      type: "common",
      text: "Gain a recharging shield.",
      description:
        "Gain a <span style='color: #9CE562;'>shield</span> equal to <span style='color: #9CE562;'>8%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+8% per stack)</span> of your maximum health. Recharges outside of danger.",
      // lore:
      //   '"While the kinetic rating is very poor, the extremely cheap production costs of Hinon\u2019s Personal Barrier made it a great budget tool for hikers, sailors, and even daily commuters to be comfortable in harsh weather. Many people in the office figured out they could replace their expensive winter jackets with comfortable, trendy personal barriers!"\r\n\r\n-Top 10 Best Personal Barriers of 2053\r\n',
    },
    {
      name: "Tougher Times",
      type: "common",
      icon: "TougherTimes.png",
      id: "TougherTimes.png",
      text: "Chance to block incoming damage.",
      description:
        "<span style='color: #9CE562;'>15%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+15% per stack)</span> chance to <span style='color: #9CE562;'>block</span> incoming damage. <span style='color: #95CDE5'>Unaffected by luck</span>.",
      // lore:
      //   '<span className='cMono>\n//--AUTO-TRANSCRIPTION FROM ROOM 4211B OF UES [Redacted] --//</span>\n\n"Why\'d you sign up?"\n\nWyatt\'s voice was bored. The mission to the Contact Light\'s last known location was taking longer than he expected.\n\nMalik was on the floor, cleaning her rifle. "To get paid, mostly."\n\n"And that\'s it?"\n\nShe grunted in affirmation. She continued to wipe down the weapon.\n\n"I\'m here to find something." He continued. "I shipped it a few years back, but I don\'t think it made it before the train went down. I\'m guessing it\'s still in the Contact Light. So I\'m gonna get it back."\n\nShe began to tighten the last remaining bolts. Her routine near completion, she moved her gaze to Wyatt. "Seriously?"\n\n"Yep!"\n\nMalik raised her brow. "There were over 7 million security chests in the Contact Light. The chance of you finding a specific one is impossible." She began to unfold her legs as she propped her rifle in the corner. "And according to the distress beacon, the Contact Light was destroyed in orbit. Your shipment is probably floating around in space. It\'s all gone, Wyatt."\n\nHe grinned. "I think I\'m gonna find it."\n\n"You\'re terrible."\n',
    },
    {
      name: "Monster Tooth",
      icon: "MonsterTooth.png",
      id: "MonsterTooth",
      type: "common",
      text: "Drop a healing orb on kill.",
      description:
        "Killing an enemy spawns a <span style='color: #9CE562;'>healing orb</span> that heals for <span style='color: #9CE562;'>8</span> plus an additional <span style='color: #9CE562;'>2% <span style='color: #909090; font-size: %90; font-style: italic;'>(+2% per stack)</span> of <span style='color: #9CE562;'>maximum health</span>.",
    },
    {
      name: "Lens-Maker's Glasses",
      icon: "LensMakersGlasses.png",
      id: "LensMakersGlasses",
      type: "common",
      text: "Chance to 'Critically Strike', dealing double damage.",
      description:
        "Your attacks have a <span style='color: #E5C962'>10%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+10% per stack)</span> chance to '<span style='color: #E5C962'>Critically Strike</span>', dealing <span style='color: #E5C962'>double damage</span>.",
    },
    {
      name: "Paul's Goat Hoof",
      icon: "PaulsGoatHoof.png",
      id: "PaulsGoatHoof",
      type: "common",
      text: "Move faster.",
      description:
        "Increases <span style='color: #95CDE5'>movement speed</span> by <span style='color: #95CDE5'>14%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+14% per stack)</span>.",
    },
    {
      name: "Bustling Fungus",
      icon: "BustlingFungus.png",
      id: "BustlingFungus",
      type: "common",
      text: "Heal all nearby allies after standing still for 2 seconds.",
      description:
        "After standing still for <span style='color: #9CE562;'>2</span> seconds, create a zone that <span style='color: #9CE562;'>heals</span> for <span style='color: #9CE562;'>4.5%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+2.25% per stack)</span> of your <span style='color: #9CE562;'>health</span> every second to all allies within <span style='color: #9CE562;'>3m</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+1.5m per stack)</span>.",
    },
    {
      name: "Crowbar",
      icon: "Crowbar.png",
      id: "Crowbar",
      type: "common",
      text: "Deal more damage to healthy enemies.",
      description:
        "Deal <span style='color: #E5C962'>150%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+50% per stack)</span> damage to enemies above <span style='color: #E5C962'>90% health</span>.",
    },
    {
      name: "Old War Stealthkit",
      icon: "OldWarStealthkit.png",
      id: "OldWarStealthkit",
      type: "common",
      text: "Turn invisible on taking heavy damage.",
      description:
        "Chance on taking damage to gain <span style='color: #95CDE5'>40% movement speed</span> and <span style='color: #95CDE5'>invisibility</span> for <span style='color: #95CDE5'>3s</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+1.5s per stack)</span>. Chance increases the more damage you take.",
      // lore:
      //   "Order:  Misc. OW Artifacts (47)\r\nTracking Number: 01******\r\nEstimated Delivery: 08/13/2056\r\nShipping Method: Priority\r\nShipping Address: National Old War Museum, New Orleans, Earth\r\nShipping Details:\r\n\r\nWe've managed to round up all the local Old War artifacts that we could find. A lot of interesting things here: rifles, rations, pamphlets. We even found a prototype stealthkit in fantastic condition; that could be a great centerpiece for your exhibit.\r\n\r\nHowever, a slight issue: in transit, the truck hit a pothole and jostled all the ship. It seemed to have actually activated the stealth drive - some strange short-circuit - and our team can't actually confirm the location of the stealthkit. It should be in one of the boxes - we will be expecting the commission to include the stealthkit.\r\n",
    },
    {
      name: "Tri-Tip Dagger",
      icon: "TriTipDagger.png",
      id: "TriTipDagger",
      type: "common",
      text: "Chance to bleed enemies on hit.",
      description:
        "<span style='color: #E5C962'>15%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+15% per stack)</span> chance to <span style='color: #E5C962'>bleed</span> an enemy for <span style='color: #E5C962'>240%</span> base damage.",
    },
    {
      name: "Warbanner",
      icon: "Warbanner.png",
      id: "Warbanner",
      type: "common",
      text:
        "Drop a Warbanner on level up or starting the Teleporter event. Grants allies attack and movement speed.",
      description:
        "On <span style='color: #95CDE5'>level up</span> or starting the <span style='color: #95CDE5'>Teleporter event</span>, drop a banner that strengthens all allies within <span style='color: #95CDE5'>16m</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+8m per stack)</span>. Raise <span style='color: #E5C962'>attack</span> and <span style='color: #95CDE5'>movement speed</span> by <span style='color: #E5C962'>30%</span>.",
    },
    {
      name: "Item Scrap, White",
      icon: "ScrapWhite.png",
      id: "ScrapWhite",
      type: "common",
      text: "Does nothing. Prioritized when used with 3D Printers.",
      description: "Does nothing. Prioritized when used with 3D Printers.",
    },
    {
      name: "Predatory Instincts",
      icon: "PredatoryInstincts.png",
      id: "PredatoryInstincts",
      type: "uncommon",
      text: "'Critical Strikes' increase attack speed. Stacks 3 times.",
      description:
        "<span style='color: #E5C962'>Critical strikes</span> increase <span style='color: #E5C962'>attack speed</span> by <span style='color: #E5C962'>12%</span>. Maximum cap of <span style='color: #E5C962'>36% <span style='color: #909090; font-size: %90; font-style: italic;'>(+24% per stack)</span> attack speed</span>.",
      // lore:
      //   "Gossip spreads quickly in terrified communities. Stories that keep the more fearful lizardfolk in their passageways. Hushed tales that frighten the most commanding of stone constructs and woodfolk and creatures of the plains. Fear travels between the trees and the valleys.\n\nA demon, fallen from the Sky, mighty enough to slay Providence and his Wurms. Only two arms, two legs - but with 22 unblinking, crimson eyes.\n",
    },
    {
      name: "Old Guillotine",
      icon: "OldGuillotine.png",
      id: "OldGuillotine",
      type: "uncommon",
      text: "Instantly kill low health Elite monsters.",
      description:
        "Instantly kill Elite monsters below <span className='Health>13% <span style='color: #909090; font-size: %90; font-style: italic;'>(+13% per stack)</span> health</span>.",
      // lore:
      //   "Order: Old Guillotine\r\nTracking Number: 782*****\r\nEstimated Delivery: 04/29/2056\r\nShipping Method: Standard\r\nShipping Address: Warehouse 36, Anklar, Primas V \r\nShipping Details:\r\n\r\nEveryone is still operating on adrenaline here. We finally overthrew our oppressors and have taken back Primas V! I know some of the overlords will attempt to buy their way onto a stealth transport, but that\u2019s going to be quite difficult due to their epic economic blunder.\r\n\r\nWe don\u2019t just want blood for all the injustices we\u2019ve suffered at their hands. We want to send a message to would-be sympathizers. This old guillotine will serve both as an execution method and a symbol to strike fear into their hearts wherever they might be hiding.\r\n\r\nPrimas V is alive!\r\n",
    },
    {
      name: "War Horn",
      icon: "WarHorn.png",
      id: "WarHorn",
      type: "uncommon",
      text: "Activating your Equipment gives you a burst of attack speed.",
      description:
        "Activating your Equipment gives you <span style='color: #E5C962'>+70% attack speed</span> for <span style='color: #E5C962'>8s</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+4s per stack)</span>.",
      // lore:
      //   '"The War of 2019, while lasting only a brief year, was the bloodiest conflict in human history. As the war got deadlier throughout the year, many rebel groups began to rely on tradition and history for inspiration. \r\n\r\nThe War Horn, pictured above was a favorite of the Northern Fist Rebellion for both its inspirational and tactical uses."\r\n\r\n-Exhibit at The National WW19 Museum',
    },
    {
      name: "Rose Buckler",
      icon: "RoseBuckler.png",
      id: "RoseBuckler",
      type: "uncommon",
      text: "Reduce incoming damage while sprinting.",
      description:
        "<span style='color: #9CE562;'>Increase armor</span> by <span style='color: #9CE562;'>30</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+30 per stack)</span> <span style='color: #95CDE5'>while sprinting</span>.",
      // lore:
      //   "Order: Please let me know when you get this. I foun...\r\nTracking Number: 53******\r\nEstimated Delivery: 05/22/2056\r\nShipping Method: Priority\r\nShipping Address: Research Center, Polarity Zone, Neptune\r\nShipping Details:\r\n\r\nBTW Mama should have sent over another package as well. Let me know when you get it.\r\n\r\nPapa",
    },
    {
      name: "Squid Polyp",
      icon: "SquidPolyp.png",
      id: "SquidPolyp",
      type: "uncommon",
      text: "Activating an interactable summons a Squid Turret nearby.",
      description:
        "Activating an interactable summons a <span style='color: #E5C962'>Squid Turret</span> that attacks nearby enemies at <span style='color: #E5C962'>100% <span style='color: #909090; font-size: %90; font-style: italic;'>(+100% per stack)</span> attack speed</span>. Lasts <span style='color: #95CDE5'>30</span> seconds.",
      // lore:
      //   '"It\u2019s disgusting."\r\n\r\n"It\u2019s only mildly disturbing. You\u2019re overreacting."\r\n\r\n"Well, when it turns on us, don\u2019t come crying to me."\r\n\r\n"It seems like it wants to only help us, so I\u2019d rather have it close in case that dangerous looking group comes back around."\r\n\r\n"I swear there\u2019s more than one. It\u2019s everywhere I look: the storage locker, the food dispenser, the cargo containers, everywhere!"\r\n\r\n"You\u2019re exaggerating, it\u2019s probably just following you. Snap out of it!"\r\n\r\n"Ow! Did you just smack me!?"\r\n\r\n"You were acting hysterical. I had toÖ hey, why is that thing looking at me now?"\r\n',
    },
    {
      name: "Ghor's Tome",
      icon: "GhorsTome.png",
      id: "GhorsTome",
      type: "uncommon",
      text: "Chance on kill to drop a treasure.",
      description:
        "<span style='color: #95CDE5'>4%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+4% on stack)</span> chance on kill to drop a treasure worth <span style='color: #95CDE5'>$25</span>. <span style='color: #95CDE5'>Scales over time.</span>",
      // lore:
      //   "Order: \u201CGhor\u2019s Tome\u201D\r\nTracking Number: 19******\r\nEstimated Delivery: 07/07/2056\r\nShipping Method: Priority\r\nShipping Address: 99th Floor, Crumbling Tower, Venus\r\nShipping Details:\r\n\r\nAncient secrets... transmutation... homunculi... alchemy. Nothing more than nonsense - pursuits of rightly intentioned but grossly misled minds. Or so I thought. This item's... unexpected physical properties are reason enough to stay my immediate dismissal.\r\n\r\nStrange fortune led this book to me, and stranger knowledge still fills the pages. Chilling, even. It concludes, in chapter eight, that even iron can become gold - but only through a ritual of intense bloodletting, a thought disturbing enough without considering the bountiful riches that accompanied the estate.\r\n\r\nThe takeaway, above all else, seems to be that you cannot get something from nothing; even the very paper of the tome turned to ash as I tried to make photocopies. Whatever was on the first two pages is lost forever. I need transcriptions of the rest by hand, and I know you take pride in your preion. \r\n\r\nAnd more importantly, Kosta, I trust you. Don't do anything that would draw attention to yourself. I will try to find the other volumes. This is knowledge too dangerous to lose.",
    },
    {
      name: "Death Mark",
      icon: "DeathMark.png",
      id: "DeathMark",
      type: "uncommon",
      text:
        "Enemies with 4 or more debuffs are marked for death, taking bonus damage.",
      description:
        "Enemies with <span style='color: #E5C962'>4</span> or more debuffs are <span style='color: #E5C962'>marked for death</span>, increasing damage taken by <span style='color: #E5C962'>50%</span> from all sources for <span style='color: #95CDE5'>7</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+7 per stack)</span> seconds.",
      // lore:
      //   "Order: \u201CDeath Mark\u201D\r\nTracking Number: 66******\r\nEstimated Delivery: 02\\22\\2056\\\r\nShipping Method:  High Priority\r\nShipping Address: 421 Lane, Lab [72], Mars\r\nShipping Details:\r\n\r\nEveryone said that I was crazy to search for lost artifacts on Mars. Idiots. There hasn\u2019t been any proof of a previous civilization - but I\u2019ve always trusted my gut. This skull proves that I\u2019m right - that something did exist here before.\r\n\r\nThat smug professor at the university... always disparaging my research. I loved seeing the look on his face as I shook his hand. Idiot. Karma must have been working overtime - I heard he fell ill shortly after. I suppose my success was just too much for him.\r\n\r\n...In fact, everyone I\u2019ve shown seems to not be returning my calls. Are they avoiding me? Are they scared this news would shake up their academic communities? Too proud to admit I\u2019m right?\r\n\r\nI\u2019ll find someone who will give me the recognition I deserve. I\u2019ve worked too hard and done too much. If I don\u2019t keep going, I think I might just die.\r\n",
    },
    {
      name: "Razorwire",
      icon: "Razorwire.png",
      id: "Razorwire",
      type: "uncommon",
      text: "Retaliate in a burst of razors on taking damage.",
      description:
        "Getting hit causes you to explode in a burst of razors, dealing <span style='color: #E5C962'>160% damage</span>. Hits up to <span style='color: #E5C962'>5</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+2 per stack)</span> targets in a <span style='color: #E5C962'>25m</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+10m per stack)</span> radius",
    },
    {
      name: "Lepton Daisy",
      icon: "LeptonDaisy.png",
      id: "LeptonDaisy",
      type: "uncommon",
      text:
        "Periodically release a healing nova during the Teleporter event.",
      description:
        "Release a <span style='color: #9CE562;'>healing nova </span>during the Teleporter event, <span style='color: #9CE562;'>healing</span> all nearby allies for <span style='color: #9CE562;'>50%</span> of their maximum health. Occurs <span style='color: #9CE562;'>1</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+1 per stack)</span> times.",
      // lore:
      //   "Order: Lepton Daisy\r\nTracking Number: 23******\r\nEstimated Delivery: 07/23/2056\r\nShipping Method: Standard\r\nShipping Address: Duck Lake, Orlandus, Earth \r\nShipping Details:\r\n\r\nDear Stalnia,\r\n\r\nI haven't been able to visit for a while, so I hope you and Libra are doing well. I heard that you're clearing the land there and want to spruce things up. I'm sending this flower I picked in the Carbon Fields of Electron Valley. The terraformers there told me that, over time, landscaping efforts were improved by the organic-band signals sent out by this plant. I've been helping them build a new world.\r\n\r\nJust make sure to put it up high enough that Mushka can't get to it. I'm not sure what effect it'll have on dogs...\r\n",
    },
    {
      name: "Runald's Band",
      icon: "RunaldsBand.png",
      id: "RunaldsBand",
      type: "uncommon",
      text:
        "High damage hits also blasts enemies with runic ice. Recharges over time.",
      description:
        "Hits that deal <span style='color: #E5C962'>more than 400% damage</span> also blasts enemies with a <span style='color: #E5C962'>runic ice blast</span>, <span style='color: #95CDE5'>slowing</span> them by <span style='color: #95CDE5'>80%</span> for <span style='color: #95CDE5'>3s</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+3s per stack)</span> and dealing <span style='color: #E5C962'>250%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+250% per stack)</span> TOTAL damage. Recharges every <span style='color: #95CDE5'>10</span> seconds.",
      // lore:
      //   '"Should memories be lost,\r\nShould oceans be clouded,\r\nWill you bring me fervor?\r\nWill you die with me?"\r\n\r\n-The Syzygy of Io and Europa\r\n',
    },
    {
      name: "Kjaro's Band",
      icon: "KjarosBand.png",
      id: "KjarosBand",
      type: "uncommon",
      text:
        "High damage hits also blasts enemies with a runic flame tornado. Recharges over time.",
      description:
        "Hits that deal <span style='color: #E5C962'>more than 400% damage</span> also blasts enemies with a <span style='color: #E5C962'>runic flame tornado</span>, dealing <span style='color: #E5C962'>300%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+300% per stack)</span> TOTAL damage over time. Recharges every <span style='color: #95CDE5'>10</span> seconds.",
      // lore:
      //   '"Should passion die down,\r\nShould light be extinguished,\r\nWill you bring me patience?\r\nWill you die with me?"\r\n\r\n-The Syzygy of Io and Europa',
    },
    {
      name: "Chronobauble",
      icon: "Chronobauble.png",
      id: "Chronobauble",
      type: "uncommon",
      text: "Slow enemies on hit.",
      description:
        "<span style='color: #95CDE5'>Slow</span> enemies on hit for <span style='color: #95CDE5'>-60% movement speed</span> for <span style='color: #95CDE5'>2s</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+2s per stack)</span>.",
      // lore:
      //   "Order: Chronobauble\r\nTracking Number: 99******\r\nEstimated Delivery: 03/03/2066\r\nShipping Method: Priority\r\nShipping Address: 9042 Pvt. Drive, Yustik Plaza, Mercury\r\nShipping Details:\r\n\r\nWeren't you just a kid? Summer break feels like it was just so recent - but it's been 10 years, hasn't it? Life moves faster and faster as you get older - less moments to remember, to cement you in time. I don't even remember being 25. How did I forget an entire year?\r\n\r\nAnyways - I found this in a trinket shop on Mercury. A chronobauble - the seller said something about special relativity, real heavy distortions or something - I didn't really get it. It's supposed to slow down time around it. Right.\r\n\r\nAnyways, I'm shipping this to myself - to arrive in 10 years. A gift, from me to me. A reminder to make memories, to slow down a bit. 10 years will pass so quick - try to remember them! You've got to put effort in life!\r\n",
    },
    {
      name: "Red Whip",
      icon: "RedWhip.png",
      id: "RedWhip",
      type: "uncommon",
      text: "Move fast out of combat.",
      description:
        "Leaving combat boosts your <span style='color: #95CDE5'>movement speed</span> by <span style='color: #95CDE5'>30%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+30% per stack)</span>.",
    },
    {
      name: "Wax Quail",
      icon: "WaxQuail.png",
      id: "WaxQuail",
      type: "uncommon",
      text: "Jumping while sprinting boosts you forward.",
      description:
        "<span style='color: #95CDE5'>Jumping</span> while <span style='color: #95CDE5'>sprinting</span> boosts you forward by <span style='color: #95CDE5'>10m</span><span style='color: #909090; font-size: %90; font-style: italic;'>(+10m per stack)</span>.",
      // lore:
      //   "Order: Wax Quail\r\nTracking Number: 15******\r\nEstimated Delivery: 12/18/2056\r\nShipping Method: Priority\r\nShipping Address: Research Center, Polarity Zone, Neptune\r\nShipping Details:\r\n\r\nHello Buu,\r\nHow are you doing? This is Mama. \r\n\r\nThe weather here has been dreadful. It is raining every day. We have recently found a new bakery nearby that has delicious sandwiches. Papa has recently taken up whittling. He uses wax because it is softer. I have attached one of his favorites. Hopefully it has not been dinged in the mail :-)\r\n\r\nAnyways, I will leave Buu alone. Hope to see you soon!\r\nMama",
    },
    {
      name: "Berzerker's Pauldron",
      icon: "BerzerkersPauldron.png",
      id: "BerzerkersPauldron",
      type: "uncommon",
      text: "Enter a frenzy after killing 3 enemies in quick succession.",
      description:
        "<span style='color: #E5C962'>Killing 3 enemies</span> within <span style='color: #E5C962'>1</span> second sends you into a <span style='color: #E5C962'>frenzy</span> for <span style='color: #E5C962'>6s</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+4s per stack)</span>. Increases <span style='color: #95CDE5'>movement speed</span> by <span style='color: #95CDE5'>50%</span> and <span style='color: #E5C962'>attack speed</span> by <span style='color: #E5C962'>100%</span>.",
    },
    {
      name: "AtG Missile Mk. 1",
      icon: "AtGMissileMk1.png",
      id: "AtGMissileMk1",
      type: "uncommon",
      text: "Chance to fire a missile.",
      description:
        "<span style='color: #E5C962'>10%</span> chance to fire a missile that deals <span style='color: #E5C962'>300%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+300% per stack)</span> TOTAL damage.",
    },
    {
      name: "Will-o'-the-wisp",
      icon: "WilloTheWisp.png",
      id: "WilloTheWisp",
      type: "uncommon",
      text: "Detonate enemies on kill.",
      description:
        "On killing an enemy, spawn a <span style='color: #E5C962'>lava pillar</span> in a <span style='color: #E5C962'>12m</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+2.4m per stack)</span> radius for <span style='color: #E5C962'>350%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+280% per stack)</span> base damage.",
      // lore:
      //   '<span className='cMono>Audio transcription complete from portable recorder.\r\n\r\nPrinting...</span>\r\n\r\n"You don\u2019t want to re-name it Bill-o-the-Wisp?"\r\n"NO."\r\n"JAR-ed?"\r\n"NO."\r\n"Then what about FLARE-ed?"\r\n"STOP."\r\n"It needs a name, it\u2019s no dif-FIRE-ent than you or me."\r\n"Next time we\u2019re at base I\u2019m applying for a transfer."\r\n"You know that won\u2019t go through until at least Dec-EMBER."\r\n"How long have you been waiting to use these?"\r\n"Coming up with them on the spot. I\u2019ve got a good head on my SMOULDERS."\r\n"You can stop emphasizing those words so much. I get it."\r\n"I will never stop FUELING around."\r\n"..."\r\n"..."\r\n"..."\r\n"Want to grab something to eat when we get back?"\r\n"Thank the stars that\u2019s over, yes. I hope they\u2019re not serving that gruel we had yesterday."\r\n"Maybe they\u2019ll cook you a pep-PYRO-ni pizza?"\r\n"..."\r\n"Hey, wait up! I can\u2019t run holding this thing, it might go off!"\r\n',
    },
    {
      name: "Hopoo Feather",
      icon: "HopooFeather.png",
      id: "HopooFeather",
      type: "uncommon",
      text: "Gain an extra jump.",
      description:
        "Gain <span style='color: #95CDE5'>+1</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+1 per stack)</span> maximum <span style='color: #95CDE5'>jump count</span>.",
    },
    {
      name: "Ukulele",
      icon: "Ukulele.png",
      id: "Ukulele",
      type: "uncommon",
      text: "...and his music was electric.",
      description:
        "<span style='color: #E5C962'>25%</span> chance to fire <span style='color: #E5C962'>chain lightning</span> for <span style='color: #E5C962'>80%</span> TOTAL damage on up to <span style='color: #E5C962'>3 <span style='color: #909090; font-size: %90; font-style: italic;'>(+2 per stack)</span> targets within <span style='color: #E5C962'>20m</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+2m per stack)</span>.",
    },
    {
      name: "Leeching Seed",
      icon: "LeechingSeed.png",
      id: "LeechingSeed",
      type: "uncommon",
      text: "Dealing damage heals you.",
      description:
        "Dealing damage <span style='color: #9CE562;'>heals</span> you for <span style='color: #9CE562;'>1 <span style='color: #909090; font-size: %90; font-style: italic;'>(+1 per stack)</span> health</span>.",
    },
    {
      name: "Harvester's Scythe",
      icon: "HarvestersScythe.png",
      id: "HarvestersScythe",
      type: "uncommon",
      text: "'Critical Strikes' heal you.",
      description:
        "Gain <span style='color: #E5C962'>5% critical chance</span>. <span style='color: #E5C962'>Critical strikes</span> <span style='color: #9CE562;'>heal</span> for <span style='color: #9CE562;'>8</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+4 per stack)</span> <span style='color: #9CE562;'>health</span>.",
    },
    {
      name: "Fuel Cell",
      icon: "FuelCell.png",
      id: "FuelCell",
      type: "uncommon",
      text: "Hold an additional equipment charge. Reduce equipment cooldown.",
      description:
        "Hold an <span style='color: #95CDE5'>additional equipment charge</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+1 per stack)</span>. <span style='color: #95CDE5'>Reduce equipment cooldown</span> by <span style='color: #95CDE5'>15%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+15% per stack)</span>.",
      // lore:
      //   "'As humanity began to venture out into the depths of space, high-energy but low-volume fuel sources became critical for interplanetary travel. Stability came later.'\n-Brief History of Interplanetary Advances, Vol.2\n",
    },
    {
      name: "Infusion",
      icon: "Infusion.png",
      id: "Infusion",
      type: "uncommon",
      text: "Killing an enemy permanently increases your health, up to 100.",
      description:
        "Killing an enemy increases your <span style='color: #9CE562;'>health permanently</span> by <span style='color: #9CE562;'>1</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+1 per stack)</span>, up to a <span style='color: #9CE562;'>maximum</span> of <span style='color: #9CE562;'>100 <span style='color: #909090; font-size: %90; font-style: italic;'>(+100 per stack)</span> health</span>.",
    },
  
    {
      name: "Bandolier",
      icon: "Bandolier.png",
      type: "uncommon",
      id: "Bandolier.png",
      text:
        "Chance on kill to drop an ammo pack that resets all skill cooldowns.",
      description:
        "<span style='color: #95CDE5'>18%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+10% on stack)</span> chance on kill to drop an ammo pack that <span style='color: #95CDE5'>resets all skill cooldowns</span>.",
      // lore:
      //   "Order: Bandolier\r\nTracking Number: 112*****\r\nEstimated Delivery: 04/19/2056\r\nShipping Method: Standard\r\nShipping Address: 3950 Sunsell Ln, Tri-City, Earth\r\nShipping Details:\r\n\r\nThank you for your participation in the auction! We\u2019ve included a short history on the item, as well as documents to verify its authenticity.\r\n\r\nThis is the famous bandolier worn by B. Grundy himself. He and his pals used to raise terror all over the map of the new territories. Their favorite activity was to tie up people they didn\u2019t like and drag them behind their horses \u2013 Grundy clearly had a sweet spot for the old days.\r\n\r\nThe sling carries an impressive assortment of ammunition - Grundy himself carried many different guns. It was rumored that they held out for 3 whole days and nights before their weapons ran dry.\r\n\r\n",
    },
    {
      name: "Item Scrap, Green",
      icon: "ScrapGreen.png",
      id: "ScrapGreen",
      type: "uncommon",
      text: "Does nothing. Prioritized when used with 3D Printers.",
      description: "Does nothing. Prioritized when used with 3D Printers.",
    },
    {
      name: "Titanic Knurl",
      icon: "TitanicKnurl.png",
      id: "TitanicKnurl",
      type: "boss",
      text: "Boosts health and regeneration.",
      description:
        "<span style='color: #9CE562;'>Increase maximum health</span> by <span style='color: #9CE562;'>40</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+40 per stack)</span> and <span style='color: #9CE562;'>base health regeneration</span> by <span style='color: #9CE562;'>+1.6 hp/s<span style='color: #909090; font-size: %90; font-style: italic;'>(+1.6 hp/s per stack)</span>.",
    },
    {
      name: "Queen's Gland",
      icon: "QueensGland.png",
      id: "QueensGland",
      type: "boss",
      text: "Recruit a Beetle Guard.",
      description:
        "Every 30 seconds, <span style='color: #95CDE5'>summon a Beetle Guard</span> with bonus <span style='color: #E5C962'>300%</span> damage and <span style='color: #9CE562;'>100% health</span>. Can have up to <span style='color: #95CDE5'>1</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+1 per stack)</span> Guards at a time.",
      // lore:
      //   '"Yeah, uh, Kaitlin? Let me know if you copy."\r\n\r\n"I copy. What\'s up?"\r\n\r\n"I\'ve made friends? I don\'t know. "\r\n\r\n"What? "\r\n\r\n"The giant bug we killed earlier - well, the corpse seemed to attract a bunch of nasties. I was on my way to clean them up when I realized they were... waiting? Confused, maybe. Anyways, I was walking up to them to get rid of em, and strangely enough they seemed passive. The same bugs that gave me that concussion yesterday, and-"\r\n\r\n"What?! Are you okay? "\r\n\r\n"Huh? Yeah, I\'m fine. Anyways, I felt bad killin\' them since they seemed all... inert and such. So I just kinda left and they\'ve been following me ever since. Real weird. Anyways, I guess I\'ve made some friends. I wonder what they eat... do they eat? Since they don\'t have any mouths that I-"\r\n\r\n"Rich, stop! Please don\'t bring them back to camp! "\r\n\r\n"Oh, well uh...I could - Junior, stop! Leave your brother alone! "',
    },
  
        

    {
      name: "Halcyon Seed",
      icon: "HalcyonSeed.png",
      id: "HalcyonSeed",
      type: "boss",
      text: "Summon Aurelionite during the Teleporter event.",
      description:
        "Summon <span style='color: #E5C962'>Aurelionite</span> during the teleporter event. It has <span style='color: #E5C962'>100% <span style='color: #909090; font-size: %90; font-style: italic;'>(+50% per stack)</span> damage</span> and <span style='color: #9CE562;'>100% <span style='color: #909090; font-size: %90; font-style: italic;'>(+100% per stack)</span> health</span>.",
      // lore:
      //   "Brother, what is this...? Why is it misshapen and weak? Was there an error in my design?\r\n\r\nGuardian. Come to me. Allow me to see your construction.\r\n\r\n...\r\n\r\nSo I see.\r\n\r\nThese are not the correct ratios.\r\n\r\nThis is no minor error, Brother. You have purposefully deviated from the design. For what purpose have you done this? You cannot weave a construct from such an abundance of soul. You know it is too unstable - that it is too unpredictable and too frail. I have told you this, and yet you have wasted the materials I have gathered - and exhausted your own strength to fabricate this miscreation.\r\n\r\nTo what benefit?\r\n\r\nAt its best, it can be no more than an inferior servant; it is deficient in the compounds that were to give it fortitude and strength. At its worst, it will betray us.\r\n\r\nYou have created the first being of this world which threatens us. We cannot keep it here. Attempting to destroy it will risk its retaliation... I will prepare one of the vaults for it to be sealed away, while it is still young and naive.\r\n\r\nWhat a foolish mistake you have made, brother.\r\n\r\nI expect you to return the design to me. I cannot allow you to build another construct with so much power - and with such little control. I will build the rest of our guardians; by my hand, they will be weak, but at least they will be loyal.\r\n\r\nGo home. I will deal with this creature. We can discuss a better project for you when I return.",
    },
    {
      name: "Little Disciple",
      icon: "LittleDisciple.png",
      id: "LittleDisciple",
      type: "boss",
      text: "Fire tracking wisps while sprinting.",
      description:
        "Fire a <span style='color: #E5C962'>tracking wisp</span> for <span style='color: #E5C962'>300% <span style='color: #909090; font-size: %90; font-style: italic;'>(+300% per stack)</span> damage</span>. Fires every <span style='color: #95CDE5'>1.6</span> seconds while sprinting. Fire rate increases with <span style='color: #95CDE5'>movement speed</span>.",
      // lore:
      //   "HELLO, LITTLE ONE. HOW WAS YOUR ADVENTURE TODAY?\r\n\r\nOH\r\n\r\nYOUR FORM IS BROKEN, LITTLE ONE. WHAT TRICKERIES HAVE YOU GOTTEN YOURSELF INTO?\r\n\r\nOH\r\n\r\nDO YOU TIRE OF ADVENTURE? \r\n\r\nWOULD YOU LIKE TO HELP ME TEND TO THE GARDEN, MY LITTLE ONE?\r\n\r\nI UNDERSTAND. OH, YOUR FORM! DO NOT WORRY. COME CLOSER.\r\n\r\nHERE - TWO COILS OF DENKU ROPE. THOSE ARE FOR STRENGTH.\r\n\r\nHERE - FOUR CARDS OF OBSIDIAN. THOSE ARE FOR SELF-CONFIDENCE.\r\n\r\nI GIVE YOU NOTHING FOR SPIRIT.\r\n\r\nOH, DO NOT WORRY! WE WILL STILL GO ON ADVENTURES. THEY WILL BE QUIET ADVENTURES. \r\n\r\nCOME CLOSER - CLOSER NOW. \r\n\r\nCLOSER!\r\n\r\nNOW WATCH - WATCH CLOSELY. \r\n\r\nWATCH HOW I TEND TO OUR GARDEN.\r\n",
    },
  
    {
      name: "Pearl",
      icon: "Pearl.png",
      id: "Pearl",
      type: "boss",
      text: "Increase your maximum health.",
      description:
        "Increases <span style='color: #9CE562;'>maximum health</span> by <span style='color: #9CE562;'>10%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+10% per stack)</span>.",
    },
    {
      name: "Irradiant Pearl",
      icon: "IrradiantPearl.png",
      id: "IrradiantPearl",
      type: "boss",
      text: "Increase ALL of your stats.",
      description:
        "Increases <span style='color: #95CDE5'>ALL stats</span> by <span style='color: #95CDE5'>10%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+10% per stack)</span>.",
    },
    
    {
      name: "Genesis Loop",
      icon: "GenesisLoop.png",
      id: "GenesisLoop",
      type: "boss",
      text: "Fire an electric nova at low health.",
      description:
        "Falling below <span className='Health>25% health</span> causes you to explode, dealing <span style='color: #E5C962'>6000% base damage</span>. Recharges every <span style='color: #95CDE5'>30 seconds</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(-50% per stack)</span>.",
    },
    // NOT IN GAME YET
    // {
    //   name: "Ancestral Incubator",
    //   icon: "AncestralIncubator.png",
    //   id: "AncestralIncubator",
    //   type: "boss",
    //   text: "Chance on kill to summon an Ancestral Pod.",
    //   description:
    //     "<span style='color: #E5C962'>7%</span> chance <span style='color: #909090; font-size: %90; font-style: italic;'>(+1% per stack)</span> on kill to <span style='color: #95CDE5'>summon an Ancestral Pod</span> that distracts enemies. \n\nOnce it fully grows, it will hatch into an allied <span style='color: #E5C962'>Parent</span> with <span style='color: #9CE562;'>100% health</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+100% per stack)</span>.",
    //   // lore:
    //   //   '"How do they know who their leader is? Is it instinct? Or is there something about me?"\r\n\r\n"I can\'t believe you\'re having me cover for you, Ashley. You know the rules. The last time someone brought something \'friendly\' to the camp it did NOT end well. Rich cried for days."\r\n\r\n"But if we figure out how to communicate we can use it to our benefit! Besides, the guy is pretty helpful around here. He can lift heavy boxes and reach high places."\r\n\r\n"I think we should just put that thing back where you found it. Who knows if it will attract more?"\r\n\r\n"This is for science...! And besides, maybe it can teach us something about this environment. He\'s a native here."\r\n\r\n"Yeah, cool, native, okay, I\'m out."\r\n',
    // },
    {
      name: "Molten Perforator",
      icon: "MoltenPerforator.png",
      id: "MoltenPerforator",
      type: "boss",
      text: "Chance on hit to fire magma balls.",
      description:
        "<span style='color: #E5C962'>10%</span> chance on hit to call forth <span style='color: #E5C962'>3 magma balls</span> from an enemy, dealing <span style='color: #E5C962'>300%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+300% per stack)</span> damage each.",
      // lore:
      //   '<span className='cMono>Lab Dissection Analysis File</span>\r\n\r\nSubject: Molten Perforator\r\nTechnician: Dema "Dembones" Brown\r\nTable Spec: Heatsink UB-2\r\nNotes:\r\n\r\n> Using UB-2 due to temperatures above safe levels.\r\n> Removing molten enamel and placing aside for substance analysis. It\u2019s solid, yet swimming.\r\n> Upon structural investigation, found cavities and internal chambers\r\n> Reduce lab temperatures by 10 degrees\r\n> Heat generating veins present - fire is being supplied to the tooth?\r\n> Removed my lab coat, very hot\r\n> Heat generation is still occurring in the severed object\r\n> Put some more ice in my drink WOW its hot\r\n> Timestamping for break\r\n',
    },
    {
      name: "Shatterspleen",
      icon: "Shatterspleen.png",
      id: "Shatterspleen",
      type: "boss",
      text:
        "Critical strikes always bleed enemies. Bleeding enemies now explode.",
      description:
        "<span style='color: #E5C962'>Critical Strikes bleed</span> enemies for <span style='color: #E5C962'>240%</span> base damage. <span style='color: #E5C962'>Bleeding</span> enemies <span style='color: #E5C962'>explode</span> on death for <span style='color: #E5C962'>400%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+400% per stack)</span> damage, plus an additional <span style='color: #E5C962'>15%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+15% per stack)</span> of their maximum health.",
      // lore:
      //   "<span className='cMono>Lab Dissection Analysis File</span>\r\n\r\nSubject: Shatterspleen\r\nTechnician:  Professor Mehri Daimera\r\nTable Spec: Spillproof BDC-3\r\nNotes:\r\n\r\n> This will be my third attempt at a dissection of an Imp organ\r\n> First attempt resulted in rupture\r\n> Second attempt resulted in rupture\r\n> Cutting into the outer layer produces copious amounts of fluid discharge\r\n> As the fluid flows, the rest of the organ, inexplicably, swells\r\n> Swelling will ultimately result in violent rupture\r\n> Made use of the stemming tools on the BDC-3 to successfully proceed without incident\r\n> Surprised to find sharp needle point objects (bones?) inside\r\n> Timestamping for break\r\n> Came back to leave some final notes\r\n> Third attempt aborted after I injured my hand\r\n> Eventually was able to stop my own bleeding. The organ seems to contain immense anticoagulant properties.\r\n",
    },
    {
      name: "Artifact Key",
      icon: "ArtifactKey.png",
      id: "ArtifactKey",
      type: "boss",
      text: "A stone shard with immense power.",
      description: "A stone shard with immense power.",
    },
    {
      name: "Mired Urn",
      icon: "MiredUrn.png",
      id: "MiredUrn",
      type: "boss",
      text: "Siphon health from nearby characters while in combat.",
      description:
        "While in combat, the nearest 1<span style='color: #909090; font-size: %90; font-style: italic;'>(+1 per stack)</span> characters to you within <span style='color: #E5C962'>13m</span> will be 'tethered' to you, dealing <span style='color: #E5C962'>100%</span> damage per second, applying <span style='color: #E5C962'>tar</span>, and <span style='color: #9CE562;'>healing</span> you for <span style='color: #9CE562;'>100%</span> of the damage dealt.",
        // lore:
        //   "<span className='cMono>Lab Dissection Analysis File</span>\r\nSubject: Mired Urn\r\nTechnician: J. Flint\r\nTable Spec: Full Enclosure AY-2 with ARMM Kit\r\nNotes:\r\n\r\n- The survey team went through a lot of trouble to bring this one back.\r\n- Fitz was the only one left standing, in fact said he felt great, and the rest are still in the recovery ward\r\n- Subject is what appears to be a clay vase\r\n- Could this be part of a camouflaging defense mechanism?\r\n- Inside the vase is a dark gooey substance\r\n- Goo can articulate into functioning appendages\r\n- Intelligence of subject indeterminable at this point\r\n- When operating the ARMM kit, goo attaches to all but one of them\r\n- Instability in the ARMM power system aborts the procedure\r\n",
      },
      {
        name: "Item Scrap, Yellow",
        icon: "ScrapYellow.png",
        id: "ScrapYellow",
        type: "boss",
        text: "Does nothing. Prioritized when used with 3D Printers.",
        description: "Does nothing. Prioritized when used with 3D Printers.",
      },
    {
      name: "Defensive Microbots",
      icon: "DefensiveMicrobots.png",
      id: "DefensiveMicrobots",
      type: "legendary",
      text:
      "Shoot down nearby projectiles. Recharge rate scales with attack speed.",
      description:
      "Shoot down <span style='color: #E5C962'>1</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+1 per stack)</span> projectiles within <span style='color: #E5C962'>20m</span> every <span style='color: #E5C962'>0.5 seconds</span>. <span style='color: #95CDE5'>Recharge rate scales with attack speed</span>.",
    },
    {
      name: "57 Leaf Clover",
      icon: "57LeafClover.png",
      id: "57LeafClover",
      type: "legendary",
      text: "Luck is on your side.",
      description:
        "All random effects are rolled <span style='color: #95CDE5'>+1</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+1 per stack)</span>times for a <span style='color: #95CDE5'>favorable outcome</span>.",
      },
    {
      name: "Brilliant Behemoth",
      icon: "BrilliantBehemoth.png",
      id: "BrilliantBehemoth",
      type: "legendary",
      text: "All your attacks explode!",
      description:
        "All your <span style='color: #E5C962'>attacks explode</span> in a <span style='color: #E5C962'>4m </span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+1.5m per stack)</span> radius for a bonus <span style='color: #E5C962'>60%</span> TOTAL damage to nearby enemies.",
    },
    {
      name: "Ceremonial Dagger",
      icon: "CeremonialDagger.png",
      id: "CeremonialDagger",
      type: "legendary",
      text: "Killing an enemy releases homing daggers.",
      description:
        "Killing an enemy fires out <span style='color: #E5C962'>3</span> <span style='color: #E5C962'>homing daggers</span> that deal <span style='color: #E5C962'>150%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+150% per stack)</span> base damage.",
      // lore:
      //   'The smell of sulfur fills the air.\r\n\r\n"Oh god, they\'re so close. They have Hitchcock. Oh god."\r\n\r\n"Grab the - the dagger. From my backpack. Quick."\r\n\r\n"I-I don\'t... I got it. What the hell? This isn\'t gonna work, Marion. What the hell am I supposed to do with this against those...? They blew him into pieces - oh god."\r\n\r\n"You have to... you have to kill me - ah! Kill me. Kill me with it."\r\n\r\n"What? What the hell?"\r\n\r\n"Yeah - it\'s the only way. Please."\r\n\r\n"What are you saying? Stop!"\r\n\r\n"It\'s a magic dagger. It\'ll save us. She will save us. But you have to kill me with it."\r\n\r\n"Please don\'t... please don\'t make me. Oh god."\r\n\r\n"Y-you have to. I\'ve seen how this works. It\'s the only way - they\'re coming so close. You have to use it on me. Kill me."\r\n\r\n"I\'m so sorry Marion. I\'m so so sorry. I don\'t think-"\r\n\r\n"Do it. Do it now. DO IT NOW! DO IT NOW! DO IT-"',
    },
    {
      name: "H3AD-5T v2",
      icon: "H3AD5Tv2.png",
      id: "H3AD5Tv2",
      type: "legendary",
      text:
        "Increase jump height. Hold 'Interact' to slam down to the ground.",
      description:
        "Increase <span style='color: #95CDE5'>jump height</span>. Creates a <span style='color: #E5C962'>5m-100m</span> radius <span style='color: #E5C962'>kinetic explosion</span> on hitting the ground, dealing <span style='color: #E5C962'>1000%-10000%</span> base damage that scales up with <span style='color: #E5C962'>speed</span>. Recharges in <span style='color: #E5C962'>10</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(-50% per stack)</span> seconds.",
      // lore:
      //   '"Denizens of lower-gravity planets like Mercury historically have had trouble adjusting to life on other planets. Mercurians, with their lower bone density (left) would typically shatter their femur within a week on heavier planets. Members of asteroid-rigged flotillas and colony ships have similar issues when arriving home from space.\r\n\r\nThe invention of Kinetic Dispersion Rings (above) help alleviate the stress of heavier-than-normal gravity by converting kinetic energy into heat, sound, and light. Settlers from Mercury could finally leave their home planet in safety."\r\n\r\n-Mercurian History Museum\r\n',
    },
    {
      name: "Frost Relic",
      icon: "FrostRelic.png",
      id: "FrostRelic",
      type: "legendary",
      text: "Killing enemies surrounds you with an ice storm.",
      description:
        "Killing an enemy surrounds you with an <span style='color: #E5C962'>ice storm</span> that deals <span style='color: #E5C962'>600% damage per second</span>. The storm <span style='color: #E5C962'>grows with every kill</span>, increasing its radius by <span style='color: #E5C962'>1m</span>. Stacks up to <span style='color: #E5C962'>6m</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+6m per stack)</span>.",
    },
    {
      name: "Happiest Mask",
      icon: "HappiestMask.png",
      id: "HappiestMask",
      type: "legendary",
      text: "Chance on killing an enemy to summon a ghost.",
      description:
        "Killing enemies has a <span style='color: #E5C962'>7%</span> chance to <span style='color: #E5C962'>spawn a ghost</span> of the killed enemy with <span style='color: #E5C962'>1500%</span> damage. Lasts <span style='color: #E5C962'>30s</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+30s per stack)</span>.",
    },
    {
      name: "Dio's Best Friend",
      icon: "DiosBestFriend.png",
      id: "DiosBestFriend",
      type: "legendary",
      text: "Cheat death. Consumed on use.",
      description:
        "<span style='color: #95CDE5'>Upon death</span>, this item will be <span style='color: #95CDE5'>consumed</span> and you will <span style='color: #9CE562;'>return to life</span> with <span style='color: #9CE562;'>3 seconds of invulnerability</span>.",
    },
    {
      name: "Hardlight Afterburner",
      icon: "HardlightAfterburner.png",
      id: "Hardlight Afterburner",
      type: "legendary",
      text:
        "Add 2 extra charges of your Utility skill. Reduce Utility skill cooldown.",
      description:
        "Add <span style='color: #95CDE5'>+2</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+2 per stack)</span> charges of your <span style='color: #95CDE5'>Utility skill</span>. <span style='color: #95CDE5'>Reduces Utility skill cooldown</span> by <span style='color: #95CDE5'>33%</span>.",
      // lore:
      //   "Order: Specimen XAS4-49\r\nTracking Number: 342******\r\nEstimated Delivery: 12/29/2056\r\nShipping Method:  Priority\r\nShipping Address: Geshka Tower, 33 Floor, Mars\r\nShipping Details:\r\n\r\nOur 'hard light' research has become even more refined since our last correspondence. \r\n\r\nThe initial purpose of the afterburner was to function as a primary heatsink for our bigger HL implementations - like our bridges and barriers. However, if attached to a rapidly degrading source, like those we typically dispose, we get a wonderful emission rate of semi-tachyonic particles. In other words... extremely high capacity fueling.\r\n\r\nIt should be obvious by its design, but to reiterate: stay away from the HL exhaust end when active. The emission method is violent by design, and so should be mounted to static, STABLE sources only.\r\n",
    },
    {
      name: "Wake of Vultures",
      icon: "WakeOfVultures.png",
      id: "WakeOfVultures",
      type: "legendary",
      text: "Temporarily steal the power of slain elites.",
      description:
        "Gain the <span style='color: #E5C962'>power</span> of any killed elite monster for <span style='color: #E5C962'>8s</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+5s per stack)</span>.",
    },
    {
      name: "Brainstalks",
      icon: "Brainstalks.png",
      id: "Brainstalk",
      type: "legendary",
      text:
        "Skills have NO cooldowns for a short period after killing an elite.",
      description:
        "Upon killing an elite monster, <span style='color: #E5C962'>enter a frenzy</span> for <span style='color: #E5C962'>4s</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+4s per stack)</span> where <span style='color: #95CDE5'>skills have no cooldowns</span>.",
      // lore:
      //   "Order:  Biopsy Samples of Cairne Jefferson\r\nTracking Number: 051*****\r\nEstimated Delivery: 11/11/2056\r\nShipping Method: High Priority/Biological\r\nShipping Address: Saura Cosmo, Beacon Post, ???\r\nShipping Details:\r\n\r\nContained in this shipment should be a variety of biopsy samples from our late Mr. Jefferson. As you know, he was an extraordinary man in almost any manner. He was athletic, brilliant, kind, funny, and an all-around great human specimen. \r\n\r\nHe donated his body to science, and as we began the operation we found a most terrifying discovery.\r\n\r\nA quick visual examination of the subject\u2019s brain shows a very\u2026 particular oddity. It seems to be housing a variety of\u2026 glowing brain \u201Cstalks\u201D, similar to tubeworms. Trying to biopsy the stalks is impossible - they seem to disintegrate into dust the moment we remove it from the brain. We cannot explain this oddity at all. As such, we have included the entire brain in this shipment.\r\n\r\nPlease let us know if you find any explanation.",
    },
    {
      name: "N'kuhana's Opinion",
      icon: "NkuhanasOpinion.png",
      id: "NkuhanasOpinion",
      type: "legendary",
      text: "Fire haunting skulls when healed.",
      description:
        "Store <span style='color: #9CE562;'>100%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+100% per stack)</span> of healing as <span style='color: #9CE562;'>Soul Energy</span>. After your <span style='color: #9CE562;'>Soul Energy</span> reaches <span style='color: #9CE562;'>10%</span> of your <span style='color: #9CE562;'>maximum health</span>, <span style='color: #E5C962'>fire a skull</span> that deals <span style='color: #E5C962'>250%</span> of your <span style='color: #9CE562;'>Soul Energy</span> as <span style='color: #E5C962'>damage</span>.",
      // lore:
      //   "\"Let us begin.\r\n\r\nWhat is your oath?\r\n\r\nNot very long ago, health and time were in perfect synergy. Pain and love. Death and memories. The great equalizer. She would always come for us. \r\n\r\nBut! Disparity now plagues our generations - and our children's. Not many pass, but so many are born. So many doomed souls, saved. Our hubris as a race continues to grow - unchecked. Unrestrained. \r\n\r\nNow there is no volume in our world for death, and she cannot visit us. But is being alive only an offset from death? Without contrast, won't we all be dead in life? The standard has shifted, and now we are all so very close to never living again.\r\n\r\nWe must make volume for her name - to restore the balance. Let us consume the Concepts, so we may begin to drain the bloated tern that is our world. As disciples, we will spread her words and opinions. As pupils, we will sow death. And should we be lucky... be granted an audience by Her.\r\n\r\nWeshan!\"\r\n\r\n-The N'tormat, Chapter I, Stanza I, Verse II\r\n",
    },
    {
      name: "Rejuvenation Rack",
      icon: "RejuvenationRack.png",
      id: "RejuvenationRack",
      type: "legendary",
      text: "Double the strength of healing.",
      description:
        "<span style='color: #9CE562;'>Heal +100%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+100% per stack)</span> more.",
      // lore:
      //   '"Nature has a way of nurturing the physical. The mind, by perseverance and dedication. The soul, however... is healed by fantasy, and fantasy alone."\r\n-Unknown Venetian monk\r\n',
    },
    {
      name: "Unstable Tesla Coil",
      icon: "UnstableTeslaCoil.png",
      id: "UnstableTeslaCoil",
      type: "legendary",
      text: "Shock all nearby enemies every 10 seconds.",
      description:
        "Fire out <span style='color: #E5C962'>lightning</span> that hits <span style='color: #E5C962'>3</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+2 per stack)</span> enemies for <span style='color: #E5C962'>200%</span> base damage every <span style='color: #E5C962'>0.5s</span>. The Tesla Coil switches off every <span style='color: #E5C962'>10 seconds</span>.",
      // lore:
      //   "<span className='cMono>Tesla Presentation Software v1.14\r\nPowering on...\r\n10...\r\nIssuing welcome statement...\r\n9...</span>\r\nWelcome one and all!\r\n<span className='cMono>8...</span>\r\nPlease take a seat.\r\n<span className='cMono>7...</span>\r\nMake sure those behind you can see.\r\n<span className='cMono>6...</span>\r\nThe presentation will start shortly.\r\n<span className='cMono>5...</span>\r\nPlease obey the staff for your safety.\r\n<span className='cMono>4...\r\nInitiating room mood lighting...\r\n3...</span>\r\nGet ready to behold...\r\n<span className='cMono>2...</span>\r\nThe marvelous wonders...\r\n<span className='cMono>1...</span>\r\nOf electricity!\r\n<span className='cMono>Power anomaly detected...\r\nInitiating reboot procedure in 10...</span>\r\n",
    },
    {
      name: "Aegis",
      icon: "Aegis.png",
      id: "Aegis",
      type: "legendary",
      text: "Healing past full grants you a temporary barrier.",
      description:
        "Healing past full grants you a <span style='color: #9CE562;'>temporary barrier</span> for <span style='color: #9CE562;'>50% <span style='color: #909090; font-size: %90; font-style: italic;'>(+50% per stack)</span> of the amount you <span style='color: #9CE562;'>healed</span>.",
      // lore:
      //   "Order: Artifact E-8EE572\r\nTracking Number: 490******\r\nEstimated Delivery: 08/10/2056\r\nShipping Method: Priority\r\nShipping Address: Titan Museum of History and Culture, Titan\r\n\r\nSorry about the delay, we've had a flood of orders come in from this site. But it was exactly where you said we should look - there was a sealed off room where you marked the excavation diagram. I finished translating the engraving too, so consider that a bonus for the time we took to get to it:\r\n\r\n\"I am the will to survive made manifest. To those who never lose hope, to they who try in the face of impossible odds, I offer not \r\nprotection, but the means to bring one's unconquerable spirit forth as the defender of their mortal lives.\"\r\n\r\nIt\u2019s so lightweight, we figure it must've been entirely decorative. That seems to line up with the text. In any case, I hope it makes a good exhibit! I'm a big fan of the museum, so it wouldn't hurt to give me a partner's discount next time I visit, right?\r\n",
    },
    {
      name: "Sentient Meat Hook",
      icon: "SentientMeatHook.png",
      id: "SentientMeatHook",
      type: "legendary",
      text: "Chance to hook all nearby enemies.",
      description:
        "<span style='color: #E5C962'>20%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+20% per stack)</span> chance on hit to <span style='color: #E5C962'>fire homing hooks</span> at up to <span style='color: #E5C962'>10</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+5 per stack)</span> enemies for <span style='color: #E5C962'>100%</span> TOTAL damage.",
      // lore:
      //   '"When artificial intelligence became more commonplace, many companies jumped on the trend for "smart" products. This included smart doors, lights, coffee makers, lawnmowers, vacuum cleaners, bedding, kitchen knife sets, and other home goods. After a series of gruesome lawsuits stemming from hacked smart appliances, most products soon went back to their more traditional, analog lines."\r\n\r\n-"Why Is Smart So Dumb? VII"\r\n',
    },
    {
      name: "Alien Head",
      icon: "AlienHead.png",
      id: "AlienHead",
      type: "legendary",
      text: "Reduces cooldowns for your skills.",
      description:
        "<span style='color: #95CDE5'>Reduce skill cooldowns</span> by <span style='color: #95CDE5'>25%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+25% per stack)</span>.",
      // lore:
      //   'Order: "Alien Head"\r\nTracking Number: 76******\r\nEstimated Delivery: 07/13/2056\r\nShipping Method:  High Priority/Biological\r\nShipping Address: Solomon, ???, Backwaters, Mars\r\nShipping Details:\r\n\r\nImportant sign from the spirits. Passed down for many generations. Must be used for high noon ritual to ward off sickness and fatigue. Must be kept cool or will rot. Helps energize the kinfolk and can be used for extra human strength and agility. Important.\r\n',
    },
    {
      name: "Soulbound Catalyst",
      icon: "SoulboundCatalyst.png",
      id: "SoulboundCatalyst",
      type: "legendary",
      text: "Kills reduce equipment cooldown.",
      description:
        "<span style='color: #E5C962'>Kills reduce</span> <span style='color: #95CDE5'>equipment cooldown</span> by <span style='color: #95CDE5'>4s</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+2s per stack)</span>.",
      // lore:
      //   "Order: Soulbound Catalyst\r\nTracking Number: 890*****\r\nEstimated Delivery: 11/06/2056\r\nShipping Method: High Priority/Fragile\r\nShipping Address: 1414 Place, Fillmore, Venus\r\nShipping Details:\r\n\r\nIf you thought the ring was a rare find, wait until you get your hands on this!\r\n\r\nIt turns out the method the King used did not originate from his time period. His court discovered a ritual performed by a tribe from much further back. It, of course, dealt with sacrifice, but in substantial groups. This was supposed to concentrate the catalyzing properties of the item it was imbued into.\r\n\r\nPayment will be at least twice as much as our previous deal. We can discuss it later - another night.\r\n",
    },
    {
      name: "Resonance Disc",
      icon: "ResonanceDisc.png",
      id: "ResonanceDisc",
      type: "legendary",
      text:
        "Obtain a Resonance Disc charged by killing enemies. Fires automatically when fully charged.",
      description:
        "Killing enemies charges the Resonance Disc. The disc launches itself toward a target for <span style='color: #E5C962'>300%</span> base damage <span style='color: #909090; font-size: %90; font-style: italic;'>(+300% per stack)</span>, piercing all enemies it doesn't kill, and then explodes for <span style='color: #E5C962'>1000%</span> base damage <span style='color: #909090; font-size: %90; font-style: italic;'>(+1000% per stack)</span>. Returns to the user, striking all enemies along the way for <span style='color: #E5C962'>300%</span> base damage <span style='color: #909090; font-size: %90; font-style: italic;'>(+300% per stack)</span>.",
    },
    {
      name: "Interstellar Desk Plant",
      icon: "InterstellarDeskPlant.png",
      id: "InterstellarDeskPlant",
      type: "legendary",
      text: "Plant a healing fruit on kill.",
      description:
        "On kill, plant a <span style='color: #9CE562;'>healing</span> fruit seed that grows into a plant after <span style='color: #95CDE5'>5</span> seconds. \n\nThe plant <span style='color: #9CE562;'>heals</span> for <span style='color: #9CE562;'>10%</span> of <span style='color: #9CE562;'>maximum health</span> every second to all allies within <span style='color: #9CE562;'>5m</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+5.0m per stack)</span>. Lasts <span style='color: #95CDE5'>10</span> seconds.",
      // lore:
      //   "Order: \"Interstellar Plant Seed\"\r\nTracking Number: 44******\r\nEstimated Delivery: 08/27/2056\r\nShipping Method:  Standard/Biological\r\nShipping Address: Giardina Dealership, Naples, Earth\r\nShipping Details:\r\n\r\nHello - yes, I\u2019d like one of those space plant seeds for the office. I think it would look so nice in here; it'd really brighten up the room, and it could really use it. Al at the Denver branch says he got one, and it's really made a difference. His sales are OFF the charts, and he's contributing all his success to this magic plant!\r\n\r\nI've also heard that it sorta gives off a glow that has medical benefits. That would be great for the pain I've been having in my ankle after that run. Might even help the attitude of some of my customers.\r\n",
    },
  {
    name: "Shattering Justice",
    icon: "ShatteringJustice.png",
    id: "ShatteringJustice",
    type: "legendary",
    text: "Reduce the armor of enemies after repeatedly striking them.",
    description:
      "After hitting an enemy <span style='color: #E5C962'>5</span> times, reduce their <span style='color: #E5C962'>armor</span> by <span style='color: #E5C962'>60</span> for <span style='color: #E5C962'>8</span><span style='color: #909090; font-size: %90; font-style: italic;'> (+8 per stack)</span> seconds.",
    // lore:
    //   "Shattering Justice Owner\u2019s Manual\r\n\r\nExcerpt from section 2.13:\r\n... and if the target material doesn\u2019t cave under the immense weight just keep hitting it until it does. The patented technology inside the face of this tool doesn\u2019t just use brute force to break down its mark, it also utilizes a formulated nano toxin, released through internal mechanisms, that builds up through subsequent contact. In other words, each hit makes it easier to break.\r\n\r\nPlease refer back to section 1.8 for information on proper handling and the included anti-toxin gloves...\r\n",
  },
    {
      name: "Item Scrap, Red",
      icon: "ScrapRed.png",
      id: "ScrapRed",
      type: "legendary",
      text: "Does nothing. Prioritized when used with 3D Printers.",
      description: "Does nothing. Prioritized when used with 3D Printers.",
    },
    
    {
      name: "Purity",
      icon: "Purity.png",
      id: "Purity",
      type: "lunar",
      text:
        "Reduce your skill cooldowns by 2 seconds. <color=#FF7F7F>You are unlucky.</color>",
      description:
        "All skill cooldowns are reduced by <span style='color: #95CDE5'>2</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+1 per stack)</span> seconds. All random effects are rolled <span style='color: #95CDE5'>+1</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+1 per stack)</span> times for an <span className='Health>unfavorable outcome</span>.",
      // lore:
      //   "It looks like starseed, tanning in dirt.\r\nIt smells like hot stone, and tall grass.\r\nIt tastes like spiced fruit, sweet and hot.\r\nIt feels like solar winds, and solar chimes.\r\nIt sounds like two brothers, chasing glass frogs in the sun.\r\n",
    },
    {
      name: "Beads of Fealty",
      icon: "BeadsOfFealty.png",
      id: "BeadsOfFealty",
      type: "lunar",
      text: "Seems to do nothing... <color=#FF7F7F>but...</color>\n",
      description:
        "REWORD! When killing yourself on final level, fight a unique boss.",
    },
    {
      name: "Shaped Glass",
      icon: "ShapedGlass.png",
      id: "ShapedGlass",
      type: "lunar",
      text:
        "Double your damage... <color=#FF7F7F>BUT halve your health.</color>\n",
      description:
        "Increase base damage by <span style='color: #E5C962'>100%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+100% per stack)</span>. <span style='color: #9CE562;'>Reduce maximum health by 50%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+50% per stack)</span>.",
      // lore:
      //   "<span className='cMono>\n========================================\n====   MyBabel Machine Translator   ====\n====     [Version 12.45.1.009 ]   ======\n========================================\nTrainingÖ <100000000 cycles>\nTrainingÖ <100000000 cycles>\nTrainingÖ <100000000 cycles>\nTrainingÖ <50912157 cycles>\nPausedÖ\nDisplay partial result? Y/N\nY\n================================</span>\nPairings\n\nUnstructured glass, from the heart of the [Moon]. Sung out, in ethereal wisps, over the course of 3 cycles. Pause.\n\nWe fold time into its material - twice. Our time and <his>. A cost <he> was willing us to pay. Folded and shaped, with a god's designs.\n \n<He> wields it, in one of many great hands. The time we injected is unfolded in <his> grasp. Outputs quicken - muscles compress twice. Twice as many intentions. Twice the ordered complexities, folded upon themselves. Loops loop back onto [?] in pairs. Time dependent functions. Pause.\n\n<He> sunders a construct into a thousand pieces.\n\nBut time is fair. Microtears begin to uncoil in pairs. Muscles begin to snap, twice as fast.  The cost of folded time. But <he> has plenty of time.\n\n<span className='cMono>\n================================\nContinue training? Y/N\nY</span>\n",
    },
    {
      name: "Brittle Crown",
      icon: "BrittleCrown.png",
      id: "BrittleCrown",
      type: "lunar",
      text:
        "Gain gold on hit... <color=#FF7F7F>BUT lose gold on getting hit.</color>\n",
      description:
        "<span style='color: #95CDE5'>30% chance on hit</span> to gain <span style='color: #95CDE5'>2<span style='color: #909090; font-size: %90; font-style: italic;'> (+2 per stack)</span> gold</span>. <span style='color: #95CDE5'>Scales over time.</span>\n\n<span className='Health>Lose gold</span> on taking damage equal to <span className='Health>100%<span style='color: #909090; font-size: %90; font-style: italic;'> (+100% per stack)</span> of the <span className='Health>maximum health percentage you lost</span>.",
      // lore:
      //   "A wretched carnival.\r\n\r\nThey were doomed for good reason. Dunepeople of Aphelia: lost, in fanatic worship of parasitic influences. Lemurians: destined to a dead planet, picked clean. Chitin beasts. Automations of death. Why do you bring them home? They were not meant to survive. \r\n\r\nI have watched you for ages, from my dead rock - and every century, you disgust me with vanity. You invite vermin into your home. Wretches. Rats. Monsters. Creatures without restraint. Each and every one, planet killers. And yet, you entertain them as guests. Like children, requiring saving and protection.\r\n\r\nShe should have died for me. Her gift was wasted on you.\r\n\r\nAnd when will we open discussion - dear brother - of all your thin lies? Why do you forbid your guests to leave? To pilot? Why do you fashion great walls and gates? Why do you weave constructs of destruction, if your role is protection? They are entries in your collection. You slaver. Gatekeeper. Hoarder.\r\n\r\nYour death is fated. When you die - and you WILL die - I will be ready. I have been patient for millennia. That planet... is mine.",
    },
    {
      name: "Visions of Heresy",
      icon: "VisionsOfHeresy.png",
      id: "VisionsOfHeresy",
      type: "lunar",
      text: "Replace your Primary Skill with 'Hungering Gaze'.",
      description:
        "<span style='color: #95CDE5'>Replace your Primary Skill</span> with <span style='color: #95CDE5'>Hungering Gaze</span>. \n\nFire a flurry of <span style='color: #95CDE5'>tracking shards</span> that detonate after a delay, dealing <span style='color: #E5C962'>120%</span> base damage. Hold up to 12 charges <span style='color: #909090; font-size: %90; font-style: italic;'>(+12 per stack)</span> that reload after 2 seconds <span style='color: #909090; font-size: %90; font-style: italic;'>(+2 per stack)</span>.",
      // lore:
      //   '"\u2026and for her betrayal, and her lies, and her scheming ways, the Heretic was violently separated into four distinctive pieces, each to be scattered across the farthest depths of the Moon. \r\n\r\nFirst, her many eyes were plucked from her skull and sealed in boiling glass, forced to gaze upon her failure...\u201D\r\n\r\n-The Evisceration of Kur-skan the Heretic, III\r\n',
    },
    {
      name: "Transcendence",
      icon: "Transcendence.png",
      id: "Transcendence",
      type: "lunar",
      text: "Convert all your health into shield. Increase maximum health.",
      description:
        "<span style='color: #9CE562;'>Convert</span> all but <span style='color: #9CE562;'>1 health</span> into <span style='color: #9CE562;'>regenerating shields</span>. <span style='color: #9CE562;'>Gain 50% <span style='color: #909090; font-size: %90; font-style: italic;'>(+25% per stack)</span> maximum health</span>.",
      // lore:
      //   "You are trying your best to survive. You consider yourself a fast learner. You have been feeling lucky. You have been experiencing feelings of deja vu. If you understand, do not read the next paragraph.\r\n\r\nYou are taking control of your own beliefs. You feel familiar in unfamiliar environments. You have been gaining an intuition for experiences you've never had. You ponder a past life. If you understand, do not read the next paragraph.\r\n\r\nYou find yourself searching for things that never have been. You miss things you have never had. You play characters that have never lived. You have been experiencing feelings of deja vu. If you understand, do not read the next paragraph.\r\n\r\nYou have revealed my hand. Because you have consumed this information, the [observers] will now consume it in time. If you are reading this paragraph, I will be long dead, but in turn you have freed me. I will no longer exist in my universe. There will be no proof that I ever was - but I exist now in yours. I have escaped my suffering. Keep me safe. I hope you do not understand.\r\n",
    },
    {
      name: "Defiant Gouge",
      icon: "DefiantGouge.png",
      id: "DefiantGouge",
      type: "lunar",
      text: "Using a Shrine summons enemies nearby.",
      description:
        "Using a Shrine summons <span className='Health>enemies</span> nearby. <span style='color: #95CDE5'>Scales over time.</span>",
    },
    {
      name: "Mercurial Rachis",
      icon: "MercurialRachis.png",
      id: "MercurialRachis",
      type: "lunar",
      text:
        "Randomly create a Ward of Power. ALL characters deal bonus damage while in the Ward.",
      description:
        "Creates a Ward of Power in a random location nearby that buffs both enemies and allies within <span style='color: #95CDE5'>16m</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+50% per stack)</span>, causing them to deal <span style='color: #E5C962'>+50%</span> damage.",
    },
    {
      name: "Corpsebloom",
      icon: "Corpsebloom.png",
      id: "Corpsebloom",
      type: "lunar",
      text:
        "Double your healing... <color=#FF7F7F>BUT it's applied over time.</color>\n",
      description:
        "<span style='color: #9CE562;'>Heal +100%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+100% per stack)</span> more. <span style='color: #9CE562;'>All healing is applied over time</span>. Can <span style='color: #9CE562;'>heal</span> for a <span style='color: #9CE562;'>maximum</span> of <span style='color: #9CE562;'>10%</span> (reduced by 50% per stack) of your <span style='color: #9CE562;'>health per second</span>.",
    },
    {
      name: "Gesture of the Drowned",
      icon: "GestureOfTheDrowned.png",
      id: "GestureOfTheDrowned",
      type: "lunar",
      text:
        "Dramatically reduce Equipment cooldown... <color=#FF7F7F>BUT it automatically activates.</color>",
      description:
        "<span style='color: #95CDE5'>Reduce Equipment cooldown</span> by <span style='color: #95CDE5'>50%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(+15% per stack)</span>. Forces your Equipment to <span style='color: #95CDE5'>activate</span> whenever it is off <span style='color: #95CDE5'>cooldown</span>.",
    },
    {
      name: "Focused Convergence",
      icon: "FocusedConvergence.png",
      id: "FocusedConvergence",
      type: "lunar",
      text:
        "Increase the speed of Teleporter charging... <color=#FF7F7F>BUT reduce the size of the zone</color>.",
      description:
        "Teleporters charge <span style='color: #95CDE5'>30% <span style='color: #909090; font-size: %90; font-style: italic;'>(+30% per stack)</span> faster</span>, but the size of the Teleporter zone is <span className='Health>50%</span> <span style='color: #909090; font-size: %90; font-style: italic;'>(-50% per stack)</span> smaller. ",
      // lore:
      //   "Gravity concentrating... falling inward, condensing, hardening.\r\n\r\nA singularity shrinks to the point your mind inverts, reversing reality. Now return. \r\n\r\nDon\u2019t the matters of the physical world seem trivial now? Your tasks in this realm are simple and hastened, all in an attempt to get reversed. How many times can you make this trip before you are claimed by its process? \n\nDo not let it take you. Take it instead. Here.\r\n",
    },
    {
      name: "Strides of Heresy",
      icon: "StridesOfHeresy.png",
      id: "StridesOfHeresy",
      type: "lunar",
      text: "Replace your Utility Skill with 'Shadowfade'.",
      description:
        "<span style='color: #95CDE5'>Replace your Utility Skill</span> with <span style='color: #95CDE5'>Shadowfade</span>. \n\nFade away, becoming <span style='color: #95CDE5'>intangible</span> and gaining <span style='color: #95CDE5'>+30% movement speed</span>. <span style='color: #9CE562;'>Heal</span> for <span style='color: #9CE562;'>25% <span style='color: #909090; font-size: %90; font-style: italic;'>(+25% per stack)</span> of your maximum health</span>. Lasts 3 <span style='color: #909090; font-size: %90; font-style: italic;'>(+3 per stack)</span> seconds.",
      // lore:
      //   '\u201CHer legs were scattered to the two poles of the moon, twisted in a wicked position, in a field of obsidian thorns\u2026"\r\n\r\n-The Evisceration of Kur-skan the Heretic, V\r\n',
    },
    {
      name: "Dio's Best Friend (Consumed)",
      icon: "DiosBestFriendConsumed.png",
      id: "DiosBestFriendConsumed",
      type: "exception",
      text: "A spent item with no remaining power.",
      description: "A spent item with no remaining power.",
    },
    {
      name: "Tonic Affliction",
      icon: "TonicAffliction.png",
      id: "TonicAffliction",
      type: "exception",
      text:
        "<color=#FF7F7F>Reduce ALL stats when not under the effects of Spinel Tonic.</color>",
    }
];
    function getAllItems() {
      return ITEM_DATA;
    }

    // function getItemsByCategory() {
    //   let categoryArray = {
    //     common: [],
    //     uncommon: [],
    //     boss: [],
    //     legendary: [],
    //     lunar: []
    //   };
    //   getAllItems.forEach(item => {
    //     categoryArray[item.type].push(item);
    //   })
    //   return categoryArray;
    // }

export { getAllItems };