const stories = [
  {
    title: 'Monster',
    cover: 'images/covers/w1.jpg',
    description: 'A quiet town, a vanished witness, and a question about what makes someone a monster.',
    chapter: 'The Name in the Guestbook',
    paragraphs: [
      'When a new patient arrived at Dr. Mara Venn’s remote clinic, he carried no identification—only a page torn from a guestbook. The name written there belonged to a child who had disappeared from the town twenty years earlier. Mara recognized the handwriting from an old case she had hoped to forget.',
      'Her search led to a kindly baker, a locked room above the station, and neighbors who all remembered the same night differently. The stranger never threatened anyone. He simply asked Mara to listen before deciding who deserved blame. With every interview, the town’s polished story began to crack.',
      'At dawn, Mara returned the guestbook to the library and wrote down the name of the person everyone had overlooked: the child who had survived. The stranger was gone, but his question remained. She closed the case without calling anyone a monster, and finally allowed the people involved to tell the truth in their own words.'
    ]
  },
  {
    title: 'Berserk',
    cover: 'images/covers/w2.jpg',
    description: 'A solitary swordsmith crosses a ruined kingdom where hope is harder to carry than steel.',
    chapter: 'Ashes Beneath the Moon',
    paragraphs: [
      'In a kingdom swallowed by winter, traveling swordsmith Rook accepted one last job: repair a bell that had not rung since the capital fell. The road was filled with frightened villages and rumors of a warlord who promised safety in exchange for every remaining harvest.',
      'Rook could have kept walking. Instead, he joined a mapmaker and a runaway stable hand, each carrying a different piece of the bell’s history. They discovered that its silence had been used to hide the sound of people asking for help. The three planned to ring it from the ruined watchtower, though none expected to survive the climb.',
      'When the bell finally sounded, it was not a call to battle but a signal: the villages were ready to stand together. Rook left his repaired sword on the tower steps and returned to his forge. The kingdom was still broken, but for the first time in years, its people had a sound they could answer.'
    ]
  },
  {
    title: 'Uzumaki',
    cover: 'images/covers/3e91a596-1e0f-4a25-a686-4ebcdca36150.jpg',
    description: 'Strange spirals appear throughout a seaside town, drawing its residents into a mystery.',
    chapter: 'The Shape of the Tide',
    paragraphs: [
      'The first spiral appeared in the foam left by the morning tide. By noon, the same shape had surfaced in a cracked window, a school notebook, and the clouds over Mizu Bay. Photographer Nami thought it was a clever trick until every picture she took developed the spiral in its center.',
      'People began tracing the shape on walls for luck. Others refused to look at it. Nami and her friend Sora searched the old lighthouse and found a set of tide charts marked by generations of keepers. The spirals were not a curse, they learned, but a warning that the seawall was bending under pressure.',
      'The town worked through the night to open the old flood gates and guide the water into the empty salt fields. At sunrise, the spiral clouds broke apart. Nami kept one photograph as a reminder: sometimes a frightening pattern is a message, and the bravest thing to do is find out what it is trying to say.'
    ]
  },
  {
    title: 'Kakegurui',
    cover: 'images/covers/efdccda4-72cf-4e04-ba2c-5a7fcb7d86be.jpg',
    description: 'A student council’s secret wager turns a school tournament into a battle of nerve.',
    chapter: 'The Last Chip',
    paragraphs: [
      'At Aster Academy, the annual strategy tournament decided who would control the student budget. Transfer student Emi entered with a borrowed deck and no reputation to protect. Her first opponent offered to double the prize if she would wager the one thing she valued most: the chess club’s only practice room.',
      'Emi noticed that every game relied on players believing they had fewer choices than they really did. She stopped trying to predict her opponents and began asking what each rule left unsaid. Round by round, she turned the tournament into a lesson in reading the fine print—and in refusing a bad deal.',
      'In the final, Emi laid down her last chip and challenged the council president to explain the rules to the entire auditorium. The hidden clause was exposed, the budget was returned to the students, and the practice room stayed open. Emi walked away without the trophy, but with something far more useful: a school willing to question its own games.'
    ]
  },
  {
    title: 'Attack on Titan',
    cover: 'images/covers/c7f01cd8-f8b0-48ad-b243-f67ff4fb0a05.jpg',
    description: 'Behind a towering city wall, a young engineer searches for a safer way to protect everyone.',
    chapter: 'Beyond the North Wall',
    paragraphs: [
      'For generations, the people of Northgate had watched the horizon from behind a wall taller than any building. When a tremor opened a crack near the old water tower, apprentice engineer Tessa was sent to measure the damage. Beyond the stones, enormous footprints crossed the fields toward the city.',
      'The council wanted to seal the crack and say nothing. Tessa argued that silence would leave the outer neighborhoods unprepared. With a retired cartographer and a team of volunteers, she mapped the safest evacuation routes and tested a system of warning mirrors along the wall.',
      'The next tremor came at dusk. This time, every district heard the signal and moved to higher ground before the wall gave way. The giants passed through the empty fields without meeting a crowd. Northgate had not defeated the danger; it had learned to face it together, with a plan that protected lives instead of pride.'
    ]
  },
  {
    title: 'Solo Leveling',
    cover: 'images/covers/df8cf262-e398-489c-9a04-3c2f3e4fd945.jpg',
    description: 'A struggling dungeon scout discovers that progress begins with learning, not power.',
    chapter: 'One More Floor',
    paragraphs: [
      'No one expected Lio, the lowest-ranked scout in the city, to return from the abandoned gate. He had entered to retrieve a missing survey drone and found a staircase that appeared only when he stopped trying to run from it. Each floor tested a different skill: patience, observation, and trust.',
      'Lio had no sudden burst of strength. Instead, he learned to study the rooms, conserve his tools, and ask the team above for help. When a cave-in trapped the senior hunters, his careful notes became the only map anyone had. The lowest-ranked scout was now the one person who knew the way out.',
      'The rescue took all night. Lio returned tired, scraped, and still officially low-ranked. But he had a new training plan and a crew willing to practice beside him. The next gate would be difficult too. This time, he would enter prepared—not because he was the strongest, but because he knew how to keep improving.'
    ]
  },
  {
    title: 'Spy x Family',
    cover: 'images/covers/ae64012b-cd36-4696-8508-575c122c5f8e.jpg',
    description: 'A pretend family juggles secret jobs, school events, and the surprising work of caring.',
    chapter: 'Operation: Family Day',
    paragraphs: [
      'Agent Rowan had mastered disguises, coded messages, and quiet exits. He had not mastered the elementary school’s family-day craft table. His assignment required him to attend with his temporary household, where a serious-minded translator and a child with a talent for asking impossible questions waited for him.',
      'Their paper rocket collapsed three times. A neighbor family offered glue, the child supplied an enthusiastic but inaccurate blueprint, and Rowan found himself laughing in the middle of the mission. When a real security alert interrupted the event, the three worked together without needing to rehearse their roles.',
      'They completed the rocket after the danger passed. It flew only a few feet, but the child cheered as if it had reached the moon. Rowan filed his report with one unusual note: the best cover was not a perfect performance. It was showing up, listening, and letting the people beside you help.'
    ]
  },
  {
    title: 'Black Clover',
    cover: 'images/covers/896d652f-3787-4954-8e71-4ab8be0bc440.jpg',
    description: 'A magicless village runner finds another way to help her team protect their home.',
    chapter: 'The Clover Without Magic',
    paragraphs: [
      'In a kingdom where every citizen received a spellbook, Mira’s pages stayed blank. She became the fastest runner in her village instead, carrying messages between farms whenever storms damaged the roads. When a magical barrier around the valley began to fail, the royal mages arrived with impressive spells and no idea where to begin.',
      'Mira knew every footpath, loose bridge, and hidden spring. She guided the mages to the barrier’s four old anchors, where their separate spells could work together. The task required no grand duel—only accurate directions, steady hands, and the courage to keep moving when the sky turned dark.',
      'The barrier shimmered back to life just before the storm reached the village. Mira was offered a place in the royal academy as a field strategist. Her book was still blank, but she had filled the valley with something stronger than a spell: people who knew they could depend on one another.'
    ]
  },
  {
    title: 'Haikyu!!',
    cover: 'images/covers/424ed6e3-7f2c-48c1-a449-820ee2720c76.jpg',
    description: 'A small school volleyball team rebuilds its confidence one honest practice at a time.',
    chapter: 'One More Receive',
    paragraphs: [
      'The East Harbor volleyball team had lost every match that season. Their captain blamed the serves, the setter blamed the gym, and first-year player Ren blamed himself for being too short to block. Coach Aya stopped practice and asked each player to name one thing a teammate did well.',
      'The answers were awkward at first. Then the team noticed the quiet details: a perfect receive, a patient call, a player who stayed late to collect balls. They built a new rotation around those strengths and practiced the parts they usually avoided. The scoreboard did not change overnight, but their communication did.',
      'At the final tournament, East Harbor lost the first set and won the second. In the deciding set, Ren made a low receive that kept the rally alive long enough for the captain to score. They did not take home the championship. They left with a team that wanted to return to the court together the next morning.'
    ]
  },
  {
    title: 'Gintama',
    cover: 'images/covers/7b31baae-99ff-498d-b366-6b3d7e42facb.jpg',
    description: 'A broke neighborhood odd-jobs crew gets caught between a missing cat and a robot parade.',
    chapter: 'The Case of the Runaway Parade',
    paragraphs: [
      'The Yorozu Street odd-jobs office accepted a simple task: find the mayor’s missing cat before the evening parade. Their fee barely covered lunch, and their best detective was a retired samurai who insisted the cat had clearly joined a pirate crew. Then the parade’s delivery robots began following the wrong route.',
      'A cheerful mechanic, a grumpy shopkeeper, and the samurai chased the cat through the market while trying to redirect a marching line of robots. Every shortcut created a new problem. The cat was eventually found asleep inside the parade’s oversized mascot head, completely unimpressed by the commotion.',
      'The crew guided the robots back to the square just in time. The mayor paid them in groceries, the mechanic received credit for fixing the route, and the samurai claimed the cat had been his informant all along. Nobody believed him, but everyone stayed for the parade—and for the free noodles afterward.'
    ]
  },
  {
    title: 'Mob Psycho 100',
    cover: 'images/covers/b07ff069-680c-4b0d-a206-9bf06b9b3019.jpg',
    description: 'A gentle teen with powerful psychic abilities learns that feelings deserve to be heard.',
    chapter: 'A Hundred Quiet Things',
    paragraphs: [
      'Kai could move a desk with a thought, but he could not tell his friends when he felt left out. He kept every worry folded away until the school’s old gym began filling with floating chairs and chalk dust. The strange display followed him whenever he tried to pretend nothing was wrong.',
      'His mentor told him that strength was not a reason to ignore his feelings. Kai started naming them—embarrassment, anger, fear—before they grew into something he could not control. His friends helped clean the gym and admitted they had mistaken his silence for disinterest.',
      'The furniture settled back onto the floor. Kai did not become fearless, and his friends did not suddenly understand everything. They agreed to check in more often, even when the answer was messy. For once, Kai’s greatest power was not moving the room; it was being honest inside it.'
    ]
  },
  {
    title: 'Neon Genesis Evangelion',
    cover: 'images/covers/f0659a8a-1924-48e3-9d5e-d62790e4853d.jpg',
    description: 'Young pilots and a city-sized machine face a threat that cannot be solved by hardware alone.',
    chapter: 'The Space Between Signals',
    paragraphs: [
      'After the coastal city was rebuilt around its enormous defense machine, sixteen-year-old pilot Nao found that every alarm sounded like a test he was destined to fail. The machine responded to his movements but never to the words he rehearsed before climbing inside.',
      'When a signal appeared beneath the bay, the team prepared for another launch. Nao asked the engineers to explain what the machine could not do, and learned that its sensors were missing a second operator’s point of view. His co-pilot had been trying to say the same thing for weeks.',
      'Together, they adjusted the system and guided the machine away from the crowded harbor. The city was safe, but Nao still felt afraid. This time he told his team before the fear became a secret. Their next mission would come, and he would not have to meet it alone.'
    ]
  },
  {
    title: 'Cowboy Bebop',
    cover: 'images/covers/c07bd1f2-10fe-4644-9f01-0ffca9f92544.jpg',
    description: 'A drifting crew of bounty hunters takes a small job that sends them across the stars.',
    chapter: 'The Last Song on Ganymede',
    paragraphs: [
      'The crew of the Wayfarer accepted a low-paying bounty on Ganymede: find a musician who had skipped town before a station concert. Their ship needed repairs, their pantry was empty, and their pilot insisted the missing musician had stolen his favorite harmonica.',
      'The trail led to an old greenhouse where the musician was caring for plants that could not survive in the station’s main habitat. The concert had been canceled after a funding dispute. The crew could collect the bounty—or help the musician broadcast a final performance to the neighborhoods that had grown the plants.',
      'They chose the broadcast. The audience was small but scattered across three stations, and the song reached them just before the signal faded. The crew left without a fee and with one repaired navigation panel, paid for by a listener who owned a garage. It was not a profitable trip, but the ship felt a little less empty.'
    ]
  },
  {
    title: 'Steins;Gate',
    cover: 'images/covers/e4ed1cca-7ae4-459f-9d46-78ef02f14154.jpg',
    description: 'A lab experiment sends one message into the past and forces its inventors to choose carefully.',
    chapter: 'The Minute We Kept',
    paragraphs: [
      'At 8:17 each evening, the homemade radio in Toma’s lab received a message from exactly one minute ahead. The first predictions were harmless: a kettle boiling, a phone ringing, a friend arriving late. Then the radio warned them that their research notebook would disappear.',
      'The team tried to prevent the prediction and accidentally caused it. They repeated the experiment until they understood that every change carried a cost they could not measure. Toma wanted to keep pushing. His friend Yui asked him to stop treating the future like a puzzle that belonged only to him.',
      'They sent one final message—not a warning, but a request for help. A neighboring lab answered from the present, bringing the missing notebook and a safer plan for the experiment. At 8:18, the radio went quiet. The future remained uncertain, but the team chose to face it together rather than alone.'
    ]
  },
  {
    title: 'Code Geass',
    cover: 'images/covers/4da61568-c8d9-471e-b97c-a19b446ecca8.jpg',
    description: 'A masked student organizes a peaceful resistance and wrestles with the cost of influence.',
    chapter: 'The Mask and the Map',
    paragraphs: [
      'When the district council closed the neighborhood’s only clinic, student planner Ren began publishing maps that showed which families would be left without care. The maps spread quickly, and so did rumors about a masked organizer called the Lantern. Ren had not planned to become a symbol; he had only wanted the council to listen.',
      'The Lantern’s supporters urged a dramatic takeover of the council hall. Ren feared that a victory built on intimidation would create a new group of people afraid to speak. He arranged a public meeting instead, inviting nurses, residents, and council members to mark the places where help was needed most.',
      'The clinic reopened with a community board that shared decisions and funding. Ren removed the mask in front of the crowd, not as a confession but as an invitation for others to take responsibility too. His influence had started the movement; it would take many voices to keep it honest.'
    ]
  },
  {
    title: 'Itaewon Class',
    cover: 'images/covers/a94d37d2-b17e-4797-8706-67b4cb233771.jpg',
    description: 'A determined young owner builds a neighborhood restaurant without losing sight of people.',
    chapter: 'A Table for Everyone',
    paragraphs: [
      'After years of saving, Joon opened a tiny restaurant on a steep Seoul street. The sign was hand-painted, the kitchen had one working burner, and the first customers were friends who promised to be honest. A larger company across the road offered to buy the lease before the restaurant could find its feet.',
      'Joon refused the quick money, then discovered that pride alone could not pay the staff. The team redesigned the menu around local suppliers and began serving a late meal to night-shift workers. Their busiest day came when the burner broke; neighbors lent equipment, recipes, and a spare table.',
      'The restaurant survived because the people around it treated success as something shared. Joon kept the lease and changed the sign to include the names of everyone who had helped. The place was still small, but every seat felt earned—and there was always room for one more.'
    ]
  },
  {
    title: 'Fight for My Way',
    cover: 'images/covers/1efbe33e-914f-43ee-b110-4c98354d617b.jpg',
    description: 'Two longtime friends take another shot at the careers they once thought were out of reach.',
    chapter: 'The Audition at Seven',
    paragraphs: [
      'Mina worked a string of temporary jobs and Dae trained at a gym that was usually empty. They had spent years joking about their old dreams because trying again felt more embarrassing than giving up. One Monday, a community center posted an open audition and a local amateur fight card on the same night.',
      'They helped each other prepare: Mina practiced her lines between shifts, while Dae coached neighborhood kids before training. Neither could promise the other a win. They could promise to show up, bring water, and listen when the nerves got loud.',
      'Mina earned a callback; Dae lost his bout by a narrow decision. They celebrated both outcomes on the curb with convenience-store snacks. Their lives had not transformed overnight, but they had taken their dreams seriously again—and that made the next ordinary Tuesday feel different.'
    ]
  },
  {
    title: 'Bloodhounds',
    cover: 'images/covers/375d3cc0-57e8-4d04-b08d-8c64f4272dbe.jpg',
    description: 'Two young boxers protect their neighborhood from a predatory lender targeting local shops.',
    chapter: 'The Honest Round',
    paragraphs: [
      'Boxing partners Jun and Hwan noticed that several small shop owners had stopped opening their doors. A lender had offered quick loans and hidden impossible fees in the paperwork. The friends wanted to confront him immediately, but their coach warned them that anger would not protect anyone’s savings.',
      'They helped the owners gather contracts, receipts, and messages, then brought the evidence to a legal aid office. When the lender’s representatives tried to scare them away, Jun and Hwan stayed with the shopkeepers and made sure no one attended a meeting alone.',
      'The investigation took weeks, not one dramatic punch. The lender’s operation was suspended while the owners received help renegotiating their debts. Jun and Hwan returned to the gym, where their coach called it the hardest round they had ever won: one fought with discipline, patience, and a whole neighborhood in their corner.'
    ]
  },
  {
    title: 'Undercover High School',
    cover: 'images/covers/097ca079-ed7f-4509-a081-9d96f318f10c.jpg',
    description: 'A young investigator goes undercover at a school and finds that listening is the real assignment.',
    chapter: 'The New Student',
    paragraphs: [
      'Investigator Seo received an unusual assignment: enroll at Haneul High and find the source of a series of anonymous exam leaks. He expected secret meetings and coded notes. Instead, he found an overworked librarian, a student council that never shared its minutes, and a class full of people afraid of being blamed.',
      'Seo followed the evidence rather than the loudest rumor. The leak came from an old printer account that several adults could access. A student had copied the files only to prove the system was unsafe. Seo had to decide whether to expose the student or explain how the school’s own process had failed.',
      'He presented the facts without naming the student and helped the school secure its records. On his last day, his classmates gave him a farewell card full of jokes about his terrible cafeteria reviews. Seo filed the case as solved, but kept the card as a reminder that trust was often the first clue.'
    ]
  },
  {
    title: 'Brave Citizen',
    cover: 'images/covers/923f5cf2-b22f-460d-83a8-1fabb4df5b41.jpg',
    description: 'A former athlete and substitute teacher finds a careful way to stand up for a bullied student.',
    chapter: 'The Seat by the Window',
    paragraphs: [
      'Former boxer Hyejin took a temporary job teaching at a school where one student always sat by the window and never joined group work. When she saw classmates mocking him, she wanted to step in with a loud speech. Instead, she first asked the student what kind of help he wanted.',
      'Together they made a record of what had happened and spoke with a counselor, the homeroom teacher, and the families involved. Hyejin organized a self-defense workshop too, but made its first rule clear: courage was not about fighting; it was about keeping people safe and asking for support.',
      'The student chose a new seat beside a friend. The bullying did not disappear in a day, but the adults finally had a plan and the class understood that silence had consequences. Hyejin left the school at the end of her contract, knowing the strongest move had been making sure the student was heard.'
    ]
  },
  {
    title: 'Weak Hero Class 2',
    cover: 'images/covers/c2356423-0175-458e-b0f1-e0ca7af9e56f.jpg',
    description: 'A quiet transfer student learns that surviving school pressure takes more than sharp tactics.',
    chapter: 'The Chalk Line',
    paragraphs: [
      'At his new school, Minjae learned to keep his head down and notice everything. He tracked who controlled the hallways, who lent notes, and which teachers stayed after class. When a group began demanding money from younger students, he prepared a plan that relied on timing and evidence rather than a fight.',
      'His careful plan nearly failed when one student refused to be treated as a victim. Together they reported the threats, asked classmates to confirm what they had seen, and met with a teacher they trusted. Minjae realized that planning for every outcome was not the same as trusting people.',
      'The school created a reporting route that did not leave students alone with the problem. Minjae still watched the hallways, but he no longer had to do it by himself. He drew a chalk line outside the classroom as a joke: one side for old habits, one for asking someone to stand with him.'
    ]
  },
  {
    title: 'Sweet Home 2',
    cover: 'images/covers/3c59b7f6-b09a-4ea9-b236-26d84d7c1a90.jpg',
    description: 'A shelter community tries to stay human while a strange new danger spreads outside.',
    chapter: 'The Greenhouse Door',
    paragraphs: [
      'Months after the evacuation, residents of Building Seven had turned the lobby into a shelter and the roof into a garden. When a strange sound began echoing through the stairwell, everyone blamed the people living on the next floor. The noise grew louder whenever the lights went out.',
      'Volunteer nurse Ara and a cautious caretaker followed the sound to the sealed greenhouse. A cracked water pipe was making the metal frame hum, while something outside scraped against the glass. They fixed the pipe and moved the garden supplies to the inner hall, where everyone could help keep watch.',
      'By morning, the sound had stopped. The community voted to open the greenhouse only in daylight, with pairs of volunteers and a clear exit route. Fear had not vanished, but it no longer decided who belonged in the building. They planted new seeds in the safest corner and agreed to share the harvest.'
    ]
  },
  {
    title: 'All of Us Are Dead',
    cover: 'images/covers/c36158ec-a8de-49f6-b384-60c63cdb8aa3.jpg',
    description: 'Trapped students turn their classroom into a rescue point during a sudden outbreak.',
    chapter: 'The School Bell',
    paragraphs: [
      'When the first emergency alert reached Dongsan High, the students in Room 204 heard shouting from the courtyard. Their teacher locked the door while class president Yuna checked the windows and called the local rescue number. Outside, the school had changed in minutes, and the students had no clear route out.',
      'They divided the work: one group gathered water, another shared phone chargers, and two classmates kept a list of everyone’s messages to their families. A student who had argued with Yuna all year knew the maintenance tunnels and drew a map from memory. This time, nobody laughed at his careful notes.',
      'At sunset, the group followed the marked route to the gym, where emergency workers were waiting. Not every message had an answer yet, but the class stayed together and passed along what they knew. When the school bell rang automatically the next morning, it sounded less like an ending than a signal that help was still coming.'
    ]
  },
  {
    title: 'Duty After School',
    cover: 'images/covers/7bb8e452-b53f-4b4d-adb0-b5eb77e7bbef.jpg',
    description: 'Students assigned to an emergency unit discover the importance of teamwork under pressure.',
    chapter: 'The Signal on Hill Three',
    paragraphs: [
      'The students of Class Three had been assigned to help monitor the hills after strange objects began appearing in the sky. They trained with radios, first-aid kits, and maps, though most still had homework due. When Hill Three stopped checking in, their instructor asked for volunteers to carry a replacement signal unit.',
      'The path was steep and the weather turned quickly. The class used the skills each person had practiced: one read the map, another kept the radio clear, and two stayed with a classmate whose ankle was injured. They found the missing team sheltering in an old maintenance hut, safe but cut off from the main channel.',
      'By nightfall, both groups had returned with the signal restored. The students were exhausted and still uncertain about what the lights in the sky meant. Their instructor let them rest before the next briefing. For now, they had fulfilled their duty by protecting one another and making sure no one was left behind.'
    ]
  },
  {
    title: 'Revenge of Others',
    cover: 'images/covers/b1ae23f7-d287-484a-b627-7c608a76a17a.jpg',
    description: 'A student investigates a suspicious incident and must choose truth over easy revenge.',
    chapter: 'The Missing Camera',
    paragraphs: [
      'After her brother was injured in a school stairwell, Sora returned to campus determined to find who had been there. An anonymous account offered her a name and a promise of revenge. She saved the message, then began checking the facts: the hallway camera had been unplugged before the incident.',
      'Sora found three students who had heard different parts of the argument. Their stories did not fit the rumor, but they pointed toward a teacher who had asked for the camera footage to be erased after a maintenance complaint. She asked a counselor to help preserve the evidence and made sure her brother could speak when he was ready.',
      'The school reopened the investigation and apologized for dismissing the first report. Sora never learned who ran the anonymous account. She did learn that a quick punishment would not have answered her brother’s questions. The truth was slower than revenge, but it gave him room to heal without becoming another rumor.'
    ]
  },
  {
    title: 'High School Return of a Gangster',
    cover: 'images/covers/eed3494d-95b0-40dd-99fb-0584dca144b9.jpg',
    description: 'A retired street fixer returns to school to finish the education he once walked away from.',
    chapter: 'The Desk in the Back',
    paragraphs: [
      'At forty, former street fixer Doyun enrolled in night school to complete the degree he had abandoned as a teenager. He expected jokes about his age and found plenty. He did not expect to be asked to mediate every disagreement because people assumed he knew how to intimidate someone.',
      'Doyun refused to solve problems with threats. He helped classmates prepare for exams, spoke honestly about the choices that had cost him years, and asked the teacher for tutoring when he struggled with algebra. The hardest lesson was not in a book: starting over meant accepting help without pretending he already knew everything.',
      'On graduation day, Doyun sat in the back row beside the youngest student in class. They had both passed mathematics after months of practice. He left the school with no crew to follow him and no shortcuts to offer—only a certificate, a plan for honest work, and proof that a different future could begin at any age.'
    ]
  },
  {
    title: 'The Uncanny Counter 2',
    cover: 'images/covers/3b62fa99-5c67-4431-97ad-59e296b966b5.jpg',
    description: 'A team of night-shift guardians protects a neighborhood from an unseen force.',
    chapter: 'The Noodle Shop at Midnight',
    paragraphs: [
      'The night-shift crew at a small noodle shop had another job after closing: help people troubled by an invisible force that fed on regret. New recruit Jisu wanted to prove she belonged, so she chased a shadow through the market without waiting for the rest of the team.',
      'The shadow led her to an elderly shop owner who had been blaming herself for a fire that began in a faulty wire. Jisu found the old inspection report and learned the owner had asked for repairs months earlier. The spirit was not asking for punishment; it was holding a painful memory in place.',
      'The team helped the owner share the report and reopen the shop safely. Jisu apologized for rushing ahead, and the crew made a new rule: nobody handles a midnight call alone. They served a final bowl of noodles before dawn, their work unseen but their neighborhood a little lighter.'
    ]
  },
  {
    title: 'Alice in Borderland',
    cover: 'images/covers/6aceb183-fd5e-46e2-9bb1-aea27a8d696f.jpg',
    description: 'Strangers in an empty city face puzzle-like trials where cooperation matters more than speed.',
    chapter: 'The Door with No Number',
    paragraphs: [
      'When Riku woke in a silent city, the only open building was a station marked with a playing-card symbol. Inside, a group of strangers found a challenge: choose one of six doors before the clock reached zero. Every door led back to the same room, but the clues on the walls changed each time.',
      'A runner wanted to guess quickly, while a student kept checking the details everyone else ignored. Riku asked the group to compare what they had seen instead of competing for the first answer. The pattern revealed that the right door was the one nobody had tried together.',
      'They crossed into the next street just before the timer ended. The city remained empty, and none of them knew why they had been brought there. But they had learned the first rule of surviving it: the person beside you was not another obstacle. They were the reason you might find a way forward.'
    ]
  },
  {
    title: 'Twinkling Watermelon',
    cover: 'images/covers/2de50919-cac8-4975-b02f-55ff21427813.jpg',
    description: 'A guitarist, a mysterious old music shop, and one summer that changes a family.',
    chapter: 'The Song We Borrowed',
    paragraphs: [
      'After finding an old guitar in his grandfather’s storage room, music student Eunho heard a melody that seemed to belong to another summer. The next morning, he woke up decades earlier in a seaside town where his parents were teenagers and a band was searching for a drummer.',
      'Eunho joined the group under a borrowed name, hoping to understand the family stories no one ever told clearly. He learned that his parents had once wanted different things, and that love did not erase the hard choices they faced. He could not rewrite every moment, but he could help them hear one another.',
      'The band played the song at the summer festival. Eunho returned to his own time with the melody intact and a new appreciation for the people behind it. He recorded the tune with his family, each person adding a sound of their own. The result was imperfect, warm, and unmistakably theirs.'
    ]
  },
  {
    title: 'Love Revolution',
    cover: 'images/covers/81f346db-3583-4c8d-b40d-b640ba766974.jpg',
    description: 'A cheerful student tries to impress his crush and learns to listen without a script.',
    chapter: 'A Note Without a Plan',
    paragraphs: [
      'Jaeho had a plan for everything: where to sit, which snack to bring, and exactly how to confess his feelings to classmate Nari. The plan fell apart when he learned she had a difficult week and did not want a grand gesture. His friends told him to be patient; Jaeho wrote a six-page schedule anyway.',
      'Nari found the schedule by accident and laughed—not unkindly. She told Jaeho she liked spending time with him but wanted him to stop treating every conversation like a challenge to win. He listened, put away the list, and asked what she wanted to do that afternoon.',
      'They walked to a small bookstore and shared a packet of cookies on the steps. Nothing dramatic happened, which was exactly what made the day comfortable. Jaeho still liked Nari, but now he understood that affection was not a performance. It was a promise to pay attention, even when there was no perfect line to say.'
    ]
  }
];

