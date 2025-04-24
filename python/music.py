import os

srcfile = "src/SleepAway.mp3"

if os.path.exists(srcfile):
    sfp = open(srcfile, 'rb')

    sfp.seek(-128, 2)
    tdata = sfp.read(128)

    title = tdata[3:33].decode()
    print('제목 : ', title)
    
    artist = tdata[33:63].decode()
    print('아티스트 : ', artist)

    album = tdata[63:93].decode()
    print('음반 문자열 : ', album)

    mdate = tdata[93:97].decode()
    print('출시년도 : ', mdate)
else:
    print('mp3파일이 존재하지 않습니다.')
