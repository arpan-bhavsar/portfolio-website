import { useState, useEffect } from 'react';
import WindowFrame from './components/WindowFrame';
import ContextMenu from './components/ContextMenu';
import StartMenu from './components/StartMenu';
import MarkdownReader from './components/MarkdownReader';
import PhotosViewer from './components/PhotosViewer';
import TerminalApp from './components/TerminalApp';
import BrowserApp from './components/BrowserApp';
import CalculatorApp from './components/CalculatorApp';
import NotificationToast from './components/NotificationToast';
import QuickSettings from './components/QuickSettings';
import BootScreen from './components/BootScreen';
import DesktopWidget from './components/DesktopWidget';
import Landing3D from './components/landing/Landing3D';
import { Folder, FileText, Monitor, Image, Terminal, Globe, Wifi, Volume2, BatteryCharging, Calculator, X } from 'lucide-react';
import './App.css';

const projects = [
  {
    id: "complaint-management-system",
    folderName: "complaint-management-system",
    title: "Complaint Management System (MERN)",
    liveUrl: "https://complaint-management-system-sigma-plum.vercel.app/",
    github: "https://github.com/arpan-bhavsar/complaint-management-system",
    technologies: [
      { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Socket.io", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" }
    ],
    readmeHTML: `
      <h1 class="gh-h1">🛠️ IT Infrastructure & Complaint Management System</h1>
      <p>A production-grade, full-stack <strong>MERN</strong> (MongoDB, Express.js, React, Node.js) application engineered to streamline the reporting, tracking, and resolution of IT infrastructure issues. This platform features role-based access control, secure cloud media storage, and real-time tracking capabilities.</p>
      
      <p><strong>🚀 Live Demo:</strong> <a href="https://complaint-management-system-sigma-plum.vercel.app/" target="_blank" rel="noreferrer" style="color: var(--gh-accent); text-decoration: none;">https://complaint-management-system-sigma-plum.vercel.app/</a></p>

      <h2 class="gh-h2">🏗️ System Architecture & Tech Stack</h2>
      <p>This project implements a decoupled client-server architecture, allowing for independent scaling, testing, and deployment.</p>
      
      <h3 class="gh-h3">Frontend (Client-Side)</h3>
      <ul class="gh-ul">
        <li class="gh-li"><strong>React.js (Vite):</strong> Utilized for lightning-fast hot module replacement (HMR) and optimized production builds.</li>
        <li class="gh-li"><strong>Bootstrap 5:</strong> Implemented for a fully responsive, mobile-first user interface.</li>
        <li class="gh-li"><strong>React Router DOM:</strong> For seamless Single Page Application (SPA) navigation and protected route handling.</li>
        <li class="gh-li"><strong>Axios:</strong> For structured, promise-based HTTP requests to the backend API.</li>
        <li class="gh-li"><strong>Chart.js:</strong> Implemented for data visualization and administrative analytics.</li>
        <li class="gh-li"><strong>Deployment:</strong> Hosted on <strong>Vercel's</strong> Global Edge Network.</li>
      </ul>

      <h3 class="gh-h3">Backend (Server-Side)</h3>
      <ul class="gh-ul">
        <li class="gh-li"><strong>Node.js & Express.js:</strong> RESTful API architecture handling routing, middleware, and business logic.</li>
        <li class="gh-li"><strong>WebSockets:</strong> Integrated for real-time server-to-client event broadcasting and instant dashboard updates.</li>
        <li class="gh-li"><strong>JSON Web Tokens (JWT):</strong> Stateless, encrypted authentication ensuring secure sessions without exposing plaintext passwords.</li>
        <li class="gh-li"><strong>NodeMailer / SendGrid:</strong> Automated email notification system for status updates.</li>
        <li class="gh-li"><strong>CORS:</strong> Configured with strict origin controls to prevent unauthorized domain access.</li>
        <li class="gh-li"><strong>Deployment:</strong> Hosted on <strong>Render</strong> Cloud Platform.</li>
      </ul>

      <h3 class="gh-h3">Database & Cloud Storage</h3>
      <ul class="gh-ul">
        <li class="gh-li"><strong>MongoDB Atlas:</strong> Cloud-hosted NoSQL database.</li>
        <li class="gh-li"><strong>Mongoose ODM:</strong> For strict schema validation, model associations, query building, and pagination logic.</li>
        <li class="gh-li"><strong>Cloudinary:</strong> Integrated via <code>multer</code> and <code>multer-storage-cloudinary</code> to intercept file uploads, host images securely, and serve optimized media via CDN.</li>
      </ul>

      <h2 class="gh-h2">✨ Comprehensive Feature List</h2>
      <h3 class="gh-h3">🔐 Security & Authentication</h3>
      <ul class="gh-ul">
        <li class="gh-li"><strong>Role-Based Access Control (RBAC):</strong> Distinct dashboards and permission levels for "System Administrators" and "Standard Users".</li>
        <li class="gh-li"><strong>Secure Admin Authorization:</strong> System Administrator registration is protected by a hardcoded organizational Secret Key to prevent unauthorized privilege escalation.</li>
        <li class="gh-li"><strong>Password Cryptography:</strong> Passwords are hashed and salted before database insertion.</li>
        <li class="gh-li"><strong>Protected API Routes:</strong> Middleware verifies JWT signatures before granting access to sensitive data or CRUD operations.</li>
      </ul>

      <h3 class="gh-h3">📝 Complaint Ticket Lifecycle & Tracking</h3>
      <ul class="gh-ul">
        <li class="gh-li"><strong>Dynamic Form Submission:</strong> Users can create comprehensive tickets including issue categories, priority levels, and detailed descriptions.</li>
        <li class="gh-li"><strong>Evidence Uploads:</strong> Seamless image uploads. The backend streams the file directly to Cloudinary and saves the secure return URL in the MongoDB document.</li>
        <li class="gh-li"><strong>Automated Email Notifications:</strong> Users receive instant email alerts whenever their ticket status is updated by an administrator.</li>
        <li class="gh-li"><strong>Search & Pagination:</strong> Advanced filtering mechanisms allow administrators to easily search, sort, and navigate through hundreds of historical tickets.</li>
      </ul>

      <h3 class="gh-h3">📊 Real-Time Analytics & Dashboards</h3>
      <ul class="gh-ul">
        <li class="gh-li"><strong>User Dashboard:</strong> Users can track the real-time status of their personal tickets (Pending, In Progress, Resolved).</li>
        <li class="gh-li"><strong>Global Admin Dashboard:</strong> Administrators have a global view of all system tickets, with the ability to update statuses and manage workflows.</li>
        <li class="gh-li"><strong>Data Visualization:</strong> Interactive charts visualize complaint volume, resolution times, and category distributions to help administrators track infrastructure health over time.</li>
      </ul>

      <h2 class="gh-h2">⚙️ Local Development Setup</h2>
      <h3 class="gh-h3">1. Prerequisites</h3>
      <ul class="gh-ul">
        <li class="gh-li">Node.js (v16 or higher)</li>
        <li class="gh-li">Git</li>
        <li class="gh-li">A MongoDB Atlas account</li>
        <li class="gh-li">A Cloudinary account</li>
        <li class="gh-li">An Email Service provider (for SMTP credentials)</li>
      </ul>
      <h3 class="gh-h3">2. Clone the Repository</h3>
      <div class="gh-code-block">git clone https://github.com/arpan-bhavsar/complaint-management-system.git\\ncd complaint-management-system</div>
    `
  },
  {
    id: "smart-energy-grid-platform",
    folderName: "smart-energy-grid-platform",
    title: "Smart Energy Grid Platform Backend",
    liveUrl: null,
    github: "https://github.com/arpan-bhavsar/smart-energy-grid-platform",
    technologies: [
      { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
      { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ],
    readmeHTML: `
      <h1 class="gh-h1">⚡ IoT Enterprise Smart-Grid & Energy Analytics Platform</h1>
      <p><blockquote>A real-time, cloud-integrated smart energy monitoring and automated load management ecosystem.</blockquote></p>
      <p>This system bridges physical hardware telemetry with an interactive web-based software dashboard to track energy utilization metrics, manage costs, and implement fail-safe cutoffs. It is designed to showcase full-stack integration, hardware-to-cloud communication, and real-time data visualization.</p>
      
      <h2 class="gh-h2">🚀 Key Features</h2>
      <ul class="gh-ul">
        <li class="gh-li"><strong>Real-time Telemetry Processing:</strong> Tracks instantaneous Current (A), Live Power Draw (W), Cumulative Energy Consumption (kWh), and Estimated Billing dynamically.</li>
        <li class="gh-li"><strong>Low-Latency Cloud Sync:</strong> Leverages an asynchronous pub/sub model with Firebase Realtime Database for instantaneous hardware-to-software updates.</li>
        <li class="gh-li"><strong>Automated Budget Guardrails:</strong> Implements user-defined financial limit thresholds with an automated hardware-level relay cutoff mechanism to prevent utility overages.</li>
        <li class="gh-li"><strong>Interactive Live Analytics:</strong> Visualizes shifting consumption trends on an animated timeline using optimized Chart.js graph hooks.</li>
        <li class="gh-li"><strong>Decoupled Security Layer:</strong> Utilizes environmental variable isolation (<code>.env</code> and <code>config.h</code>) to safeguard production cloud instances and hardware configurations.</li>
      </ul>

      <h2 class="gh-h2">🛠️ System Architecture & Tech Stack</h2>
      <p>This project utilizes a modern multi-tier enterprise architecture separating the hardware client, database, and front-end user interface.</p>
      <p><strong>The Tech Stack:</strong></p>
      <ul class="gh-ul">
        <li class="gh-li"><strong>Hardware Layer (C++):</strong> NodeMCU ESP8266 microcontroller, ACS712-20A Hall-effect current sensor, and an optocoupled dual-channel safety relay module.</li>
        <li class="gh-li"><strong>Cloud Database Layer:</strong> Firebase Realtime Database for seamless bi-directional data flow.</li>
        <li class="gh-li"><strong>Frontend Web Application:</strong> Semantic HTML5, Glassmorphism UI styling via custom CSS3, and modern asynchronous JavaScript (ES6+) modules (designed for React scalability).</li>
      </ul>

      <h3 class="gh-h3">🌐 Data Flow Architecture</h3>
      <div class="gh-code-block">[ACS712 Sensor] ➔ [ESP8266 Firmware] ➔ (Secure MQTT/HTTP) ➔ [Firebase RTDB] ➔ (Real-time Pub/Sub) ➔ [Web Dashboard]</div>

      <h2 class="gh-h2">📊 Hardware Circuit Topology</h2>
      <ul class="gh-ul">
        <li class="gh-li"><strong>Microcontroller:</strong> ESP8266 (NodeMCU)</li>
        <li class="gh-li"><strong>Sensor Pin Interfacing:</strong> ACS712 Analog Out $\rightarrow$ Pin A0</li>
        <li class="gh-li"><strong>Control Output Interfacing:</strong> Dual-Channel Relay Signal Input $\rightarrow$ Pin D1</li>
      </ul>

      <h2 class="gh-h2">⚡ Core Software Logic & Calculations</h2>
      <p>The firmware calculates root-mean-square current (<i>I<sub>rms</sub></i>) by sampling alternating current data blocks to balance noise offsets:</p>
      
      <div style="display: flex; flex-direction: column; align-items: center; margin: 20px 0; font-family: 'Times New Roman', serif; font-size: 18px; font-style: italic; text-align: center;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span>I<sub>rms</sub> = </span>
          <div style="display: flex; flex-direction: column; align-items: center; padding: 0 4px;">
            <span style="border-bottom: 1px solid currentColor; padding-bottom: 2px; font-size: 16px;">V<sub>ADC_RMS</sub></span>
            <span style="padding-top: 2px; font-size: 16px; font-style: normal;">Sensitivity</span>
          </div>
        </div>
      </div>

      <p>Live real-time power (<i>P</i>) and cumulative energy utilization (<i>E</i>) are computed using standard power equations:</p>
      
      <div style="display: flex; flex-direction: column; align-items: center; gap: 12px; margin: 20px 0; font-family: 'Times New Roman', serif; font-size: 18px; font-style: italic; text-align: center;">
        <div>P = I<sub>rms</sub> × V<sub>Mains</sub></div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <span>E = </span>
          <span style="font-size: 26px; font-style: normal; font-weight: 300; transform: translateY(-2px);">∑</span>
          <span>(P × Δt)</span>
        </div>
      </div>

      <h2 class="gh-h2">💻 How to Set Up and Run Locally</h2>
      <h3 class="gh-h3">1. Hardware Firmware Setup</h3>
      <ol class="gh-ul">
        <li class="gh-li">Open <code>hardware-firmware/smart_meter.ino</code> in the Arduino IDE.</li>
        <li class="gh-li">Duplicate <code>config.h.example</code> and rename it to <code>config.h</code>.</li>
        <li class="gh-li">Populate <code>config.h</code> with your local Wi-Fi SSID and Firebase secret credentials.</li>
        <li class="gh-li">Flash the sketch to your NodeMCU ESP8266.</li>
      </ol>
      <h3 class="gh-h3">2. Web Dashboard Deployment</h3>
      <p>Navigate to the web directory in your terminal:</p>
      <div class="gh-code-block">cd web-dashboard\\nnpm install\\nnpm run dev</div>
    `
  },
  {
    id: "sales-forecasting-project",
    folderName: "sales-forecasting-project",
    title: "DMart Sales Intelligence Dashboard",
    liveUrl: "https://sales-forecasting-project-fvp9hdsch3rrng5v8as5bu.streamlit.app/",
    github: "https://github.com/arpan-bhavsar/sales-forecasting-project",
    technologies: [
      { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Pandas", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" }
    ],
    readmeHTML: `
      <h1 class="gh-h1">🛒 DMart Sales Intelligence & Forecasting Dashboard</h1>
      <p>An interactive, PowerBI-style analytics and predictive application built using <strong>Streamlit</strong> and <strong>Scikit-Learn</strong>. This system forecasts retail sales trends and evaluates machine learning performance using historical DMart transaction data.</p>
      
      <p>🔗 <strong>Live Dashboard Link:</strong> <a href="https://sales-forecasting-project-fvp9hdsch3rrng5v8as5bu.streamlit.app/" target="_blank" rel="noreferrer" style="color: var(--gh-accent); text-decoration: none; font-weight: 600;">https://sales-forecasting-project-fvp9hdsch3rrng5v8as5bu.streamlit.app/</a></p>

      <h2 class="gh-h2">👥 Team Members</h2>
      <ul class="gh-ul">
        <li class="gh-li"><a href="https://github.com/arpan-bhavsar" target="_blank" rel="noreferrer" style="color: var(--gh-accent); text-decoration: none;">Arpan Bhavsar</a></li>
        <li class="gh-li"><a href="https://github.com/KritarthSingh19" target="_blank" rel="noreferrer" style="color: var(--gh-accent); text-decoration: none;">Kritarth Singh</a></li>
        <li class="gh-li"><a href="https://github.com/Janvi-Soni214" target="_blank" rel="noreferrer" style="color: var(--gh-accent); text-decoration: none;">Janvi Soni</a></li>
      </ul>

      <h2 class="gh-h2">📊 Project Architecture & Features</h2>
      <ul class="gh-ul">
        <li class="gh-li"><strong>Interactive UI/UX:</strong> Built a dynamic dashboard featuring tracking cards for high-level KPIs, clean evaluation graphs, and side-by-side model comparisons.</li>
        <li class="gh-li"><strong>Predictive Engine:</strong> Predicts exact sales transactions based on real-time parameters (Category, City, Region, Discount, Profit, and Seasonality).</li>
        <li class="gh-li"><strong>Comprehensive Error Breakdown:</strong> Provides transparent regression metric visualization (<i>MAE</i>, <i>RMSE</i>, <i>R<sup>2</sup></i>) to isolate model performance drops during high-variability festive quarters.</li>
      </ul>

      <h2 class="gh-h2">🛠️ Tech Stack & Dependencies</h2>
      <ul class="gh-ul">
        <li class="gh-li"><strong>Frontend:</strong> Streamlit, Altair</li>
        <li class="gh-li"><strong>Machine Learning:</strong> Scikit-Learn (Pipelines, ColumnTransformers, OneHotEncoder)</li>
        <li class="gh-li"><strong>Data Processing:</strong> Pandas, NumPy</li>
        <li class="gh-li"><strong>Model Serialization:</strong> Joblib</li>
      </ul>
      <p>All core configurations and cloud requirements are tracked dynamically via <code>requirements.txt</code>.</p>

      <h2 class="gh-h2">🚀 How to Run Locally</h2>
      <p>If you want to pull this project down and run it on your machine, follow these steps:</p>
      <h3 class="gh-h3">1. Clone the Workspace</h3>
      <div class="gh-code-block">git clone https://github.com/arpan-bhavsar/sales-forecasting-project\\ncd sales-forecasting-project</div>
      <h3 class="gh-h3">2. Install Dependencies & Start</h3>
      <div class="gh-code-block">pip install -r requirements.txt\\nstreamlit run dashboard.py</div>
    `
  },
  {
    id: "smart-blind-stick-iot",
    folderName: "Smart-Blind-Stick",
    title: "Smart Blind Stick Proximity System",
    liveUrl: null,
    github: "https://github.com/arpan-bhavsar/Smart-Blind-Stick",
    technologies: [
      { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Arduino", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" }
    ],
    diagrams: [
      { name: "Circuit_Schematics.png", url: "https://raw.githubusercontent.com/arpan-bhavsar/Smart-Blind-Stick/main/Diagrams/Circuit%20Diagram.png", caption: "Hardware Circuit Breadboard Interfacing Topology Map" },
      { name: "HC_SR04_Sensor_Mount.png", url: "https://raw.githubusercontent.com/arpan-bhavsar/Smart-Blind-Stick/main/Diagrams/img1.png", caption: "Ultrasonic Distance Array Sensors Mount Top Profile" },
      { name: "Hardware_Breadboard_Assembly.png", url: "https://raw.githubusercontent.com/arpan-bhavsar/Smart-Blind-Stick/main/Diagrams/img2.png", caption: "Arduino Uno Core Board Processing Logic Relay Base" },
      { name: "Full_Stick_Construction.png", url: "https://raw.githubusercontent.com/arpan-bhavsar/Smart-Blind-Stick/main/Diagrams/img3.png", caption: "Assembled Proximity Walking Stick Structural Profile" },
      { name: "TinkerCAD_Layout.png", url: "https://raw.githubusercontent.com/arpan-bhavsar/Smart-Blind-Stick/main/Diagrams/img4.png", caption: "Simulated Proximity Trigger Circuit Testing Canvas Layout" }
    ],
    readmeHTML: `
      <h1 class="gh-h1">🦯 Smart Stick for Visually Impaired</h1>
      <p>An Internet of Things (IoT) project designed to assist visually impaired individuals in navigating safely by detecting obstacles in their path and providing real-time feedback.</p>
      
      <h2 class="gh-h2">📝 Introduction</h2>
      <p>Visually impaired individuals face daily challenges when navigating busy streets filled with vehicles and unexpected obstacles. This <strong>Smart Stick</strong> mitigates these risks by scanning the path ahead using integrated sensors. It alerts the user via auditory and haptic feedback, allowing them to take necessary precautions and prevent injuries.</p>

      <h2 class="gh-h2">⚙️ How It Works</h2>
      <ul class="gh-ul">
        <li class="gh-li">The system continually scans the path using an <strong>HC-SR04 Ultrasonic Sensor</strong>.</li>
        <li class="gh-li">When an obstacle is detected within the threshold zone (less than 35 cm), the <strong>buzzer</strong> starts beeping and the alert indicator triggers.</li>
        <li class="gh-li">The user hears the alert and can safely navigate around the hazard.</li>
        <li class="gh-li">Real-time distance measurements can be viewed in centimeters on the Arduino Serial Monitor.</li>
      </ul>

      <h2 class="gh-h2">🛠️ Components Used</h2>
      <ul class="gh-ul">
        <li class="gh-li">Arduino UNO</li>
        <li class="gh-li">HC-SR04 Ultrasonic Sensor</li>
        <li class="gh-li">Piezo Buzzer</li>
        <li class="gh-li">2 LEDs (Green & Red) with a 220-Ohm resistor</li>
        <li class="gh-li">9V DC Battery & Battery Cap</li>
        <li class="gh-li">Breadboard & Jumper Wires</li>
        <li class="gh-li">Barrel Connector Cable & Switch</li>
      </ul>

      <h2 class="gh-h2">💻 Source Code Preview</h2>
      <p>The project utilizes the <code>NewPing.h</code> library for accurate, lag-free distance polling.</p>
      <div class="gh-code-block">#include &lt;NewPing.h&gt;\\n\\n#define trigPin 3\\n#define echoPin 4\\n#define BUZZER_PIN 13\\n#define MAX_DISTANCE 35\\n\\nNewPing sonar(trigPin, echoPin);\\n\\nvoid setup() {\\n  Serial.begin(9600);\\n  pinMode(trigPin, OUTPUT);\\n  pinMode(echoPin, INPUT);\\n  pinMode(BUZZER_PIN, OUTPUT);\\n}\\n\\nvoid loop() {\\n  unsigned int distance = sonar.ping_cm();\\n  Serial.print("Distance: ");\\n  Serial.print(distance);\\n  Serial.println(" cm");\\n  if (distance &gt; 0 && distance &lt; MAX_DISTANCE) {\\n    digitalWrite(BUZZER_PIN, HIGH);\\n  } else {\\n    digitalWrite(BUZZER_PIN, LOW);\\n  }\\n  delay(100);\\n}</div>
    `
  },
  {
    id: "industrial-motor-telemetry",
    folderName: "industrial-motor-telemetry",
    title: "IoT Industrial Motor Vibration Monitor (On-Going)",
    liveUrl: "https://frontend-orcin-beta-75.vercel.app/",
    github: "https://github.com/arpan-bhavsar/industrial-motor-telemetry",
    technologies: [
      { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Socket.io", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
      { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Arduino", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" }
    ],
    readmeHTML: `
      <h1 class="gh-h1">🚀 IoT Industrial Motor Vibration Monitor</h1>
      <p>A real-time industrial telemetry dashboard built to monitor motor health, track multi-axis vibration metrics, and forecast equipment degradation.</p>
      
      <p>🔗 <strong>Live Demo:</strong> <a href="https://frontend-orcin-beta-75.vercel.app/" target="_blank" rel="noreferrer" style="color: var(--gh-accent); text-decoration: none; font-weight: 600;">[View Deployed Frontend on Vercel]</a></p>

      <div style="background-color: var(--gh-code-bg); border-left: 4px solid #db2777; padding: 16px; margin: 16px 0; border-radius: 0 6px 6px 0; text-align: left;">
        <strong>💡 Project Architecture Strategy:</strong> Developed using a <strong>Frontend-First approach</strong>. The UI dashboard, authentication flows, and state management are fully completed and deployed. The system currently utilizes optimized mock data models to simulate live sensor telemetry while the Node.js backend and ESP8266 hardware integration are in active development.
      </div>

      <h2 class="gh-h2">🛠️ Tech Stack & Architecture</h2>
      <ul class="gh-ul">
        <li class="gh-li"><strong>Frontend:</strong> React.js, Tailwind CSS, Context API / Redux</li>
        <li class="gh-li"><strong>Deployment:</strong> Vercel (CI/CD pipeline integrated)</li>
        <li class="gh-li"><strong>Planned Backend:</strong> Node.js, Express.js, WebSockets (Socket.io)</li>
        <li class="gh-li"><strong>Planned Database & Hardware:</strong> MongoDB (Time-Series collections), NodeMCU ESP8266, MPU6050 Accelerometer</li>
      </ul>

      <h2 class="gh-h2">✨ Features Implemented (Live on Vercel)</h2>
      <ul class="gh-ul">
        <li class="gh-li">✔️ <strong>Interactive Telemetry Dashboard:</strong> Designed comprehensive UI grids showcasing real-time line charts for 3-axis velocity data (<i>A<sub>x</sub>, A<sub>y</sub>, A<sub>z</sub></i>) and motor temperature logs.</li>
        <li class="gh-li">✔️ Fully functional gateway login setups and landing pages deployed cleanly.</li>
      </ul>

      <h2 class="gh-h2">🚧 Upcoming Integration Pipeline</h2>
      <ul class="gh-ul">
        <li class="gh-li">⏳ <strong>Node.js Rest API & WebSockets:</strong> Replacing temporary frontend mock states with active Socket.io listeners hooked to an Express backend.</li>
        <li class="gh-li">⏳ <strong>Hardware Ingestion Layer:</strong> Flashing the ESP8266 microcontroller to broadcast MPU6050 sensor arrays over WebSockets to the server.</li>
        <li class="gh-li">⏳ <strong>Automated Alert System:</strong> Integrating thresholds to instantly flag abnormal root-mean-square (RMS) vibration values.</li>
      </ul>
    `
  }
];

// FULLY RESTORED RESUME WITH GITHUB LINKS PRESERVED EXACTLY
const bioHTML = `
  <h1 class="gh-h1">👤 About Me</h1>
  <h2 class="gh-h2" style="border: none; margin-bottom: 4px;">ARPAN JAGDISH BHAVSAR</h2>
  <p style="color: var(--gh-muted); font-size: 13px; margin-top: 0; margin-bottom: 14px;">
    📍 Bharuch, Gujarat | 📞 +91 9979600129 | ✉️ <a href="mailto:arpanjbhavsar123@gmail.com" style="color: var(--gh-accent); text-decoration: none;">arpanjbhavsar123@gmail.com</a>
  </p>
  
  <div style="display: flex; gap: 12px; margin-bottom: 20px;">
    <a href="https://github.com/arpan-bhavsar" target="_blank" rel="noreferrer" style="background: var(--gh-code-bg); border: 1px solid var(--gh-border); padding: 6px 12px; border-radius: 6px; font-size: 12px; color: var(--win-text); text-decoration: none; font-weight: 600;">🔗 GitHub</a>
    <a href="https://linkedin.com" target="_blank" rel="noreferrer" style="background: var(--gh-code-bg); border: 1px solid var(--gh-border); padding: 6px 12px; border-radius: 6px; font-size: 12px; color: var(--win-text); text-decoration: none; font-weight: 600;">🔗 LinkedIn</a>
    <a href="https://leetcode.com/u/arpan-bhavsar" target="_blank" rel="noreferrer" style="background: var(--gh-code-bg); border: 1px solid var(--gh-border); padding: 6px 12px; border-radius: 6px; font-size: 12px; color: var(--win-text); text-decoration: none; font-weight: 600;">🔗 LeetCode</a>
  </div>

  <p>Computer Science & Engineering student with a strong foundation in programming and software development. Skilled in Java, Python, C++, and web technologies, with hands-on experience in hackathons and team leadership. Interested in software development, web applications, and innovative IT solutions.</p>

  <h2 class="gh-h2">📊 Projects Experience</h2>
  <ul class="gh-ul">
    <li class="gh-li"><strong>Smart Energy Meter (IoT + Firebase)</strong> - <a href="https://github.com/arpan-bhavsar/smart-energy-grid-platform" target="_blank" style="color: var(--gh-accent); text-decoration: none;">github link</a></li>
    <li class="gh-li"><strong>Complaint Management System (MERN Stack)</strong> - <a href="https://github.com/arpan-bhavsar/complaint-management-system" target="_blank" style="color: var(--gh-accent); text-decoration: none;">github link</a></li>
    <li class="gh-li"><strong>Sales Forecasting with Predictive analysis (Python)</strong> - <a href="https://github.com/arpan-bhavsar/sales-forecasting-project" target="_blank" style="color: var(--gh-accent); text-decoration: none;">github link</a></li>
    <li class="gh-li"><strong>Smart Stick for Visually Impaired (IoT)</strong> - <a href="https://github.com/arpan-bhavsar/Smart-Blind-Stick" target="_blank" style="color: var(--gh-accent); text-decoration: none;">github link</a></li>
    <li class="gh-li"><strong>Industrial Motor Vibration Monitor (IoT+Ready MERN Dashboard)</strong> - <a href="https://github.com/arpan-bhavsar/industrial-motor-telemetry" target="_blank" style="color: var(--gh-accent); text-decoration: none;">github link</a></li>
  </ul>

  <h2 class="gh-h2">🎓 Education</h2>
  <ul class="gh-ul">
    <li class="gh-li"><strong>B.Tech in Computer Science & Engineering</strong><br />P. P. Savani University, Dhamdod | Currently in 6th Semester | CGPA: 7.47 (Till Now)</li>
    <li class="gh-li"><strong>Diploma in Computer Engineering</strong><br />Shri K. J. Polytechnic (GTU), Bharuch | 2024 | CGPA: 7.95</li>
    <li class="gh-li"><strong>Secondary School Certificate (SSC - Class X)</strong><br />Gujarat Secondary & Higher Secondary Education Board | 2021 | Percentage: 73.66 | Percentile: 83.86</li>
  </ul>

  <h2 class="gh-h2">💼 Internship Experience</h2>
  <h3 class="gh-h3" style="font-size: 14px; margin-bottom: 4px;">Nexis Infotech, Bharuch — <i>Software Development Intern (45 Days)</i></h3>
  <ul class="gh-ul">
    <li class="gh-li">Learned practical concepts of software development and programming practices. Worked on small application development tasks using programming fundamentals.</li>
    <li class="gh-li">Understood frontend and backend interaction basics.</li>
  </ul>

  <h2 class="gh-h2">🛠️ Technical Skills</h2>
  <ul class="gh-ul">
    <li class="gh-li"><strong>Programming Languages:</strong> Java, Python, C++, basics .Net</li>
    <li class="gh-li"><strong>Web Development:</strong> HTML5, CSS, Bootstrap, Basics JavaScript</li>
    <li class="gh-li"><strong>Tools & Platforms:</strong> Android Studio, Gitbash, GitHub, VS Code, Arduino IDE, Basic Docker, Canva</li>
    <li class="gh-li"><strong>Concepts:</strong> Object-Oriented Programming (OOP), DSA, API Integration, Responsive Web Design</li>
    <li class="gh-li"><strong>Frontend:</strong> React, basics Angular</li>
    <li class="gh-li"><strong>Backend:</strong> Node.js</li>
    <li class="gh-li"><strong>Database:</strong> MySQL, MongoDB, Firebase</li>
    <li class="gh-li"><strong>Libraries:</strong> Socket.io, Dotenv, Axios, Mongoose, Express, Nodemon</li>
  </ul>

  <h2 class="gh-h2">🤝 Soft Skills</h2>
  <p>Communication, Logical Thinking, Problem Solving, Team Collaboration</p>
`;

const appIcons = {
  explorer: { Icon: Folder, color: '#ffca28' },
  reader: { Icon: FileText, color: '#42a5f5' },
  photos: { Icon: Image, color: '#66bb6a' },
  terminal: { Icon: Terminal, color: '#0ea5e9' },
  browser: { Icon: Globe, color: '#f97316' },
  calculator: { Icon: Calculator, color: '#10b981' }
};

// =========================================================================================
// THE ULTIMATE MERN SVG GRAPHIC WALLPAPER
// =========================================================================================
const MernWallpaper = ({ darkMode }) => {
  // Desktop Base Background
  const bg = darkMode ? '#000000' : '#f8fafc';

  // Individual Brand Colors for the M E R N letters
  // Dark mode: Very faint white so icons stay readable. Light mode: Ultra-Vibrant Colorful
  const colorM = darkMode ? 'rgba(255, 255, 255, 0.14)' : '#10b981';  // Emerald
  const colorE = darkMode ? 'rgba(255, 255, 255, 0.7)' : '#64748b';  // Slate
  const colorR = darkMode ? 'rgba(255, 255, 255, 0.14)' : '#0ea5e9';  // Sky Blue
  const colorN = darkMode ? 'rgba(255, 255, 255, 0.7)' : '#22c55e';  // Green

  // Corresponding Stroke Colors for the 4 explicit logos
  const strokeM = darkMode ? 'rgba(255, 255, 255, 0.14)' : '#10b981';
  const strokeE = darkMode ? 'rgba(255, 255, 255, 0.7)' : '#64748b';
  const strokeR = darkMode ? 'rgba(255, 255, 255, 0.14)' : '#0ea5e9';
  const strokeN = darkMode ? 'rgba(255, 255, 255, 0.7)' : '#22c55e';

  // Drop shadow for that "wow" 3D pop in light mode
  const filterStyle = {
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    filter: darkMode ? 'none' : 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))'
  };

  const svgAnim = { transition: 'fill 0.8s ease, stroke 0.8s ease' };

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundColor: bg, transition: 'background-color 0.8s ease', overflow: 'hidden' }}>

      {/* Changed preserveAspectRatio to 'xMidYMid meet' so it scales responsively without cropping the logos! */}
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={filterStyle}>

        {/* Center Massive Typography - Colored Individually */}
        <text x="960" y="540" fontFamily="Arial Black, Impact, system-ui, sans-serif" fontSize="480" fontWeight="900" textAnchor="middle" dominantBaseline="central" letterSpacing="25">
          <tspan fill={colorM} style={svgAnim}>M</tspan>
          <tspan fill={colorE} style={svgAnim}>E</tspan>
          <tspan fill={colorR} style={svgAnim}>R</tspan>
          <tspan fill={colorN} style={svgAnim}>N</tspan>
        </text>

        {/* 1. MONGODB LEAF (Top Left) */}
        <g transform="translate(450, 250) scale(1.6)" fill="none" stroke={strokeM} strokeWidth="2.5" style={svgAnim}>
          <path d="M 0 -80 C 80 -40, 100 80, 0 120 C -100 80, -80 -40, 0 -80 Z" />
          <path d="M 0 -80 L 0 120" strokeWidth="1.5" />
        </g>

        {/* 2. NODE.JS HEXAGON (Bottom Left) */}
        <g transform="translate(450, 850) scale(2.2)" fill="none" stroke={strokeN} strokeWidth="2" style={svgAnim}>
          <polygon points="0,-45 39,-22.5 39,22.5 0,45 -39,22.5 -39,-22.5" />
          <polygon points="0,-25 21.6,-12.5 21.6,12.5 0,25 -21.6,12.5 -21.6,-12.5" strokeWidth="1" />
        </g>

        {/* 3. EXPRESS.JS LOGO (Top Right) */}
        <g transform="translate(1500, 250)" fill="none" stroke={strokeE} strokeWidth="3" style={svgAnim}>
          <text x="0" y="5" fontFamily="system-ui, sans-serif" fontSize="140" fontWeight="200" textAnchor="middle" dominantBaseline="central" letterSpacing="-5" fill={strokeE} stroke="none" style={svgAnim}>ex</text>
          <circle cx="0" cy="0" r="120" strokeWidth="2" strokeDasharray="15 10" />
        </g>

        {/* 4. REACT ATOM (Bottom Right) */}
        <g transform="translate(1500, 850) scale(2.6)" style={svgAnim}>
          <ellipse cx="0" cy="0" rx="90" ry="28" fill="none" stroke={strokeR} strokeWidth="1.5" transform="rotate(30)" style={svgAnim} />
          <ellipse cx="0" cy="0" rx="90" ry="28" fill="none" stroke={strokeR} strokeWidth="1.5" transform="rotate(90)" style={svgAnim} />
          <ellipse cx="0" cy="0" rx="90" ry="28" fill="none" stroke={strokeR} strokeWidth="1.5" transform="rotate(150)" style={svgAnim} />
          <circle cx="0" cy="0" r="10" fill={strokeR} style={svgAnim} />
        </g>

      </svg>
    </div>
  );
};

