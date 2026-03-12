Ich habe mich für ein Thema entschieden, und zwar einen kleinen Überblick von Singapr, weil ich dort schon zweimal war. 

Ich habe ChatGBT gefragt, mir einen Code zu schreiben, welcher Felder erstellt um eine Beschreibung und ein Bild einzufügen. 
Promt: "write a code where there are six pictures. Garden by the bay, parkroyal collection pickering, orchard road, chinatown, sentosa island and marina bay. write a small description to each destination underneath the picture"

Result:Here is a simple **HTML example** with **six pictures and a short description under each one**. You just need to replace the image file names with your own images.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Places in Singapore</title>
</head>

<body>

<h1>Famous Places in Singapore</h1>

<h2>Gardens by the Bay</h2>
<img src="gardens-by-the-bay.jpg" alt="Gardens by the Bay" width="300">
<p>Gardens by the Bay is a famous nature park with futuristic trees and beautiful gardens.</p>

<h2>Parkroyal Collection Pickering</h2>
<img src="parkroyal-pickering.jpg" alt="Parkroyal Collection Pickering" width="300">
<p>This hotel is known for its unique green architecture with plants and gardens built into the building.</p>

<h2>Orchard Road</h2>
<img src="orchard-road.jpg" alt="Orchard Road" width="300">
<p>Orchard Road is Singapore’s main shopping street with many malls, restaurants, and luxury stores.</p>

<h2>Chinatown</h2>
<img src="chinatown.jpg" alt="Chinatown Singapore" width="300">
<p>Chinatown is a vibrant area full of culture, temples, markets, and delicious Chinese food.</p>

<h2>Sentosa Island</h2>
<img src="sentosa-island.jpg" alt="Sentosa Island" width="300">
<p>Sentosa Island is a popular place for beaches, theme parks, and many fun activities.</p>

<h2>Marina Bay</h2>
<img src="marina-bay.jpg" alt="Marina Bay Singapore" width="300">
<p>Marina Bay is one of the most famous areas in Singapore, known for its skyline and Marina Bay Sands.</p>

</body>
</html>
```


Er hat mich dann das gefragt und ich habe Ja gesagt:
If you want, I can also show you how to arrange the 6 pictures in a nice 3×2 grid, which makes the website look much more professional.
If you want, I can also show you how to add a cool hover effect (images zoom when you move the mouse over them) — it makes the website look much more professional.


```html id="sgpgrid1"
<!DOCTYPE html>
<html>
<head>
<title>Places in Singapore</title>

<style>

body{
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f5f5f5;
}

h1{
    margin-top: 30px;
}

.grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    padding: 40px;
}

.place{
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
}

.place img{
    width: 100%;
    border-radius: 8px;
    transition: transform 0.3s ease;
}

/* Hover effect */
.place img:hover{
    transform: scale(1.08);
}

h3{
    margin-top: 10px;
}

</style>

</head>

<body>

<h1>Famous Places in Singapore</h1>

<div class="grid">

<div class="place">
<img src="gardens-by-the-bay.jpg" alt="Gardens by the Bay">
<h3>Gardens by the Bay</h3>
<p>A famous nature park with futuristic Supertrees and beautiful gardens.</p>
</div>

<div class="place">
<img src="parkroyal-pickering.jpg" alt="Parkroyal Collection Pickering">
<h3>Parkroyal Collection Pickering</h3>
<p>A unique hotel known for its green architecture with gardens built into the building.</p>
</div>

<div class="place">
<img src="orchard-road.jpg" alt="Orchard Road">
<h3>Orchard Road</h3>
<p>Singapore’s main shopping street with many malls, restaurants and luxury stores.</p>
</div>

<div class="place">
<img src="chinatown.jpg" alt="Chinatown">
<h3>Chinatown</h3>
<p>A vibrant district with temples, markets and amazing Chinese food.</p>
</div>

<div class="place">
<img src="sentosa-island.jpg" alt="Sentosa Island">
<h3>Sentosa Island</h3>
<p>A popular island with beaches, theme parks and many fun activities.</p>
</div>

<div class="place">
<img src="marina-bay.jpg" alt="Marina Bay">
<h3>Marina Bay</h3>
<p>One of Singapore’s most famous areas with its iconic skyline and Marina Bay Sands.</p>
</div>

</div>

</body>
</html>
```



Dann habe ich im Internet nach 6 passenden Bildern gesucht. Ich habe einen neuen Ordener erstellt und diese Bilder dort und im Visual studio eingefügt. 
Ich habe den Url von jedem Bild angepasst. 
