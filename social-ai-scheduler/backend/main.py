from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.post import Post

app = FastAPI()

# CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Social AI Scheduler API"}

from services.ai import generate_post

@app.post("/generate")
async def generate(prompt: str):
    return {"content": generate_post(prompt)}

from models.post import Post

@app.post("/schedule")
async def schedule_post(content: str, scheduled_at: str):
    # Save to database
    return {"status": "scheduled"}