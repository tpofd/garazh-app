from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
# импортируем классы Book и Base из файла database_setup.py
from database_setup import Users, Dudes, Expositions, Pictures, Movings
from database_setup import Base
engine = create_engine('mysql+pymysql://remote:Password123!!!@40.115.108.198/garazh_analytics')# Свяжим engine с метаданными класса Base,
# чтобы декларативы могли получить доступ через экземпляр DBSession
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
# Экземпляр DBSession() отвечает за все обращения к базе данных
# и представляет «промежуточную зону» для всех объектов,
# загруженных в объект сессии базы данных.
session = DBSession()

def add_user(name, role): #+
    bookOne = Users(username=name, role=role)
    session.add(bookOne)
    session.commit()

def add_dude(description): #+
    bookOne = Dudes(description=description, isCompleted=0)
    session.add(bookOne)
    session.commit()

def add_exposition(name): #+
    bookOne = Expositions(name=name)
    session.add(bookOne)
    session.commit()

def add_moving(user_id, action_date, picture_id): #+
    bookOne = Movings(user_id=user_id, action_date=action_date, picture_id=picture_id)
    session.add(bookOne)
    session.commit()

def add_picture(event_id, x, y,event_name): #+
    bookOne = Pictures(event_id=event_id, x=x,y=y, event_name=event_name)
    session.add(bookOne)
    session.commit()

def get_all_users(): #+
    print("All users")
    for us in session.query(Users).all():
        print(vars(us)['role'])
    return session.query(Users).all()

def get_user(uid):
    print("All users")
    u = session.query(Users).filter_by(uid=uid).first()
    if u is not None:
        print(u.uid)
    return u

def get_dude_movings(user_id): #+
    #print("All movings by id")
    print(user_id)
    u = engine.execute("select * from movings where user_id={}".format(user_id))
    #print(u)
    return u
def set_dude_status(user_id,status): #+
    #print("All movings by id")
    print(user_id)
    u = engine.execute("UPDATE movings SET isCompleted={} WHERE user_id={}".format(status,user_id))
    #print(u)
    return u

def get_all_pictures(): #+
    print("All pictures")
    for us in session.query(Pictures).all():
        print(vars(us))
    return session.query(Pictures).all()

def get_all_exps(): #+
    print("All exps")
    for us in session.query(Expositions).all():
        print(vars(us))
    return session.query(Expositions).all()

def move_user(user_id, picture_id): #+
    engine.execute("INSERT INTO movings(user_id, action_date, picture_id) VALUES ({}, NULL, {})".format(user_id,picture_id))
    session.commit()

def get_plan(sid):
    #get all pictures objects in specifified exposition
    print("here")
    u = engine.execute("SELECT * FROM pictures WHERE event_id={}".format(sid))
    return u
