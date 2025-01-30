from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy import declarative_base

Base = declarative_base()

class Post(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True)
    content = Column(String)
    scheduled_at = Column(DateTime)
    platform = Column(String)