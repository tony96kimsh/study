import sqlite3

conn = sqlite3.connect('bookStoreDB')
print('1.DB 연결 성공')

cursor = conn.cursor()
print("2. 커서 생성 성공")

cursor.execute("CREATE TABLE IF NOT EXISTS bookItem (item char(100), author char(50), publisher char(50), stock int)")
print('데이블 생성')

cursor.execute("insert into bookItem values('java', 'kim', 'A', '100')")
cursor.execute("insert into bookItem values('python', 'lee', 'B', '200')")
cursor.execute("insert into bookItem values('c#', 'choi', 'C', '300')")
cursor.execute("insert into bookItem values('javascript', 'huk', 'D', '400')")

conn.commit()
print('5. 데이터 저장')

cursor.execute("select * from bookItem")
print("6.데이터 조회")

while True:
    row = cursor.fetchone()
    if(row == None):
        break
    print(row)
    
conn.close()
print("7. DB 종료")