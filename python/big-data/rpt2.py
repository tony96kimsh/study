'''
수업시간에 사용했던 seoul.csv 자료를 기반으로 한다.
가설: 최근 30년 동안(예: 1990년대 이후) 
폭염일수(일 최고기온 33도 이상인 날)가 과거 30년보다 더 많아졌다.

설명: 기후 변화로 인해 서울에서 여름철 폭염 현상이 증가했을 가능성이 있다.
폭염일수를 연도별로 비교 분석하여
서울의 여름 기후가 얼마나 더워졌는지 확인할 수 있다.

1907년 이후 매년 서울에서 발생한 폭염일수를 계산하고,
폭염일수가 유의미하게 증가했는지 검증하라.(필요시 데이터 시각화)
'''

import csv
hot_day  = 0
hot_day_list = []

with open('seoul.csv', 'r') as f:
    reader = csv.reader(f)
    header = next(reader)
    data = list(reader)
    for year in range(1908, 2018):
        for row in data:
            if row[0].startswith(str(year)) and row[4] != '':
                if float(row[4]) >= 33.0:
                    hot_day += 1
        hot_day_list.append(hot_day)
        hot_day = 0
    print(hot_day_list)

