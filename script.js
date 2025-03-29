document.getElementById("header").innerHTML=`<div id="logo">
            <img src="index resources/Sumit-Salunkhe-15-08-2024.png" alt="LOGO HERE">
        </div>
        <div id="ul">

            <ul>
                <li class="item"><a href="index.html">|Home|</a></li>
                <li class="item"><a href="pages/games/games.html">|Games|</a></li>
                <li class="item"><a href="pages/contact/contact.html">|Contact Us|</a></li>
                <li class="item"><a href="pages/github-repo/github-repo.html">|Github-repo|</a></li>
            </ul>
        </div>`;
        // Create new link Element
        let link = document.createElement('link');
 
        // set the attributes for link element
        link.rel = 'navstyle';
 
        link.type = 'text/css';
 
        link.href = 'navstyle.css';
 
        // Get HTML head element to append
        // link element to it
        document.getElementsByTagName('head')[0].appendChild(link);

        document.getElementById("footer").innerHTML=`<div id="footer">
            <p>&copy; 2024 Sumit Salunkhe. All rights reserved.</p>
        </div>`;
    