const mangaUpdates = [
  ['Naruto', 'A young ninja keeps training after his village doubts him, hoping to earn the trust to become its next leader.', 'The Promise at the Training Ground', 'Naruto arrived at the training field before sunrise, determined to master a technique that had defeated him all week. When a storm washed away the boundary markers, he found a younger student lost in the woods and put practice aside to guide them home.', 'His teammates helped rebuild the field, and the instructor praised the choice to protect someone over chasing a quick victory. Naruto returned the next morning with a new plan: train hard, bring his friends, and make sure nobody had to find their way alone.'],
  ['One Piece', 'A cheerful young pirate and his oddball crew follow a hand-drawn map toward a legendary island.', 'The Map That Would Not Sink', 'The crew found a water-stained map inside a bottle caught in the Sunny’s net. It pointed toward a tiny island missing from every chart. Their navigator spotted that the ink changed under moonlight, revealing a route through the reefs.', 'They reached the island at dawn and discovered a lighthouse keeper who had spent years guiding lost ships. The crew repaired the beacon before setting sail again, leaving the keeper with a promise: the sea was wide, but friends always find a way back.'],
  ['Kagurabachi', 'A determined young swordsmith tracks a stolen enchanted blade through a city of hidden craft and old loyalties.', 'The Blade in the Rain', 'A forged sword vanished from a guarded workshop during a night of heavy rain. Chihiro followed a trail of unusual metal filings through the market, where a retired smith recognized the marks as a warning rather than a challenge.', 'They found the blade locked inside a flooded storehouse and rescued it without drawing it. Chihiro returned it to its maker, learning that patience and knowledge of a craft could be as decisive as the weapon itself.'],
  ['Hell’s Paradise', 'A hardened shinobi joins a dangerous expedition to find a cure on a mysterious island.', 'The Flower Beyond the Cliff', 'The expedition reached a cliff covered in bright flowers that released a sweet, unsettling scent. Gabimaru noticed the petals grew only where the soil was disturbed, and warned his team not to touch them until they understood the island’s patterns.', 'They found a sheltered spring and gathered a small sample for the team’s healer. The group left the flowers undisturbed, choosing careful observation over a reckless harvest. On the return path, even the most hardened among them walked close enough to help one another.'],
  ['The Apothecary Diaries', 'A sharp-eyed apothecary solves a palace mystery by following the smallest details.', 'The Scent in the Medicine Room', 'Maomao noticed that a court attendant’s medicine smelled faintly of bitter almonds, though the recipe called for herbs with a sweeter scent. She checked the storage jars and found two labels switched by a careless clerk.', 'The attendant recovered after receiving the correct remedy, and the palace physician thanked Maomao for speaking up. She returned to her workbench, already curious about a new stain on the medicine-room ledger.'],
  ['Frieren: Beyond Journey’s End', 'An elven mage travels with new companions, discovering the meaning of ordinary days after a great quest.', 'A Letter for the Road', 'Frieren found an unopened letter tucked inside an old travel journal. It was an invitation from a village she and Himmel’s party had helped long ago, asking them to return for a small spring celebration.', 'She visited with Fern and Stark, who helped the villagers repair a footbridge before the festivities. The letter had arrived years late, but the welcome was warm. Frieren added the day to her collection of memories worth keeping.'],
  ['Spy x Family', 'A secret agent’s carefully arranged household faces a school event that tests their teamwork.', 'Operation: Class Keepsake', 'At the school’s family craft day, Loid planned to finish a perfect model rocket before anyone noticed the other families. Anya had a different plan: decorate it with every sticker she could find, while Yor quietly made sure the glue and scissors stayed far from anyone’s sleeves.', 'Their rocket wobbled but flew across the gym. The teacher praised the teamwork, and Loid realized their untidy project was the only one that made the whole table laugh. Anya declared the mission a success and asked what they were having for dinner.'],
  ['JoJo’s Bizarre Adventure', 'A resourceful adventurer follows a trail of strange clues and a family mystery across the city.', 'The Clockwork Stand', 'At midnight, every clock in the museum stopped at the same minute. Jotaro and his companions inspected the exhibits and noticed a brass pocket watch still ticking backward. Its owner had vanished from a locked archive room.', 'They uncovered a hidden passage beneath the display and found the curator trapped behind a jammed door. The clocks began again as soon as he was free. Jotaro pocketed the strange watch as evidence, certain its story was not finished.'],
  ['Fullmetal Alchemist', 'Two brothers use science, courage, and teamwork to uncover the truth behind a forbidden experiment.', 'The Alchemist’s Notebook', 'Edward and Alphonse found a damaged notebook in an abandoned workshop. Its diagrams described a water-purification device, but a missing page made the final step look dangerously incomplete.', 'They rebuilt the machine using a safer design and gave it to a village whose well had turned cloudy. The brothers left the notebook with the local teacher, adding a note that knowledge mattered most when it helped people without putting them at risk.'],
  ['Death Note', 'A meticulous investigator pursues a pattern of anonymous messages hidden in a city library.', 'The Final Footnote', 'Detective Ren noticed that several anonymous letters shared the same unusual punctuation. Each had been left inside a different library book, pointing readers toward a missing community archive.', 'Ren traced the notes to a former archivist trying to draw attention to the collection’s neglect. The investigation ended with the archive restored and the letters preserved as evidence. The case was solved by careful reading, not by guessing who looked suspicious.'],
  ['Tokyo Ghoul', 'A young café worker tries to build trust between two communities living with fear and misunderstanding.', 'The Quiet Table', 'At Anteiku, Ken noticed a new customer always chose the table nearest the exit and never stayed long. One evening, a storm trapped them inside with the staff, and a conversation began over a cup of coffee cooling untouched.', 'The customer returned the next week with a friend. Nothing was solved in one night, but the café made room for another table where people could talk without being hurried. Ken decided that small acts of welcome were worth repeating.'],
  ['Kingdom', 'A young foot soldier rises through the ranks during a campaign to unite a divided kingdom.', 'The Standard at Dawn', 'Shin’s unit was sent to carry a message across a ridge before sunrise. Their banner had been torn in the wind, and the soldiers were unsure whether the neighboring camp would recognize them.', 'Shin tied the pieces together and led the group along a narrow path marked on an old scout’s map. They reached the allied camp in time, carrying the message and a patched standard that became a reminder of the unit’s resolve.'],
  ['Vinland Saga', 'A former warrior seeks a peaceful life and learns to protect a settlement without violence.', 'A Field Without Swords', 'Thorfinn arrived at a coastal settlement where two families argued over a strip of farmland. Both feared that giving ground would leave them hungry through winter, and both had already sharpened tools they called weapons.', 'He asked the families to map the land and test the soil together. They found room for a shared irrigation ditch and separate planting rows. The harvest was still uncertain, but the settlement entered winter without a fight.'],
  ['Kuroko’s Basketball', 'A quiet playmaker and his teammates prepare for a tournament by learning to trust every pass.', 'The Pass Before the Shot', 'Kuroko’s team kept losing the final point in practice because every player expected Kagami to take the last shot. Coach Riko challenged them to run a play with no planned scorer and trust whoever found the opening.', 'During the next game, Kuroko passed to a teammate who had been overlooked all season. The shot went in, and the bench erupted. Their win came from seeing the whole court—and the people on it—more clearly.'],
  ['Slam Dunk', 'A new basketball player discovers that becoming part of a team takes practice and humility.', 'Rebound Practice', 'Sakuragi arrived early to practice rebounds, convinced that a loud celebration would make up for his missed shots. Akagi handed him a stack of towels and asked him to stay after everyone else had left.', 'By the end of the week, Sakuragi had learned to box out and call for the ball. He still bragged after every good play, but now his teammates laughed with him instead of at him. The next game would be his first real chance to help.'],
  ['Haikyu!!', 'A determined volleyball team builds its rhythm through communication and relentless practice.', 'One More Receive', 'The East Harbor volleyball team had lost every match that season. Their captain blamed the serves, the setter blamed the gym, and first-year player Ren blamed himself for being too short to block. Coach Aya asked each player to name one thing a teammate did well.', 'The team built a new rotation around those strengths. At the final tournament, Ren made a low receive that kept the rally alive long enough for the captain to score. They did not win the championship, but they left ready to return to the court together.'],
  ['Blue Lock', 'Strikers compete to sharpen their instincts and learn what it takes to score under pressure.', 'The Shot Nobody Expected', 'During a timed drill, Isagi noticed that every striker rushed toward the same obvious opening. He held back long enough to see the goalkeeper shift and a narrow lane appear at the far post.', 'His shot found the gap, but the coach replayed the move and asked the team to find three other options. Isagi understood that instinct was only the beginning: the best striker had to keep imagining what the field could become.'],
  ['Dandadan', 'Two classmates investigate a bizarre local legend and encounter a mystery stranger than either expected.', 'The Station After Midnight', 'Momo and Okarun followed a rumor about a platform that appeared only after the last train. At midnight, the station lights flickered on beneath an empty street, and a tiny paper charm started pointing toward the tracks.', 'They found a lost child’s charm caught near a drain and returned it to the family who had been searching all evening. The platform vanished before they could investigate further. Okarun kept the charm’s drawing in his notebook for their next strange case.'],
  ['Kaiju No. 8', 'A cleanup crew member dreams of joining the defense force when a new kaiju threat appears.', 'The Rescue Route', 'Kafka was assigned to clear a damaged street after a kaiju alert when the evacuation map became unreadable in the rain. He recognized a service alley from his cleanup routes and guided a stranded family toward the nearest shelter.', 'The defense team secured the area, and Kafka’s knowledge of the city helped them locate two more residents. He returned to cleanup duty muddy and exhausted, but his exam application was still in his pocket. He would keep working toward the front line.'],
  ['Black Clover', 'A determined magicless boy keeps pursuing his dream through grit, friendship, and unexpected allies.', 'The Clover Without Magic', 'Asta reached a village where a damaged bridge separated the healers from families waiting for medicine. Though he could not cast a repair spell, he rallied the villagers to move the supplies by hand while his companions secured the crossing.', 'The medicine arrived before nightfall, and the villagers celebrated together. Asta returned to training with the same goal as before, but with a fresh reminder: there were many ways to be useful, and every one of them mattered.'],
  ['Hunter x Hunter', 'Two young hunters follow a trail of clues through a forest trial that rewards observation and teamwork.', 'The Hunter’s Compass', 'Gon and Killua found a compass that pointed away from north whenever someone tried to use it alone. They compared its markings with the river bends and realized it was designed to be read by two people standing at different points.', 'Working together, they located the hidden trail marker and helped another group find the safe route. The trial’s prize was a simple badge, but the real lesson was clear: a good hunter knew when to trust another set of eyes.'],
  ['Dragon Ball', 'A cheerful martial artist trains for a friendly tournament and discovers a new reason to keep improving.', 'The Empty Tournament Ring', 'Goku arrived at the tournament grounds to find the ring empty and the organizers missing. A sudden storm had washed out the road, leaving several competitors stranded in nearby villages.', 'He helped carry supplies and guide the competitors back before the opening match. The tournament began late, and Goku was still hungry, but he was glad everyone had made it. He entered the ring smiling, eager to see how much they had all improved.'],
  ['Bleach', 'A substitute Soul Reaper investigates a spirit’s disappearance and helps it find a peaceful farewell.', 'The Lantern on the River', 'Ichigo saw a small lantern drifting upstream, against the current. Rukia recognized the mark painted on its side as a sign left by a spirit who had lost their way between worlds.', 'They followed the lantern to an old footbridge where a family had gathered to remember someone they missed. The spirit found the courage to move on after hearing their stories. Ichigo watched the river carry the light downstream, then headed home before the rain returned.'],
  ['Attack on Titan', 'Scouts beyond the walls uncover a safe route that could protect civilians during an emergency.', 'Beyond the North Wall', 'During a survey outside the walls, Hange’s team found a narrow pass that offered shelter from the open plain. The route was difficult, but it could give nearby villages a safer path if the warning bells ever sounded.', 'The scouts marked the pass and tested it with a small supply team. When the next alarm came, families followed the route to safety. The threat beyond the wall remained, but preparation gave the people a chance to face it together.'],
  ['My Hero Academia', 'A student hero-in-training learns to use a rescue skill when a city exercise goes off plan.', 'The Rescue Drill', 'At U.A., Izuku’s class began a disaster drill that quickly became real when a support-course prop jammed a hallway door. The students followed their training, keeping everyone calm while Iida organized a clear route to the exits.', 'The door was freed without anyone getting hurt, and the instructors praised the class for treating rescue as teamwork rather than a solo performance. Izuku wrote down what he had learned and added a reminder to practice listening as carefully as acting.'],
  ['Solo Leveling', 'A low-ranked hunter enters a dangerous gate and learns to survive by observing every detail.', 'One More Floor', 'Jinwoo entered a quiet gate to retrieve a missing survey beacon and found a staircase that appeared only when he stopped rushing. Each floor tested a different skill: patience, observation, and knowing when to retreat.', 'When a cave-in trapped the senior hunters, Jinwoo’s careful notes became the only map out. The rescue took all night. He returned tired but determined to train, knowing that progress came from preparation as much as power.'],
  ['Chainsaw Man', 'A broke devil hunter takes a strange job that turns into an unexpectedly kind day.', 'The Lost Dog Devil', 'Denji was promised lunch money to help find a tiny devil that had frightened the neighborhood. The creature turned out to be a harmless runaway dog hiding beneath a vending machine, terrified by the noise of passing traffic.', 'Denji coaxed it out with the last piece of his bread and walked it home. The grateful owner offered him a proper meal. He decided that not every devil hunt needed a dramatic fight; sometimes the best ending was a warm bowl and a safe place to sleep.'],
  ['Demon Slayer: Kimetsu no Yaiba', 'A young swordsman follows a trail through the mountains to help a village troubled after dark.', 'The Wisteria Path', 'Tanjiro noticed a wisteria scent along a mountain path where villagers had reported strange sounds at night. He and Nezuko followed the trail and found an abandoned cart wedged across a narrow bridge, making the wind whistle through its broken boards.', 'They cleared the bridge and escorted the villagers home before sunset. The sounds stopped, and the families agreed to repair the path together. Tanjiro left a wisteria charm at the trailhead so travelers would remember they were not alone.'],
  ['Jujutsu Kaisen', 'A team of young sorcerers investigates a school curse born from years of unspoken worries.', 'The Echo in Room Three', 'Yuji, Megumi, and Nobara were sent to an empty classroom where a low echo repeated whenever someone hid a worry. They found no powerful enemy—only old notes and a broken speaker that amplified every sound after dark.', 'They repaired the speaker and helped the school counselor create a quiet place for students to talk. The echo faded as the room filled with ordinary conversation. The team left tired, arguing about dinner, and glad the next problem had a human-sized solution.'],
  ['Sakamoto Days', 'A retired legendary hitman protects his neighborhood shop with help from his unpredictable family and crew.', 'The Last Order', 'A customer left a small notebook at Sakamoto’s store, and a group of former rivals came looking for it before closing. Shin read the room, Lu guided shoppers to safety, and Sakamoto kept ringing up groceries as if the evening were perfectly normal.', 'The notebook turned out to contain a list of the customer’s favorite snacks, not a secret plan. Sakamoto returned it with a bag of groceries, and the rivals left embarrassed but unharmed. The shop closed on time, though Shin insisted the whole incident deserved overtime pay.']
].map(([title, description, chapter, ...paragraphs], index) => ({
  ...stories[index],
  title,
  description,
  chapter,
  paragraphs
}));
stories.splice(0, stories.length, ...mangaUpdates);

