import statistics
Sales = [12, 15, None, 18, None, 15, 20, None, 15]
Salesn = []
for sale in Sales:
    if(sale != None):
        Salesn.append(sale)
median = statistics.median(Salesn)
mode = statistics.mode(Salesn)
mean = statistics.mean(Salesn)

# median
for i in range(len(Sales)):
    if(Sales[i] is None):
        Sales[i] = median

print(Sales, sum(Sales))

# mode
Sales = [78, 85, None, 90, 88, None, 75, 85, None]


for i in range(len(Sales)):
    if(Sales[i] is None):
        Sales[i] = mode

print(Sales, sum(Sales))

# mean
Sales = [78, 85, None, 90, 88, None, 75, 85, None]
for i in range(len(Sales)):
    if(Sales[i] is None):
        Sales[i] = mean
    
print(Sales, sum(Sales))