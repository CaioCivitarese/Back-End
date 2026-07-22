# Faça um programa que leia algo pelo teclado e mostre na tela o seu tipo primitivo e todas as informações possiveis sobre ele

a = input("Digite algo: ")

print('O tipo primitivo desse valor é ', type(a))
print('Só tem espaços? ',a.isspace())
print('É um numero?', a.isnumeric())
print('É alfabetico??', a.isalpha())
print('É alfanumerico?', a.isalnum())
print('Está em maiúsculas?', a.isupper())
print('Está minúscula?', a.islower())
print('Está capitalizada? ', a.istitle())
