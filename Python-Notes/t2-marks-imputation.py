import statistics
Marks = [78, 85, None, 90, 88, None, 75, 85, None]
Marksn = []
for mark in Marks:
    if(mark != None):
        Marksn.append(mark)
median = statistics.median(Marksn)
mode = statistics.mode(Marksn)
mean = statistics.mean(Marksn)

# median
for i in range(len(Marks)):
    if(Marks[i] is None):
        Marks[i] = median

print(Marks)

# mode
Marks = [78, 85, None, 90, 88, None, 75, 85, None]


for i in range(len(Marks)):
    if(Marks[i] is None):
        Marks[i] = mode

print(Marks)

# mean
Marks = [78, 85, None, 90, 88, None, 75, 85, None]
for i in range(len(Marks)):
    if(Marks[i] is None):
        Marks[i] = mean

print(Marks)