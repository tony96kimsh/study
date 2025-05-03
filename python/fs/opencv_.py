'''
import cv2

img1 = cv2.imread('2.png', 1)
img2 = cv2.imread('2.png', cv2.IMREAD_GRAYSCALE)

cv2.imshow('Test Image1', img1)
cv2.imshow('Test Image2', img2)
cv2.waitKey(0)
cv2.destroyAllWindows()
'''
'''
import cv2

img1 = cv2.imread('2.png', 1)  # 컬러
img2 = cv2.imread('2.png', cv2.IMREAD_GRAYSCALE)  # 흑백

cv2.imshow('Color Image', img1)
cv2.imshow('Grayscale Image', img2)
cv2.waitKey(0)
cv2.destroyAllWindows()

# 이미지를 다른 파일로 저장
cv2.imwrite('me.png', img2)
'''
'''import cv2

cap = cv2.VideoCapture(0)  # 0번은 기본 웹캠

cap.get(cv2.CAP_PROP_FRAME_WIDTH)
height = cap.get(cv2.CAP_PROP_FRAME_HEIGHT)

fourcc = cv2.VideoWriter_fourcc(*'mp4')
write = cv2.VideoWriter('text.mp4', fourcc, 24, (int(width), int(height)))

while cap.isOpened():
    success, frame = cap.read()
    if success:
        cv2.imshow('Camera Window', frame)

        key = cv2.waitKey(1) & 0xFF
        if key == 27:  # ESC 키 입력 시 종료
            break
    else:
        break

cap.release()
cv2.destroyAllWindows()'''
'''
import cv2

cap = cv2.VideoCapture(0)

width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

# MP4용 코덱 ('avc1' 또는 'mp4v'가 잘 작동함)
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
out = cv2.VideoWriter('output.mp4', fourcc, 24, (width, height))

while cap.isOpened():
    success, frame = cap.read()
    if success:
        out.write(frame)  # 프레임 저장
        cv2.imshow('Camera Window', frame)

        if cv2.waitKey(1) & 0xFF == 27:  # ESC 키
            break
    else:
        break

cap.release()
out.release()
cv2.destroyAllWindows()
'''

'''
from matplotlib import pyplot as plt

x = [1, 2, 3, 4]
y = [10, 20, 25, 30]

plt.plot(x, y)         # 선 그래프 그리기
plt.title('My Chart')  # 제목 추가
plt.xlabel('x-axis')   # x축 이름
plt.ylabel('y-axis')   # y축 이름
plt.show()             # 그래프 화면에 출력
'''


import cv2
from matplotlib import pyplot as plt

img = cv2.imread('1.png', 1)
cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
plt.imshow(img)
plt.show()