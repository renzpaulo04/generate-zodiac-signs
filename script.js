function zodiac(){
    var birthmonth = document.getElementById("month").value;
    var birthday = document.getElementById("day").value;
    var names=document.getElementById("name").value;
    var result = "Unknown because you didn't put a valid date.";
    
    if (birthmonth == 1&& birthday >=20 || birthmonth == 2 && birthday
        <=18){
            result = ("Aquarius");
            document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=10%>";
            document.getElementById("characteristic").innerHTML= 
            "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems.Although they can easily adapt to the energy that surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities.";
        } 
        if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
            result = ("Pisces");
            document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=10%>";
           document.getElementById("characteristic").innerHTML="Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back. Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity";
           
         }
        if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
            result = ("Aries");
           document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=10%>";
          document.getElementById("characteristic").innerHTML="As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings. Thanks to its ruling planet Mars and the fact it belongs to the element of Fire (just like Leo and Sagittarius), Aries is one of the most active zodiac signs. It is in their nature to take action, sometimes before they think about it well";
        }
       
         if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
             result = ("Taurus");
            document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=10%>";
            document.getElementById("characteristic").innerHTML="Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction";
           
         }
       
         if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20
          ){
             result = ("Gemini");
            document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=10%>";
           document.getElementById("characteristic").innerHTML="Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see.";
          
         }
       
         if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
             result = ("Cancer");
            document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=10%>";
           document.getElementById("characteristic").innerHTML="Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. Those born with their Sun in Cancer are very loyal and able to empathize with other people's pain and suffering";
           
         }
         if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
             result = ("Leo");
            document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=10%>";
                 document.getElementById("characteristic").innerHTML="Leos are warm spirited. They are full of energy and always eager to jump into action. Leos crave for recognition and admiration. Leos always love to be at the centre of attraction. They strive to reach to the top in whatever they do. Leos always love to be surrounded with large crowd and admirers. However, they are often unkind to criticism and don’t take the words of critics lightly.Leos are very ambitious and choose their acquaintances carefully. They aspire for social recognition.";
           
         }
         if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
             result = ("Virgo");
            document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=10%>";
             document.getElementById("characteristic").innerHTML="Virgos have a keen sense of good and bad and for that they are highly discriminating. They have an intuitive sense to identify wrong motives in people. Hence, Virgos exercise extreme caution in what they do.The virgin defines purity and therefore they are endowed with the ability to distinguish the good from the bad. Hence, Virgos are also cleanliness freaks. Despite their intelligence Virgos often remain confused about the decisions they make in their life. Also, you will not find Virgos teeming with activities.";
         }
         if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
           result = ("Libra");
            document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=10%>";
             document.getElementById("characteristic").innerHTML="People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality. This is someone ready to do nearly anything to avoid conflict, keeping the peace whenever possible";
         }
         if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
            result = ("Scorpio");
            document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=10%>";
             document.getElementById("characteristic").innerHTML="Scorpions are most diverse in nature and therefore present the most interesting study. Scorpios hold grudge and would wait patiently for the right moment to strike. They are not likely to forget any act of betrayal or treachery. For Scorpios what is implied is more fascinating than the obvious.Scorpios are often described as egoists. However, some of the positive traits of Scorpios are- diplomacy, intuition, intelligence, engaging, resolute, spirituality and sensitivity.";
         }
         if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
             result = ("Sagittarius");
            document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=10%>";
             document.getElementById("characteristic").innerHTML="Sagittarians are the incurable optimists. They are always looking at the positive side of a thing. Their optimism can’t be dampened by hardships or negative results.Sagittarians often are outdoor people. They will take interest in all sorts of sports and outdoor activities. They are also adventures in nature. Although they are true to their faults but can also turn completely deaf to criticism and turn down suggestions.";
         }
       
       if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
      
             result = ("Capricorn");
          document.getElementById("photo").innerHTML="<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=10%>";
          document.getElementById("characteristic").innerHTML="Members of this sign has an insatiable desire to climb higher and during this course they can also become selfish and might not hesitate to sacrifice other’s interests in fulfilling their goals.Capricorns may seem risk averse but in reality they carefully plan all their moves ahead and rehearse them to perfection.";

       }else if (birthmonth>12||birthday>31){
            alert("Please enter an accurate date !");
        }
        document.getElementById("output").innerHTML= result;
        document.getElementById("Name").innerHTML = names;
        if (document.getElementById("show").style.display === 'none',
        document.getElementById("hide1").style.display === 'block'){
            document.getElementById("show").style.display = 'block';
            document.getElementById("hide1").style.display = 'none';
        }
        else{
            document.getElementById("show").style.display = 'none';
            document.getElementById("hide1").style.display ='block';
        }
}
