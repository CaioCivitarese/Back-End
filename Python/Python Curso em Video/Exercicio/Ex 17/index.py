# Faça um programa que leia o comprimento do cateto oposto e do cateto adjacente de um triângulo retângulo. Calcule e mostre o comprimento da hipotenusa.
# from math import sqrt
# catop = float(input('Escreva o valor do cateto oposto: '))
# caad = float(input('Escreva o valor do cateto adjasente: '))

# fomul = sqrt(catop**2 + caad**2)

# print('O resultado da Hipotenusa desse triangulo é {}'.format(fomul))

from math import hypot
co = float(input('Comprimento do cateto oposto: '))
ca = float(input('Comprimento do cateto adjacente: '))
hi = hypot(co, ca)
print('A Hipotenusa vai medir {:.2f}'.format(hi))
