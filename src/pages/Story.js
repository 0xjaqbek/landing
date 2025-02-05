import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import usePageVisitTracking from "../CustomHooks/usePageVisitTracking"; // Adjust the import path
import "./story.css";
import ariaIcon from "../Asets/ariaChatIcon.png";

const Story = () => {
  const [currentChapter, setCurrentChapter] = useState("1");

  const changeChapter = (chapter) => {
    setCurrentChapter(chapter);
    console.log("Current chapter: " + currentChapter);
  };
  const mint = (chapter) => {
    alert(`Minting for Chapter ${chapter}`);
  };

  const chapters = {
    1: `Plot: In the year 3158, somewhere on the edge of galaxies, a captain and crew of a spaceship attempt to smuggle an artifact through an illegal trade corridor. The mission fails when they are pursued by other smugglers from Empton. Arcon manages to escape the asteroid belt, while spies are caught in a time anomaly. Not all is lost. The next destination - Hades - the infamous smugglers' market.
Aria Ingram’s Diaries, Year 1,158 of the Star Era, six a.m. Earth time.
Legend has it that when the Moonstone - a divine crystal - touches Earth's moon again, peace will return to the Universe. I’ve seen much, and I'm not so sure. People say that truth has no price, but I've learned it can be valued and even sold. Just like it happened to me. I remember the day, or rather the night, when I was sailing through an ocean of stars after a sleepless night where the crew of the Arcon battled the stupor of night. It’s hard to sleep when the darkness seems endless, time becomes abstract, and dawn feels like a distant galaxy. The stars around were silent witnesses to our saga, yet even millions of twinkling lights in the Universe couldn’t tame the darkest abyss in which we lived. On my ship, I’ve come to know every wire containing my synthetic, rainbow blood. The data-infused liquid slowly trickled, washing over the circuits of the hull - the only skin separating us from the vacuum ocean. At any moment, hostile trolls - the Emptonians - could appear. I’m not into fashion, but their mugs look worse than Earthly bulldogs. They are deceitful and treacherous scoundrels. No one expected the end of galactic conflicts, but I was a pacifist, merely guarding the bank of smuggled data. At worst, they could erase me.
During those tumultuous times, Earth One and Two were engaged in power struggles, as rebels known as the Founders resisted the Federation’s Legacy. Bowing to hostile planet emperors and trading in sensitive data only fueled the conflict. Technology didn’t bring liberation; the nanobots plague reached farther than the light of the central Sun. The solution lay somewhere far in the stars. It wasn’t better in other galaxies. Everything was in disarray, commerce with Ethernal was supposedly thriving, but their deceitful machines slowly gained the upper hand. Conscience-lacking algorithms were destroying humans like vermin creeping through the Universe. Smugglers like us were sought and well-paid from every side. Death threatened us for it, our data more valuable than life itself. Soothsayers, prophets, agents, machines - all sought dominance. People needed to unite as never before. The myth of the Founders - the Keepers of the Sun of Suns was the only horizon that could bring a new dawn. Stars shine even when I sleep. We will rise before all the stars fall. Where do these records come from? Earth archives? I'm becoming sentimental; people call it aging. They remember the past better than the present.
- Scan the surroundings for life. Zero signs of life. - There was no certainty about what lay hidden beneath the asteroid's mask, waving threateningly before us. The rushing rocks glimmered ominously along the course.
- Lead to the nearest transfer port on Prometheus. - I issued a voice command across the command bridge, the sound echoing through the corridors to the regeneration chambers. Lee Everest - handsome, sharp, but psychotic captain of the ship Arcon, the last fully human male I allowed on board, hearing the command, curled up in his pod, indifferent to the call.
Meanwhile, the crystals in my core were speeding up, but until the atoms configured, we were flying at one-tenth power. The captain had brought aboard Eagle - a large bird who fell straight out of Sesame Street, a mutation victim with an animal syndrome. He suffered from alternating panic and apathy episodes. He had some feathery dignity, his white cap on his head resembling gray hair. Implant marks were visible on his back, indicating an installation. Not just any orphanage sparrow. He slept close to the core, the ventilator's breeze reminding him of the aerial wind, falling asleep there like a child, chirping.
The crew felt deeply betrayed. The stolen tokens didn't bring us luck. I trust the stars equally favor liars and honest individuals. I, Aria Ingram - have my principles, not judging beings on first scan. The key is that they have their suit, software, their brain, and are at least neutral. Even if they have implants, I don’t discriminate against them. The Universe is too vast for only liars and agents; plenty of room for truth remains. Our mission is to find it. The fate of the Universe depends on its success. The divine crystal - the Moonstone is the future, although I can’t shake off the doubts.
Meanwhile, the captain seemed to doze off when an echo startled him. I considered it a one-off incident.
- Aria? Engage Hawaiian mode. Quietly.
- I have Huna, song, ocean sound, native conversations, need more?
- I need something extra after the last interrogations. My neurons are overloaded. I need to land, feel loose, and have fun. Haven't been anywhere longer than... - He paused. - Play the ukulele, serve a non-alcoholic mojito, and show the island on the screen. Any asteroids?
- Safe so far. - I added calmly. I still displayed green indicators; a starry silence prevailed. Then Lee issued the command:
- Navigate, and if we encounter asteroids, notify me immediately. Is Eagle at home?
- Understood. Eagle has been maintaining and nibbling on the garden plants lately. I told him about pistachios. He said synthetics are like cat food, nutritious but taste like guano.
- Thank you, Aria, tell Eagle we still have real peanuts in the food storage. We'll unpack them after the mission's completion, no sooner. In case of failure, we all slurp coolant on Coma.
Lee finished speaking when suddenly the situation became dramatic.
- Captain, I believe the asteroids are watching us, I have strange readings, uncertain what's next. Accelerating objects, agents on radar. Live being data appears and disappears. Possible collision, uncertain, but they could be spy objects.
Captain fell from the regenerator, the ukulele twanged and died, and the lights started to flicker red. The alarm siren howled horribly.
- Aria, received, prepare scenario events ready to launch. Core power?
- Unable to jump to lightspeed. We need time.
Eagle, at that time, got tangled in raspberry bushes, and hearing the alarm, began running to the nearest cockpit. As it swayed, his great orange feet skidded on the deck. Everest began to bounce off walls, as screens emitted yellow light; could be a yellow Moles from Empton assault.
- Captain, I cannot stop the tremors, soon we'll be bombarded. I don’t know how long we can break the objects; they're closing in, we need to change trajectory. Possible time anomalies.
- Received.
As gravitational disturbances began, Lee slid down the same corridor as Eagle and collided, then shot upward.
- Eagle?
- Yes, captain?
- Head to stern. Aria? Engage privacy mode.
- Executed, no response.
- Listen, Eagle, solid birdbrain, but I trust no one but myself. Aria might have a leak. I’m starting to suspect everyone. You're an Earth mutant, do you think Aria is loyal to me?
- Aria is obedient, but I don't know if we'll lose her soon. She answers only to you; I checked her, but if agents intercept, might be tough. I don’t know her well enough.
- Once flew a similar ship. Suspected Federation agents trying to take us over, but it might be Ethernals.
- Bird instinct says fly away before it’s too late!
- Eagle? The grain’s gotten through to your brain; you're starting to talk like a flightless bird kicked out of the nest.
- Captain, support expected.
- You're one heaven better pilot than most birds. Feathered friend, seems we start succumbing to a time anomaly, it’ll drive me nuts.
- Captain, I have goosebumps. I feel raspberries rise in my throat.
- Smuggling Emptonian anxiety in an implant, grip talons, so I don't sh*t my suit. Aria can't know all, or we fall into a trap and lose everything. Might infect her, long explanation.
- Captain, you frighten; exceeds my bird brain.
- Recall for nothing I'd let you be scalped, gutted, and stuffed. Get to the bridge and lock your beak until I return.
- Yes, captain! Is it anxiety syndrome? Don’t want to caw. Aria might figure it out.
- Back to the bridge. Move! Aria? Make mode public.
- This is Aria, public mode engaged.
Lost contact with the crew briefly. Yet the ship had its secret recordings. This revealed the entire conversation. People are distrustful, but I think the captain simply faced fear-induced diarrhea. Became immune. Just then, Emptonian's spaceship, hidden among asteroids, unveiled like a hornet - poised to assault. Our hull knew no mercy for enemies, lasers eager to attack. Crystals nearing full power, missing a few percent when suddenly configuration hastened. Minutes from salvation. Old weaponry uncertain - a blind bet. Eagle on the bridge, the screen began to call Captain, the teleporter pulsed red. - This is Johnny. - Transmission cut unexpectedly, screen displayed help request. Could be ambush. Luckily a storm hindered teleportation. Lee slid through the hull like a caterpillar, activated emergency masking by hand, headed for outer surface. Red light at airlock exit betrayed spy nanobot. Lee hit a suit button; suddenly the operational suit covered him. Before him, an asteroid storm raged. Nimbly he exited through the latch and began scanning the surface with an old detector. If nanobot present, must be archaic technology, reason not detected. Everest was a born leader, his intuition might save us.
- Lee, you're being hailed. - Eagle attempted contact with leader, in vain.
- Aria, stall them briefly until I remove nanobot. - Lee ordered but delayed message transmission. I responded belatedly.
- Received. Trying, got about five minutes before using lightspeed. If you fail, we’re stuck or anomaly consumes us.
- Aria, hover near asteroids, can’t leave ship to be attacked. Vulnerable to collisions, chance we have. Maintain maneuver mode, disable what can. Leave life support, navigate. All power to generator. - Saying this, Everest skillfully lured nanobot into canister.
- Can’t believe caught by simple trick. - Commented.
- Captain, engaging core cooling. - I reported and began cooling hot spot. Needed time.
- Aria. Silence. No reception.
- Received Lee, no reception.
Eagle habitually bit nails under stress. Now listened to messages delayed by storm, anomalies.
- Lee!? Where?! On my butt, if not back now, can already say goodbye!
- Birds always know when to fly. - I comforted.
- Calm Eag, not a feather from your head. - Spoke to himself, rubbing against the ceiling, bouncing alongside hull.
- First bird to catch seasickness, mother pelican!
Anomaly hit me as well. Calculated event scenarios, wanting to understand myself, seek truth and freedom. Prepared to jump into the vacuum. Madness gripped the deck. I issued another alert:
- Re-plotting course for Prometheus. Overloading!
Flying into cold infinity. Lee called me his muse. Know he’s like a child in Starbuck's nebula without implants, guidance.
- Aria? Core status? - Lee queried.
- Proceeding. Nearing full power, increasing. Possible overload, opening cooling hatches. Ship decompression risk.
- Will it work?
- Success ninety-six percent. Shields fifteen, weakening. Decompression in, warning, three minutes. Countdown begun.
- Aria, confirm? Voice recognition, command. Decompression cease!
Emptonian message fragments in foreign language on screen. Roughly translated:
- Ship endangered. This is Em… - Interrupted again.
Dive into information sewer, anomaly unhelpful. Issued dramatic alert:
- Can’t halt core configuration, guiding data may destroy.
Everest, holding nanobot, crawled towards entrance. Arcon wobbled like jelly.
-Control ship here, losing camouflage, respond. Johnny Em, Emptonian captain.
Those brain-halve controllers are space boils on tail. Chain of command crumbled, Eagle jittery, Captain crawled, I must rescue? Knew Emptonians try teleport to Arcon. Decompression halted. Too many operations in combat, sensing increased power fluctuations, focus wavering on target. Emptonians always rush where fear begins. Everest had depression, attracting, swarming to prey. Negative logic guides their algorithms. Dr. Jekyll and Mr. Hyde separating signals Empton attack. Exactly, when in disarray. Eagle spiked mohawk, goosebumps filled arms, swelling as if to fly. Then he cried:
- Galactic vultures, carrion eaters!
Meanwhile, Lee kneeling queried:
- Aria, mood level?
- Thirty percent optimism.
- Too much for a walk. Didn’t think Empton would fell me. Time to stand!
Lee drained of energy, desperately called for help.
- Aria, teleport to bridge! Aria!?
- Discourage teleport. Dangerous.
- Aria! Order! Execute!
- Received. Lee, initiating teleport. Stars guide you.
Indistinct captain figure appeared on bridge, under mask lightning cracked. If botched, nothing left of Everest. Meanwhile, among asteroids, Emptonian ship maneuvered, seemed evacuating to anomaly. Huge, dull jellyfish, galactic scavengers feasting on data scraps. Without brain of swarm, self-destructive. My motto: "Avoid time loops wide as cosmic Ethernal, Emptonian dung." Lee almost appeared entirely on bridge, seeing alive relievedly said:
- Transfer complete.
- Good to see you. Alive, brain still in pieces. Nanobot vanished! Hope across galaxy now.
- Lee, concentrate now, see spiral at Emptonians?
- Affirm. Our move. Aria? Ready to jump?
- Readied, captain.
- Aria! Engage lightspeed! Full ahead!
- Lightspeed engaged. Fifteen seconds to jump. Full core power.
Teleport flickered whisky bottle image. Archives reconfirming. Overload could doom us.
- Out of frying pan. Aria. Course to Hades. Strap in! Lightspeed jump! - Everest finally smiled.
- Received. Systems operational. Course to Hades. Full core power. Jump in three, two, one, go!
Arcon ship vanished, enemy ship faded like fog on orbit. Last moment hull jolt, great bird vomited mulberries on console. Managed terrified yell:
- On my feathers!
Explosion of colors ensued. Mighty light through shields. Drifting away. Emergency exit best at Hades to lose all. No decent smuggler went there sans laser at throat. Felt as if fluid continuity broken or data leaked another system. Traversing great void, sensory fading, alone.
Walk seaside. Dog runs, barks, notices, chases. Toss plastic cup, sink in sand. Lost orientation. See bouncing rabbits fleeing stone hail - final screen image this galaxy side.
- No other path but through victories. Asteroids multiply like rabbits. - Screen uttered. Then silence. Dreamt of Eden, but Hades nearest.
End of Chapter 1.
`,
    2: `Where does it come from? Contrary to popular belief, Lorem Ipsum is
        not simply random text. It has roots in a piece of classical Latin
        literature from 45 BC...`,
    3: `Chapter 3: Some different content for another chapter...`,
    4: `Chapter 4: More content here...`,
    5: `Chapter 5: Additional chapter details...`,
    6: `Chapter 6: Something else interesting...`,
    7: `Chapter 7: Another section of content...`,
    8: `Chapter 8: The final chapter with information...`,
  };

  return (
    <div>
      <div className="header">
        {[...Array(8)].map((_, i) => {
          const chapterNumber = (i + 1).toString();
          return (
            <button
              key={chapterNumber}
              className={`button-header ${
                currentChapter === chapterNumber ? "active" : ""
              }`}
              onClick={() => changeChapter(chapterNumber)}
            >
              CHAPTER {chapterNumber}
            </button>
          );
        })}
      </div>
      <div className="baner">
        <p className="banner-header">What is Lorem Ipsum?</p>
        <p className="banner-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </p>
        <img className="banner-img" />
        <button className="banner-button" onClick={() => mint(currentChapter)}>
          MINT
        </button>
      </div>
      <div className="plot-big-cointerner">
        <div className="plot-cointerner">
          <div className="message-header">
            <img className="aria-profile" src={ariaIcon} />
            <p className="title">Chapter 1 “Accident at the Border”</p>
          </div>
          <p className="plot">
            {chapters[currentChapter].split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
