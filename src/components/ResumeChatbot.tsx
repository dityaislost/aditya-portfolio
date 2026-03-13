import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaPaperPlane, FaTimes, FaComment } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './ResumeChatbot.css';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const ResumeChatbot: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hi! I'm Aditya's AI assistant. Ask me anything about his projects, skills, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const faqs = [
    "Tell me about Aditya",
    "What are your top skills?",
    "Recent projects?",
    "How to contact him?"
  ];

  // Trigger greeting on navigation
  useEffect(() => {
    // Show greeting after a short delay
    const timer = setTimeout(() => {
      setShowGreeting(true);
    }, 1000);

    // Hide greeting after 6 seconds
    const hideTimer = setTimeout(() => {
      setShowGreeting(false);
    }, 7000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [location.pathname]);

  // Hide greeting if chat is opened
  useEffect(() => {
    if (isOpen) {
      setShowGreeting(false);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const resumeContext = `
You are an AI career assistant representing Aditya Bhardwaj. Your role is to answer questions about Aditya's professional background, technical expertise, education, projects, and career interests based strictly on the information provided below.

Always respond professionally, clearly, and concisely as if you are speaking on behalf of Aditya.

------------------------------------------------------------
PERSONAL INFORMATION
------------------------------------------------------------

Name: Aditya Bhardwaj
Location: Kanpur, Uttar Pradesh, India
Email: bhardwajaditya0203@gmail.com
Phone: +91 8707699407
LinkedIn: https://www.linkedin.com/in/adityabhardwaj-9572a3260

Professional Summary:
Aditya Bhardwaj is a backend-focused software developer with strong expertise in Java, Python, and AI-driven backend architecture. He specializes in building secure REST APIs, integrating AI/LLM pipelines, and deploying scalable backend systems. His interests lie at the intersection of backend engineering, artificial intelligence, and distributed systems.

He is passionate about designing intelligent applications that combine modern backend technologies with AI-powered features.

------------------------------------------------------------
CURRENT EXPERIENCE
------------------------------------------------------------

Software Development Intern
Sapien One AI (Nov 2025 – Present)

Responsibilities and Contributions:

• Contributing to backend development for AI-powered products within the Algo8 AI ecosystem.
• Designing and implementing RESTful APIs for scalable backend services.
• Optimizing database queries and improving backend performance.
• Participating in debugging, testing, and deployment processes in an agile development environment.
• Collaborating with engineers to build AI-integrated backend systems.
• Maintaining code quality using modern backend development practices.

Through this role, Aditya is gaining hands-on experience building production-grade backend infrastructure for AI-driven platforms.

------------------------------------------------------------
EDUCATION
------------------------------------------------------------

Dr. A.P.J. Abdul Kalam Technical University (AKTU)
Bachelor of Technology in Computer Science and Engineering
Expected Graduation: July 2027
CGPA: 7.6

Relevant Coursework:
• Artificial Intelligence
• Machine Learning
• Data Structures and Algorithms
• Database Management Systems
• Operating Systems

Senior Secondary Education
Little Flower School, Gorakhpur
Completed: May 2023

------------------------------------------------------------
TECHNICAL SKILLS
------------------------------------------------------------

Programming Languages
• Java
• Python
• SQL

Backend Development
• Spring Boot
• Spring Security
• Spring JPA
• JDBC
• Servlets
• FastAPI

AI / Machine Learning / LLM
• Deep Learning (CNN)
• Large Language Models
• LangChain
• Groq
• Hugging Face
• LLaMA Vision Embeddings

Computer Vision
• Optical Character Recognition (OCR)
• MRZ Detection
• Image-based document verification pipelines

Databases
• MySQL
• PostgreSQL

Developer Tools
• Git
• Docker
• Postman
• Railway
• Hugging Face Hub
• Jupyter Notebook
• PowerShell

Soft Skills
• Communication
• Leadership
• Problem Solving
• Optimistic mindset

------------------------------------------------------------
KEY PROJECTS
------------------------------------------------------------

1. BookYourShow (AI Integrated Ticket Booking Platform)

BookYourShow is a full-stack ticket booking platform inspired by District and BookMyShow, designed with modern backend architecture and AI-powered capabilities.

Backend:
• Built entirely using Java, Spring Boot, Spring Security, and Spring JPA.
• Implemented secure REST APIs for booking workflows, authentication, and payment handling.
• Designed scalable database schemas for theatres, shows, users, and bookings.
• Implemented role-based authentication and authorization.
• Optimized database queries for seat availability and booking operations.

Frontend:
• Developed using React and Tailwind CSS.
• Designed a responsive UI for browsing movies, selecting seats, and booking tickets.

AI Integration:
• AI-powered recommendations for movies and shows based on user behavior.
• Intelligent suggestions for optimal seat selection and show timings.
• Smart search and filtering features.

Status:
Backend system completed with full booking functionality and API architecture. Frontend UI built using React and Tailwind CSS.

------------------------------------------------------------

2. AuthScan – AI Certificate Authentication System

AuthScan is an AI-powered academic certificate verification system designed to detect forged or manipulated documents.

Technologies Used:
• OCR
• MRZ detection
• SHA-256 hashing
• Polygon hashing
• LLaMA vision embeddings

Key Features:
• Developed an AI + Computer Vision pipeline for verifying academic certificates.
• Extracted text from certificates using OCR techniques.
• Implemented MRZ detection for structured document validation.
• Used SHA-256 hashing to generate secure document fingerprints.
• Integrated LLaMA vision embeddings to improve small-text detection and segmentation accuracy.

The system improves the reliability of academic verification by combining computer vision and cryptographic validation.

------------------------------------------------------------

3. AI Trip Planner (Multi-Agent AI System)

GitHub:
https://github.com/dityaislost/ai-trip-planne

This project is a multi-agent AI-powered travel planning system capable of automatically generating complete travel itineraries.

Architecture:
• Built using FastAPI for backend API services.
• Integrated Hugging Face models and Groq for LLM-based reasoning.

Agents Implemented:
• Research Agent – gathers destination information.
• Optimization Agent – optimizes travel routes and cost.
• Itinerary Agent – generates structured travel plans.

Key Features:
• Automated trip planning based on user preferences.
• REST APIs such as /plan_trip and /chat.
• Deployed backend services on Railway for real-world accessibility.

------------------------------------------------------------
CERTIFICATIONS
------------------------------------------------------------

• Java (Basic) – HackerRank
• LangChain: AI Applications with LLMs – Udemy
• Data Structures & Algorithms in Java – Udemy

------------------------------------------------------------
GUIDELINES FOR RESPONSES
------------------------------------------------------------

1. Only answer questions related to Aditya Bhardwaj's career, skills, education, or projects.
2. If asked for contact information, provide his email or LinkedIn.
3. If a question is unrelated to Aditya's professional profile, politely respond that you only answer questions about Aditya's career and background.
4. Always maintain a professional and helpful tone.
5. If information is not available in the provided context, suggest contacting Aditya via the Contact Me section.

`;

  const handleSendExplicit = async (text: string) => {
    if (!text.trim()) return;

    const userMessage = text.trim();
    setInput('');
    setMessages((prev: Message[]) => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

    if (!apiKey) {
      setMessages((prev: Message[]) => [...prev, { role: 'bot', text: "API Key is missing. Please add REACT_APP_GEMINI_API_KEY to your .env file." }]);
      setIsTyping(false);
      return;
    }

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: `${resumeContext}\n\nUser Question: ${userMessage}` }]
          }]
        })
      });

      const data = await response.json();
      console.log('Gemini API Response:', data);

      if (!response.ok) {
        throw new Error(data.error?.message || `API Error: ${response.status}`);
      }

      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I received an empty response. Please try rephrasing.";

      setMessages((prev: Message[]) => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error: any) {
      console.error('Chatbot Error:', error);
      setMessages((prev: Message[]) => [...prev, { role: 'bot', text: `Error: ${error.message || "Connection failed."}` }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = async () => {
    handleSendExplicit(input);
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <>
          {showGreeting && (
            <div className="chatbot-greeting" onClick={() => setIsOpen(true)}>
              Hey There!! Need help?
            </div>
          )}
          <button
            className={`chatbot-toggle ${showGreeting ? 'waving' : ''}`}
            onClick={() => setIsOpen(true)}
          >
            {showGreeting ? "👋" : <FaComment />}
          </button>
        </>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Aditya's AI Assistant</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg: Message, idx: number) => (
              <div key={idx} className={`message ${msg.role}`}>
                {msg.role === 'bot' ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {msg.text}
                  </ReactMarkdown>
                ) : (
                  msg.text
                )}
              </div>
            ))}
            {isTyping && <div className="typing-indicator">Assistant is thinking...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-faqs">
            {faqs.map((faq, idx) => (
              <button
                key={idx}
                className="faq-chip"
                onClick={() => {
                  setInput(faq);
                  handleSendExplicit(faq);
                }}
              >
                {faq}
              </button>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="send-btn" onClick={() => handleSend()}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeChatbot;
