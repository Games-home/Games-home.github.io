// //inserting header tag in beginning of body tag
// var inserting=document.getElementsByTagName('body')[0];

// // Create a new HTML element in JavaScript here element is header tag with id header 
// var element = document.createElement("header");
// // Set attributes or properties for the element
// element.setAttribute("id", "header");
// // document.body.appendChild(element);
// inserting.insertAdjacentElement('beforebegin',element);
// //inserting header tag content here



// header code inserting here

// export function renderNav() {
    const header = document.getElementById('header');
    
    header.innerHTML=`
        <nav id="navbar">
        <div id="logo">
            <img src="https://raw.githubusercontent.com/Games-home/Games-home.github.io/refs/heads/main/index%20resources/Sumit-Salunkhe-15-08-2024.png" alt="LOGO HERE">
        </div>
        <div id="ul">

            <ul>
                <li class="item"><a href="/index.html">|Home|</a></li>
                <li class="item"><a href="/src/games/games.html">|Games|</a></li>
                <li class="item"><a href="/src/pages/contact/index.html">|Contact Us|</a></li>
                <li class="item"><a href="/src/pages/github-repo/index.html">|Github-repo|</a></li>
            </ul>
        </div>
        </nav> `;
        // Create new link Element
        // let link = document.createElement('link');
 
        // // set the attributes for link element
        // link.rel = 'navstyle';
 
        // link.type = 'text/css';
 
        // link.href = 'navstyle.css';
 
        // Get HTML head element to append
        // link element to it
        // document.getElementsByTagName('head')[0].appendChild(link);

        // document.getElementById("footer").innerHTML=`<div id="footer">
        //     <p>&copy; 2024 Sumit Salunkhe. All rights reserved.</p>
        // </div>`;

// }
    