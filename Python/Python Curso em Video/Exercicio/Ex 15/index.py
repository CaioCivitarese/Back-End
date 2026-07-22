# Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0,15 por Km rodado

p1 = int(input('Escreva quantos km vc rodou: '))
d1 = float(input('Escreva quantos dias vc rodou: '))

diasResultado = d1 * 60
kmRodado = p1 * 0.15
totalRodado = diasResultado + kmRodado

print('O total a pagar e R${}'.format(totalRodado))
