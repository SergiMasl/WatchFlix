package com.rev.watchFlix.restservice;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class GreetingController {
    private String movies= "[\n" +
            "    {\n" +
            "       \"title\": \"Coldplay - Adventure Of A Lifetime (Official Video)\",\n" +
            "       \"year\": \"2015\",\n" +
            "       \"isKids\": false,\n" +
            "       \"views\": \"\",\n" +
            "       \"descripshins\": \"Since forming at university in London, Coldplay have gone on to become one of the planet’s most popular acts, selling more than 100 million copies of their eight Number One albums, which have spawned a string of hits including Yellow, Clocks, Fix You, Paradise, Viva La Vida, A Sky Full Of Stars, Hymn For The Weekend, Adventure Of A Lifetime, Orphans and, most recently, Higher Power.\",\n" +
            "       \"URL\": \"https://www.youtube.com/embed/QtXby3twMmI\",\n" +
            "       \"category\": \"history\"\n" +
            "    },\n" +
            "    {\n" +
            "       \"title\": \"The History of the World: Every Year\",\n" +
            "       \"year\": \"10/15/2016\",\n" +
            "       \"isKids\": false,\n" +
            "       \"views\": \"\",\n" +
            "       \"descripshins\": \"Since 200,000 BCE, humanity has spread around globe and enacted huge change upon the planet. This video shows every year of that story, right from the beginning.\",\n" +
            "       \"URL\": \"https://www.youtube.com/embed/-6Wu0Q7x5D0\",\n" +
            "       \"category\": \"history\"\n" +
            "    },\n" +
            "    {\n" +
            "      \"title\": \"History of the World In one movie 2016 HD documentary\",\n" +
            "       \"year\": \"09/18/2016\",\n" +
            "       \"isKids\": false,\n" +
            "       \"views\": \"\",\n" +
            "       \"descripshins\": \"As farming developed, grain agriculture became more sophisticated and prompted a division of labour to store food between growing seasons. Labour divisions then led to the rise of a leisured upper class and the development of cities. The growing complexity of human societies necessitated systems of writing and accounting. Many cities developed on the banks of lakes and rivers; as early as 3000 BCE some of the first prominent, well-developed settlements had arisen in Mesopotamia (The Land between the Rivers), on the banks of Egypt's Nile River, in the Indus River valley, and along the major rivers of China.\",\n" +
            "      \"URL\": \"https://www.youtube.com/embed/BsDFQ0kFiLk\",\n" +
            "      \"category\": \"history\"\n" +
            "   },\n" +
            "   {\n" +
            "      \"title\": \"Timeline of World History | Major Time Periods & Ages\",\n" +
            "      \"year\": \"05/08/2020\",\n" +
            "      \"isKids\": false,\n" +
            "      \"views\": \"\",\n" +
            "      \"descripshins\": \"Lots of comments about my placement of Egypt, so let me respond: Geographically, Egypt is in Africa. However, culturally and genetically, Ancient Egypt was much more a part of the Middle East. Sure, it had interaction with Kush but it had far more interaction with the Levant, Anatolia, and Mesopotamia. I therefore felt it was better to place Egypt next to these civilizations. In the video, I summarized the horizontal sections (which are not actually labeled at all on the physical poster) as the Americas, Africa, Europe, Asia & the Pacific but it would have been more accurate to describe them as the Americas, Sub Saharan Africa, Europe, the Middle East, Asia, the Pacific.\",\n" +
            "      \"URL\": \"https://www.youtube.com/embed/__BaaMfiD0Q\",\n" +
            "      \"category\": \"history\"\n" +
            "   },\n" +
            "   {\n" +
            "      \"title\": \"World War One\",\n" +
            "      \"year\": \"07/01/2021\",\n" +
            "      \"isKids\": false,\n" +
            "      \"views\": \"\",\n" +
            "      \"descripshins\": \"All 5 parts of Epic History TV's history of World War One in one place (re-edited in 2021). From the Schlieffen Plan to the Versailles Treaty, a global history of the entire conflict.\",\n" +
            "      \"URL\": \"https://www.youtube.com/embed/GG0LY8OLBG\",\n" +
            "      \"category\": \"history\"\n" +
            "   },\n" +
            "   {\n" +
            "      \"title\": \"The Whole History of the Earth and Life\",\n" +
            "      \"year\": \"07/07/2019\",\n" +
            "      \"isKids\": false,\n" +
            "      \"views\": \"\",\n" +
            "      \"descripshins\": \"\",\n" +
            "      \"URL\": \"https://www.youtube.com/embed/NQ4CUw9RcuA\",\n" +
            "      \"category\": \"history\"\n" +
            "   },\n" +
            "   {\n" +
            "       \"title\": \"Scream 2022\",\n" +
            "       \"year\": \"10/12/2021\",\n" +
            "       \"isKids\": false,\n" +
            "       \"views\": \"\",\n" +
            "       \"descripshins\": \"Do you like scary movies? Watch the NEW trailer for #ScreamMovie, only in theatres January 14, 2022.\",\n" +
            "       \"URL\": \"https://www.youtube.com/embed/beToTslH17s\",\n" +
            "       \"category\": \"horror\"\n" +
            "    },\n" +
            "    {\n" +
            "      \"title\": \"No Exit | Official Trailer | 20th Century Studios\",\n" +
            "      \"year\": \"02/01/2022\",\n" +
            "      \"isKids\": false,\n" +
            "      \"views\": \"\",\n" +
            "      \"descripshins\": \"In “No Exit,” Havana Rose Liu (“Mayday”) makes her feature film leading role debut as Darby, a young woman en route to a family emergency who is stranded by a blizzard and forced to find shelter at a highway rest area with a group of strangers. When she stumbles across an abducted girl in a van in the parking lot, it sets her on a terrifying life-or-death struggle to discover who among them is the kidnapper. Directed by Damien Power (“Killing Ground”) from a screenplay by Andrew Barrer & Gabriel Ferrari (“Ant-Man and the Wasp”) based on Taylor Adams’ 2017 novel and produced by PGA Award winner Scott Frank (“The Queen’s Gambit”), the film stars Havana Rose Liu, Danny Ramirez (“The Falcon and the Winter Soldier,” “Top Gun: Maverick”), David Rysdahl (“Nine Days”), Dale Dickey (“Winter’s Bone), Mila Harris (“Young Dylan”) and Dennis Haysbert (“Breakthrough”).\",\n" +
            "      \"URL\": \"https://www.youtube.com/embed/GFvupyiNEz0\",\n" +
            "      \"category\": \"horror\"\n" +
            "   },\n" +
            "   {\n" +
            "      \"title\": \"Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids\",\n" +
            "      \"year\": \"10/20/2021\",\n" +
            "      \"isKids\": true,\n" +
            "      \"views\": \"\",\n" +
            "      \"descripshins\": \"Did you know that there are only 25 classic Tom & Jerry episodes that were displayed in a widescreen CinemaScope from the 1950s? Enjoy a compilation filled with some of the best moments from these full screen episodes! \",\n" +
            "      \"URL\": \"https://www.youtube.com/embed/t0Q2otsqC4I\",\n" +
            "      \"category\": \"cartoon\"\n" +
            "   },\n" +
            "   {\n" +
            "      \"title\": \"Oggy a škodíci\",\n" +
            "      \"year\": \"03/02/2021\",\n" +
            "      \"isKids\": true,\n" +
            "      \"views\": \"\",\n" +
            "      \"descripshins\": \"\",\n" +
            "      \"URL\": \"https://www.youtube.com/embed/Rg8Hpw4Jtjk\",\n" +
            "      \"category\": \"cartoon\"\n" +
            "   },\n" +
            "   {\n" +
            "      \"title\": \"Looney Tunes | Newly Remastered Restored Cartoons Compilation | Bugs Bunny | Daffy Duck | Porky Pig\",\n" +
            "      \"year\": \"06/19/2020\",\n" +
            "      \"isKids\": true,\n" +
            "      \"views\": \"\",\n" +
            "      \"descripshins\": \"This Classic Remastered and Restored Looney Tunes Compilation features over 5 hours of Bugs Bunny, Daffy Duck, Porky Pig & More from the golden-era of cartoon shorts. These Newly remastered & restored by 8thManDVD Cartoon Classics! Studios in 1080p.\",\n" +
            "      \"URL\": \"https://www.youtube.com/embed/4wEO_JuON9E\",\n" +
            "      \"category\": \"cartoon\"\n" +
            "   },\n" +
            "   {\n" +
            "      \"title\": \"Looney Tuesdays | Iconic Characters: Foghorn Leghorn | Looney Tunes | WB Kids\",\n" +
            "      \"year\": \"06/12/2020\",\n" +
            "      \"isKids\": true,\n" +
            "      \"views\": \"\",\n" +
            "      \"descripshins\": \"Although Foghorn Leghorn doesn't appear alongside Bugs and Daffy often, he is still iconic in his own rights, I say I say he's iconic in his own rights!\",\n" +
            "      \"URL\": \"https://www.youtube.com/embed/AQa-TRiUeyI\",\n" +
            "      \"category\": \"cartoon\"\n" +
            "   },\n" +
            "\n" +
            "    {\n" +
            "       \"title\": \"\",\n" +
            "       \"year\": \"2015\",\n" +
            "       \"isKids\": false,\n" +
            "       \"views\": \"\",\n" +
            "       \"descripshins\": \"\",\n" +
            "       \"URL\": \"https://youtu.be/-YTuEpHS3i8\",\n" +
            "       \"category\": \"horror\"\n" +
            "    }\n" +
            " ]";


    @GetMapping("/greeting")
    public Greeting greeting() {
        return new Greeting( String.format(movies));
    }

}