const savedFavorites = () => {
  try {
    return JSON.parse(localStorage.getItem('sv-favs') || '[]');
  } catch (error) {
    console.error('Could not read saved favorites.', error);
    return [];
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.title = document.title.replace(/Story Mix/g, 'MANGA NEXUX').replace(/Anime × K-Drama/g, 'Anime Manga Library');
  document.querySelectorAll('.logo').forEach((logo) => {
    const brand = document.createElement('span');
    brand.textContent = 'NEXUX';
    logo.replaceChildren(document.createTextNode('◈ MANGA '), brand);
  });
  document.querySelectorAll('footer').forEach((footer) => {
    footer.textContent = 'MANGA NEXUX • 30 Anime & Manga Stories • Original chapters';
  });
  const heroDescription = document.querySelector('.hero-copy > p');
  if (heroDescription) heroDescription.textContent = 'Explore 30 anime and manga worlds, find a new favorite, and settle in for an original chapter.';
  const stats = document.querySelector('.stats');
  if (stats) {
    ['30|Anime & manga titles', '30|Original chapters', '1|Adventure starts here'].forEach((item, index) => {
      const [count, label] = item.split('|');
      const stat = stats.children[index];
      if (!stat) return;
      const number = document.createElement('b');
      number.textContent = count;
      stat.replaceChildren(number, document.createTextNode(label));
    });
  }
  const libraryDescription = document.querySelector('.section-head > div > p');
  if (libraryDescription) libraryDescription.textContent = '30 original chapters inspired by the covers. Pick one and begin.';
  const search = document.getElementById('search');
  if (search) search.placeholder = 'Search anime and manga...';
  const categoryFilter = document.getElementById('filter');
  if (categoryFilter) {
    [...categoryFilter.options].forEach((option) => {
      if (option.value === 'K-Drama') option.remove();
    });
  }

  const themeButton = document.getElementById('theme');

  try {
    if (localStorage.getItem('sv-theme') === 'light') document.body.classList.add('light');
  } catch (error) {
    console.error('Could not read the saved theme.', error);
  }

  themeButton?.addEventListener('click', () => {
    document.body.classList.toggle('light');
    try {
      localStorage.setItem('sv-theme', document.body.classList.contains('light') ? 'light' : 'dark');
    } catch (error) {
      console.error('Could not save the selected theme.', error);
    }
  });

  const cards = [...document.querySelectorAll('.card')];
  document.querySelectorAll('.hero-visual img').forEach((image, index) => {
    const story = stories[index];
    if (story) {
      image.src = story.cover;
      image.alt = `${story.title} cover`;
    }
  });

  cards.forEach((card, index) => {
    const story = stories[index];
    if (!story) return;

    const image = card.querySelector('img');
    const link = card.querySelector('.actions a');
    const title = card.querySelector('h3');
    const category = card.querySelector('.pill');
    const favorite = card.querySelector('.fav');
    if (image && link) {
      image.src = story.cover;
      image.alt = `${story.title} cover`;
      const coverLink = document.createElement('a');
      coverLink.className = 'card-cover';
      coverLink.href = link.href;
      coverLink.setAttribute('aria-label', `Read ${story.title}`);
      image.before(coverLink);
      coverLink.append(image);
    }

    card.dataset.category = 'Anime';
    card.dataset.title = story.title.toLowerCase();
    if (title) title.textContent = story.title;
    if (category) category.textContent = 'Anime';
    if (favorite) favorite.setAttribute('aria-label', `Favorite ${story.title}`);
    const description = card.querySelector('.card-body > p');
    if (description) description.textContent = story.description;
  });

  const storyMatch = window.location.pathname.match(/story-(\d+)\.html$/i);
  if (storyMatch) {
    const story = stories[Number(storyMatch[1]) - 1];
    const readerImage = document.querySelector('.reader-head > img');
    const readerTitle = document.querySelector('.reader-head h1');
    const readerCategory = document.querySelector('.reader-head .pill');
    const readerDescription = document.querySelector('.reader-head > div > p');

    if (story && readerImage && readerTitle) {
      const index = Number(storyMatch[1]) - 1;
      document.title = `${story.title} | MANGA NEXUX`;
      readerTitle.textContent = story.title;
      readerImage.src = `../${story.cover}`;
      readerImage.alt = `${story.title} cover`;
      if (readerCategory) readerCategory.textContent = 'Anime';
      if (readerDescription) readerDescription.textContent = story.description;

      const chapter = document.getElementById('chapter');
      if (chapter) {
        chapter.replaceChildren();
        const label = document.createElement('p');
        label.className = 'eyebrow';
        label.textContent = 'CHAPTER ONE';
        const heading = document.createElement('h2');
        heading.textContent = story.chapter;
        chapter.append(label, heading);
        story.paragraphs.forEach((text) => {
          const paragraph = document.createElement('p');
          paragraph.textContent = text;
          chapter.append(paragraph);
        });
        const ending = document.createElement('p');
        ending.className = 'ending';
        ending.textContent = '✦ The End ✦';
        chapter.append(ending);
      }

      const scene = document.querySelector('.scene');
      if (scene) scene.hidden = true;
    }
  }

  const getFavorites = () => savedFavorites();
  const refreshFavorites = () => {
    document.querySelectorAll('.fav').forEach((button) => {
      const isSaved = getFavorites().includes(button.dataset.id);
      button.classList.toggle('active', isSaved);
      button.textContent = isSaved ? '♥ Saved' : '♡ Favorite';
      button.setAttribute('aria-pressed', String(isSaved));
    });
  };

  document.querySelectorAll('.fav').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const favorites = getFavorites();
      const updated = favorites.includes(id) ? favorites.filter((favorite) => favorite !== id) : [...favorites, id];
      try {
        localStorage.setItem('sv-favs', JSON.stringify(updated));
      } catch (error) {
        console.error('Could not save favorite.', error);
      }
      refreshFavorites();
      filterCards();
    });
  });
  refreshFavorites();

  const filter = categoryFilter;

  function filterCards() {
    const query = (search?.value || '').toLowerCase();
    const category = filter?.value || 'All';
    let visible = 0;
    cards.forEach((card) => {
      const favoriteButton = card.querySelector('.fav');
      const matches = card.dataset.title.includes(query)
        && (category === 'All'
          || (category === 'Favorites'
            ? getFavorites().includes(favoriteButton?.dataset.id)
            : card.dataset.category === category));
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    const empty = document.getElementById('empty');
    if (empty) empty.hidden = visible > 0;
  }

  search?.addEventListener('input', filterCards);
  filter?.addEventListener('change', filterCards);
});
