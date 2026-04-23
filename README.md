I have decided to choose a topich which is a small overview of Singapur because I have been there twice. 

I have asked ChatGBT to write me a code, which creates boxes with an image and a desciption to it. 
Promt: "write a code where there are six pictures. Garden by the bay, parkroyal collection pickering, orchard road, chinatown, sentosa island and marina bay. write a small description to each destination underneath the picture:

body{
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #1975a3b1;
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

header{
    background-color:#00bcd4;
    color:white;
    padding:20px;
    text-align:center;
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
Then I have seached the internet for 6 fitting images. I have created a new folder and pluged the images into Visual studio code. I adjusted the URL of each Image.

After I had adjusted the first page i researched on how to create a href for each picture to create a sub-page when you click on the picture. 
<link rel="stylesheet" href="style.css">
With that I created six different new html, css and js. This was the most difficult part to understand and i had to ask the teacher on how to do it, because even Chatgpt didnt know it. I didnt even know how to ask for it because before i didn't know it was called a href.
This is what Chatgpt gave me as I asked on how to create a new website. 
<a href="newpage.html">
    <img src="image.jpg" alt="Example">
</a> 

I then added a footer and a header so I ould have enough html tags. 
<header>
    <h1>My Website</h1>
</header>

<footer>
    <p>© from Lenya Bützberger 2026</p>
</footer>

Then i was finsihed with my main Website. The design was definitally the most difficult thing to do. I had to ask Chatgpt a lot of things until it was fitting and looked like i wanted. It was hard to explain the right things and then also to choose thi right code. Most Ideas such as the hover effect or the rounded corners were his Ideas. However sometimes I had difficulties adding new things to the now final css. With new added code, somethimes it didn't work anymore becuase of over lapping code and I didnt know why. The first main page also took me the most time because everything was still new and I had to get into the flow. With time I started to understand the different tags and codes and it got easier to navigate through my code.

As I then knew how to create new files, I created a html, a css and a java for each picture. So in total I had 18 new folders to write in. 
I started with the html of each. I always did a step and then applied it to each before moving on. 

I asked Chatgpt to give me an example for an organised list and that ist what he gave me:
<body>

<div class="checklist">
    <h2>Singapore Checklist</h2>
    <ol>
        <li>Visit Gardens by the Bay</li>
        <li>Explore Marina Bay</li>
        <li>Shop on Orchard Road</li>
        <li>Discover Chinatown</li>
        <li>Relax at Sentosa Island</li>
    </ol>
</div>

</body>
  
Then I asked for some style elements to it:
body{
    margin:0;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #00bcd4, #4caf50);
}

/* Center container */
.container{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

/* Checklist card */
.checklist{
    background:white;
    width:320px;
    padding:25px;
    border-radius:15px;
    box-shadow:0px 8px 20px rgba(0,0,0,0.2);
}

/* Title */
.checklist h2{
    text-align:center;
    margin-bottom:20px;
}

/* List */
.checklist ol{
    padding-left:20px;
}

/* Items */
.checklist li{
    background:#f1f1f1;
    margin:12px 0;
    padding:12px;
    border-radius:8px;
    transition: all 0.3s ease;
}

/* Hover effect */
.checklist li:hover{
    background:#e0f7fa;
    transform:translateX(8px);
}

/* Optional: checkmark style */
.checklist li::marker{
    color:#00bcd4;
    font-weight:bold;
}

I applied this to every picture and just copied the text. I adjusted the text within the boxes. I there asked for things to do in each location and also added some of my own. 

Lastly i had to add a java script element for it to be completed. 
First i asked what I could even do what would fit to my Website. he gave me different options, such as a clickable checklist, dark and light mode button, image pop-up, a live clock or an alert. I decided for the first option. 

This was the most challenging out of everything. Because everytime I asked on how to do it, Chatgpt gave me a code for html, even though i repeated I wanted js. it always told me how to write a java script in html, which was not what I wanted. 
It gave me so much wrong code that I was already started to give up. 

Then i asked for a link to a js file:
<script src="script.js"></script>
I added this to my html and now it was linked to my js file in Visual studio code. 

Then finally it gave me a code i could use in Javascript:
// Toggle checklist item
function toggleItem(element, id){
    element.classList.toggle("done");

    // Save state
    if(element.classList.contains("done")){
        localStorage.setItem(id, "true");
    } else {
        localStorage.removeItem(id);
    }
}

// Load saved state when page opens
window.onload = function(){
    const items = document.querySelectorAll(".checklist li");

    items.forEach((item, index) => {
        let id = "item" + (index + 1);

        if(localStorage.getItem(id) === "true"){
            item.classList.add("done");
        }

        // Re-attach click with correct ID
        item.setAttribute("onclick", `toggleItem(this, '${id}')`);
    });
};

I know that it contains Code that I dont fully understand but it was exactly what I wanted 