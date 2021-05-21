function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:22.2789773, lng: 114.180328},
        zoom: 20,
        mapId: 'f67594aa4cef32ea',
        mapTypeControl: false,
        fullscreenControl:false,
        streetViewControl:false,
      });


      const image =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    
      //[   Name
      //    Lat,Lng
      //    point Icon Url
      //    scaledSize width, height
      //    descrition
      //]

     const airportDescriton =`26/7/2019 - 7.26 Airport sit-in <br><br/>
     The sit-in protest in the arrival hall of the Hong Kong International Airport on 26 July.
     A sit-in, organised in the arrival hall of Hong Kong International Airport by airline industry workers, airport staff, and the Cathay Pacific Flight Attendants' Union, aimed to engage with arriving tourists and raise awareness about the on-going democracy movement. Before the sit-in, the Airport Authority removed some seats to provide more space to the protesters, and marked out areas where loitering was not allowed. Additional security and staff were deployed.
     <br><br/>
     1/9/2019 - 1 September Airport Protest
     An operation was held near the Hong Kong International Airport where the aim was to paralyse the airport by blocking approach roads and crowding the bus terminus in defiance of a court injunction on demonstrations in the airport. It is in response to the clashes between protestors and police on 31 August.
     <br><br/>
     7/9/2019 - 7 September Airport Protest
     Protesters returned to the Airport on 7 September for another "stress test" aimed at paralysing the airport's operations. The MTR shut down most of the stations of the Airport Express line with the exception of Hong Kong station and Airport station. The police stopped buses near Lantau Link Toll Plaza to search the commuters for offensive weapons, resulting in a long queue of buses waiting to enter Lantau Island. A commuter have described the police\’s search as \”disruptive\”. A standoff between the commuters and the police occurred inside Tung Chung station after riot police were found stationing there.`;
     

    const markers=[
        [
            "Hennessy Road, Wan Chai",//0 title
            22.2789773,//1
            114.180328,//2
            image,//3
            31,//4
            31,//5
            `9/6/2019 - 6.9 March<br></br>
            Around midnight, when a permission of protesters expired, police moved in to clear protesters who had planned to stay outside the Central Government Complex until 12 June.[30] Tensions escalated and clashes broke out between protesters and officers at the Legislative Council Complex. Protesters threw bottles and metal barricades at police and pushed barricades while officers responded with pepper spray. Riot police pushed back against the crowd and secured the area, while police on Harcourt Road also pushed protesters back onto the pavements.
            <br></br>
            16/6/2019 - 6.16 March<br></br>
            The march started ahead of time, at 2:30 pm on 16 June, from Victoria Park, Causeway Bay, to the Legislative Council in Admiralty – an approximately 3-kilometre-long (1.9 mi) route. Slogan-chanting protesters were predominantly dressed in black, some wearing white ribbons on their chests in anger at police brutality during the 12 June crackdown. Many protesters started their march from North Point as the police ordered the MTR not to stop at Tin Hau and Causeway Bay during the march. Nearby train stations were swamped with hundreds of thousands pouring into the protest zone; those from the Kowloon side trying to join the protest had to wait up to an hour at a time to board cross-harbour Star Ferry from Tsim Sha Tsui. The size of the crowd forced police to open all the six lanes of Hennessy Road; the masses then also spilled over onto Lockhart Road and Jaffe Road – all three being parallel streets and major thoroughfares in Wan Chai.
            <br></br>
            Protesters making way for an ambulance on Queensway at night.<br></br>
            The procession from Causeway Bay to Admiralty lasted from 3 pm to 11 pm. Marchers left bouquets and slogans on the site in front of Pacific Place where a man had committed suicide on 15 June. At night, protesters blocked Harcourt Road, causing traffic to grind to a halt. Protesters, however, allowed trapped vehicles – mainly franchised buses and emergency vehicles – to pass.
            <br></br>
            Early in the afternoon, Stand News, an independent online news agency, had used big data analysis to predict that there is a 72% chance that 1.44 million would have participated in the protest. The CHRF claimed the final turnout at "almost 2 million plus 1 citizens", which set the record of the largest protest in Hong Kong history. The police said that there were 338,000 marchers on the original route at its peak.`,//6 descri
            "https://i.imgur.com/bv9Ckdg.jpg",//7 image
        ],
        [
            "Prince Edward MTR Station",//0 title
            22.3245384,//1
            114.1683501,//2
            image,//3
            31,//4
            31,//5
            `31/8/2019 - 831 incident<br></br>
             Hong Kong police allegedly indiscriminately attacked passengers while arresting alleged protesters who were returning home via Prince Edward station, on the night of 31 August 2019, after a protest was held that same day.`,//6 descri
            "https://i.imgur.com/lCYilVZ.jpg",//7 image
        ],
        [
            "Hong Kong International Airport",//0 title
            22.3156835,//1
            113.9358267,//2
            image,//3
            31,//4
            31,//5
            airportDescriton,//6 descri
            "https://i.imgur.com/2QwmsBN.jpg",//7 image
        ],
        [
            "The Liaison Office of the Central People's Government in the HKSAR",//0 title
            22.2878228,//1
            114.140005,//2
            image,//3
            31,//4
            31,//5
            `21/7/2019 - Defacing Beijing's Liaison Office<br></br>
            For the first time during the current political turmoil, protesters have taken their anger over the extradition bill saga to Beijing's representatives in the city. After occupying roads in Admiralty and Central, large numbers of protesters wearing black clothes and face masks made their way through Sheung Wan to the liaison office. They stuck banners on the complex's gates, sprayed graffiti, and shouted for liaison office director Wang Zhimin to come out and address them.`,//6 descri
            "https://i.imgur.com/gL64Uvl.jpg",//7 image    
        ],
        [
            "City University of Hong Kong",//0 title
            22.3393674,//1
            114.171263,//2
            image,//3
            31,//4
            31,//5
            `12/11/2019 - Daybreak Action<br></br>
            Protesters outside City University of Hong Kong, who threw objects from the footbridge in an attempt to block the traffic in Kowloon Tong, confronted with police.`,//6 descri
            "https://i.imgur.com/MKZCd7q.jpg",//7 image
        ],
        [
            "Chinese University of Hong Kong",//0 title
            22.4200257,//1
            114.2136134,//2
            image,//3
            31,//4
            31,//5
            `11/11/2019 – 15/11/2019 - Siege of the Chinese University of Hong Kong<br></br>
            As protesters disrupted traffic to facilitate a general strike on 11 November 2019, other protesters inside Chinese University of Hong Kong (CUHK) threw objects onto railway tracks near the University station, to which the Hong Kong Police Force responded by shooting pepper bullets at students and launching volleys of tear gas into the campus. The next day saw various clashes and skirmishes between the two sides, with the police storming into campus to conduct arrests while the protesters, in response, threw petrol bombs. After nightfall, the university's vice-chancellor and president Rocky Tuan arrived to seek mediation with the police, who refused to negotiate. The conflict escalated into widespread protests in various parts of Hong Kong in an attempt to divert the police's attention. At least 70 students were injured.
            <br></br>
            Protesters briefly occupied the university from 13 to 15 November and set up barricades and crafted makeshift weapons inside the university campus. Other university students also barricaded the school after the siege. The majority of the protesters left the campus by 15 November, with some leaving for the Hong Kong Polytechnic University, which was besieged by the police on 17 November.
            <br></br>
            The police received criticism for storming the university campus, though they defended the act, claiming that the campus was a "weapon factory".`,//6 descri
            "https://i.imgur.com/HPPFusq.jpg",//7 image
        ],
        [
            "Harcourt Road, Admiralty",//0 title
            22.279593,//1
            114.1654996,//2
            image,//3
            31,//4
            31,//5
            `9/6/2019 - 6.9 March<br></br>
            Around midnight, when a permission of protesters expired, police moved in to clear protesters who had planned to stay outside the Central Government Complex until 12 June.[30] Tensions escalated and clashes broke out between protesters and officers at the Legislative Council Complex.[25] Protesters threw bottles and metal barricades at police and pushed barricades while officers responded with pepper spray. Riot police pushed back against the crowd and secured the area, while police on Harcourt Road also pushed protesters back onto the pavements.
            <br></br>
            16/6/2019 - 6.16 March<br></br>
            The march started ahead of time, at 2:30 pm on 16 June, from Victoria Park, Causeway Bay, to the Legislative Council in Admiralty – an approximately 3-kilometre-long (1.9 mi) route. Slogan-chanting protesters were predominantly dressed in black, some wearing white ribbons on their chests in anger at police brutality during the 12 June crackdown. Many protesters started their march from North Point as the police ordered the MTR not to stop at Tin Hau and Causeway Bay during the march. Nearby train stations were swamped with hundreds of thousands pouring into the protest zone; those from the Kowloon side trying to join the protest had to wait up to an hour at a time to board cross-harbour Star Ferry from Tsim Sha Tsui. The size of the crowd forced police to open all the six lanes of Hennessy Road; the masses then also spilled over onto Lockhart Road and Jaffe Road – all three being parallel streets and major thoroughfares in Wan Chai.
            <br></br>
            Protesters making way for an ambulance on Queensway at night.<br></br>
            The procession from Causeway Bay to Admiralty lasted from 3 pm to 11 pm. Marchers left bouquets and slogans on the site in front of Pacific Place where a man had committed suicide on 15 June. At night, protesters blocked Harcourt Road, causing traffic to grind to a halt. Protesters, however, allowed trapped vehicles – mainly franchised buses and emergency vehicles – to pass.
            <br></br>
            Early in the afternoon, Stand News, an independent online news agency, had used big data analysis to predict that there is a 72% chance that 1.44 million would have participated in the protest. The CHRF claimed the final turnout at "almost 2 million plus 1 citizens", which set the record of the largest protest in Hong Kong history. The police said that there were 338,000 marchers on the original route at its peak.`,//6 descri
             "https://i.imgur.com/jiEogks.jpg",//7 image
        ],
        [
            "Police Headquarters (Dog HQ)",//0 title
            22.2783788,//1
            114.1686133,//2
            image,//3
            31,//4
            31,//5
            `21/6/2019 - 24/6/2019 - 6.21 6.24 police HQ sieges<br></br>
            At around 11 am, protesters gathered outside government headquarters and quickly blocked the traffic on Harcourt Road. Some of the protesters also marched to Hong Kong Police Headquarters in Wan Chai as Demosistō activist Joshua Wong, who was released from prison only a few days earlier after serving a sentence for his actions in the 2014 protests, urged the crowd to surround the complex. Dozens of protesters also staged a sit-in at the Revenue Tower and Immigration Tower nearby. Another round of blockade occurred three days later, on 24 June.[74] On 26 June, protesters returned to the Revenue Tower to apologise to civil servants for the earlier disruption.`,//6 descri
             "https://i.imgur.com/VmPkYL2.jpg",//7 image
        ],
        [
            "Hung Hom Cross Harbour Tunnel",//0 title
            22.3015813,//1
            114.1802166,//2
            image,//3
            31,//4
            31,//5
            `13/11/2019 - Dagian Action<br></br>
            Large objects have been thrown from a footbridge onto the road leading to the Kowloon entrance of the Cross-Harbour Tunnel in Hung Hom. Three out of five lanes are blocked but traffic is passing through the other two lanes. Meanwhile, on a footbridge connecting Polytechnic University and Hung Hom MTR station, protesters are building barricades outside the station entrance, in an apparent attempt to block the possible approach of police. At night, protesters set the toll gates of the Cross-Harbour Tunnel on fire.`,//6 descri
            "https://i.imgur.com/xTzrcrm.jpg",//7 image
        ],
        [
            "Kowloon Bay Area",
            22.3187644,
            114.2147228,
            image,
            31,
            31,
            `24/8/2019 - 8.24 Kwun Tong anti-surveillance protest<br></br>
            On 24 August, a protest was held in Kwun Tong to oppose the extradition bill, however the primary theme of the march was to resist government installed surveillance equipment. The protest was initially banned by the police, though the ban was lifted after the route of the protest was changed. Thousands of people marched from Tsun Yip Street Playground to the Zero Carbon Building in Kowloon Bay. During the march, protesters expressed concerns about recently installed smart lampposts enabled with facial recognition and video surveillance capabilities. Many worried that the lampposts would be used to further restrict freedom in Hong Kong, as China continues to tighten its grip. During the protest, one of these smart lampposts was knocked down and dismantled.`,
            "https://i.imgur.com/DP7ved5.jpg",
        ],
        [
            "LegCo Complex(Bou Daai)",
            22.2816229,
            114.1662617,
            image,
            31,
            31,
            `12/6/2019 - 6.12 Siege of LegCo<br></br>
            There was a stand-off on Harcourt Road between protesters and the police. Many protesters took shelter in the buildings nearby as more tear gas was fired. As of 6 pm, 22 injured people had been sent to public hospitals. At around 6:20 pm, the Legislative Council Secretariat issued a circular saying Legislative Council President Andrew Leung had called off the meeting. Protesters remained in the streets outside the AIA Tower in Central, Queensway outside Pacific Place shopping mall, and at the junction of Arsenal Street and Hennessy Road in Wan Chai into the night. In Central, private cars were employed to block Connaught Road Central while protesters chanted slogans from the Exchange Square bridge. Protesters defied sustained efforts by police to disperse them after nightfall. By the end of the day, at least 79 protesters and police officers had been treated in hospitals; around 150 tear gas canisters, "several" rounds of rubber bullets, and 20 beanbag shots had been fired during the protest clearance.
            <br></br>
            1/7/2019 – 2/7/2019 - Storming of the Legislative Council Complex<br></br>
            Hundreds of protesters broke through the glass walls and metal doors and entered the building, ransacked and vandalised the interior with anti-government and anti-PRC slogans. It is considered a watershed event in the 2019–2020 Hong Kong protests.[6] Nine days later, on 9 July, the Chief Executive, Carrie Lam, announced that the extradition bill was "dead".
            <br></br>
            The costs to repair the damage was estimated to be around US$5 million.`,
            "https://i.imgur.com/o6wncAW.jpg",
        ],
        [
            "Mong Kok Police Station (Mong Kok Dog House)",
            22.323673,
            114.1685234,
            image,
            31,
            31,
            `2/9/2019 - 3/9/2019 - General strike<br></br>
            Some protesters gathered around police stations on a daily basis in September. The police had arrested at least 2 people in Mong Kok on 2 September and several more the following morning. A protester was injured and arrested by the police after asking the police "where is your conscience?" He was arrested for "disorder in public places."`,
            "https://i.imgur.com/U6EM1Np.jpg",
        ],
        [
            "Sheung Tak Estate, Tseung Kwan O",
            22.3073933,
            114.2578092,
            image,
            31,
            31,
            `8/11/2019 - Death of Chow Tsz-lok<br></br>
        The death of Alex Chow Tsz-lok occurred on 8 November 2019 due to injuries sustained after a fall from the third floor towards the second floor of the Sheung Tak car park in Tseung Kwan O on 4 November. In the moments preceding the fall, Chow was wandering alone inside the building and on a connecting footbridge. During the incident, in the nearby area outside the car park, there was an ongoing confrontation between protesters and the Hong Kong Police Force, but the Coroner's Court inquest found no evidence to suggest that Chow had taken part in the protest at the time.`,
            "https://i.imgur.com/gKpYyw7.jpg"
        ],
        [
            "Tuen Mun Park",
            22.3922207,
            113.973618,
            image,
            31,
            31,
            `6/7/2019 - Reclaim Tuen Mun Park<br></br>
        On 6 July, people marched in a protest organised by the Tuen Mun Park Sanitation Concern Group. The protest aimed at condemning mainland Chinese middle-aged women singers and dancers, also known by the nickname "dai ma" (大媽), which literally translates to "big mothers," and the elderly men who gave these women "donations" for the noise disturbance and annoyances they have caused in Tuen Mun Park. Conflicts between the police and the protesters brew as the police escorted a person who allegedly assaulted the marchers away while using pepper spray on the protesters. The organiser claimed that nearly 10,000 people attended the protest.
        <br></br>
        21/9/2019 - Reclaim Tuen Mun Park<br></br>
        Protesters created roadblocks on Tuen Wui Street during the Reclaim Tuen Mun protest. After a successful appeal, hundreds of protesters marched from San Wo Lane Playground to Tuen Mun government offices to protest against the "singing aunties". It was the second protest in Tuen Mun concerning the same issue. MTR closed the Tuen Mun station and Yuen Long station citing "security concerns". The police displayed warning signs several minutes after the march have begun. The protests soon escalated into conflicts between the protesters and the police. Protesters vandalised the Light Rail stations and burnt the Chinese national flags, while the police arrested both the protesters and some first-aiders.[120] MTR then suspended the Light Rail service, prompting some protesters to retreat via the MacLehose Trail.`,
            "https://i.imgur.com/pnkk10g.jpg"
        ],
        [
            "Hong Kong Polytechnic University",
            22.304214,
            114.1794444,
            image,
            31,
            31,
            `17-29/11/2019 - Siege of Hong Kong Polytechnic University<br></br>
        The siege of the Hong Kong Polytechnic University occurred during the 2019–2020 Hong Kong protests on the campus of the Hong Kong Polytechnic University (PolyU).
        <br></br>
        The event was preceded by a similar conflict at the Chinese University of Hong Kong. It was precipitated by the setting-up of a roadblock at the Cross-Harbour Tunnel, next to the university. Protesters gathered at the university to defend the roadblock from attacks by the Hong Kong Police Force (HKPF). The police shot tear gas and used water cannons to shower the protesters with water containing blue colouring and chemical irritants. The protesters responded by throwing bricks and petrol bombs.
        <br></br>
        Thereafter, the police blocked different campus exits and forbade protesters from leaving. Police tried to drive an armoured vehicle into campus but the vehicle was hit by petrol bombs, forcing it to reverse. The police arrested people who claimed to be first-aid personnel, medical volunteers and reporters.`,
            "https://i.imgur.com/X4AlYqo.jpg"
        ],
        [
            "Yuen Long MTR Station",
            22.4451758,
            114.0327454,
            image,
            31,
            31,
            `21/7/2019 - 721 Yuen Long Terrorist Attack<br></br>
        On the evening of 21 July 2019, during the 2019–2020 Hong Kong protests, a mob attack occurred in Yuen Long, a town in the New Territories. An armed mob of triad members dressed in white indiscriminately attacked civilians on streets with steel rods and rattan canes, before attacking passengers in nearby Yuen Long station including the elderly, children, black-clad protesters, journalists and lawmakers. At least 45 people were injured in the incident, including a pregnant woman. The attack happened following an anti-extradition bill protest earlier that day in Sheung Wan, a district on Hong Kong Island.
        <br></br>
        Despite thousands of reports to the 999 emergency hotline, the police only arrived 39 minutes after the attacks and one minute after the mob had left the station. The police stood idle at a nearby police station and no arrests were made that night. The police force's inaction, as well as mounting evidence of corruption and misconduct by the Hong Kong police, led some citizens to accuse the police of collusion with the mob, failing in their duty to protect the public.
        <br></br>
        In Hong Kong it has been named the 721 incident, after the date of 21 July`,
            "https://i.imgur.com/rssUqar.jpg"
        ],
        [
            "Wong Tai Sin Area",
            22.3413868,114.1921345,
            image,
            31,
            31,
            `3/8/2019 - Wong Tai Sin Protest<br></br>
            After having received multiple shots of tear gas, protesters moved to the police station at Wong Tai Sin, then left via MTR. Riot police followed and arrested several alleged protesters in the Wong Tai Sin station. However, the presence of riot police officers angered nearby residents, who requested police to release those arrested and leave the district. They threw umbrellas and set off fire extinguishers. Shortly after, police officers fired tear gas at residents to disperse the crowd, which then went to protest at the nearby police station and Disciplined Services quarters. Dormitory residents showered residents and protesters with sticks, glass bottles and firecrackers from the building. After multiple shots of tear gas, protesters retreated and occupied Lung Cheung Road, then dispersed after.`,
            "https://i.imgur.com/gaov7ts.jpg"
        ],
        [
            "Victoria Park, Causeway Bay",
            22.2812934,114.1873658,
            image,
            31,
            31,
            `2/11/2019 - Causeway Bay election rally<br></br>
            128 pro-democracy candidates organised election rallies on the central lawn of Victoria Park, although the police had earlier banned rallies at that location. The candidates argued that, according to Chapter 9.11 of the Guidelines on Election-related Activities in respect of the District Council Election, the police would not need to be informed if pre-election meetings consisted of fewer than 50 supporters. In the early afternoon, thousands of people entered Victoria Park. At 3:15 pm, the police declared that the people were participating in an illegal assembly and warned them to leave immediately. Most of the people ignored the police warning, and continued to walk to Victoria Park.

            Subsequently, some protesters built road blocks nearby. In response, the police fired multiple rounds of tear gas into the Park. Tear gas was also fired outside Hong Kong Central Library and Sogo Hong Kong. After that, protesters left Causeway Bay for Tin Hau and Wan Chai. Police used tear gas and water cannon to disperse the crowd in Wan Chai. Some protesters set up road blocks in Wan Chai and vandalised the Queen's Road East branch of state-run Xinhua News Agency.`,
            "https://i.imgur.com/kONLIDI.jpg"
        ],
        [
            "Hong Kong Baptist University",
            22.3391583,114.1815908,
            image,
            31,
            31,
            `12/11/2019 - Daybreak Action
            Protesters outside Hong Kong Baptist University sets road blocks in an attempt to block the traffic in Kowloon Tong, they also confronted with police.`,
            "https://i.imgur.com/BrO2rpF.jpg"
        ],
        [
            "Tin Shui Wai Police Station (Tin Shui Wai Dog House)",
            22.4498985,114.0023216,
            image,
            31,
            31,
           `5/8/2019 - Tin Shui Wai police station protest<br></br>
           Following the arrest of a female protester who had her skirt and underwear torn by police officers during the struggle, eleven gender rights advocacy groups, including Gender and Sexual Justice in Action and the Chinese University's Sex and Gender Concern Group called for a rally outside Tin Shui Wai police station on 5 August to condemn the police over the suspect's mistreatment. Protesters threw eggs at the police while the police used tear gas to disperse the protesters. Legislator Helena Wong condemned the police over the treatment of the protester, calling the arrest "extremely disrespectful of women". Responding to the criticism, Yolanda Yu, senior superintendent said that the protester was "struggling vigorously" and therefore required male police officers to subdue her.`,
            "https://i.imgur.com/lLrnhrH.jpg"
        ],
        [
            "Tai Po Area",
            22.4436635,114.1672508,
            image,
            31,
            31,
            `10/10/2019 - Tai Po Protest<br></br>
        Protestors gather at the street of Tai Po Area building road blocks. The were confronted by police who shoots tear gas and pepper sprays intended to disperse the crowds.`,
            "https://i.imgur.com/hn5y40I.jpg"
        ],
        [
            "Sai Wan Ho MTR Station",
            22.2821334,
            114.2219875,
            image,
            31,
            31,
            `11/11/2019 - Sai Wan Ho Gunshot Incident<br></br>
        A group of protesters had gathered in Sai Wan Ho at the intersection of Shau Kei Wan Road and Tai On Street. While they were trying to block the road, policemen arrived and tried to disperse the crowd. A masked young man wearing a white hoodie shouted at a traffic policeman and lunged at the policeman with a white metal pipe. The traffic policeman pointed a gun at the man's chest and quickly locked him in a choke hold while still holding the gun with the protester attempting to hit the policemen. One armed 21-year-old man in black was shot once after approaching the policeman and swiping at his gun. He fell on the zebra crossing between MTR Exit B and Tai On Building. A third young man, dressed in black, approached and was also shot, once or twice. In total, the traffic policeman fired three live rounds.
        <br></br>
        A man in black fell onto the ground, while another man in black was shot twice when approaching the first wounded man who had tried to steal the gun. The man in white escaped right after the shots were fired. Another policeman arrived in the scene and control the shot young man-in-black. The police officer who opened fire continue to alert with the gun, while another police officer used his baton to warn the bystanders and protesters. After that, some riot police arrived and shot pepper spray at rioters. They also arrested two people. After the man was shot and lost his consciousness, a police officer pulled him up to sit, in an attempt to handcuff him[61] and shook his body, exacerbating the bleeding from his abdomen and dangerously reducing blood supply to his brain. Police and the wide public later defended the officer who had moved the unconscious injured man, stating that the officer had been "unaware of the injury" and that security concerns had played a role.`,
            "https://i.imgur.com/gaov7ts.jpg"
        ],
        [
            "Tsuen Wan Area",
            22.3708605,
            114.1162536,
            image,
            31,
            31,
            `1/10/2019 - Tsuen Wan Gunshot Incident<br></br>
        
        A Hong Kong police officer on Tuesday shot a teenage demonstrator, the first time in months of protests that a live round was fired at a protester. The shooting capped an evening of violent protests, escalating the territory’s political crisis on the same day that the central government staged a huge military parade in Beijing to celebrate 70 years of Communist control.
        <br></br>
        The protesters in Hong Kong hoped to upstage Beijing’s celebrations by holding their own unauthorized marches. Violence quickly broke out, as demonstrators in districts across the city engaged in some of the bloodiest and most sustained clashes since protesters began taking to the streets in early June.
        `,
            "https://i.imgur.com/7KBufwq.jpg"
        ],
        [
            "Tsim Sha Tsui Area",
            22.298764,114.1695652,
            image,
            31,31,
            `11/8/2019 - Medic got shot in the eye <br></br>
        At 5 pm, the police dispersed protesters using tear gas, though some tear gas canisters landed on a pedestrian footbridge nearby, affecting both journalists and residents. Democracy activists moved on and besieged the police station in Tsim Sha Tsui. The police set up a defence line near the Lane Shopper's Boulevard district and fired bean bag rounds that ruptured the right eye of a female protestor.`
            ,"https://i.imgur.com/AOqVfFc.jpg"
        ],
        [
            "Sheung Shui Area",
            22.5046642,114.09253,
            image,
            31,31,
            `13/7/2019 - Reclaim Sheung Shui <br></br>
            On 13 July, a protest was organised in Sheung Shui for opposing mainland Chinese parallel trading, with 30,000 attendees claimed by the organiser. It was largely peaceful for the first two hours.

            However, as it went on, the organiser and protesters refused to follow the authorised route, which had Sheung Shui station as the destination. Instead, they marched on Sheung Shui Plaza, occupied some roads and started clashing with the police who accused them of unlawful assembly, triggering an hours-long standoff which lasted until late night. Hong Kong press watchdogs later complained about police having jostled a handful of journalists.
            
            During the skirmishes, a number of dispensaries were vandalised by the protesters because they were thought to be complicit in the mainland Chinese parallel trading. After the riot police resumed traffic by dispersing the crowd, they chased the crowd onto a footbridge leading to Sheung Shui station, when a young man suddenly attempted to jumped off the footbridge for escape, but was hindered by police from jumping. He was arrested on suspicion of illegal assembly. Legislator Andrew Wan was also hit by a police baton.`
            ,"https://i.imgur.com/hbnAMBL.jpg"
        ],
        [
            "Shatin Area",
            22.3817761,114.1885759,
            image,
            31,31,
            `14/7/2019 - Shatin Protest <br></br>
            After the march, protesters moved to the streets near Sha Tin Jockey Club Swimming Pool. They set up barricades and threw objects including traffic cones and bottles at police at about 5 pm. Shortly afterwards, around 20 officers responded with pepper-spray. During the stand-off, nearby residents tossed down necessities, including water bottles, umbrellas and cling wrap, to support the protesters. At 6 pm, dozens of officers moved closer to the protesters but kept a distance, while warning the crowd to leave with a loudspeaker. Tension rose when a police officer attempted to remove the mask worn by a protester without showing his warrant card.

            As the authorisation according to the Letter of No Objection had expired, protesters moved to the nearby shopping mall, New Town Plaza.[65] At 8:55 pm, police warned the crowd that those who did not leave they would face arrest. Ten minutes later, police raised the red warning flag. At 10 pm, police started using pepper spray on some protesters in the plaza.
            
            While protesters were trying to leave via MTR, riot police blocked the entrance of the train station from inside the mall. Meanwhile, another group of riot police followed behind protesters as they proceeded to the station engaging in a tactic called "kettling – thereby unnecessarily trapping demonstrators" – which sparked reactions from cornered protesters. At the same time, MTR Corporation announced that trains would bypass Sha Tin station. Both protesters and bystanders were trapped inside the plaza until the police started letting people enter the railway station later that night.[66] Fearing that other protesters would not being able to leave, some individuals stopped the train's doors from closing to ensure that all protesters could evacuate.[67] After some chaos, at around 11 pm, MTR announced that the service would gradually resume. Protesters then started to leave via MTR and the police started to disperse.
            
            Lawmaker Jeremy Tam questioned the need for the police to block the entrance to the train station and bring about conflict which could have been avoided. Pro-democracy lawmaker Au Nok-hin, who was there that night, also asked why demonstrators were given no pathway to leave, and called the policing tactics "rubbish." Pro-Beijing lawmakers, on the other hand, claimed demonstrators were perpetrating "organised violent acts" and stated that "no one should insult the police [or] damage their morale." Chief Executive Carrie Lam stated that police "exercised restraint when they were being attacked by those whom I describe as 'rioters'." By the end of the night, at least 22 people had been hospitalised, several in critical and serious condition; and at least 40 arrests had been made.
            `

            ,"https://i.imgur.com/3uQGpxn.jpg"
        ],
        [
            "Hong Kong Design Institude, Tiu Keng Leng", // location
            22.305728,114.2512613, //long, lat,
            image,
            31,31,
            `14/10/2019 - Protest on the Death of Chan Yin-lam <br></br>
            Chan Yin-lam, an avid swimmer and a protester, was declared dead in late September after her corpse was found floating naked in the sea near Yau Tong. Police claimed that after investigations, there had been nothing suspicious about the circumstances of Chan's death, which they considered to be a suicide, though many refused to trust the police. Students from Youth College and Hong Kong Design Institute (HKDI) Tiu King Leng campus gathered to demand the campus management to release the CCTV footage on the evening of 19 September, where Chan was last seen before her death. Campus management only released partial footage, causing disgruntled students to vandalize the glass panels of the campus.

            The Vocational Training Council later released additional CCTV clips after 200 students, amid class suspension, rallied inside the campus to support an online appeal for an indefinite class boycott. However, in a new development to clarify the death, the mother of the student believed her daughter committed suicide.` //description
            ,"https://i.imgur.com/tl1f3zx.jpg" // protest img
        ],
        [
            "Kowloon Mosque, Tsim Sha Tsui", // location
            22.2988544,114.1715754, //long, lat,
            image,
            31,31,
            `14/10/2019 - Kowloon Protest <br></br>
            Following a police ban on a protest applied by the Civil Human Rights Front and the attack on CHRF convenor Jimmy Sham, protesters marched from Tsim Sha Tsui to the West Kowloon station to protest against the government's decision to invoke the emergency law and condemn police brutality. The peaceful protest was led by Figo Chan, the vice-convener of CHRF alongside former lawmakers including Albert Ho and Leung Kwok-hung, though some protesters splintered off to Nathan Road and it soon escalated into confrontations between the protesters and the police. The protesters continued to target MTR stations, Mainland Chinese-funded stores and Best Mart 360, which was accused of having ties to Fujianese triads, and hurled objects and petrol bombs at the police, whereas the police fired numerous tear gas canisters and deployed water cannon trucks. The conflict soon spread to other districts including Mong Kok and Sham Shui Po. Chan claimed that 350,000 people joined the march.

            After Sham was attacked by a group of suspected South Asians, pro-protest members of ethnic minorities showed their solidarity with the protesters by distributing cold water to them at the entrance of Chungking Mansions, while some local protesters guarded the Kowloon Masjid and Islamic Centre, demanding passers-by not to vandalize the mosque out of retaliation. Before the protest, Sham had issued a statement, saying "Let us connect with and protect each other. Do not label anyone by ethnicity in the movement. I believe that everyone who joins this path to democracy are our brothers and sisters, regardless of nationality, language, color and race".
            
            However, the police's clearance action, which saw blue-dyed water being sprayed on the gates of the mosque, led to condemnation from CHRF and the Muslim community in Hong Kong. Volunteers arrived an hour later to help clean the gate, while the police issued a statement saying that the mosque had not been its intended target and apologized to the mosque. Carrie Lam later followed up with an official apology. Former Indian Association of Hong Kong president Mohan Chugani, who was sprayed outside the mosque alongside lawmaker Jeremy Tam and businessman Phillip Khan, refused to accept Lam's apology, while Khan believed that the police intentionally sprayed the mosque and that the act was an "insult to the Islamic religion".` //description
            ,"https://i.imgur.com/K0t0g6g.jpg" // protest img
        ],
        [
            "The Lion Rock", // location
            22.3520998,114.1776896, //long, lat,
            image,
            31,31,
            `23/8/2019 - The Hong Kong Way <br></br>
            The Hong Kong Way was a peaceful political campaign held in Hong Kong on 23 August 2019, the 30th anniversary of the Baltic Way.[3][4] The goal was to draw people's attention to the 2019 anti-extradition bill movement and the protesters' five demands for government accountability and democratic reform. Organisers estimated that 210,000 people participated.[5][6] In the early night time hours, Hongkongers joined hands to create a human chain of 50 kilometres long on both sides of Victoria Harbour, along the three main MTR lines and over the top of Lion Rock, without any disruptions to traffic.[7][8][9][10]

            The action was inspired by the Baltic Way demonstration of 1989,[11] which involved two million people, and contributed to the collapse of Soviet control of the region.` //description
            ,"https://i.imgur.com/CmeTvJP.jpg" // protest img
        ],
        [
            "The Hong Kong Space Museum", // location
            22.2941733,114.1718227, //long, lat,
            image,
            31,31,
            `8/8/2019 - Laser Pointer Protest <br></br>
            Hundreds of people gathered outside Hong Kong's Space Museum on Wednesday night to carry out a protest using laser pointers.

It followed the arrest of a student for possessing what police called an "offensive weapon" after he was found with several of the devices.` //description
            ,"https://i.imgur.com/YahPrjt.jpg" // protest img
        ],
    ]
    

    for(let i =0; i < markers.length; i++){
        const currMarker = markers[i];
        //get  data
        const contentName=currMarker[0];
        const contentDescription=currMarker[6];
        const contentImage= currMarker[7];

        const marker = new google.maps.Marker({
            position:  {lat: currMarker[1], lng:currMarker[2]},
            map,
            title: currMarker[0],
            icon: {
                url:currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4],currMarker[5])
            },
          });
          //infowindow info structure
          const infowindow = new google.maps.InfoWindow({
              content: `<div id="title">${contentName}</div><image id="infoImage" src=${contentImage}/><br></br><div id="description">${contentDescription} </div>`,
          });
    
          marker.addListener("click", ()=>{
                infowindow.close();
                infowindow.open(map,marker);
              
          })
    }

}