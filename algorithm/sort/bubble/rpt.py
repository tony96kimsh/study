# 버블 정렬 파이썬 구현
arr = list(map(int, input('정수 6개 입력: ').split()))
size = len(arr)

for i in range(size - 1):
	for j in range(size - i - 1):
		if arr[j] > arr[j+1]:
			arr[j], arr[j+1] = arr[j+1], arr[j]
	print(arr)