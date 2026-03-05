@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:"Poppins",sans-serif;
transition:all 0.3s ease;
}

body{
background:#f0faff;
display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
padding:20px;
}

/* 🌙 Dark Mode */

body.dark{
background:#0f172a;
}

/* Container */

.container{
width:100%;
max-width:900px;
}

/* 🔥 Card */

.card{
background:#ffffff;
border-radius:20px;
padding:40px;
border:2px solid #e0eaff;
position:relative;
animation:cardGlow 3s infinite alternate;
}

@keyframes cardGlow{

0%{
box-shadow:0 0 15px rgba(64,112,244,0.4),
0 0 30px rgba(64,112,244,0.3);
}

100%{
box-shadow:0 0 30px rgba(64,112,244,0.8),
0 0 60px rgba(64,112,244,0.6);
}

}

body.dark .card{
background:#1e293b;
border-color:#334155;
}

/* Top Blue Strip */

.card::before{
content:"";
position:absolute;
top:0;
left:0;
width:100%;
height:8px;
background:#4070f4;
border-radius:20px 20px 0 0;
}

/*  PROFILE IMAGE */

.profile-image{
display:flex;
justify-content:center;
margin-bottom:20px;
}

.profile-image img{
width:170px;
height:170px;
border-radius:50%;
object-fit:cover;
border:4px solid #4070f4;

box-shadow:
0 0 10px #4070f4,
0 0 20px #4070f4,
0 0 40px #4070f4;

animation:neonBlink 2s infinite alternate;
}

@keyframes neonBlink{

0%{
box-shadow:
0 0 10px #4070f4,
0 0 20px #4070f4,
0 0 40px #4070f4;
}

100%{
box-shadow:
0 0 20px #00eaff,
0 0 40px #00eaff,
0 0 70px #00eaff;
}

}

/* Profile */

.profile-section{
text-align:center;
margin-bottom:30px;
}

.profile-section h1{
font-size:32px;
color:#4070f4;
}

body.dark .profile-section h1{
color:#60a5fa;
}

.profile-section h3{
font-weight:400;
color:#2c3e50;
}

body.dark .profile-section h3{
color:#cbd5e1;
}

.tagline{
margin-top:8px;
font-weight:600;
color:#4070f4;
}

/* Sections */

.about-section,
.goals-section,
.skills-section,
.social-section,
.offer-section{
margin-bottom:30px;
}

h2{
color:#4070f4;
margin-bottom:12px;
font-size:22px;
}

body.dark h2{
color:#60a5fa;
}

p{
color:#444;
line-height:1.7;
margin-bottom:10px;
}

body.dark p{
color:#e2e8f0;
}

ul{
padding-left:20px;
}

ul li{
margin-bottom:8px;
color:#333;
}

body.dark ul li{
color:#e2e8f0;
}

/* 🔥 Social Buttons */

.social-buttons{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:15px;
}

.social-btn{
text-align:center;
text-decoration:none;
padding:12px 0;
border-radius:30px;
background:#e6ecff;
color:#4070f4;
font-weight:500;
border:1px solid #cdd8ff;
}

.social-btn:hover{
background:#4070f4;
color:#fff;
transform:translateY(-4px);
}

body.dark .social-btn{
background:#334155;
color:#60a5fa;
border-color:#475569;
}

body.dark .social-btn:hover{
background:#4070f4;
color:#fff;
}

/* CTA Section */

.cta-section{
text-align:center;
margin-top:25px;
}

/* 🔥 Enter TDS Store Button */

