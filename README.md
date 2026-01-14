# QuickNote – Simple Note-Taking Application

A full-stack note-taking application with Markdown support, built with Django REST Framework and React.

![Python](https://img.shields.io/badge/Python-3.13+-blue)
![Django](https://img.shields.io/badge/Django-6.0+-green)
![React](https://img.shields.io/badge/React-19+-61DAFB)

## Features

- ✨ **Markdown Support** – Write notes with full Markdown formatting and live preview
- 🏷️ **Tag Organization** – Organize notes with comma-separated tags
- 🔍 **Smart Search** – Search across titles, content, and tags
- 🌙 **Dark/Light Mode** – Toggle between themes with persistence
- 📱 **Responsive Design** - Works on desktop and mobile
- ⚡ **Real-time Updates** – Instant feedback on all operations

## Prerequisites

- Python 3.13+
- Node.js 20+
- [uv](https://github.com/astral-sh/uv) (Python package manager)
- Docker & Docker Compose (optional)

## Quick Start (Docker)

```bash
# Clone the repository
git clone https://github.com/ArtTheAche98/QuickNote.git
cd QuickNote

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration if needed


# Start all services
docker-compose up --build

# Access the application
# Frontend: http://localhost:5173
# Backend API: http://localhost:8000
```

## Manual Setup

### Backend

```bash
# Install uv if not already installed
curl -LsSf https://astral.sh/uv/install.sh | sh

# Navigate to the project directory
cd QuickNote

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration (SECRET_KEY, DEBUG, etc.)

# Install dependencies
uv sync

# Run migrations
uv run python manage.py migrate

# Start development server
uv run python manage.py runserver
```

### Frontend

```bash
# Navigate to the frontend directory
cd QuickNoteFrontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## API Endpoints

| Method | Endpoint           | Description                                |
|--------|--------------------|--------------------------------------------|
| GET    | `/api/notes/`      | List all notes (supports `?search=` query) |
| POST   | `/api/notes/`      | Create a new note                          |
| GET    | `/api/notes/{id}/` | Retrieve a specific note                   |
| PUT    | `/api/notes/{id}/` | Update a note                              |
| DELETE | `/api/notes/{id}/` | Delete a note                              |

## Request/Response Example

```javascript
// POST /api/notes/
{
  "title": "My Note",
  "text": "# Hello\nThis is **markdown** content",
  "tags": "work, ideas"
}

// Response
{
  "id": 1,
  "title": "My Note",
  "text": "# Hello\nThis is **markdown** content",
  "tags": "work, ideas",
  "tags_list": ["work", "ideas"],
  "created_at": "2026-01-15T10:30:00Z",
  "updated_at": "2026-01-15T10:30:00Z"
}
```

## Project Structure

```
QuickNote/
├── QuickNote/                  # Django project settings
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── QuickNoteApp/               # Django app
│   ├── __init__.py
│   ├── models.py               # Note model
│   ├── serializers.py          # DRF serializers
│   ├── views.py                # API views
│   ├── urls.py                 # URL routing
│   ├── admin.py
│   ├── apps.py
│   └── migrations/
        ├── __init__.py
│       └── 0001_initial.py
├── QuickNoteFrontend/          # React frontend
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NoteForm.jsx
│   │   │   ├── NoteList.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── services/           # API service
│   │   │   └── api.jsx
│   │   ├── hooks/              # Custom hooks
│   │   │   └── useDebounce.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── index.html
│   ├── Dockerfile
│   └── .dockerignore
├── docker-compose.yml
├── Dockerfile
├── .dockerignore
├── pyproject.toml
├── uv.lock
├── manage.py
├── db.sqlite3
├── .gitignore
└── README.md

```

## Security Considerations

### Implemented

- ✅ **Environment Variables** – Sensitive settings in environment variables
- ✅ **CORS** – Configured with django-cors-headers
- ✅ **Input Validation** - DRF serializers validate all input
- ✅ **SQL Injection Prevention** - Django ORM parameterized queries
- ✅ **XSS Protection** – React escapes output by default

### Production TODOs

- 🔲 **Authentication** – Add JWT or session-based auth
- 🔲 **Rate Limiting** – Implement request throttling
- 🔲 **HTTPS** – Configure SSL/TLS
- 🔲 **Database** – Switch from SQLite to PostgreSQL

## Tech Stack

| Layer           | Technology                        |
|-----------------|-----------------------------------|
| Backend         | Django 6.0, Django REST Framework |
| Frontend        | React 19, Material-UI, Vite       |
| Styling         | MUI Theme System                  |
| Markdown        | react-markdown                    |
| Package Manager | uv (Python), npm (Node)           |

## Extra Features

This project implements three additional features beyond the core requirements:

1. **Markdown Support with Live Preview** – Write notes using Markdown syntax with a real-time preview tab that renders formatted content as you type.

2. **Tag-based Organization** – Add comma-separated tags to notes for easy categorization and filtering. Tags are displayed as chips on note cards.

3. **Theme Switching with Persistence** – Toggle between light and dark themes with a single click. Your preference is saved to localStorage and persists across sessions.

4. **Smart Sorting** – The notes are being sorted by the last modified date.

## License

MIT License – feel free to use this project for learning or as a starting point.

---

Built with ❤️ by [ArtTheAche98](https://github.com/ArtTheAche98)
