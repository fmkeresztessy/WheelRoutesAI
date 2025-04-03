# WheelRoute ♿🗺️
**AI-Powered Vacation Planner for Wheelchair-Friendly Travel**

**WheelRoute** is a generative AI tool that helps users plan inclusive, accessible travel experiences. From step-free museums in Paris to ADA-compliant hotels in New York, it creates tailored, barrier-free itineraries from natural language prompts.

## ✨ Features
- Natural language input via Google Sheets
- GPT-generated, multi-day wheelchair-accessible itineraries
- Accessibility metadata: ramps, elevators, step-free paths, etc.
- Exportable travel plans directly in Sheets
- Optional filters: destination, duration, interests, budget
- Future vision: integrate real-time accessibility data via APIs

## 🛠 Tech Stack
- OpenAI GPT-4 API
- Google Apps Script (custom Sheets UI + prompt handling)
- Wheelmap API, OpenStreetMap wheelchair tags
- Additional sources: Wikivoyage, Google Places, AccessibleTravelWiki

## 📁 Project Structure
```
WheelRoute/
├── code/
│   └── wheelroute.gs
├── examples/
│   └── sample_accessible_prompts.md
├── README.md
└── .gitignore
```

## 🧪 Example Prompt
> “Plan a 5-day accessible trip to Rome for a history lover using a wheelchair. Keep it under $1,200.”

## 📅 Timeline
- April 5 – Sheet UI + prompt input
- April 10 – GPT-based itinerary generation
- April 18 – Accessibility tagging and formatting
- April 25 – Final polish, testing, and walkthrough

## 🔗 Repository Info
GitHub Repo: https://github.com/yourusername/WheelRoute
Shared With:
- sendag@uri.edu
- justin_watkins@uri.edu

## 📄 License
MIT License — for educational and non-commercial use.
