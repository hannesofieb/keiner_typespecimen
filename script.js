const buttons = document.querySelectorAll('.language-button');
const genSentence = document.querySelector('.gen-sentence');

document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    const percentageX = x / vw;
    const percentageY = y / vh;

    let fontFamily;
    if (percentageX <= 0.2) {
        fontFamily = 'Keiner-thin';
    } else if (percentageX <= 0.4) {
        fontFamily = 'Keiner-extraLight';
    } else if (percentageX <= 0.5) {
        fontFamily = 'Keiner-light';
    } else if (percentageX <= 0.6) {
        fontFamily = 'Keiner-regular';
    } else if (percentageX <= 0.8) {
        fontFamily = 'Keiner-semiBold';
    } else {
        fontFamily = 'Keiner-bold';
    }

    const minFontSize = 10; // Minimum font size in em
    const maxFontSize = 30; // Maximum font size in em
    const fontSize = minFontSize + (maxFontSize - minFontSize) * (1 - percentageY);

    const h1Element = document.querySelector('#cover h1');
    h1Element.style.fontFamily = fontFamily;
    h1Element.style.fontSize = fontSize + 'em';
});



document.addEventListener("DOMContentLoaded", function() {
    const languageSentences = {
        "afrikaans": "Die hond dra 'n hoed met 'n sambreel.",
        "albanian": "Një peshk fluturon në një biçikletë të verdhë.",
        "asu": "Mchwa alikula kifungua kinywa na chajio.",
        "basque": "Txakur bat pianoan jotzen ari zen esnearekin.",
        "bemba": "Inyama ya nkhumba yalasa m'tundu.",
        "bena": "Mfuko uliojaa nyanya za kijani.",
        "catalan": "Un gat verd menjava gelat de xocolata.",
        "chiga": "Ekyuma kiregi kya okugeza empale.",
        "danish": "En grøn elefant spillede klaver i parken.",
        "dutch": "De blauwe koe zingt een lied met accenten.",
        "english": "The purple monkey drives a lollipop car.",
        "estonian": "Roheline kass mängib klaverit kohviga.",
        "faroese": "Eitt súltutoy epli dansar á borðinum.",
        "filipino": "Ang asul na baka ay kumakanta ng piyano.",
        "finnish": "Vihreä koira soittaa kitaraa järvessä.",
        "french": "Le chien bleu joue du violon avec une girafe.",
        "friulian": "Un mîr a cjante un puem sot dal çiel.",
        "galician": "O gato verde baila unha muñeira.",
        "german": "Der rote Vogel trinkt eine Tasse Tee.",
        "gusii": "Nkobe igoro yagura mbura igana.",
        "hungarian": "A lila nyúl eszik egy sajtos muffint.",
        "icelandic": "Græna höfrungurinn les bók um sólina.",
        "indonesian": "Kucing hijau bermain gitar di pantai.",
        "irish": "An cat glas ag seinm ceoil ar an bpléaráca.",
        "italian": "Un cavallo verde dipinge un quadro blu.",
        "kabuverdianu": "Um cao azul ta kanta na praia.",
        "kalenjin": "Chepkurkur chepyoset kyeben kyoset ak koros.",
        "kinyarwanda": "Imbwa itukura irya inyama z'umweru.",
        "latvian": "Zaļais suns spēlē vijoli ar kaķi.",
        "lithuanian": "Žalias šuo groja smuiku su mėlynu katinu.",
        "low-german": "De gröne Hund speelt mit een Katt op'n Klavier.",
        "lower-sorbian": "Zeleni psě gryjo na harmoniju z myšom.",
        "luo": "Okadhi mari kothe aringe kendo kode.",
        "luxembourgish": "De gréngen Hond spillt Musek mat enger Maus.",
        "luyia": "Ekhokho eravoolera embusi nayo omukhasi.",
        "machame": "Kiboko kibulaya jibu na kinywa kilalu.",
        "makhuwa-meetto": "Namulele wanjambuli akhala na ntanya.",
        "makonde": "Chizi chikulya miunda cha ng'ona.",
        "malagasy": "Alika maintso mandihy amin'ny vorona manga.",
        "malay": "Gajah biru bermain biola di pantai.",
        "manx": "Yn doo glonney t'ad ginnaghey gee smullaght.",
        "morisyen": "Enn lisien ver zwe lamizik ar enn zariko.",
        "north-ndebele": "Inja eluhlaza edla izithelo zamabhola.",
        "norwegian-bokmal": "Jeg så en katt med to glass øl.",
        "norwegian-nynorsk": "Eg såg ein katt med to glas øl.",
        "nyankole": "Enkoko yanjura eijumwa n'ekyamugyira.",
        "oromo": "Harree garbuu mana kuussa fi foon nyaata.",
        "polish": "Zielony pies gra na fortepianie z kotem.",
        "portuguese": "O gato verde toca guitarra com um peixe.",
        "romanian": "Un elefant verde cântă la pian.",
        "romansh": "In chaun verd suna la ghitarra.",
        "rombo": "Ng'ombe nyekundu anacheza na jogoo.",
        "rundi": "Inka y'ibitoke irya imihwi n'ingurube.",
        "rwa": "Mbuzi jekundu anakula machungwa.",
        "samburu": "Nkima naji kata kata lchoo.",
        "sango": "Mburu ya walaba tiso na ndako.",
        "sangu": "N'kuku yebule kwa nyama no nyama.",
        "scottish-gaelic": "Tha cù uaine a' cluich le leabhar bàn.",
        "sena": "Kambwe kamuwa njoka na sitoni.",
        "shambala": "Mbuzi nyekundu inaenda na ndege.",
        "shona": "Imbwa iri kuuya nemota yegoridhe.",
        "slovak": "Zelený pes hrá na husliach s myšou.",
        "slovenian": "Zelena mačka igra violino s psom.",
        "soga": "Akasa kwenyama emba embuzi.",
        "somali": "Eyga cagaaran baa cunto barafuunka.",
        "spanish": "El elefante azul toca la guitarra.",
        "swahili": "Paka kijani anacheza dansi na simba.",
        "swedish": "Den gröna hunden spelar piano i skogen.",
        "swiss-german": "Dr grön Hund spielt Gitarre mit em Muus.",
        "taita": "Ghãmbo jithe na nyamu za thambo.",
        "teso": "Ekito ye itele na njira ekiro.",
        "turkish": "Yeşil kedi bir turşu yiyor.",
        "turkmen": "Ýaşyl it ýorunçak bilen oýnaýar.",
        "upper-sorbian": "Zelene psy hrajónu harmoniku z myšu.",
        "vunjo": "Ng'ombe mwekundu anakula na ndege.",
        "welsh": "Mae ci gwyrdd yn canu gyda mochyn.",
        "western-frisian": "In griene kat boartsje mei in fisk.",
        "zulu": "Inja eluhlaza edla isinkwa esibomvu."
    };

    const buttons = document.querySelectorAll(".language-tag");
    const genSentenceDiv = document.querySelector(".gen-sentence");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const language = this.getAttribute("data-language");
            const sentence = languageSentences[language];
            if (sentence) {
                genSentenceDiv.textContent = sentence;
                genSentenceDiv.style.display = "inline";
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const styleDisplays = document.querySelectorAll('.style-display');

    styleDisplays.forEach(display => {
        const pxSizeElement = display.previousElementSibling;

        // Function to update font size dynamically
        const updateFontSize = () => {
            const computedFontSize = getComputedStyle(display).fontSize;
            pxSizeElement.textContent = parseInt(computedFontSize) + 'px'; // Round and remove decimals
            requestAnimationFrame(updateFontSize); // Continuously update
        };

        // Initial call to start the continuous update
        requestAnimationFrame(updateFontSize);
    });
});

const fontPath = 'Keiner/Keiner-Regular.woff';

opentype.load(fontPath, function(err, font) {
    if (err) {
        console.error('Font could not be loaded: ' + err);
        return;
    }

    const allGlyphsSection = document.querySelector('.all-glyphs');
    const glyphs = font.glyphs.glyphs;

    // Arrays to store categorized glyphs
    const upperCaseGlyphs = [];
    const lowerCaseGlyphs = [];
    const numberGlyphs = [];
    const diacriticUpperCaseGlyphs = [];
    const diacriticLowerCaseGlyphs = [];
    const punctuationGlyphs = [];
    const symbolGlyphs = [];
    const greekGlyphs = [];

    // Regular expressions for categorization
    const upperCaseRegex = /^[A-Z]$/;
    const lowerCaseRegex = /^[a-z]$/;
    const numberRegex = /^[0-9]$/;
    const diacriticUpperCaseRegex = /^[À-ÞĀ-Ŋ]$/;
    const diacriticLowerCaseRegex = /^[ß-ÿā-ŋ]$/;
    const punctuationRegex = /^[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~–—‘’‚“”„†‡•…‰‹›⁄¡¢£¤¥¦§¨©ª«¬­®¯°±´µ¶·¸º»¼½¾¿]$/;
    const symbolRegex = /^[^\w\s]$/;
    const greekRegex = /^[μπ]$/;

    // Categorize glyphs
    for (let key in glyphs) {
        const glyph = glyphs[key];
        if (glyph.unicode !== undefined) {
            const char = String.fromCharCode(glyph.unicode);
            if (upperCaseRegex.test(char)) {
                upperCaseGlyphs.push(glyph);
            } else if (lowerCaseRegex.test(char)) {
                lowerCaseGlyphs.push(glyph);
            } else if (numberRegex.test(char)) {
                numberGlyphs.push(glyph);
            } else if (diacriticUpperCaseRegex.test(char)) {
                diacriticUpperCaseGlyphs.push(glyph);
            } else if (diacriticLowerCaseRegex.test(char)) {
                diacriticLowerCaseGlyphs.push(glyph);
            } else if (punctuationRegex.test(char)) {
                punctuationGlyphs.push(glyph);
            } else if (symbolRegex.test(char)) {
                symbolGlyphs.push(glyph);
            } else if (greekRegex.test(char)) {
                greekGlyphs.push(glyph);
            }
        }
    }

    // Function to sort glyphs by Unicode value
    const sortGlyphsByUnicode = (glyphs) => {
        return glyphs.sort((a, b) => a.unicode - b.unicode);
    };

    // Sort each category
    const sortedUpperCaseGlyphs = sortGlyphsByUnicode(upperCaseGlyphs);
    const sortedLowerCaseGlyphs = sortGlyphsByUnicode(lowerCaseGlyphs);
    const sortedNumberGlyphs = sortGlyphsByUnicode(numberGlyphs);
    const sortedDiacriticUpperCaseGlyphs = sortGlyphsByUnicode(diacriticUpperCaseGlyphs);
    const sortedDiacriticLowerCaseGlyphs = sortGlyphsByUnicode(diacriticLowerCaseGlyphs);
    const sortedPunctuationGlyphs = sortGlyphsByUnicode(punctuationGlyphs);
    const sortedSymbolGlyphs = sortGlyphsByUnicode(symbolGlyphs);
    const sortedGreekGlyphs = sortGlyphsByUnicode(greekGlyphs);

    // Combine sorted categories
    const sortedGlyphList = [
        ...sortedUpperCaseGlyphs,
        ...sortedLowerCaseGlyphs,
        ...sortedNumberGlyphs,
        ...sortedDiacriticUpperCaseGlyphs,
        ...sortedDiacriticLowerCaseGlyphs,
        ...sortedPunctuationGlyphs,
        ...sortedSymbolGlyphs,
        ...sortedGreekGlyphs
    ];

    // Clear previous content in .all-glyphs section
    allGlyphsSection.innerHTML = '';

    // Create and append sorted glyph elements
    sortedGlyphList.forEach(function(glyph) {
        const glyphElement = document.createElement('div');
        glyphElement.textContent = String.fromCharCode(glyph.unicode);
        glyphElement.classList.add('glyph');
        allGlyphsSection.appendChild(glyphElement);
    });
});

document.querySelector('.all-glyphs-btn').addEventListener('click', function() {
    document.querySelector('.all-glyphs').hidden = false;
    document.querySelector('.language-match-glyphs').hidden = true;
});


// Handle glyph selection
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('glyph')) {
        const selectedBox = document.querySelector('.glyph-selected-box');
        selectedBox.innerHTML = ''; // Clear previous content
        selectedBox.hidden = false;

        const glyphElement = document.createElement('div');
        glyphElement.textContent = event.target.textContent;
        selectedBox.appendChild(glyphElement);
    }
});