.visit-btn{
display:inline-flex;
justify-content:center;
align-items:center;
white-space:nowrap;
min-width:260px;
padding:16px 50px;
background:linear-gradient(135deg,#4070f4,#3056d3);
color:#fff;
text-decoration:none;
font-size:18px;
font-weight:600;
border-radius:40px;
box-shadow:0 10px 25px rgba(64,112,244,0.35);
position:relative;
overflow:hidden;
animation:pulse 2s infinite;
}

.visit-btn:hover{
transform:translateY(-6px) scale(1.05);
box-shadow:0 15px 35px rgba(64,112,244,0.5);
}

/* Shine Effect */

.visit-btn::before{
content:"";
position:absolute;
top:0;
left:-100%;
width:100%;
height:100%;
background:linear-gradient(
120deg,
rgba(255,255,255,0.2) 0%,
rgba(255,255,255,0.7) 50%,
rgba(255,255,255,0.2) 100%
);
transform:skewX(-25deg);
}

.visit-btn:hover::before{
animation:shine 0.8s forwards;
}

@keyframes shine{
100%{
left:200%;
}
}

/* Pulse */

@keyframes pulse{
0%{
box-shadow:0 0 0 0 rgba(64,112,244,0.4);
}

70%{
box-shadow:0 0 0 18px rgba(64,112,244,0);
}

100%{
box-shadow:0 0 0 0 rgba(64,112,244,0);
}
}

/* 🎁 Offer Section */

.offer-text{
text-align:center;
font-weight:600;
color:#e63946;
margin-bottom:10px;
}

body.dark .offer-text{
color:#f87171;
}

.countdown{
text-align:center;
font-size:18px;
font-weight:600;
color:#4070f4;
}

body.dark .countdown{
color:#60a5fa;
}

#timer{
background:#4070f4;
color:#fff;
padding:6px 14px;
border-radius:8px;
margin-left:5px;
font-weight:700;
}.profile-section h3{
font-weight:400;
color:#2c3e50;
}

body.dark .profile-section h3{
color:#cbd5e1;
}

.tagline{
margin-top:8px;
font-weight:600;
color:#4070f4;
}

/* Sections */

.about-section,
.goals-section,
.skills-section,
.social-section,
.offer-section{
margin-bottom:30px;
}

h2{
color:#4070f4;
margin-bottom:12px;
font-size:22px;
}

body.dark h2{
color:#60a5fa;
}

p{
color:#444;
line-height:1.7;
margin-bottom:10px;
}

body.dark p{
color:#e2e8f0;
}

ul{
padding-left:20px;
}

ul li{
margin-bottom:8px;
color:#333;
}

body.dark ul li{
color:#e2e8f0;
}

/* 🔥 Social Buttons */

.social-buttons{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:15px;
}

.social-btn{
text-align:center;
text-decoration:none;
padding:12px 0;
border-radius:30px;
background:#e6ecff;
color:#4070f4;
font-weight:500;
border:1px solid #cdd8ff;
}

.social-btn:hover{
background:#4070f4;
color:#fff;
transform:translateY(-4px);
}

body.dark .social-btn{
background:#334155;
color:#60a5fa;
border-color:#475569;
}

body.dark .social-btn:hover{
background:#4070f4;
color:#fff;
}

/* CTA Section */

.cta-section{
text-align:center;
margin-top:25px;
}

/* 🔥 Enter TDS Store Button */

.visit-btn{
display:inline-flex;
justify-content:center;
align-items:center;
white-space:nowrap;
min-width:260px;
padding:16px 50px;
background:linear-gradient(135deg,#4070f4,#3056d3);
color:#fff;
text-decoration:none;
font-size:18px;
font-weight:600;
border-radius:40px;
box-shadow:0 10px 25px rgba(64,112,244,0.35);
position:relative;
overflow:hidden;
animation:pulse 2s infinite;
}

.visit-btn:hover{
transform:translateY(-6px) scale(1.05);
box-shadow:0 15px 35px rgba(64,112,244,0.5);
}

/* Shine Effect */

.visit-btn::before{
content:"";
position:absolute;
top:0;
left:-100%;
width:100%;
height:100%;
background:linear-gradient(
120deg,
rgba(255,255,255,0.2) 0%,
rgba(255,255,255,0.7) 50%,
rgba(255,255,255,0.2) 100%
);
transform:skewX(-25deg);
}

.visit-btn:hover::before{
animation:shine 0.8s forwards;
}

@keyframes shine{
100%{
left:200%;
}
}

/* Pulse */

@keyframes pulse{
0%{
box-shadow:0 0 0 0 rgba(64,112,244,0.4);
}

70%{
box-shadow:0 0 0 18px rgba(64,112,244,0);
}

100%{
box-shadow:0 0 0 0 rgba(64,112,244,0);
}
}

/* 🎁 Offer Section */

.offer-text{
text-align:center;
font-weight:600;
color:#e63946;
margin-bottom:10px;
}

body.dark .offer-text{
color:#f87171;
}

.countdown{
text-align:center;
font-size:18px;
font-weight:600;
color:#4070f4;
}

body.dark .countdown{
color:#60a5fa;
}

#timer{
background:#4070f4;
color:#fff;
padding:6px 14px;
border-radius:8px;
margin-left:5px;
font-weight:700;
  }
