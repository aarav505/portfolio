export const articles = [
  {
    slug: "what-3-years-of-coding-at-the-doon-school-taught-me",
    title: "What 3 Years of Coding at The Doon School Taught Me",
    excerpt:
      "Reflecting on my journey from early Python scripts to building full-stack web applications for hundreds of users on campus. Here are the core technical and personal lessons I wish I knew when starting in 9th grade.",
    content: `## Looking Back at the Journey

When I started writing code in 9th grade, my work was mostly isolated scripts and small offline programs. By 12th grade, as President of the Computer Club and lead organizer for events like IPSC IT FEST 2026, my perspective on software shifted completely. Programming is no longer just about syntax; it is about building software that people actually use.

Building production platforms for our school community—like the DSFL fantasy sports application and the 90th Founder's Day app—taught me that software engineering requires far more than algorithms. You have to handle live database queries, manage user authentication, deploy stable builds under tight deadlines, and build intuitive interfaces.

### Core Engineering Lessons

- **Solve local problems first:** Building a fantasy league app for inter-house sports or an event app for Founder's Day creates immediate feedback loops with real users that no online tutorial can replicate.
- **Teaching solidifies understanding:** Mentoring 40+ junior students in Next.js, React, and Node.js every week forced me to understand web architecture deeply enough to explain it simply.
- **Fundamentals outlast tools:** Frameworks evolve quickly, but network protocols, relational database design, and algorithmic thinking stay constant.

> The real measure of software isn't how clever the code looks in your editor; it's whether it solves a tangible problem for the community relying on it.
`,
    date: "2026-05-18",
    readTime: "7 min read",
    tags: ["Reflection", "DoonSchool", "FullStack"],
    platform: "Personal Blog",
    cover: "/articles/reflection.svg",
  },
  {
    slug: "building-dsfl-a-full-stack-fantasy-league",
    title: "Building DSFL: Scaling a Fantasy Sports Platform to 600+ Users",
    excerpt:
      "A deep dive into how I built and deployed DSFL, an inter-house fantasy sports app that maintained 200+ daily active users across six months of active competition.",
    content: `## Taking Inter-House Sports Digital

Inter-house sports competitions carry immense tradition at school, but tracking player stats, match points, and leaderboards was historically done manually on paper noticeboards. I wanted to build a modern fantasy league web application to make tracking scores dynamic and engaging.

I designed and engineered DSFL as a full-stack web application. The platform had to support draft mechanics, dynamic team management, live point calculation based on real match outcomes, and secure user accounts.

### Engineering Challenges and Solutions

1. **State and Database Integrity:** Handling concurrent updates during live matches required explicit database transactions and strict data modeling to ensure scores updated accurately without race conditions.
2. **User Retention and Performance:** Serving 200+ daily active users meant keeping server response times minimal. I implemented server-side rendering with Next.js and optimized database queries to keep page loads fast on mobile connections across campus.
3. **Authentication:** Setting up secure authentication allowed over 600 users to sign up without risking account spoofing or unauthorized team alterations.

> Building software for a live user base turns bug fixes from theoretical exercises into immediate operational requirements.
`,
    date: "2026-04-10",
    readTime: "6 min read",
    tags: ["Nextjs", "FullStack", "WebDev"],
    platform: "Personal Blog",
    cover: "/articles/dashboard.svg",
  },
  {
    slug: "organizing-ipsc-it-fest-2026",
    title: "Organizing IPSC IT FEST 2026: Tech Logistics at Scale",
    excerpt:
      "Serving as the lead organizer for IPSC IT FEST 2026 meant coordinating competitions, infrastructure, and logistics for 150+ participants across 20+ schools.",
    content: `## Technology Meets Operations

Stepping up as the Lead Organizer for IPSC IT FEST 2026 was a completely different challenge from writing software. Instead of managing code routines, I was managing logistics, event formats, and technical setups for over 150 delegates from more than 20 schools.

To keep engagement high, our team overhauled traditional competition structures. We introduced streamlined event pipelines, clearer problem statements, and real-time scoring systems to elevate the delegate experience across every track.

### Operational Principles

- **System Reliability:** Just like server infrastructure, event logistics require fail-safes. We pre-configured network environments, contest machines, and backup schedules days ahead of the opening ceremony.
- **Clear Communication:** Managing dozens of faculty escorts and student teams meant setting up automated communication schedules and detailed briefing documents.
- **Adaptability:** When live competition schedules shifted, having modular event structures allowed us to adjust timings seamlessly without disrupting parallel tracks.

> Organizing a national-level technology festival requires the same architectural rigor as building complex distributed software systems.
`,
    date: "2026-03-02",
    readTime: "5 min read",
    tags: ["Leadership", "Management", "TechFest"],
    platform: "Personal Blog",
    cover: "/articles/network.svg",
  },
  {
    slug: "space-settlement-design-and-systems-engineering",
    title: "Systems Engineering Lessons From Space Settlement Design",
    excerpt:
      "What co-authoring 70-page structural proposals for Earth-Mars transport settlements taught me about large-scale system architecture and team coordination.",
    content: `## Designing Beyond Earth

Participating in the Indian National and Asian Regionals Space Settlement Design Competitions pushed me into systems engineering on a massive scale. Working within large companies like *Vereinigten Flugfahrten*, our teams were tasked with creating complete, viable space settlements—such as *Cassandras 1.0* (an Earth-Mars transit hub) and *Astoria* (an asteroid belt provisioning station).

My core responsibilities focused on structural design, automation, and interior spatial layout. Writing detailed technical proposals under tight 24-hour competition windows required balancing physical constraints with automated sub-systems.

### Key Engineering Insights

- **Automation Integration:** Designing automated repair systems and environmental control networks forced me to think about software as an integral part of physical hardware.
- **Cross-Disciplinary Standards:** Structural calculations must interface cleanly with human life-support requirements, power distribution networks, and docking logistics.
- **Modular Documentation:** When drafting a 60-to-70 page technical document in a single day, clear modular interfaces between writing teams are essential to avoid conflicting specifications.

> Systems engineering teaches you to see the entire machine before focusing on individual components.
`,
    date: "2026-02-05",
    readTime: "6 min read",
    tags: ["Engineering", "SpaceDesign", "Automation"],
    platform: "Personal Blog",
    cover: "/articles/space.svg",
  },
  {
    slug: "engineering-the-ds90-founders-day-app",
    title: "Engineering the DS90 App for 700+ Event Visitors",
    excerpt:
      "How we conceptualized, built, and deployed an interactive event application featuring live food ordering, landmark experiences, and quizzes for Founder's Day.",
    content: `## High-Density Web Services

The 90th Founder's Day at school brought together hundreds of alumni, parents, and guests over three days. To improve the visitor experience, I spearheaded the development of the DS90 web application.

The app combined multiple distinct services into a unified interface: real-time food ordering for event stalls, interactive trivia quizzes, and landmark-based exploration tools to guide guests across campus.

### Technical Milestones

1. **High Concurrent Traffic:** Over 700 registered users placed orders and interacted with campus landmarks simultaneously, requiring efficient database queries and caching layers.
2. **Simplified UI:** The app was used by visitors of all ages, making clear visual typography and zero-friction navigation critical requirements.
3. **End-to-End Delivery:** From initial wireframes to production deployment, we delivered a stable tool that ran uninterrupted throughout the celebration.

> The best event software works quietly in the background, making complex logistics feel completely effortless to the visitor.
`,
    date: "2025-11-15",
    readTime: "5 min read",
    tags: ["WebDev", "Projects", "Nextjs"],
    platform: "Personal Blog",
    cover: "/articles/code.svg",
  },
  {
    slug: "building-medlink-in-a-48-hour-hackathon",
    title: "Building MedLink: Redistribution of Unused Medicines in 48 Hours",
    excerpt:
      "Developing a functional healthcare platform connecting donors, recipients, and verification partners during the BSAI Opportunity Summit Hackathon.",
    content: `## Hackathon Engineering Under Pressure

During the BSAI Opportunity Summit Hackathon, our team set out to tackle medical resource waste. Millions of unexpired medicines are discarded daily while underprivileged patients lack access to basic prescriptions. In 48 hours, we designed and built *MedLink*.

MedLink serves as a secure bridge connecting individual donors, partner health clinics, and verification authorities to ensure unused, unexpired medications are safely cataloged and redistributed.

### Platform Architecture

- **Verification Workflow:** Built a multi-tier review flow allowing healthcare partners to verify medicine batch numbers, expiry dates, and packaging integrity before listing.
- **Relational Matching:** Created matching algorithms to route donated medical supplies directly to nearby clinics based on current request queues.
- **Rapid Prototyping:** Used React and serverless backends to ship a working, end-to-end prototype within the competition deadline, earning 2nd place out of 35+ national teams.

> Rapid hackathon sprints prove that a focused product scope and clean data relationships are key to delivering impact quickly.
`,
    date: "2025-10-20",
    readTime: "5 min read",
    tags: ["Hackathon", "React", "SocialImpact"],
    platform: "Personal Blog",
    cover: "/articles/health.svg",
  },
  {
    slug: "building-nurtura-nova-an-autonomous-planting-robot",
    title: "Building Nurtura Nova: An Autonomous Planting Robot",
    excerpt:
      "Combining hardware, soil analysis sensors, and motor controls to build a self-navigating agricultural robot that won 'My Innovation Challenge'.",
    content: `## Where Software Meets Physical Hardware

At The Doon School Technology Conclave, I wanted to explore physical computing beyond the web browser. For 'My Innovation Challenge', I built *Nurtura Nova*—an autonomous robot designed to analyze soil parameters, sow seeds, and manage plant watering completely on its own.

Building a physical machine requires managing hardware signals, sensor inputs, and mechanical control loops alongside standard programming logic.

### Hardware & Software Stack

- **Soil Sensing Suite:** Integrated moisture, pH, and nutrient sensors to give real-time readings of local soil conditions.
- **Decision Engine:** Wrote control scripts to parse sensor data and dynamically determine seed depth and precise water volumes.
- **Autonomous Navigation:** Programmed motor drivers and obstacle detection sensors to allow the robot to navigate plot grids independently.

> Working with physical hardware teaches you resilience—unlike software, you can't just press undo on a hardware wiring error.
`,
    date: "2025-08-14",
    readTime: "6 min read",
    tags: ["Robotics", "Hardware", "Python"],
    platform: "Personal Blog",
    cover: "/articles/robot.svg",
  },
  {
    slug: "building-rupee-ready-tech-for-financial-literacy",
    title: "Building Rupee Ready: Scaling Financial Literacy and Donations",
    excerpt:
      "How I designed and developed the web platform for Rupee Ready, helping drive financial literacy tools to students and processing over 1.3L+ rupees in donations.",
    content: `## Engineering for Social Impact

Financial literacy is often overlooked in underprivileged school curricula. I collaborated with the founder of *Rupee Ready* to build a digital platform dedicated to expanding outreach and securing funding for educational workshops.

The project had two primary goals: deliver clean, accessible educational content to students and build a transparent, reliable donation processing pipeline.

### Product Outcomes

1. **Custom Payment Pipeline:** Built an intuitive donation flow that successfully processed over 1.3L+ rupees to support financial literacy drives.
2. **Accessible Frontend:** Optimized page layouts and assets so the site ran fast even on low-end mobile hardware and limited data connections.
3. **Sustained Engagement:** Maintained consistent daily active traffic, helping expand the organization's reach to hundreds of students.

> Technology becomes truly meaningful when it lowers barriers and routes real resources to communities that need them.
`,
    date: "2025-06-30",
    readTime: "4 min read",
    tags: ["WebDev", "SocialImpact", "Frontend"],
    platform: "Personal Blog",
    cover: "/articles/finance.svg",
  },
  {
    slug: "building-an-augmented-reality-sandbox-from-scratch",
    title: "Building an Augmented Reality Sandbox From Spare Parts",
    excerpt:
      "How we repurposed spare hardware, depth sensors, and projectors to build an interactive AR Sandbox that engaged 700+ visitors at Founder's Day.",
    content: `## Repurposing Hardware for Interactive Graphics

For the 90th Founder's Day exhibition, my team wanted to create a hands-on computing demonstration. We set out to build an Augmented Reality (AR) Sandbox that projects real-time topographic heightmaps and water simulation onto physical sand as users shape it.

Instead of buying expensive commercial rigs, we constructed the system from repurposed spare parts, an optical depth sensor, and an overhead projector.

### Technical Execution

- **Depth Data Processing:** Calibrated a depth camera to scan the sand surface contours continuously.
- **Real-Time Color Shading:** Processed point-cloud elevations in real time to project color-coded contour lines and fluid dynamics directly onto the sand.
- **Interactive Engagement:** Over 700 parents, alumni, and students interacted with the box, demonstrating complex geographical topography through tactile play.

> Repurposing discarded hardware into interactive tools is one of the most rewarding engineering challenges imaginable.
`,
    date: "2025-05-12",
    readTime: "5 min read",
    tags: ["AR", "Hardware", "Graphics"],
    platform: "Personal Blog",
    cover: "/articles/3d.svg",
  },
  {
    slug: "leading-the-grandslam-and-futsal-auction-app",
    title: "Digitizing Sports Coverage and the Grandslam Futsal League",
    excerpt:
      "Serving as Editor-in-Chief of 'The Grandslam' sports publication and engineering custom software for our inaugural player auction and league structure.",
    content: `## Redefining a Sports Publication

As Editor-in-Chief of *The Grandslam*, a 24-year-old student-led sports publication, I led a team of 30+ writers, editors, and designers. My main goal was to modernize our sports journalism while expanding the publication into an active organizer of competitive athletics.

We introduced the inaugural *Grandslam Futsal League*, featuring 7 franchises managed by faculty members, with player squads drafted through a live auction system.

### Tech and Media Operations

- **Custom Auction Software:** Built a dedicated internal dashboard to track franchise budgets, live player bids, and team rosters in real time during the auction event.
- **End-to-End Coverage:** Oversaw comprehensive match reports, statistical leaderboards, interactive polls, and "Team of the Season" curation across multiple sports.
- **Media Scaling:** Transformed a traditional print publication into a real-time digital media house powering active campus leagues.

> True leadership in media means combining narrative storytelling with digital infrastructure to create shared community experiences.
`,
    date: "2025-03-22",
    readTime: "6 min read",
    tags: ["Leadership", "Sports", "Software"],
    platform: "Personal Blog",
    cover: "/articles/sports.svg",
  },
  {
    slug: "winning-the-ipsc-it-quiz-and-senior-coding-challenge",
    title: "Winning the IPSC IT Quiz and Building a Python Analytics Tool",
    excerpt:
      "Reflecting on securing 1st Place in the National IT Quiz and 3rd Place in the Senior Coding Challenge by building a typing analytics app in 60 minutes.",
    content: `## Competing at the National Level

Competing in the IPSC IT FEST brought together top student programmers and tech enthusiasts from schools across India. Participating in both the IT Quiz and the Senior Coding Challenge tested theoretical computer science knowledge alongside real-time coding execution.

In the Senior Coding Challenge, participants were given just 1 hour to build a complete application from scratch.

### Building Under the Clock

- **The Problem:** Design and implement a typing speed measurement and analytical software package within 60 minutes.
- **The Execution:** Using Python, I built an interactive application that measured words-per-minute, calculated error distributions, and visualizing user speed fluctuations over time.
- **The Result:** Secured 3rd place in the Senior Coding Challenge and 1st place in the national IT Quiz across two competitive rounds.

> Time-constrained coding competitions teach you to focus on core functionality, stable data handling, and clean code layout.
`,
    date: "2025-02-18",
    readTime: "4 min read",
    tags: ["Python", "Competitions", "Analytics"],
    platform: "Personal Blog",
    cover: "/articles/ipsc-awards.png",
  },
  {
    slug: "designing-spark-desk-3d-modeling-in-blender",
    title: "Designing Spark Desk: 3D Product Modeling in Blender",
    excerpt:
      "Creating an ergonomic, modular smart workstation in Blender for the Meraki 3D Design Competition, securing 2nd place.",
    content: `## Ergonomics Meets Digital Prototyping

At the Meraki Competition, I competed in the 3D Design track, focusing on physical product design rather than web software. My entry, *Spark Desk*, was a conceptual smart workstation engineered for modern student productivity.

Using Blender, I built a detailed 3D model incorporating modular hardware slots, built-in digital learning interfaces, and ergonomic adjustments.

### Product Modeling Workflow

1. **Wireframing & Geometry:** Modeled exact physical proportions to ensure proper monitor eye levels and wrist support angles.
2. **Material Texturing:** Applied realistic surface shaders to balance sleek workspace aesthetics with durable material choices.
3. **Integrated Hardware:** Designed subtle cable routing paths, modular attachment docks, and embedded digital display panels.

> Exploring 3D spatial design expands your visual instinct, making desktop and web UI layouts much more intuitive.
`,
    date: "2024-11-20",
    readTime: "4 min read",
    tags: ["Design", "3DModeling", "Blender"],
    platform: "Personal Blog",
    cover: "/articles/design.svg",
  },
  {
    slug: "teaching-nextjs-and-react-to-40-junior-students",
    title: "Mentoring 40+ Juniors in Modern Web Development",
    excerpt:
      "How structuring weekly Computer Club workshops on Next.js, React, and Node.js helped build a vibrant developer culture at school.",
    content: `## Building a School Developer Culture

As President of the Computer Club, my most impactful responsibility was mentoring over 40 junior students. Many arrived with basic knowledge of block-based programming or terminal scripts, but wanted to build actual web applications.

I established weekly workshops focused on modern web stacks: HTML/CSS fundamentals, JavaScript, React components, and Next.js server architecture.

### Teaching Strategies

- **Project-Based Curriculum:** Instead of lecturing on syntax, we built real mini-apps—like study timers and weather dashboards—in every single session.
- **Peer Code Reviews:** Guided students through reading one another's code to spot bugs and learn clean naming conventions early.
- **Collaborative Full-Stack Builds:** Led group projects where juniors owned specific API endpoints or UI components, simulating real software teams.

> Mentoring younger developers forces you to break down complex architectural concepts into clear, foundational principles.
`,
    date: "2024-09-15",
    readTime: "5 min read",
    tags: ["Mentorship", "React", "Nextjs"],
    platform: "Personal Blog",
    cover: "/articles/reflection.svg",
  },
  {
    slug: "advocating-for-smart-boards-in-the-technology-council",
    title: "Upgrading Campus Infrastructure: Smart Boards in Classrooms",
    excerpt:
      "Working as a Technology Council representative to propose, advocate for, and implement smart board tech across our learning environments.",
    content: `## Driving Technical Adoption

Serving as a student representative on the Technology Council provided a clear look at how institutional infrastructure decisions are evaluated, budgeted, and executed. One of my primary initiatives was advocating for smart board integration in classrooms.

Transitioning from traditional chalkboards to interactive digital displays required presenting clear arguments to school leadership, faculty, and technical teams.

### Implementation Steps

- **Needs Assessment:** Documented how interactive displays would benefit subjects like Mathematics Analysis and Physics HL through dynamic visual plotting and diagram annotations.
- **Infrastructure Audits:** Collaborated with school IT teams to evaluate network bandwidth, room layouts, and hardware compatibility.
- **Faculty Onboarding:** Helped organize simple peer training sessions to make sure teachers felt confident using the new software tools from day one.

> Upgrading technology across an institution requires bridging the gap between hardware capabilities and daily classroom routines.
`,
    date: "2024-07-10",
    readTime: "5 min read",
    tags: ["Leadership", "EdTech", "Infrastructure"],
    platform: "Personal Blog",
    cover: "/articles/code.svg",
  },
  {
    slug: "sound-editing-and-audio-mastering-with-adobe-audition",
    title: "Audio Precision: Fine-Tuning Soundscapes in Adobe Audition",
    excerpt:
      "Techniques and workflows from taking 2nd Place in the IPSC Sound Editing Event using Adobe Audition for audio and video alignment.",
    content: `## The Mechanics of Sound Engineering

At the IPSC Sound Editing competition, participants were tasked with taking raw, noisy audio clips, sound effects, and video tracks and editing them into a cohesive, high-quality audio-visual product.

Audio editing requires a sharp ear for timing, frequency separation, and narrative pacing.

### Audio Production Techniques

- **Spectral Noise Reduction:** Isolating background hums and ambient static without distorting human speech frequencies.
- **Multi-Track Alignment:** Syncing sound effects accurately with visual frame markers down to the millisecond.
- **Dynamic Range Equalization:** Balancing dialog levels, ambient background soundscapes, and musical scores using compression and EQ filters.

> Mastering digital sound tools deepens your appreciation for media processing, signal flow, and precise timing.
`,
    date: "2024-05-04",
    readTime: "4 min read",
    tags: ["Audio", "AdobeAudition", "Multimedia"],
    platform: "Personal Blog",
    cover: "/articles/audio.svg",
  },
  {
    slug: "from-igcse-cs-to-ibdp-computer-science-hl",
    title: "Transitioning From IGCSE CS to IBDP Computer Science HL",
    excerpt:
      "Navigating the academic leap from IGCSE Computer Science fundamentals to the advanced theoretical concepts of IBDP Computer Science HL.",
    content: `## Deepening Academic Fundamentals

Scoring an A in IGCSE Computer Science built a solid foundation in basic logic, pseudo-code, and hardware concepts. However, moving into IBDP Computer Science HL shifted the focus toward abstract data structures, object-oriented design, resource management, and control systems.

Balancing rigorous IB coursework across High-Level Math Analysis, Physics, and CS required a disciplined study routine.

### Academic Highlights

- **Abstract Data Structures:** Moving beyond simple arrays to master linked lists, stacks, queues, and binary trees.
- **System Architecture:** Analyzing central processing unit cycles, memory allocation, and interrupt handling at a low level.
- **Exam Preparation:** Developing systematic problem-solving habits that helped me achieve a 7 in Computer Science HL and win the Headmaster's Cup.

> Theoretical computer science provides the mathematical backbone that makes learning new production frameworks easy.
`,
    date: "2024-03-18",
    readTime: "5 min read",
    tags: ["Academics", "IBDP", "ComputerScience"],
    platform: "Personal Blog",
    cover: "/articles/code.svg",
  },
  {
    slug: "editing-the-nizam-40-pages-of-editorial-design",
    title: "Designing 'The Nizam': 40 Pages of Student Journalism",
    excerpt:
      "Serving as Editor-in-Chief of our house magazine, leading editorial pipelines, layout design in Adobe InDesign, and publication delivery.",
    content: `## Print Design and Editorial Rigor

As Editor-in-Chief of *The Nizam*, I directed the production of a 40-page house publication. Overseeing a print publication requires managing every stage of production—from initial article commissioning to final print pre-flight checks.

We worked extensively in Adobe InDesign and Photoshop to produce a visual layout that complemented our student essays and photography.

### Editorial Workflow

1. **Content Strategy:** Planning section themes, assigning research topics, and setting strict writing deadlines.
2. **Grid-Based Typography:** Establishing consistent multi-column grids, typographic hierarchies, and margin standards in Adobe InDesign.
3. **Pre-Press Quality Control:** Proofreading multiple draft revisions to eliminate layout flaws and printing errors before final press delivery.

> Managing editorial projects sharpens your eye for typographical structure, layout consistency, and publication schedules.
`,
    date: "2024-01-22",
    readTime: "5 min read",
    tags: ["Design", "Editorial", "InDesign"],
    platform: "Personal Blog",
    cover: "/articles/design.svg",
  },
  {
    slug: "physics-fights-debating-original-scientific-research",
    title: "Defending Scientific Research in Physics Fights",
    excerpt:
      "Leading our school team to 1st Place in the Alpha Physics Fight, presenting original experimental work and debating physics models.",
    content: `## Physics as an Active Debate

Scientific research isn't just about running experiments in a lab; it is about defending your mathematical models against critical scrutiny. Leading our team to victory in the Physics Fight Event at Alpha meant presenting original experimental findings and defending our assumptions against opposing teams.

Physics Fights consist of three rounds—Qualifiers, Semi-Finals, and Finals—where teams act as Reporters, Opponents, and Reviewers.

### Core Defense Skills

- **Experimental Rigor:** Backing up theoretical predictions with empirical lab data and clear error calculations.
- **Real-Time Analysis:** Spotting flaws in an opponent's mathematical derivations during live 10-minute presentation rounds.
- **Grounded Defense:** Defending physical approximations calmly under direct questioning from expert judge panels.

> Scientific debate teaches you to evaluate claims critically, identify edge cases, and articulate complex technical ideas clearly.
`,
    date: "2023-12-08",
    readTime: "5 min read",
    tags: ["Physics", "Research", "Debate"],
    platform: "Personal Blog",
    cover: "/articles/science.svg",
  },
  {
    slug: "prompt-engineering-and-generative-art-with-comfyui",
    title: "Advanced Prompt Engineering and Generative Pipelines in ComfyUI",
    excerpt:
      "Winning the Prompt Engineering Challenge at the Tech Conclave by constructing node-based visual pipelines in ComfyUI.",
    content: `## Node-Based Image Synthesis

Generative AI models have evolved far beyond simple text prompts. Winning the 'Prompt Engineering' event at the Technology Conclave required building node-based image generation workflows using ComfyUI.

ComfyUI allows you to construct precise image synthesis pipelines by connecting model checkpoints, clip text encoders, sampling nodes, and control nets visually.

### Pipeline Highlights

- **ControlNet Precision:** Directing visual composition using edge maps and depth poses rather than relying solely on text descriptions.
- **Node Optimization:** Fine-tuning sampling steps, noise schedulers, and prompt weighting to generate high-resolution outputs reliably.
- **Iterative Workflows:** Structuring repeatable visual generation workflows that yield consistent artistic outputs across varying prompt inputs.

> Treating generative AI as a node-based pipeline turns art generation into a structured engineering process.
`,
    date: "2023-10-25",
    readTime: "4 min read",
    tags: ["AI", "ComfyUI", "PromptEngineering"],
    platform: "Personal Blog",
    cover: "/articles/comfyui-pipelines.png",
  },
  {
    slug: "lessons-from-the-dipankar-sen-science-quiz",
    title: "Science Generalism: Taking 2nd in the Dipankar Sen Science Quiz",
    excerpt:
      "Competing against 100+ students across Physics, Chemistry, and Biology, and why cross-disciplinary knowledge builds better engineers.",
    content: `## Cross-Disciplinary Problem Solving

Placing 2nd out of 100+ participants in the Dipankar Sen Science Quiz was a great test of broad scientific literacy. The competition covered advanced topics across Physics, Chemistry, and Biology.

Modern engineering rarely stays neatly inside a single discipline. Robotics requires mechanics and circuit physics; biological platforms require understanding chemical reactions; web tools require mathematical logic.

### Why Broad Science Literacy Matters

- **Physics:** Forms the foundation for hardware mechanics, circuit analysis, and spatial modeling.
- **Chemistry:** Builds an understanding of material properties, battery chemistry, and environmental sensors.
- **Mathematics:** Provides the common analytical language connecting data structures, algorithms, and physical models.

> Broad scientific knowledge allows you to draw creative connections between fields that initially seem unrelated.
`,
    date: "2023-09-12",
    readTime: "4 min read",
    tags: ["Science", "Academics", "Physics"],
    platform: "Personal Blog",
    cover: "/articles/science.svg",
  },
  {
    slug: "tutoring-mathematics-and-english-in-dehradun",
    title: "Year-Long Academic Tutoring for Underprivileged Students",
    excerpt:
      "Reflections on spending over a year providing free weekly tutoring in Mathematics and English, helping a student prepare for school exams.",
    content: `## The Responsibility of Mentorship

For over a year, I provided free weekly academic tutoring to a student from an underprivileged background in Dehradun. Our focus was strengthening foundational concepts in Mathematics and English to prepare him for critical school examinations.

Teaching concepts like algebraic simplification or sentence structure requires endless patience and creative explanations.

### Lessons from Tutoring

- **Patience over Pacing:** Real comprehension matters far more than rushing through exam syllabi.
- **Breaking Down Complexity:** Explaining mathematical principles using clear, real-world analogies makes abstract rules feel concrete.
- **Building Confidence:** Academic growth happens when a student learns to approach unfamiliar problems without fear.

> Education is most powerful when it builds personal confidence and opens up long-term opportunities.
`,
    date: "2023-08-05",
    readTime: "4 min read",
    tags: ["SocialService", "Tutoring", "Community"],
    platform: "Personal Blog",
    cover: "/articles/reflection.svg",
  },
  {
    slug: "trekking-the-himalayas-from-chopta-to-pangarchulla",
    title: "Trekking the Himalayas: Lessons From Pangarchulla Peak (4,620m)",
    excerpt:
      "How high-altitude expeditions across Chopta, Nag Tibba, Har Ki Doon, and Pangarchulla built physical endurance and mental resilience.",
    content: `## Scaling Mountains and Mental Limits

Trekking across the Himalayas has been a central part of my school life—moving progressively from Chopta (2,800m) and Nag Tibba (3,200m) in my junior years to Har ki Doon (3,500m), Mukta Top (3,608m), and finally Pangarchulla Peak (4,620m).

Pushing through steep snow slopes at sub-zero temperatures with low oxygen levels tests mental grit far more than physical strength.

### Mountain Reflections

1. **Pacing is Everything:** Trying to rush up a steep ridge exhausts you quickly; a steady, deliberate pace gets you to the summit safely.
2. **Preparation & Gear:** Survival and success at high altitudes depend entirely on proper preparation, gear checks, and team safety protocols.
3. **Perspective:** Looking out from a 4,600-meter summit puts daily academic stresses and technical bugs into clear perspective.

> Mountains teach you humility, resilience, and the power of taking one disciplined step at a time.
`,
    date: "2023-06-28",
    readTime: "5 min read",
    tags: ["Trekking", "Himalayas", "Personal"],
    platform: "Personal Blog",
    cover: "/articles/mountain.svg",
  },
  {
    slug: "community-infrastructure-expedition-in-almora",
    title: "Infrastructure Work in Almora: A 6-Day Service Expedition",
    excerpt:
      "Constructing village roads and boundary walls for an underprivileged school in Almora to improve local connectivity and safety.",
    content: `## Hands-On Community Work

During a 6-day social service expedition to a remote village in Almora, Uttarakhand, our student team worked alongside local residents to build infrastructure for an underprivileged school.

Our goal was constructing concrete boundary walls and clear road pathways to protect the school grounds and make the village route safer for children.

### Field Realities

- **Manual Labor:** Carrying materials, mixing concrete, and laying stone foundations under harsh weather builds genuine respect for manual craftsmanship.
- **Local Connectivity:** Improving physical school access directly boosted daily student attendance in the village.
- **Teamwork Under Constraint:** Working with limited physical tools required clear task distribution and team coordination.

> True community service means working shoulder-to-shoulder with communities to build lasting physical utility.
`,
    date: "2023-05-14",
    readTime: "4 min read",
    tags: ["SocialService", "Almora", "Community"],
    platform: "Personal Blog",
    cover: "/articles/infrastructure.svg",
  },
  {
    slug: "competing-in-the-international-informatics-olympiad",
    title: "Algorithmic Thinking at the International Informatics Olympiad",
    excerpt:
      "Ranking 5th in the state and 81st in the North Zone: how practicing competitive programming sharpens core logic.",
    content: `## Algorithmic Precision

Competing in the International Informatics Olympiad pushed me to optimize logic for execution speed and memory efficiency. Ranking 5th in the state and 81st in the North Zone validated months of practicing algorithm design.

Informatics problems demand that your solutions handle complex constraints within strict time and memory limits.

### Problem-Solving Frameworks

- **Time Complexity:** Designing algorithms that run in $O(n \log n)$ or $O(n)$ time rather than naive $O(n^2)$ solutions.
- **Edge Case Analysis:** Testing logic against zero values, boundary limits, and unexpected inputs before submission.
- **Data Structure Selection:** Choosing the exact right data structures—hash maps, trees, or graphs—to make searching and processing fast.

> Competitive programming trains your mind to break complex problems into mathematically sound steps.
`,
    date: "2023-04-02",
    readTime: "4 min read",
    tags: ["Informatics", "Algorithms", "Competitions"],
    platform: "Personal Blog",
    cover: "/articles/algorithm.svg",
  },
  {
    slug: "running-for-a-cause-the-terry-fox-run",
    title: "Resilience on and off the Track: The Terry Fox Run",
    excerpt:
      "Participating in community drives to raise awareness and support for cancer research through the annual Terry Fox Run.",
    content: `## Running for Purpose

Participating in the annual Terry Fox Run across multiple school years brought our community together to support global cancer research initiatives.

The event honors Terry Fox’s legacy of determination, showing how athletic endurance can bring people together around a shared cause.

### Core Takeaways

- **Shared Purpose:** Running alongside classmates, faculty, and local residents creates a powerful sense of community solidarity.
- **Persistence:** Terry Fox’s story is the ultimate reminder that meaningful goals require sustained effort over time.
- **Community Outreach:** Combining athletic events with fundraising drives is a proven way to raise money for critical medical research.

> Purpose gives endurance its true meaning, whether on a running track or in public service.
`,
    date: "2023-03-10",
    readTime: "3 min read",
    tags: ["SocialService", "Running", "Community"],
    platform: "Personal Blog",
    cover: "/articles/sports.svg",
  },
  {
    slug: "model-united-nations-from-delegate-to-committee-director",
    title: "Model United Nations: From Delegate to Committee Director",
    excerpt:
      "Winning Best Delegate at MCGSMUN and serving as Deputy Chair (UNODC) and Committee Director (IPC) at DSMUN.",
    content: `## Diplomacy, Research, and Moderation

My journey in Model United Nations spans both sides of the committee dais: competing as a delegate in the International Press Committee (IPC) at MCGSMUN (where I earned the Best Delegate Award) and serving as Deputy Chair for UNODC and Committee Director at DSMUN.

Directing a committee demands neutral leadership, deep policy comprehension, and strict parliamentary procedure.

### Leadership Lessons

- **Diplomatic Negotiation:** Guiding delegates through tense bloc debates requires active listening and structured moderation.
- **In-Depth Research:** Drafting comprehensive background guides on international drug policies and crime mandates demands rigorous academic research.
- **Clear Evaluation:** Assessing delegate performances objectively based on debate quality, policy accuracy, and resolution drafting.

> MUN sharpens your debate, research, and diplomatic leadership skills—qualities essential for managing tech teams and public projects.
`,
    date: "2023-02-18",
    readTime: "5 min read",
    tags: ["MUN", "Leadership", "PublicSpeaking"],
    platform: "Personal Blog",
    cover: "/articles/network.svg",
  },
  {
    slug: "hello-world-starting-my-tech-blog-in-9th-grade",
    title: "Hello World: Starting My Tech Journey in 9th Grade",
    excerpt:
      "Why I decided to start documenting my coding projects, academic milestones, and extra-curricular initiatives publicly.",
    content: `## Welcome to My Journal!

I am starting this blog to publicly document my journey through high school—tracking my projects in computer science, science competitions, editorial roles, and community service.

Documenting your work forces you to reflect on your mistakes, celebrate progress, and keep technical documentation clean.

### What I Plan to Share

- **Software Projects:** Technical walk-throughs of applications, hardware setups, and web tools I build.
- **Academic Milestones:** Notes and reflections on IGCSE, IBDP, and scientific research.
- **Leadership & Service:** Experiences leading school publications, sports teams, and social initiatives.

Thanks for joining me as I document my work!
`,
    date: "2023-01-15",
    readTime: "2 min read",
    tags: ["General", "Welcome", "Personal"],
    platform: "Personal Blog",
    cover: "/articles/start.svg",
  },
];