// When language-button is clicked, that same value will appear in the glyph-language radio button
document.querySelectorAll('.language-tag').forEach(button => {
    button.addEventListener('click', function() {
        const language = this.textContent;
        document.querySelector('.language-active span').textContent = language;
    });
});

// Assuming opentype.js is already loaded and the font is loaded as per your initial setup

opentype.load(fontPath, function(err, font) {
    if (err) {
        console.error('Font could not be loaded: ' + err);
        return;
    }

    // Define language to glyph mapping (simplified example)
    const languageGlyphs = {
        Afrikaans: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞĀāĂăĄąĆćĊċČčĎďĐđĒēĖėĘęĚěĞğĠġĢģĦħĪīĮįİıĲĶķĹĺĻļĽľŁłŃńŅņŇňŊßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŋ",
        Albanian: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÇË",
        // Add entries for all other languages
    };

    const allGlyphsSection = document.querySelector('.all-glyphs');
    const languageMatchGlyphsSection = document.querySelector('.language-match-glyphs');

    document.querySelector('.all-glyphs-btn').addEventListener('click', function() {
        allGlyphsSection.hidden = false;
        languageMatchGlyphsSection.hidden = true;
    });

    document.querySelector('.language-active').addEventListener('click', function() {
        const selectedLanguage = document.querySelector('.language-active .name').textContent;
        const glyphsToDisplay = languageGlyphs[selectedLanguage];
        if (glyphsToDisplay) {
            updateGlyphDisplay(glyphsToDisplay);
            allGlyphsSection.hidden = true;
            languageMatchGlyphsSection.hidden = false;
        }
    });

    function updateGlyphDisplay(glyphs) {
        languageMatchGlyphsSection.innerHTML = ''; // Clear previous glyphs
        glyphs.split('').forEach(glyph => {
            const glyphElement = document.createElement('div');
            glyphElement.textContent = glyph;
            glyphElement.classList.add('glyph');
            languageMatchGlyphsSection.appendChild(glyphElement);
        });
    }
});

