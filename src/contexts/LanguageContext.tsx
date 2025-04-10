
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "english" | "telugu" | "tamil";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (content: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Home page translations
  "Connect Drivers with Empty Trucks": {
    english: "Connect Drivers with Empty Trucks",
    telugu: "ఖాళీ ట్రక్కులతో డ్రైవర్లను కనెక్ట్ చేయండి",
    tamil: "காலி லாரிகளுடன் டிரைவர்களை இணைக்கவும்"
  },
  "Save 50% on transportation costs": {
    english: "Save 50% on transportation costs",
    telugu: "రవాణా ఖర్చులపై 50% ఆదా చేయండి",
    tamil: "போக்குவரத்து செலவில் 50% சேமிக்கவும்"
  },
  "Sign Up as Driver": {
    english: "Sign Up as Driver",
    telugu: "డ్రైవర్‌గా సైన్ అప్ చేయండి",
    tamil: "டிரைவராக பதிவு செய்யவும்"
  },
  "Sign Up as Company": {
    english: "Sign Up as Company",
    telugu: "కంపెనీగా సైన్ అప్ చేయండి",
    tamil: "நிறுவனமாக பதிவு செய்யவும்"
  },
  // About page translations
  "About Miles Worth": {
    english: "About Miles Worth",
    telugu: "మైల్స్ వర్త్ గురించి",
    tamil: "மைல்ஸ் வொர்த் பற்றி"
  },
  "Our Mission": {
    english: "Our Mission",
    telugu: "మా లక్ష్యం",
    tamil: "எங்கள் நோக்கம்"
  },
  "Our Vision": {
    english: "Our Vision",
    telugu: "మా దృష్టి",
    tamil: "எங்கள் பார்வை"
  },
  "Our Story": {
    english: "Our Story",
    telugu: "మా కథ",
    tamil: "எங்கள் கதை"
  },
  // Common translations
  "Log In": {
    english: "Log In",
    telugu: "లాగిన్",
    tamil: "உள்நுழைய"
  },
  "Sign Up": {
    english: "Sign Up",
    telugu: "సైన్ అప్",
    tamil: "பதிவு செய்யவும்"
  },
  "Contact Us": {
    english: "Contact Us",
    telugu: "మమ్మల్ని సంప్రదించండి",
    tamil: "எங்களை தொடர்பு கொள்ளவும்"
  },
  // Navigation translations
  "Home": {
    english: "Home",
    telugu: "హోమ్",
    tamil: "முகப்பு"
  },
  "How It Works": {
    english: "How It Works",
    telugu: "ఇది ఎలా పని చేస్తుంది",
    tamil: "இது எப்படி செயல்படுகிறது"
  },
  "About Us": {
    english: "About Us",
    telugu: "మా గురించి",
    tamil: "எங்களைப் பற்றி"
  },
  "Contact": {
    english: "Contact",
    telugu: "సంప్రదించండి",
    tamil: "தொடர்பு"
  },
  // Hero section translations
  "Save 50% on Shipping, Earn 50% More": {
    english: "Save 50% on Shipping, Earn 50% More",
    telugu: "షిప్పింగ్‌పై 50% ఆదా చేయండి, 50% ఎక్కువ సంపాదించండి",
    tamil: "ஷிப்பிங்கில் 50% சேமித்து, 50% அதிகமாக சம்பாதிக்கவும்"
  },
  "Miles Worth connects drivers with empty trucks to companies needing shipping. Reduce empty miles, increase profits, and lower transportation costs.": {
    english: "Miles Worth connects drivers with empty trucks to companies needing shipping. Reduce empty miles, increase profits, and lower transportation costs.",
    telugu: "మైల్స్ వర్త్ ఖాళీ ట్రక్కులతో డ్రైవర్లను షిప్పింగ్ అవసరమైన కంపెనీలకు కనెక్ట్ చేస్తుంది. ఖాళీ మైళ్లను తగ్గించండి, లాభాలను పెంచండి మరియు రవాణా ఖర్చులను తగ్గించండి.",
    tamil: "மைல்ஸ் வொர்த் காலி லாரிகளுடன் டிரைவர்களை ஷிப்பிங் தேவைப்படும் நிறுவனங்களுடன் இணைக்கிறது. வெற்று மைல்களைக் குறைக்கவும், லாபத்தை அதிகரிக்கவும், போக்குவரத்து செலவுகளைக் குறைக்கவும்."
  },
  "I'm a Driver": {
    english: "I'm a Driver",
    telugu: "నేను డ్రైవర్ని",
    tamil: "நான் ஒரு டிரைவர்"
  },
  "I'm a Company": {
    english: "I'm a Company",
    telugu: "నేను ఒక కంపెనీని",
    tamil: "நான் ஒரு நிறுவனம்"
  },
  "50% Extra Earnings": {
    english: "50% Extra Earnings",
    telugu: "50% అదనపు ఆదాయం",
    tamil: "50% கூடுதல் வருமானம்"
  },
  "For drivers on return trips": {
    english: "For drivers on return trips",
    telugu: "తిరిగి ప్రయాణాలలో డ్రైవర్లకు",
    tamil: "திரும்ப பயணங்களில் டிரைவர்களுக்கு"
  },
  "Quick Matching": {
    english: "Quick Matching",
    telugu: "త్వరిత మ్యాచింగ్",
    tamil: "விரைவான பொருத்தம்"
  },
  "Find loads in minutes": {
    english: "Find loads in minutes",
    telugu: "నిమిషాల్లో లోడ్‌లను కనుగొనండి",
    tamil: "நிமிடங்களில் சுமைகளைக் கண்டறியவும்"
  },
  "Secure Platform": {
    english: "Secure Platform",
    telugu: "సురక్షిత ప్లాట్‌ఫారమ్",
    tamil: "பாதுகாப்பான தளம்"
  },
  "Vetted users & secure payments": {
    english: "Vetted users & secure payments",
    telugu: "పరిశీలించబడిన వినియోగదారులు & సురక్షిత చెల్లింపులు",
    tamil: "சரிபார்க்கப்பட்ட பயனர்கள் & பாதுகாப்பான கட்டணங்கள்"
  },
  // How it works translations
  "How Miles Worth Works": {
    english: "How Miles Worth Works",
    telugu: "మైల్స్ వర్త్ ఎలా పని చేస్తుంది",
    tamil: "மைல்ஸ் வொர்த் எப்படி செயல்படுகிறது"
  },
  "Our platform makes it easy for drivers with empty trucks to find shipments and for companies to save on transportation costs.": {
    english: "Our platform makes it easy for drivers with empty trucks to find shipments and for companies to save on transportation costs.",
    telugu: "మా ప్లాట్‌ఫారమ్ ఖాళీ ట్రక్కులతో డ్రైవర్లు షిప్మెంట్‌లను కనుగొనడానికి మరియు కంపెనీలు రవాణా ఖర్చులను ఆదా చేయడానికి సులభతరం చేస్తుంది.",
    tamil: "எங்கள் தளம் காலி லாரிகளுடன் டிரைவர்கள் ஷிப்மெண்ட்களைக் கண்டறியவும், நிறுவனங்கள் போக்குவரத்து செலவுகளைச் சேமிக்கவும் எளிதாக்குகிறது."
  },
  "For Drivers": {
    english: "For Drivers",
    telugu: "డ్రైవర్ల కోసం",
    tamil: "டிரைவர்களுக்கு"
  },
  "For Companies": {
    english: "For Companies",
    telugu: "కంపెనీల కోసం",
    tamil: "நிறுவனங்களுக்கு"
  },
  "Benefits for Everyone": {
    english: "Benefits for Everyone",
    telugu: "అందరికీ ప్రయోజనాలు",
    tamil: "அனைவருக்கும் நன்மைகள்"
  },
  "Earn 50% extra on empty return trips": {
    english: "Earn 50% extra on empty return trips",
    telugu: "ఖాళీ రిటర్న్ ట్రిప్‌లపై 50% అదనంగా సంపాదించండి",
    tamil: "வெற்று திரும்ப பயணங்களில் 50% கூடுதலாக சம்பாதிக்கவும்"
  },
  "Save up to 50% on transportation costs": {
    english: "Save up to 50% on transportation costs",
    telugu: "రవాణా ఖర్చులపై 50% వరకు ఆదా చేయండి",
    tamil: "போக்குவரத்து செலவில் 50% வரை சேமிக்கவும்"
  },
  // Stats section
  "Our Impact in Numbers": {
    english: "Our Impact in Numbers",
    telugu: "సంఖ్యలలో మా ప్రభావం",
    tamil: "எண்களில் எங்கள் தாக்கம்"
  },
  "Miles Worth is revolutionizing the logistics industry by connecting empty trucks with available shipments.": {
    english: "Miles Worth is revolutionizing the logistics industry by connecting empty trucks with available shipments.",
    telugu: "మైల్స్ వర్త్ ఖాళీ ట్రక్కులను అందుబాటులో ఉన్న షిప్మెంట్‌లతో కనెక్ట్ చేయడం ద్వారా లాజిస్టిక్స్ పరిశ్రమను విప్లవాత్మకంగా మారుస్తోంది.",
    tamil: "மைல்ஸ் வொர்த் காலி லாரிகளை கிடைக்கக்கூடிய ஷிப்மெண்ட்களுடன் இணைப்பதன் மூலம் லாஜிஸ்டிக்ஸ் துறையை புரட்சிகரமாக மாற்றுகிறது."
  },
  "Active Drivers": {
    english: "Active Drivers",
    telugu: "యాక్టివ్ డ్రైవర్లు",
    tamil: "செயலில் உள்ள டிரைவர்கள்"
  },
  "Registered Companies": {
    english: "Registered Companies",
    telugu: "నమోదిత కంపెనీలు",
    tamil: "பதிவுசெய்யப்பட்ட நிறுவனங்கள்"
  },
  "Shipments Completed": {
    english: "Shipments Completed",
    telugu: "పూర్తి చేయబడిన షిప్మెంట్లు",
    tamil: "ஷிப்மெண்ட்கள் முடிக்கப்பட்டன"
  },
  "Saved on Shipping Costs": {
    english: "Saved on Shipping Costs",
    telugu: "షిప్పింగ్ ఖర్చులపై ఆదా",
    tamil: "ஷிப்பிங் செலவில் சேமிப்பு"
  },
  // Testimonials section
  "What Our Users Say": {
    english: "What Our Users Say",
    telugu: "మా వినియోగదారులు ఏమి చెప్పారు",
    tamil: "எங்கள் பயனர்கள் என்ன சொல்கிறார்கள்"
  },
  "Join thousands of satisfied drivers and companies who are already benefiting from Miles Worth.": {
    english: "Join thousands of satisfied drivers and companies who are already benefiting from Miles Worth.",
    telugu: "ఇప్పటికే మైల్స్ వర్త్ ద్వారా లాభం పొందుతున్న వేలాది మంది సంతృప్తి చెందిన డ్రైవర్లు మరియు కంపెనీలలో చేరండి.",
    tamil: "ஏற்கனவே மைல்ஸ் வொர்த்தால் பயனடைந்து வரும் ஆயிரக்கணக்கான திருப்தியடைந்த டிரைவர்கள் மற்றும் நிறுவனங்களுடன் இணையுங்கள்."
  },
  // CTA section
  "Ready to Transform Your Logistics?": {
    english: "Ready to Transform Your Logistics?",
    telugu: "మీ లాజిస్టిక్స్‌ని మార్చడానికి సిద్ధంగా ఉన్నారా?",
    tamil: "உங்கள் லாஜிஸ்டிக்ஸை மாற்ற தயாரா?"
  },
  "Join Miles Worth today and start saving on shipping costs or earning more on your empty return trips.": {
    english: "Join Miles Worth today and start saving on shipping costs or earning more on your empty return trips.",
    telugu: "నేడే మైల్స్ వర్త్‌లో చేరండి మరియు షిప్పింగ్ ఖర్చులపై ఆదా చేయడం లేదా మీ ఖాళీ రిటర్న్ ట్రిప్స్‌లో మరింత సంపాదించడం ప్రారంభించండి.",
    tamil: "இன்றே மைல்ஸ் வொர்த்தில் சேரவும், ஷிப்பிங் செலவுகளைச் சேமிக்கத் தொடங்கவும் அல்லது உங்கள் வெற்று திரும்ப பயணங்களில் அதிகம் சம்பாதிக்கவும்."
  },
  "Drivers": {
    english: "Drivers",
    telugu: "డ్రైవర్లు",
    tamil: "டிரைவர்கள்"
  },
  "Companies": {
    english: "Companies",
    telugu: "కంపెనీలు",
    tamil: "நிறுவனங்கள்"
  },
  "Earn 50% more by filling your empty truck on return trips. Register now to access thousands of available shipments.": {
    english: "Earn 50% more by filling your empty truck on return trips. Register now to access thousands of available shipments.",
    telugu: "రిటర్న్ ట్రిప్స్‌లో మీ ఖాళీ ట్రక్‌ని నింపడం ద్వారా 50% ఎక్కువ సంపాదించండి. వేలాది అందుబాటులో ఉన్న షిప్మెంట్‌లను యాక్సెస్ చేయడానికి ఇప్పుడే నమోదు చేసుకోండి.",
    tamil: "திரும்ப பயணங்களில் உங்கள் காலி லாரியை நிரப்புவதன் மூலம் 50% அதிகமாக சம்பாதிக்கவும். ஆயிரக்கணக்கான கிடைக்கக்கூடிய ஷிப்மெண்ட்களை அணுக இப்போதே பதிவு செய்யுங்கள்."
  },
  "Save up to 50% on transportation costs by utilizing trucks that are already making the journey. No more paying for empty returns.": {
    english: "Save up to 50% on transportation costs by utilizing trucks that are already making the journey. No more paying for empty returns.",
    telugu: "ఇప్పటికే ప్రయాణం చేస్తున్న ట్రక్కులను ఉపయోగించడం ద్వారా రవాణా ఖర్చులపై 50% వరకు ఆదా చేయండి. ఇకపై ఖాళీ రిటర్న్స్‌కు చెల్లించనవసరం లేదు.",
    tamil: "ஏற்கனவே பயணத்தை மேற்கொள்ளும் லாரிகளைப் பயன்படுத்துவதன் மூலம் போக்குவரத்து செலவில் 50% வரை சேமிக்கவும். இனி வெற்று திரும்புதலுக்கு பணம் செலுத்த வேண்டாம்."
  },
  "Already have an account?": {
    english: "Already have an account?",
    telugu: "ఇప్పటికే ఖాతా ఉందా?",
    tamil: "ஏற்கனவே கணக்கு உள்ளதா?"
  },
  "Login here": {
    english: "Login here",
    telugu: "ఇక్కడ లాగిన్ చేయండి",
    tamil: "இங்கே உள்நுழையவும்"
  },
  // Footer translations
  "Quick Links": {
    english: "Quick Links",
    telugu: "త్వరిత లింక్‌లు",
    tamil: "விரைவு இணைப்புகள்"
  },
  "For Users": {
    english: "For Users",
    telugu: "వినియోగదారుల కోసం",
    tamil: "பயனர்களுக்கு"
  },
  "Register as Driver": {
    english: "Register as Driver",
    telugu: "డ్రైవర్‌గా నమోదు చేసుకోండి",
    tamil: "டிரைவராக பதிவு செய்யுங்கள்"
  },
  "Register as Company": {
    english: "Register as Company",
    telugu: "కంపెనీగా నమోదు చేసుకోండి",
    tamil: "நிறுவனமாக பதிவு செய்யுங்கள்"
  },
  "Login": {
    english: "Login",
    telugu: "లాగిన్",
    tamil: "உள்நுழைய"
  },
  "FAQs": {
    english: "FAQs",
    telugu: "తరచుగా అడిగే ప్రశ్నలు",
    tamil: "அடிக்கடி கேட்கப்படும் கேள்விகள்"
  },
  "Support": {
    english: "Support",
    telugu: "మద్దతు",
    tamil: "ஆதரவு"
  },
  "Privacy Policy": {
    english: "Privacy Policy",
    telugu: "గోప్యతా విధానం",
    tamil: "தனியுரிமைக் கொள்கை"
  },
  "Terms of Service": {
    english: "Terms of Service",
    telugu: "సేవా నియమాలు",
    tamil: "சேவை விதிமுறைகள்"
  },
  // About page translations
  "Connecting empty trucks with shipping needs since 2023, revolutionizing the logistics industry one trip at a time.": {
    english: "Connecting empty trucks with shipping needs since 2023, revolutionizing the logistics industry one trip at a time.",
    telugu: "2023 నుండి ఖాళీ ట్రక్కులను షిప్పింగ్ అవసరాలతో కనెక్ట్ చేయడం, ఒక ట్రిప్ వద్ద లాజిస్టిక్స్ పరిశ్రమను విప్లవాత్మకంగా మారుస్తోంది.",
    tamil: "2023 முதல் காலி லாரிகளை ஷிப்பிங் தேவைகளுடன் இணைப்பது, ஒரு நேரத்தில் ஒரு பயணத்தில் லாஜிஸ்டிக்ஸ் துறையை புரட்சிகரமாக மாற்றுகிறது."
  },
  "At Miles Worth, we're on a mission to eliminate empty truck returns by connecting drivers with shipping companies. Our platform helps reduce carbon emissions, saves companies up to 50% on transportation costs, and allows drivers to earn 50% more on return trips.": {
    english: "At Miles Worth, we're on a mission to eliminate empty truck returns by connecting drivers with shipping companies. Our platform helps reduce carbon emissions, saves companies up to 50% on transportation costs, and allows drivers to earn 50% more on return trips.",
    telugu: "మైల్స్ వర్త్ వద్ద, డ్రైవర్లను షిప్పింగ్ కంపెనీలతో కనెక్ట్ చేయడం ద్వారా ఖాళీ ట్రక్ రిటర్న్‌లను తొలగించే లక్ష్యంతో మేము ఉన్నాము. మా ప్లాట్‌ఫారమ్ కార్బన్ ఉద్గారాలను తగ్గించడంలో సహాయపడుతుంది, కంపెనీలకు రవాణా ఖర్చులపై 50% వరకు ఆదా చేస్తుంది మరియు డ్రైవర్లు రిటర్న్ ట్రిప్స్‌లో 50% ఎక్కువ సంపాదించడానికి అనుమతిస్తుంది.",
    tamil: "மைல்ஸ் வொர்த்தில், டிரைவர்களை ஷிப்பிங் நிறுவனங்களுடன் இணைப்பதன் மூலம் வெற்று லாரி திரும்புதலை அகற்றும் பணியில் உள்ளோம். எங்கள் தளம் கார்பன் உமிழ்வைக் குறைக்க உதவுகிறது, நிறுவனங்களுக்கு போக்குவரத்து செலவில் 50% வரை சேமிக்கிறது, மேலும் டிரைவர்கள் திரும்ப பயணங்களில் 50% அதிகமாக சம்பாதிக்க அனுமதிக்கிறது."
  },
  "We envision a future where no truck returns empty, creating a more efficient, sustainable, and profitable logistics ecosystem for everyone involved.": {
    english: "We envision a future where no truck returns empty, creating a more efficient, sustainable, and profitable logistics ecosystem for everyone involved.",
    telugu: "ట్రక్ ఖాళీగా తిరిగి రాని భవిష్యత్తును మేము ఊహిస్తున్నాము, సంబంధిత ప్రతి ఒక్కరికీ మరింత సమర్థవంతమైన, సుస్థిర మరియు లాభదాయకమైన లాజిస్టిక్స్ పర్యావరణ వ్యవస్థను సృష్టిస్తున్నాము.",
    tamil: "எந்த லாரியும் வெறுமையாகத் திரும்பாத எதிர்காலத்தை நாங்கள் கற்பனை செய்கிறோம், சம்பந்தப்பட்ட அனைவருக்கும் மிகவும் திறமையான, நிலையான மற்றும் லாபகரமான லாஜிஸ்டிக்ஸ் சூழலமைப்பை உருவாக்குகிறோம்."
  },
  "Join Us in Revolutionizing Logistics": {
    english: "Join Us in Revolutionizing Logistics",
    telugu: "లాజిస్టిక్స్‌ను విప్లవాత్మకంగా మార్చడంలో మాతో చేరండి",
    tamil: "லாஜிஸ்டிக்ஸை புரட்சிகரமாக மாற்றுவதில் எங்களுடன் இணையுங்கள்"
  },
  "Whether you're a driver looking to maximize your earnings or a company seeking to reduce shipping costs, Miles Worth is here to help you succeed in the modern logistics landscape.": {
    english: "Whether you're a driver looking to maximize your earnings or a company seeking to reduce shipping costs, Miles Worth is here to help you succeed in the modern logistics landscape.",
    telugu: "మీరు మీ ఆదాయాన్ని గరిష్టీకరించాలనుకుంటున్న డ్రైవర్ అయినా లేదా షిప్పింగ్ ఖర్చులను తగ్గించాలనుకుంటున్న కంపెనీ అయినా, ఆధునిక లాజిస్టిక్స్ ల్యాండ్‌స్కేప్‌లో మీరు విజయవంతం కావడానికి మైల్స్ వర్త్ మీకు సహాయం చేయడానికి ఇక్కడ ఉంది.",
    tamil: "நீங்கள் உங்கள் வருவாயை அதிகரிக்க விரும்பும் டிரைவராக இருந்தாலும் அல்லது ஷிப்பிங் செலவுகளைக் குறைக்க விரும்பும் நிறுவனமாக இருந்தாலும், நவீன லாஜிஸ்டிக்ஸ் நிலப்பரப்பில் நீங்கள் வெற்றி பெற உதவ மைல்ஸ் வொர்த் இங்கே உள்ளது."
  },
  // Available orders translations
  "Available Orders": {
    english: "Available Orders",
    telugu: "అందుబాటులో ఉన్న ఆర్డర్‌లు",
    tamil: "கிடைக்கக்கூடிய ஆர்டர்கள்"
  },
  "Browse and accept orders that match your route and vehicle type.": {
    english: "Browse and accept orders that match your route and vehicle type.",
    telugu: "మీ మార్గానికి మరియు వాహన రకానికి సరిపోలే ఆర్డర్‌లను బ్రౌజ్ చేయండి మరియు అంగీకరించండి.",
    tamil: "உங்கள் பாதை மற்றும் வாகன வகைக்கு பொருந்தும் ஆர்டர்களை உலாவி ஏற்றுக்கொள்ளுங்கள்."
  },
  "Order Accepted": {
    english: "Order Accepted",
    telugu: "ఆర్డర్ అంగీకరించబడింది",
    tamil: "ஆர்டர் ஏற்றுக்கொள்ளப்பட்டது"
  },
  "You've accepted order #": {
    english: "You've accepted order #",
    telugu: "మీరు ఆర్డర్ #ని అంగీకరించారు",
    tamil: "நீங்கள் ஆர்டர் #ஐ ஏற்றுக்கொண்டீர்கள்"
  },
  ". Check your deliveries tab.": {
    english: ". Check your deliveries tab.",
    telugu: ". మీ డెలివరీల ట్యాబ్‌ని తనిఖీ చేయండి.",
    tamil: ". உங்கள் டெலிவரிகள் தாவலைச் சரிபார்க்கவும்."
  },
  "No Available Orders": {
    english: "No Available Orders",
    telugu: "అందుబాటులో ఆర్డర్‌లు లేవు",
    tamil: "கிடைக்கக்கூடிய ஆர்டர்கள் இல்லை"
  },
  "There are no available orders at this time. Check back soon for new opportunities.": {
    english: "There are no available orders at this time. Check back soon for new opportunities.",
    telugu: "ప్రస్తుతం అందుబాటులో ఆర్డర్‌లు లేవు. కొత్త అవకాశాల కోసం త్వరలో తిరిగి తనిఖీ చేయండి.",
    tamil: "இந்த நேரத்தில் கிடைக்கக்கூடிய ஆர்டர்கள் இல்லை. புதிய வாய்ப்புகளுக்காக விரைவில் மீண்டும் பார்க்கவும்."
  },
  "Pickup": {
    english: "Pickup",
    telugu: "పికప్",
    tamil: "பிக்கப்"
  },
  "Delivery": {
    english: "Delivery",
    telugu: "డెలివరీ",
    tamil: "டெலிவரி"
  },
  "Payment": {
    english: "Payment",
    telugu: "చెల్లింపు",
    tamil: "கட்டணம்"
  },
  "Due by": {
    english: "Due by",
    telugu: "గడువు",
    tamil: "முடிவடையும் நாள்"
  },
  "Accept Order": {
    english: "Accept Order",
    telugu: "ఆర్డర్‌ని అంగీకరించండి",
    tamil: "ஆர்டரை ஏற்றுக்கொள்ளுங்கள்"
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("english");

  const translate = (content: string): string => {
    if (language === "english") return content;
    
    // Check if we have a translation for this content
    if (translations[content] && translations[content][language]) {
      return translations[content][language];
    }
    
    // If no translation found, return the original content
    return content;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
