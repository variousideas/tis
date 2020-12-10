from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse # 불필요

def index(request):
    if request.method == 'POST':
        return render(request, 'main/index.html',{'trs':range(9), 'tds':range(9)})
    else:
        return render(request, 'main/index.html',{'trs':range(9), 'tds':range(9)})

def simulate(request):
    return render(request, 'main/simulate.html')