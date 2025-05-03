import os

srcfile = './test.txt'
destfile = './dest.txt'

if os.path.exists(srcfile) :
    sfp = open(srcfile, 'r', encoding='utf-8')
    dfp = open(destfile, 'w', encoding='utf-8')

    slist = sfp.readlines()
    for str in slist:
        dfp.writelines(str)

    sfp.close() 
    dfp.close()

    print('복사 성공')
else:
    print('%s 파일이 존재하지 않습니다.' %srcfile )