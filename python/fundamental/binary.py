import os

srcfile = './1.jpeg'
destfile = './1copy.jpeg'

if os.path.exists(srcfile):
    sfp = open(srcfile, 'rb')  # encoding 제거
    dfp = open(destfile, 'wb')  # encoding 제거

    while True:
        sbyte = sfp.read(1024)  # 버퍼 사이즈를 지정하면 더 효율적
        if not sbyte:
            break
        dfp.write(sbyte)

    sfp.close()
    dfp.close()

    print("이미지 복사 완료")
else:
    print(f"{srcfile} 파일이 존재하지 않습니다.")