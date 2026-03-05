let duration = 60 * 60;
const timerDisplay = document.getElementById("timer");

function startTimer() {
  let timer = duration;
  
  setInterval(function() {
    let hours = Math.floor(timer / 3600);
    let minutes = Math.floor((timer % 3600) / 60);
    let seconds = timer % 60;
    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    timerDisplay.textContent = hours + ":" + minutes + ":" + seconds;
    
    if (--timer < 0) {
      timerDisplay.textContent = "Expired!";
    }
  }, 1000);
}

startTimer();0 0 40px #00eaff,
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
