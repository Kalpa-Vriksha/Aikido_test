import React, {useState} from "react";
// import Aktualita from "./Aktualita";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";

const AktualityList = () => {
    // items means aktuality
    const [items, setItems] = useState([
        {
            id: 123,
            header: "1) 25.09.2021 - Dětská stáž - Praha Balkán",
            text: "<p>V sobotu 25.9.2021 se <b>v Praze na Balkáně</b> uskuteční 21. soustředění dětských oddílů AKP, viz plakátek s informacemi.</p>"
        },
        {
            id: 123456,
            header: "2) 21.09.21 - První trénink ve školním roce 2021/2022",
            text: "V novém školním roce začínáme cvičit od úterý 21.9.2021. Rozpisy dětských a dospělých tréninků naleznete na úvodní stránce. Informace k zápisu do kroužku jsou zde. Pozor, nově jsme se přestěhovali do větší tělocvičny v prostorách základní školy Tupolevova, Dobratická 525, Praha 9 Letňany. Je to hned vedle autobusové zastávky Dobratická. Vchod je ze hřiště do zadní části budovy, nikoli hlavním vchodem."
        },
        {
            id: 123456789,
            header: "3) 09.09.21 - Ukázka",
            text: "Ve čtvrtek 9.9.2021 od 14:00 do 19:00 budeme mít v rámci akce DDM ukázku Aikido v Parku Přátelství. Přijďte se za námi podívat, popovídat si a vezměte s sebou i své kamarády."
        },
        {
            id: 123,
            header: "4) 02.09.21 - Venkovní cvičení",
            text: "Od čtvrtka 2.9.2021 začínáme neoficiálně cvičit v Parku Přátelství na Proseku za Billou a to každé úterý a čtvrtek od 18:00. Délka tréninku je cca 1 hodina. Venku nepadáme, ale věnujeme se zbraním (tanto, jo, boken). Přijďte se na nás podívat a zacvičit si."
        },
        {
            id: 123456,
            header: "5) 23.08.21 - 29.08.21 - Letní škola - Karlovy Vary",
            text: "V týdnu 23.8. až 29.8.2021 proběhne letní škola ČAA, kterou povedou pan Daniel Vetter, 7. dan, a pan Miroslav Kodym, 6. dan, viz plakátek s informacemi. Další informace k platbám a ubytování zde.  Prosíme zájemce, aby se závazně přihlasili. O dalším vývoji situace vás budeme informovat."
        },
        {
            id: 123456789,
            header: "6) 05.07.21 - 11.07.21 - Mnichovo Hradiště",
            text: "V týdnu 5.7. až 11.7.2021 proběhne 25. setkání aikidistů v Mnichově Hradišti s víkendovou stáží, kterou povede pan Miroslav Kodym, 6. dan. Prosíme zájemce, aby se závazně přihlasili. Školní tělocvičny i hřiště nam budou k dispozici a ubytování v klášteře taktéž, vše jako obvykle. Žádná omezení ze strany organizátorů se nechystají, snad jen množství lidí na pokoje a na společnou noclehárnu. Je ovšem možné, že klášterní Focus bude mít nějaké požadavky nařízené v té době státem. V takovém případě budou příslušná čestná prohlášení k testu, očkování nebo prodělání Covidu jen na vás."
        },
        {
            id: 123,
            header: "7) 01.07.21 - 31.08.21 Tréninky přes prázdniny",
            text: "Přes léto je možnost cvičit na Balkáně v úterý a ve čtvrtek 19:00 - 21:00, viz plakátek s informacemi."
        },
        {
            id: 123456,
            header: "8) 26.06.21 – 27.06.21 - Výroční stáž Ikigai Brno",
            text: "O víkendu 26.6. a 27.6.2021 proběhne v Brně Výroční stáž, kterou povedou nositelé 4. danů, Eliška Svobodová, Jan Hrbáč, Roman Mandura a Otakar Horejš, viz plakátek s informacemi."
        },
        {
            id: 123456789,
            header: "9) 18.06.21 - 20.06.21 - Jizera",
            text: "Čas vodních radovánek je za dveřmi. Pro letošní rok jsme vybrali řeku Jizeru. Vítáni jsou ženy, děti, starci, mladí, vyzrálí i v požehnaném věku, znalci i amatéři, zkrátka každý, kdo má rád vodu, přírodu a hlavně srandu a pohodu, kterou nikde jinde nezažijete, než s pádlem v ruce. Trasa a místa (sjezd po řece): So – Spálov – Malá Skála Ne – Malá Skála – Dolánky Přespání: Pá – Ne – kemp v Ostrov v Malé Skále (nebudeme tedy muset přejíždět nikam autama) Aktivity: Pá – nájezd do kempu So – Dopoledne – Sjezd Jizery (ráno vlakem z Malé Skály do Spálova) So – Odpoledne – Výšlap po okolí (je toho poměrně hodně k vidění, takže ještě doladíme) Ne – Dopoledne – Sjezd Jizery z Malé Skály do DolánekNe – Odpoledne – Koloběžkami se vrátíme z Dolánek do Malé SkálySjezd je vždycky tak na 2-3 h, záleží na stavu vody a také na tom, jak se zasekneme v hospodě.Prosím, dejte nám předběžně vědět, zda pojedete, kolik vás pojede, jaké lodě (další vybavení je součástí) chcete půjčit, zda se zůčastníte i koloběžek a tak podobně."
        },
        {
            id: 123,
            header: "10) 12.06.21 - Cyklovýlet - Tuřice",
            text: "Klub Aikido DDM Prosek pořádá cyklovýlet k Broučkům a zase zpátky. Pokud máte zájem, tak se prosím hlašte na náš email. Trasa bude nenáročná, vesměs po cyklotrasách, místy méně frekventované silnice, celkem cca 60km. Sraz v sobotu 12.6. v 9:00 u stanice metra Letňany."
        },
        {
            id: 123456,
            header: "11) 15.04.21 - Tréninky zbraní",
            text: "Po dlouhé době začínáme cvičit zbraně. Sejdeme se v 18:00 v parku za Billou. Bude-li nám přát počasí a vladní nařízení, budeme pokračovat vždy každé úterý a čtvrtek. Pokud máte, vezměte si zbraně."
        },
        {
            id: 123456789,
            header: "12) 03.12.20 - Cvičení na Balkáně",
            text: "Od čtvrtka 3. prosince lze cvičit v omezeném počtu na Balkáně pondělí až čtvrtek 19:00 - 21:00. Budete-li mít zájem, dejte vědět. Mohli bychom se scházet v parku u Billy na Proseku a jezdit tam společně autem."
        }
    ]);

    const [pageNumber, setpageNumber] = useState(0)
    const itemsPerPage = 5
    const pagesVisited = pageNumber * itemsPerPage

    // items means aktuality
    const displayItems = items
        .slice(pagesVisited, pagesVisited + itemsPerPage)
        .map((aktualita) => {
            return (
                <div>
                <Link className="aktualita_link" to={"/aktuality/"+aktualita.header}><header className="aktualita_header">{aktualita.header}</header></Link>
                <div className="aktualita_text" dangerouslySetInnerHTML={{__html: aktualita.text}}></div>
            </div>
            );
        });

    const pageCount = Math.ceil(items.length / itemsPerPage);

    const changePage = ({selected}) => {
        setpageNumber(selected);
    };

    return (
        <div>
            {displayItems}
            <ReactPaginate
                // previousLabel={"Předchozí"}
                previousLabel={<i className="material-icons">chevron_left</i>}
                nextLabel={<i className="material-icons">chevron_right</i>}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination_buttons"}
                previousLinkClassName={"previous_button"}
                nextLinkClassName={"next_button"}
                disabledClassName={"pagination_disabled"}
                activeClassName={"pagination_active"}
            />
        </div>
    );
};

export default AktualityList;