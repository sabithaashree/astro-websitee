function openService(type){
const data = {

marriage: `Marriage is one of the most important milestones in life, and astrology helps in understanding the right timing, compatibility, and future harmony between partners. Through detailed horoscope analysis, we examine planetary positions, doshas, and kundli matching to ensure a stable and successful married life. Guidance is also provided for delays in marriage, love or arranged marriage, and remedies to overcome obstacles.

திருமணம் வாழ்க்கையின் மிக முக்கியமான கட்டமாகும். ஜோதிடத்தின் மூலம் சரியான திருமண நேரம், பொருத்தம் மற்றும் தம்பதியரின் எதிர்கால இணக்கம் ஆகியவற்றை அறிந்து கொள்ளலாம். ஜாதகத்தில் உள்ள கிரக நிலைகள், தோஷங்கள் மற்றும் ஜாதக பொருத்தம் ஆய்வு செய்யப்பட்டு நல்ல மற்றும் நிலையான திருமண வாழ்க்கைக்கான வழிகாட்டல் வழங்கப்படுகிறது. திருமண தாமதம், காதல் திருமணம் அல்லது ஏற்பாடு செய்யப்பட்ட திருமணம் போன்ற விஷயங்களுக்கும் பரிகாரங்கள் வழங்கப்படுகின்றன.`,

health: `Astrology provides insights into your physical and mental well-being by analyzing planetary influences in your birth chart. It helps identify potential health issues, periods of weakness, and overall vitality. Preventive guidance, lifestyle suggestions, and remedies like mantras and spiritual practices are recommended to maintain balance and improve health.

ஜோதிடம் உங்கள் உடல் மற்றும் மனநலத்தைப் பற்றிய முக்கிய தகவல்களை வழங்குகிறது. ஜாதகத்தில் உள்ள கிரகங்களின் தாக்கத்தின் மூலம் உடல்நல பிரச்சனைகள், பலவீனமான காலங்கள் மற்றும் உடல் சக்தி ஆகியவை கணிக்கப்படுகின்றன. இதன் அடிப்படையில் வாழ்க்கை முறை மாற்றங்கள் மற்றும் பரிகாரங்கள் பரிந்துரைக்கப்படுகின்றன.`,

vaasthu: `Vaasthu Shastra focuses on creating a harmonious living environment by balancing natural energies in your home or workplace. By analyzing directions, layout, and energy flow, we suggest corrections that enhance positivity, prosperity, and peace. Proper Vaasthu alignment can improve finances, relationships, and overall well-being.

வாஸ்து சாஸ்திரம் உங்கள் வீடு அல்லது அலுவலகத்தில் இயற்கை சக்திகளை சமநிலைப்படுத்துவதில் கவனம் செலுத்துகிறது. திசைகள், அமைப்பு மற்றும் சக்தி ஓட்டத்தை ஆய்வு செய்து நேர்மறை ஆற்றலை அதிகரிக்கும் திருத்தங்கள் வழங்கப்படுகின்றன. இது பொருளாதார முன்னேற்றம் மற்றும் மன அமைதியை மேம்படுத்த உதவுகிறது.`,

tarot: `Tarot reading is a powerful intuitive tool used to gain clarity about your present situation and future possibilities. Each card carries symbolic meaning and guidance, helping you make informed decisions in career, relationships, and personal growth. It offers direction when you feel uncertain.

டாரோ வாசிப்பு உங்கள் தற்போதைய நிலை மற்றும் எதிர்கால வாய்ப்புகளை தெளிவாக அறிய உதவும் ஒரு சக்திவாய்ந்த முறையாகும். ஒவ்வொரு கார்டும் தனித்துவமான அர்த்தம் மற்றும் வழிகாட்டலை வழங்குகிறது. இது தொழில், உறவுகள் மற்றும் தனிப்பட்ட முன்னேற்றத்தில் சரியான முடிவுகளை எடுக்க உதவுகிறது.`,

vedic: `EVedic astrology is an ancient Indian system that uses planetary positions at birth to predict life events and patterns. It provides deep insights into personality, career, finances, relationships, and spiritual growth. Remedies such as mantras, rituals, and lifestyle changes are suggested to enhance positive outcomes.

வேத ஜோதிடம் என்பது இந்தியாவின் பழமையான ஜோதிட முறையாகும். பிறந்த நேரத்தில் கிரகங்களின் நிலையை அடிப்படையாகக் கொண்டு வாழ்க்கை நிகழ்வுகளை கணிக்கிறது. இது குணநலன், தொழில், பணநிலை மற்றும் உறவுகள் பற்றிய ஆழமான தகவல்களை வழங்குகிறது. மந்திரங்கள் மற்றும் பரிகாரங்கள் மூலம் நல்ல பலன்களை அதிகரிக்க வழிகாட்டுகிறது.`

};


document.getElementById("title").innerText=type;
document.getElementById("desc").innerText=data[type];
document.getElementById("modal").style.display="block";
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

function payNow(){
window.open("https://rzp.io/l/YOUR_LINK","_blank");
}
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
