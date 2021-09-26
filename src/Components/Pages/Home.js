import React from "react";
// import "../../App.css";
import Logo_img from "./Images_aikido/Logo.png";
import Boj_1_img from "./Images_aikido/boj-1.png";
import Boj_2_img from "./Images_aikido/boj-2.png";
import Boj_3_img from "./Images_aikido/boj-3.png";
import Boj_4_img from "./Images_aikido/boj-4.png";
import Boj_5_img from "./Images_aikido/boj-5.png";

function Home() {
  return(
      <div className="content">
          <div className="content_no_title">
              <h1>AIKIDO</h1>
              <p></p>
              <p>Japonská škola vytvořená na základě starých bojových umění vhodná pro muže i ženy, děvčata i chlapce, staré i mladé.</p>
              <p></p>
              <p>Cílem AIKIDO je harmonický rozvoj ducha i těla.</p>
              <img src={Logo_img} alt="Logo_img NOT FOUND" />
              <p><b>Aikido Kenkyukai Praha DDM Prosek</b></p>
              <p></p>
              <p><b>Dům dětí a mládeže Praha 9, Měšická 720, 190 00 Praha 9 - Prosek</b></p>
              <p></p>
              <p>Klub ČESKÉ ASOCIACE AIKIDO (ČAA) mezinárodně uznávané v systému AIKIKAI HOMBU DOJO EAF/IAF Vás zve na své tréninky.</p>

              <p></p>
              <p>Novinky:</p>
              <p></p>
              <p><b>Od 2. žáří cvičíme v Parku Přátelství na Proseku a to každé úterý a čtvrtek od 18:00.</b></p>
              <p><b>Od 21. září začínáme cvičit v tělocvičně ZŠ Tupolevova, Dobratická 525, Praha 9 Letňany.</b></p>
              <p><b>Zápisy na rok 2021/2022 jsou otevřeny, informace zde.</b></p>

              <p></p>
              <p>Pravidelné tréninky vedou:</p>
              <p></p>
              <p>Petr Kubec (3. dan Aikikai)</p>
              <p>Petr Bouček (2. dan Aikikai)</p>
              <p>Pavel Šípek (2. dan Aikikai)</p>
              <p>Jaroslav Lubas (2. dan Aikikai)</p>
              <p>Kateřina Poláková (1. dan Aikikai)</p>

              <p></p>
              <p>Tréninky probíhají v časech:</p>
          
              <img src={Boj_1_img} alt="Boj_1_img NOT FOUND" />
              <img src={Boj_2_img} alt="Boj_2_img NOT FOUND" />
              <img src={Boj_3_img} alt="Boj_3_img NOT FOUND" />
              <img src={Boj_4_img} alt="Boj_4_img NOT FOUND" />
              <img src={Boj_5_img} alt="Boj_5_img NOT FOUND" />

              <p>Zájemce přijímáme v průběhu celého roku. Přihlášky a informace vždy 10 minut před cvičením.</p>
          </div>
      </div>
  );
};

export default Home;