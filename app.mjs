import svgtofont from "svgtofont";

svgtofont({
  src: "icons",
  dist: "dist",
  fontName: "gameicons",
  css: true,
  startUnicode: 0xea01,
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true,
  },
  website: {
    title: "Game Icons",
    //logo: path.resolve(process.cwd(), "svg", "git.svg"),
    version: "1.0.0",
    meta: {
      description: "Icons from game-icons.net",
      keywords: "svgtofont,TTF,EOT,WOFF,WOFF2,SVG",
    },
    description: `Icons provided under the Creative Commons 3.0 BY or CC0 if mentioned below.`,
    links: [
      {
        title: "game-icons.net",
        url: "https://game-icons.net/",
      },
    ],
    footerInfo: `Icons provided under the Creative Commons 3.0 BY or CC0 if mentioned below.<br>
<br>
Each sub-folders in this archive correspond to a different contributor :<br>

    <ul>
      <li>Lorc, http://lorcblog.blogspot.com<li>
      <li>Delapouite, https://delapouite.com<li>
      <li>John Colburn, http://ninmunanmu.com<li>
      <li>Felbrigg, http://blackdogofdoom.blogspot.co.uk<li>
      <li>John Redman, http://www.uniquedicetowers.com<li>
      <li>Carl Olsen, https://twitter.com/unstoppableCarl<li>
      <li>Sbed, http://opengameart.org/content/95-game-icons<li>
      <li>PriorBlue<li>
      <li>Willdabeast, http://wjbstories.blogspot.com<li>
      <li>Viscious Speed, http://viscious-speed.deviantart.com - CC0<li>
      <li>Lord Berandas, http://berandas.deviantart.com<li>
      <li>Irongamer, http://ecesisllc.wix.com/home<li>
      <li>HeavenlyDog, http://www.gnomosygoblins.blogspot.com<li>
      <li>Lucas<li>
      <li>Faithtoken, http://fungustoken.deviantart.com<li>
      <li>Skoll<li>
      <li>Andy Meneely, http://www.se.rit.edu/~andy/<li>
      <li>Cathelineau<li>
      <li>Kier Heyl<li>
      <li>Aussiesim<li>
      <li>Sparker, http://citizenparker.com<li>
      <li>Zeromancer - CC0<li>
      <li>Rihlsul<li>
      <li>Quoting<li>
      <li>Guard13007, https://guard13007.com<li>
      <li>DarkZaitzev, http://darkzaitzev.deviantart.com<li>
      <li>SpencerDub<li>
      <li>GeneralAce135<li>
      <li>Zajkonur<li>
      <li>Catsu<li>
      <li>Starseeker<li>
      <li>Pepijn Poolman<li>
      <li>Pierre Leducq<li>
      <li>Caro Asercion<li>
</ul>`,
  },
}).then(() => {
  console.log("done!");
});
