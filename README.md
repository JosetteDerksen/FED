# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Josette Derksen 

  #### Je startniveau:
  Blauw

  #### Je focus:
  Surface plane
 
</details>





## Je website

<details>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.apple.com/nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Homepagina 
  ![Apple_Homepagine_Mobile 1](https://user-images.githubusercontent.com/70659177/214709650-ddd2682e-0d8c-44cd-b6d6-39d2edfbb2f2.png) 


  #### Screenshot(s) van de tweede pagina (small screen):
  Support
  ![image](https://user-images.githubusercontent.com/70659177/214709511-cfb43c80-e6e8-4299-87b1-444b1f3eef1f.png)


</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  #### Screenreader
  Problemen Windows niveau
  - Je moet al heel veel shortcuts weten voordat je er handig gebruik van kan maken.
  - Zegt heel vaak 'koppeling'.
  - Kan niet typen als de verteller aanstaat.
  
  Goed van Apple
    - Er wordt wel gebruikt gemaakt van kopjes en linkjes. 
   
  Problemen Apple 
 - [x] Er wordt gebruikt gemaakt van heel veel divjes.
 - [x] Weinig onderbouwende tekst in de code zelf zoals een alt-tekst.   
 - [x] Hamburgerbutton wordt voorgelezen als: 'Apple knop global nav open menu'.
 - [ ] Spreekt Engelse woorden heel Nederlands uit waardoor het niet altijd duidelijk is.

Op te lossen door
    -Minder divjes te gebruiken en meer gebruik te maken van de echte elementen.
    - Code betere alt en aria tekst geven.
    - Hamburgermenu een kortere naam geven.
    - < html lang="en" > achter de engelse woorden te zetten.
 

 Sommige punten zitten meer op Windows niveau dan op Apple niveau, zoals de shortcuts, het niet kunnen typen en dat Engelse woorden op een Nederlandse manier worden uitsproken. Op andere punten kan ik wel wat veranderen zoals dat er veel gebruikt wordt gemaakt van divjes inplaats van de juiste elementen en onderbouwende teksten toevoegen die screenreader kunnen voorlezen zodat een blind iemand weet wat er op een afbeelding staat. 

  #### Muis en Toetsenbord 
  Problemen Windows niveau
  - Veel shortcuts maar opzich makkelijk te vinden. 
  
   Goed van Apple
  - Hover over links werkt. Komt een blauwe streep onder te staan. 
  - Muis veranderd in een handje op de klikbare plekken. 
  - Kan door de carousel scrollen met m'n pijltjes toetsen. 

  #### Motoriek (shocks, elastiekjes)
  - Met het trilding om parkinson na te bootsen was het vreselijk moeilijk om te typen. Typt snel dubbele letters. 

  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Goed van Apple
    - Contrast op de rest van de website best goed. Veel gebruik gemaakt van zwart-wit. 

Problemen Apple
 - [x] Hover over navigatie zie je een klein beetje kleur verandering (van grijs naar wit) maar niet genoeg voor als je iets slechter kan zien.
  ![image](https://user-images.githubusercontent.com/70659177/205011242-6a0a51e5-8485-41f9-8622-efea607a96d9.png)
  ![image](https://user-images.githubusercontent.com/70659177/205011278-d259293e-c710-4a4a-94b4-35e239a16a55.png)

  
  Op te lossen door:
  - Betere hover kleur. Streepje onder hover.  

</details>



## Breakdownschets (week 3)

<details>
  <summary>uitwerken na afloop 3e werkgroep</summary>

  ### de hele pagina: 
  Homepagina
  ![Homepagina](https://user-images.githubusercontent.com/70659177/205083254-1c643d2b-e494-4833-bc9c-76afa156828e.png)


  
  Accessoires pagina
  ![Accessoires](https://user-images.githubusercontent.com/70659177/205083282-2471185c-f472-40d5-a97a-b8e9a093182b.png)



</details>





## Voortgang 1 (week 3)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
  Hoewel ik de meeste code alweer was vergeten, helpen de oefeningen erg om het weer een beetje in de vingers te krijgen. Ik heb moeite om elementen zoals grid of flexbox te blijven snappen en de titels/namen (hoe noem je dat?) te onthouden. Bij de breakdownschetsen weet ik niet zeker of ik de juiste elementen op de goede plek heb gezet en in elkaar heb geimplementeerd. 
  Ik ben nog niet begonnen met het coderen van mijn eigen website naarmate we 2 dagen terug pas zijn begonnen met de breakdownschetsen. 
  

  ### Agenda voor meeting
  samen met je groepje opstellen

  | Arsen          | Randy          | Tim    | Josette        |
  | ---            | ---                | ---          | ---              |
  | Semantiek → klopt het dat bepaalde elementen onder secties vallen → zie schetsen.   | Hoe pak je het maken van een submenu aan? | Mag je bij onderstreepte woord een < u > element gebruiken?  | Kloppen mij breakdownschetsen?    |
  | In welke mate en op watvoor manier is het van belang dat wij rekening houden met toegankelijkheid voor gebruikers? | Wanneer is iets een section? | Mag je bij schuingedrukt woord een < em >, < i > element gebruiken? | De website veranderd af en toe, welke versie moet ik dan namaken? |
  | ...            | ...                | Zijn het meerdere klikbare afbeeldingen of radio buttons?         | ...              |


  ### Verslag van meeting

**< title > Startpagina Apple < /title >**
-   Consistent houden. Of eerst de pagina titel en dan de naam of andersom maar dit wel overal hetzelfde.

**Navigatie:**
-   Elementen die buiten het hamburgermenu blijven staan, maar wel bij de navigatie horen, krijgen hun eigen navigatie. Zo kan je het ene menu verbergen onder een button en de ander niet.
    
**Titels**
-   H1 kan op de startpagina ook een logo zijn of verborgen omdat er gewoon geen h1 is. Op de andere pagina’s is meestal wel een duidelijke h1
-   H1 is belangrijk voor google resultaten.
-   H2 moet altijd voor de h3 etc. In de CSS kan de volgorde worden aangepast.

**Img**
-   Als img als decoratie wordt gebruikt moet de alt worden leeg gelaten of de afbeelding moet via css worden ingevoegd.

**Links/buttons**
-   Links gaan naar andere pagina.
-   Buttons blijven op dezelfde pagina, voeren een actie uit. Bijv. hamburger menu in- en uitvouwen is een button.
-   Veel website laten links zien als buttons.
-   Onderscheid is belangrijk voor screenreaders. Zo kan je deze alle linkjes of alle formulieren laten afgaan, maar dan moet wel duidelijk zijn wat wat is.

**Talen**

-   Engelse woorden (of van andere talen) op een Nederlandse site, kun je voorzien van een span en een lang attribute.

</details>



## Voortgang 2 (week 7)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
 Ik kwam een beetje laat op gang, omdat ik niet wist waar ik moest beginnen, maar langzaam komt het bij elkaar. 
  
  ![voortgang2](https://user-images.githubusercontent.com/70659177/207878474-9461497e-d0de-4751-a61d-5472549d9593.png)
  ![image](https://user-images.githubusercontent.com/70659177/207880138-88395fbe-b04b-4fa1-8015-59352acb3c57.png)
  ![image](https://user-images.githubusercontent.com/70659177/207880410-3a019bf7-0bef-45da-a65e-64329138a8e0.png)
  ![image](https://user-images.githubusercontent.com/70659177/207880646-30e46202-3123-4a54-8109-bf82d1ae0f4e.png)
  ![image](https://user-images.githubusercontent.com/70659177/207880882-8af36332-cab5-4655-b522-fe7d8a467bbd.png)
  ![image](https://user-images.githubusercontent.com/70659177/207880924-d4e35c93-7fbc-4e88-878c-a7700808eaa1.png)



  ### Agenda voor meeting
  samen met je groepje opstellen

  | Randy      | Josette          | Arsen    | Tim en Redouane        | 
  | ---            | ---                | ---          | ---              |
  | Hoe kun je het verticaal positioneren van een list-style-image het besten aanpakken?  | Waarom werkt mijn hamburgermenu niet?           | en ik dit    | en dan ik dat    |
  | Hoe verberg je zelfgemaakte semantische kopjes? | Hoe komt het dat alles in mijn header te hoog staat terwijl ik het heb gecentreerd? | nog een punt | dit wil ik zeker |
  | Hoe schrijf je een zin waarin sommige woorden random wel of geen hoofdletters hebben?        | Hoe kan een afbeelding buiten beeld vallen zonder dat het beeld breder wordt?                | ...          | ...              |
  | Als Header, footer gezamenlijke kleur bij general styling plaatsen (DRY) of beter ieder bij eigen selector declareren?          | Kan ik een span gebruiken voor het hamburgermenu?               | ...          | ...              |
  | Hoe kan ik mijn CSS beter indelen?         | Op de Apple website zijn de categorieën in het hamburger menu background afbeeldingen. Kan ik dit beter tekst laten?              | ...          | ...              |
| ...            | Zijn de afbeeldingen decoratief of niet?               | ...          | ...              |
| ...          | Is de footer ook een nav of niet en moeten de uitklapmenu’s werken?             |

  ### Verslag van meeting
  - Javascript moet in de html helemaal onderaan.
  - Je kan meerdere navs hebben op 1 pagina (ook footer).
  - Span als streepjes voor het hamburgermenu mag. 
  - Header: display: flex
		        justify-content: space-between
		        align-items: center. 
  - Tip: HTML character check doen om verschillende karakters te weergeven in de html. Zoals ☺ ♦♣◘○♠♥☻ ect. 


</details>





## Toegankelijkheidstest 2/2 (week 8)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  
  #### Screenreader
 - [x] Veel afbeeldingen zijn 'img' zonder verdere beschrijving zoals het Apple logo. 
 - [x] Hamburgermenu knop is nu gewoon 'knop'.

  Kan opgelost worden door:
  - Alt teksten en aria-labels toe te voegen.


  #### Muis en Toetsenbord 
  
 - [ ] Slaat de 'zoekimg' over. 
 - [ ] Selecteerd ook de rest van de pagina als het hamburgermenu open staat. 

  Kan opgelost worden door: 
  - Volgorde nav aan te passen?

  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  

 - [x] Link kleur is slecht (donker paars).
 - [x] Linkjes staan op afbeeldingen dit maakt het moeilijk te lezen.
 - [x] Knoppen en linkjes hebben nog geen states.

  Kan opgelost worden door:
  - Plaatjes kleiner te maken (vooral op dekstop).
  - Streep onder de linkjes te laten verschijnen als je hovert.
  - Kleur van de linkjes blauw maken.
  - Knoppen en linkjes states geven. 


  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


</details>





## Voortgang 3 (week 7)

<details>
![image](https://user-images.githubusercontent.com/70659177/214709167-9a49b09e-188c-41bd-8d1a-026c6f8c0e88.png) 
![image](https://user-images.githubusercontent.com/70659177/214709404-10f479b0-f9e0-46fd-855f-014b0667de74.png)



  ### Stand van zaken
  Had in de vakantie meer willen doen, maar heb daar de tijd niet voor genomen. Nu voor mijn gevoel het makkelijkste is geweest vind ik het moeilijker om het leuk te vinden. Ik hou van direct resultaat en dat gaat met code vaak niet hahaha... 


  ### Agenda voor meeting

  | Josette      | Tim          | Arsen    | Randy        |
  | ---            | ---                | ---          | ---              |
  | Hoe krijg ik de linkjes “meer informatie” en “koop” naast elkaar?  | Hoe kan ik een video (iframe) responsive maken, maar wel een 16:9 ratio behouden?            |     | Mijn footer is niet meer te zien.    |
  | Waarom komt mijn menu niet over de breedte als ik het scherm groot maak? | Uitleggen hoe radio button in eigen stijl te werk gaat. | nog een punt | dit wil ik zeker |
  | Carousel / slideshow….           | Hoe tekst veranderen wanneer je met je muis (hover) over een radio button heen gaat?               | ...          | ...              |
  | Mijn footer is niet meer te zien           | Kun je de volgorde wijzigen (order) zonder gebruikt te maken van een flex of grid?                | ... 
  | Mag ik de grote animatie vervangen voor wat er nu op de website staat?          | ...                | ...         


  ### Verslag van meeting
  
Placeholder Label
  
![](https://lh4.googleusercontent.com/OWKEYr1DFhwxjwZfG-6ySjgD45UW9vbu8uomEr171l0Y1v9MWq_45A1nocmubFWTTGxYqqIiL-6PTOvxsiQu1unvT9pug7-erzCA-9vHdUxcYr5k1d2R6awKCanhVGTaWiySdV_cyJJmeKE63kBeopKoS3DvQS24qTH33xeB23SdskIlsPAuhOkBAHUO9Q)

search

  
  

-   Enkel alles naast elkaar = flex.
    
-   Enkel alles onder elkaar = grid.

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. https://codepen.io/shooft/pens/public Voornamelijk Sanne's codepens.
  2. https://www.apple.com/nl/ Ik een stukjes code overgenomen (de header blur).
  3. ...

</details>
