# Testy Testy - MaKey MaKey meets webmaking

Testy Testy is a simple blueprint for making a web interface with [MaKey MaKey](http://www.makeymakey.com/). 

As MaKey MaKey simulates various keystrokes and click events you can interact with the computer. Testy Testy is a simple start for doing something with this. 
The HTML contains sections linked to the keys simulated by MaKey MaKey. When you activate one, the appropriate section is shown, when you release the key (or the cable) it gets hidden. 

    <section id="right" class="reactors">
      <p>Right</p>		
    </section>

You can [try it out by pressing the appropriate keys](http://codepo8.github.com/testy-testy/), too. 

So, if you want to for example connect your MaKey MaKey to a Banana and show a picture of a banana, all you need to do is alter the HTML:

    <section id="right" class="reactors">
      <a href="http://www.flickr.com/photos/robin24/5129712590/" 
         title="Banana - Isolated by robin_24, on Flickr">
        <img 
          src="http://farm5.staticflickr.com/4059/5129712590_98642c5ebf_n.jpg"
          width="320" 
          height="213" 
          alt="Banana - Isolated">
      </a>		
    </section>

Testy Testy is meant to be used in the [Mozilla Webmaker](https://webmaker.org/en-US/) project, introducing people to building things for the web. Simply download the package, connect your MaKey MaKey and open index.html in a browser. You can also open and alter mover.html which moves an image around with the arrow keys and makes it grow and shrink with the space key.


