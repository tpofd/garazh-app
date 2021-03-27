import sys
# для настройки баз данных
from sqlalchemy import Column, ForeignKey, Integer, String

# для определения таблицы и модели
from sqlalchemy.ext.declarative import declarative_base

# для создания отношений между таблицами
from sqlalchemy.orm import relationship

# для настроек
from sqlalchemy import create_engine

# создание экземпляра declarative_base
Base = declarative_base()


# мы создаем класс Book наследуя его из класса Base.
class Users(Base):
    __tablename__ = 'users'

    uid = Column(Integer, primary_key=True)
    username = Column(String(250), nullable=False)
    role = Column(Integer, nullable=False)

class Dudes(Base):
    __tablename__ = 'dudes'
    id = Column(Integer, primary_key=True)
    description = Column(String(250), nullable=False)
    isCompleted = Column(Integer, nullable=False)

class Expositions(Base):
    __tablename__ = 'expositions'
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)

class Movings(Base):
    __tablename__ = 'movings'
    user_id = Column(Integer, primary_key=True)
    action_date = Column(String)
    picture_id = Column(Integer)

class Pictures(Base):
    __tablename__ = 'pictures'
    picture_id = Column(Integer, primary_key=True)
    event_id  = Column(Integer)
    x = Column(Integer)
    y = Column(Integer)
    event_name = Column(String(250))


engine = create_engine('mysql+pymysql://remote:Password123!!!@40.115.108.198/garazh_analytics')# Свяжим engine с метаданными класса Base,
Base.metadata.create_all(engine)
