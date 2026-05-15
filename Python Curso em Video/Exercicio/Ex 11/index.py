# Faça um programa que leia a largura e a altura de uma parede em metros, calcule a sua aria e a quantidade de litros de tinta necessaria para pintar-la, sabendo que cada litro de tinta, pinta uma aria de 2m².

n1 = int(input('Escreva a altura: '))
n2 = int(input('Ecreva a largura: '))

aria = n1 * n2
litrosDeTinta = aria / 2

print(litrosDeTinta)