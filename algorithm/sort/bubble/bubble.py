arr = [8, 4, 6, 2, 9, 1]

print('정렬 전 문자열:', arr)

###정렬
size = len(arr)

for i in range(size - 1):
	for j in range(size - i - 1):
		if arr[j] > arr[j+1]:
			arr[j], arr[j+1] = arr[j+1], arr[j]
        

print('정렬 후 문자열:', arr)