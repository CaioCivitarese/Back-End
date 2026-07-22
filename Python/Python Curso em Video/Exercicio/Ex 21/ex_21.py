# Exercício Python 21:
# Faça um programa em Python que abra e reproduza o áudio de um arquivo MP3.
import pygame
pygame.init()
pygame.mixer_music.load('/home/caiochivis/www/Back-End/Python Curso em Video/Exercicio/Ex 21/aula21.mp3')
pygame.mixer_music.play
pygame.event.wait