// =========================================================================================
// MAIN DESKTOP APPLICATION ENGINE
// =========================================================================================

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [booting, setBooting] = useState(true);
  // Skipped login screen based on user preference
  const [loggedIn, setLoggedIn] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  const [selectedId, setSelectedId] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);
  const [startOpen, setStartOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  // Interactive Desktop Selection Box
  const [selectionBox, setSelectionBox] = useState(null);

  const [windows, setWindows] = useState([]);
  const [windowOrder, setWindowOrder] = useState([]);
  const [focusedWindow, setFocusedWindow] = useState(null);

  // Notification State
  const [notification, setNotification] = useState(null);
  const [showQuickSettings, setShowQuickSettings] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    if (loggedIn) {
      setTimeout(() => {
        setNotification({
          title: 'System Online',
          message: 'Welcome to Arpan\'s Portfolio OS. All systems nominal.'
        });
      }, 1000);
    }
  }, [loggedIn]);

  const focusWindow = (id) => {
    setWindowOrder(prev => {
      const newOrder = prev.filter(wId => wId !== id);
      newOrder.push(id);
      return newOrder;
    });
    setFocusedWindow(id);
  };

  const getZIndex = (id) => 100 + windowOrder.indexOf(id);

  const openWindow = (type, data, customId = null) => {
    const id = customId || `${type}-${data.id || data.name}`;
    setWindows(prev => {
      const exists = prev.find(w => w.id === id);
      if (exists) {
        return prev.map(w => w.id === id ? { ...w, isMinimized: false } : w);
      }
      return [...prev, { id, type, data, isMinimized: false }];
    });
    focusWindow(id);
  };

  const closeWindow = (id) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    setWindowOrder(prev => {
      const newOrder = prev.filter(wId => wId !== id);
      if (focusedWindow === id) {
        setFocusedWindow(newOrder.length > 0 ? newOrder[newOrder.length - 1] : null);
      }
      return newOrder;
    });
  };

  const toggleMinimize = (id) => {
    setWindows(prev => {
      const windowToToggle = prev.find(w => w.id === id);
      if (!windowToToggle) return prev;
      const willBeMinimized = !windowToToggle.isMinimized;
      if (!willBeMinimized) focusWindow(id);
      else if (focusedWindow === id) setFocusedWindow(null);
      return prev.map(w => w.id === id ? { ...w, isMinimized: willBeMinimized } : w);
    });
  };

  const handleTaskbarClick = (id) => {
    const targetWindow = windows.find(w => w.id === id);
    if (!targetWindow) return;
    if (targetWindow.isMinimized) {
      setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: false } : w));
      focusWindow(id);
    } else if (focusedWindow === id) {
      setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
      setFocusedWindow(null);
    } else {
      focusWindow(id);
    }
  };

  const groupedWindows = windows.reduce((acc, w) => {
    if (!acc[w.type]) acc[w.type] = [];
    acc[w.type].push(w);
    return acc;
  }, {});

  if (showLanding) {
    return <Landing3D onEnterOS={() => setShowLanding(false)} />;
  }

  if (booting) {
    return <BootScreen onComplete={() => {
      setBooting(false);
      // Trigger the welcome notification immediately since we skip login
      setTimeout(() => {
        setNotification({
          title: 'System Online',
          message: 'Welcome to Arpan\'s Portfolio OS. All systems nominal.'
        });
      }, 1000);
    }} />;
  }

  const handleDesktopMouseDown = (e) => {
    // Only trigger if clicking directly on the desktop background
    if (e.target.closest('.desktop-item') || e.target.closest('.win-window') || e.target.closest('.taskbar') || e.target.closest('.context-menu') || e.target.closest('.start-menu')) {
      return;
    }
    setSelectionBox({ startX: e.clientX, startY: e.clientY, currentX: e.clientX, currentY: e.clientY });
  };

  const handleDesktopMouseMove = (e) => {
    if (selectionBox) {
      setSelectionBox({ ...selectionBox, currentX: e.clientX, currentY: e.clientY });
    }
  };

  const handleDesktopMouseUp = () => {
    setSelectionBox(null);
  };

  return (
    <div className="desktop animate-in fade-in duration-1000"
      onClick={() => { setSelectedId(null); setContextMenu(null); setStartOpen(false); }}
      onContextMenu={(e) => { e.preventDefault(); setContextMenu({ x: e.clientX, y: e.clientY }); setStartOpen(false); }}
      onMouseDown={handleDesktopMouseDown}
      onMouseMove={handleDesktopMouseMove}
      onMouseUp={handleDesktopMouseUp}
      onMouseLeave={handleDesktopMouseUp}>

      {/* The Requested MERN Wallpaper */}
      <MernWallpaper darkMode={darkMode} />

      <DesktopWidget />

      {selectionBox && (
        <div
          style={{
            position: 'absolute',
            left: Math.min(selectionBox.startX, selectionBox.currentX),
            top: Math.min(selectionBox.startY, selectionBox.currentY),
            width: Math.abs(selectionBox.currentX - selectionBox.startX),
            height: Math.abs(selectionBox.currentY - selectionBox.startY),
            backgroundColor: 'rgba(0, 120, 212, 0.3)',
            border: '1px solid rgba(0, 120, 212, 0.8)',
            zIndex: 40,
            pointerEvents: 'none'
          }}
        />
      )}

      <div className="desktop-grid" style={{ zIndex: 10 }}>
        {projects.map(p => (
          <button key={p.id} className={`desktop-item ${selectedId === p.id ? 'selected' : ''}`}
            onClick={(e) => { e.stopPropagation(); setSelectedId(p.id); setContextMenu(null); }}
            onDoubleClick={() => openWindow('explorer', p, `explorer-${p.id}`)}>
            <Folder size={44} style={{ color: '#ffca28', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.15))' }} />
            <span className="item-label">{p.title}</span>
          </button>
        ))}

        <button className={`desktop-item ${selectedId === 'bio' ? 'selected' : ''}`}
          onClick={(e) => { e.stopPropagation(); setSelectedId('bio'); setContextMenu(null); }}
          onDoubleClick={() => openWindow('reader', { title: "About_Me.txt", readmeHTML: bioHTML, isBio: true, projectName: "System Profile" }, 'reader-bio')}>
          <FileText size={44} style={{ color: '#42a5f5', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.12))' }} />
          <span className="item-label">About_Me.txt</span>
        </button>

        <button className={`desktop-item ${selectedId === 'terminal' ? 'selected' : ''}`}
          onClick={(e) => { e.stopPropagation(); setSelectedId('terminal'); setContextMenu(null); }}
          onDoubleClick={() => openWindow('terminal', { title: "Command Prompt" }, 'terminal-app')}>
          <Terminal size={44} style={{ color: '#0ea5e9', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.12))' }} />
          <span className="item-label">Terminal</span>
        </button>
      </div>

      {windows.map(w => {
        if (w.type === 'explorer') {
          return (
            <WindowFrame
              key={w.id} project={w.data} isMinimized={w.isMinimized} zIndex={getZIndex(w.id)}
              onFocus={() => focusWindow(w.id)} onMinimize={() => toggleMinimize(w.id)} onClose={() => closeWindow(w.id)}
              onOpenReadme={(p) => openWindow('reader', { title: "README.md", readmeHTML: p.readmeHTML, projectName: p.title }, `reader-${p.id}`)}
              onOpenImage={(img) => openWindow('photos', { ...img, projectName: w.data.title }, `photo-${img.name}`)}
              onOpenBrowser={(p) => openWindow('browser', { title: `Browser - ${p.title}`, url: p.liveUrl }, `browser-${p.id}`)}
            />
          );
        }
        if (w.type === 'reader') {
          return (
            <MarkdownReader
              key={w.id}
              title={w.data.projectName ? `${w.data.title} - ${w.data.projectName}` : w.data.title}
              content={w.data.readmeHTML} isMinimized={w.isMinimized} zIndex={getZIndex(w.id)}
              onFocus={() => focusWindow(w.id)} onMinimize={() => toggleMinimize(w.id)} onClose={() => closeWindow(w.id)}
            />
          );
        }
        if (w.type === 'photos') {
          return (
            <PhotosViewer
              key={w.id}
              image={w.data} isMinimized={w.isMinimized} zIndex={getZIndex(w.id)}
              onFocus={() => focusWindow(w.id)} onMinimize={() => toggleMinimize(w.id)} onClose={() => closeWindow(w.id)}
            />
          );
        }
        if (w.type === 'terminal') {
          return (
            <TerminalApp
              key={w.id}
              title={w.data.title} isMinimized={w.isMinimized} zIndex={getZIndex(w.id)}
              onFocus={() => focusWindow(w.id)} onMinimize={() => toggleMinimize(w.id)} onClose={() => closeWindow(w.id)}
            />
          );
        }
        if (w.type === 'browser') {
          return (
            <BrowserApp
              key={w.id}
              title={w.data.title} url={w.data.url} isMinimized={w.isMinimized} zIndex={getZIndex(w.id)}
              onFocus={() => focusWindow(w.id)} onMinimize={() => toggleMinimize(w.id)} onClose={() => closeWindow(w.id)}
            />
          );
        }
        if (w.type === 'calculator') {
          return (
            <CalculatorApp
              key={w.id}
              title={w.data.title} isMinimized={w.isMinimized} zIndex={getZIndex(w.id)}
              onFocus={() => focusWindow(w.id)} onMinimize={() => toggleMinimize(w.id)} onClose={() => closeWindow(w.id)}
            />
          );
        }
        return null;
      })}

      {contextMenu && (
        <ContextMenu x={contextMenu.x} y={contextMenu.y} onClose={() => setContextMenu(null)} onToggleTheme={() => setDarkMode(!darkMode)} />
      )}
      {startOpen && <StartMenu onOpenApp={(type, data, customId) => { openWindow(type, data, customId); setStartOpen(false); }} projects={projects} onShutdown={() => {
        if (document.referrer) {
          window.location.href = document.referrer;
        } else if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = "about:blank";
        }
      }} />}

      {notification && (
        <NotificationToast
          title={notification.title}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      <footer className="taskbar" style={{ zIndex: 1000 }} onClick={(e) => e.stopPropagation()}>
        <div />
        <div className="taskbar-center">
          <button className={`taskbar-icon ${startOpen ? 'active' : ''}`} onClick={() => setStartOpen(!startOpen)}>
            <Monitor size={20} style={{ color: 'var(--win-accent)' }} />
          </button>

          {Object.entries(groupedWindows).map(([type, group]) => {
            const { Icon, color } = appIcons[type];
            const isActive = group.some(w => focusedWindow === w.id);

            return (
              <div key={type} className="taskbar-group">
                <button
                  className={`taskbar-icon grouped ${isActive ? 'active' : ''}`}
                  onClick={() => { if (group.length === 1) handleTaskbarClick(group[0].id); }}
                >
                  <Icon size={20} style={{ color }} />
                </button>

                <div className="win-preview-stack">
                  {group.map(w => {
                    let displayTitle = '';
                    let displaySubtitle = '';

                    if (w.type === 'explorer') {
                      displayTitle = w.data.folderName;
                      displaySubtitle = w.data.title;
                    } else if (w.type === 'reader') {
                      displayTitle = w.data.title;
                      displaySubtitle = w.data.projectName || 'Document View';
                    } else if (w.type === 'photos') {
                      displayTitle = w.data.name;
                      displaySubtitle = w.data.projectName || 'Image View';
                    }

                    return (
                      <div key={w.id} className="win-preview-card" onClick={(e) => { e.stopPropagation(); handleTaskbarClick(w.id); }}>
                        <div className="win-preview-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflow: 'hidden' }}>
                            <Icon size={12} style={{ color, flexShrink: 0 }} />
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={displayTitle}>{displayTitle}</span>
                          </div>
                          <button
                            onClick={(e) => { e.stopPropagation(); closeWindow(w.id); }}
                            style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', opacity: 0.7 }}
                            onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.background = 'rgba(255, 0, 0, 0.5)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.7; e.currentTarget.style.background = 'transparent'; }}
                          >
                            <X size={12} />
                          </button>
                        </div>
                        <div className="win-preview-body" style={{ padding: '6px', fontSize: '11px', lineHeight: '1.3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {displaySubtitle}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className="taskbar-right" style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingRight: '12px' }}>
          <button
            onClick={() => setShowQuickSettings(!showQuickSettings)}
            className="taskbar-icon text-[var(--win-text)]"
            style={{ width: 'auto', display: 'flex', gap: '8px', padding: '0 12px', borderRadius: '4px', background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <Wifi size={18} />
            <Volume2 size={18} />
            <BatteryCharging size={18} />
          </button>
          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', padding: '0 4px' }}>
            <span style={{ fontSize: '12px' }}>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <span style={{ fontSize: '10px', opacity: 0.8, marginTop: '2px' }}>
              {time.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' })}
            </span>
          </div>
        </div>
      </footer>
      {showQuickSettings && (
        <QuickSettings darkMode={darkMode} setDarkMode={setDarkMode} onClose={() => setShowQuickSettings(false)} />
      )}
    </div>
  );
}