###############
# 1 - Variáveis
###############

idade <- 21            # Atribuindo o valor 21 para a variável idade.
print(idade)           # Imprimindo no console o valor da variável idade.
class(idade)           # Imprime o tipo da variável,

altura <- 1.75         # Aqui, 'altura' é uma variável do tipo numeric,
class(altura)          # Imprime o tipo da variável.

nome <- "Victor"       # Aqui, 'nome' é uma variável do tipo character (string).
print(nome)            # Imprime o valor da variável.
class(nome)            # Imprime o tipo da variável.

nomes <- c("Victor", "Simone", "Marcelo")  # Aqui, 'nomes' é um vetor formado por elementos que são do tipo character.
print(nomes)                               # Imprime o valor da variável.
class(nomes)                               # Imprime o tipo da variável.
print(nomes[2])                            # Imprime o elemento que está na segunda posição do vetor nomes.


valores <- list(21, 1.76, "Paulo")
print(valores[[2]])
print(valores)
class(valores)

###############################################################
# 2 - Operadores aritméticos com as variáveis x e y
###############################################################

# Exemplo 2.1


x <- 9      # Variável x possui o valor 9.
y <- 2      # Variável y possui o valor 2.

soma <- x + y               # Adição
subtracao <- x - y          # Subtração
multiplicacao <- x * y      # Multiplicação
divisao <- x / y            # Divisão
divisao_inteira <- x %/% y  # Divisão Inteira
resto <- x %% y             # Resto da divisão inteira
potencia <- x ** y          # Potência

# Exibindo os resultados
sprintf("Soma: %d", soma)
sprintf("Subtração: %d", subtracao)
sprintf("Multiplicação: %d", multiplicacao)
sprintf("Divisão: %.1f", divisao)
sprintf("Divisão Inteira: %d", divisao_inteira)
sprintf("Resto da Divisão: %d", resto)
sprintf("Potência: %d", potencia)

# Exemplo 2.2

peso <- 80
altura <- 1.60
imc <- (peso / (altura * altura))  # Calcula o imc que é o índice de massa corporal de uma pessoa.

print(imc)                         # Imprime na tela o valor do imc calculado.

##########################
# 3 - Operadores lógicos 
##########################

# Exemplo 3.1

x <- TRUE
y <- FALSE

resultado <- (x && y)  # && é o operador lógico 'E'.
print(resultado)

# Exemplo 3.2

a <- TRUE
b <- FALSE

resultado <- (a || b)  # || é o operador lógico 'OU'.
print(resultado)

# Exemplo 3.3

c <- TRUE

resultado <- !c    # ! é operador de negação.

print(resultado)

# Exemplo 3.4

idade <- 18

if (idade >= 18) {                  # 'if' e 'else' formam uma estrutura de controle condicional e precisam de { e } .
  print("Você é maior de idade.")   # Se a idade for maior ou igual a 18.
} else {                            # O 'else' indica o que deve ser executado se o resultado do 'if' for falso. 
  print("Você é menor de idade.")   # Se a condição acima não for vedadeira.
}

# Exemplo 3.5

idade <- 22
temPermissao <- TRUE

if ((idade >= 18) && temPermissao) {   # && é o operador lógico 'E'.
  print("Pode entrar.")
} else {
  print("Não pode entrar.")
}

# Exemplo 3.6

clima <- "ensolarado"

if (clima == "chuvoso") {                                 # Estrutura de controle 'if'.
  print("Lembre-se de levar um guarda-chuva!")
} else if (clima == "ensolarado") {                       # Estrutura 'else if' complementar ao 'if'.
  print("Ótimo dia para atividades ao ar livre.") 
} else if (clima == "nublado") {                          # Estrutura 'else if' complementar ao 'if'.
  print("Talvez não seja tão ensolarado, mas ainda bom.")
} else {                                                  # Se nenhuma das condições acima for verdadeira.
  print("Condição meteorológica desconhecida.")
}

# Exemplo 3.7

frutas <- c("maçã", "banana", "uva")

for (fruta in frutas) {   # O 'for' é uma estrutura de repetição (laço/loop).
  print(fruta)            # Imprime na tela a cada ciclo o nome da fruta correspondente.
}

# Exemplo 3.8

for (i in 1:5) {      # 1:5 gera uma sequência de números inteiros de 1 a 5.
  print(i)
}

# Exemplo 3.9

for (i in 1:5) {      # Imprime os números de 1 a 5, exceto o 3.
  if (i != 3) {
    print(i)
  }
}

# Exemplo 3.10

contador <- 0

while (contador < 5) {      # Estrutura de repetição 'while' utilizada para contar de 0 a 5.
  print(contador)           # Imprime o valor da variável contador no console.
  contador = contador + 1   # Incrementa de 1 o valor da variável contador.
}

##################
# 8 - Funções
##################

# Exemplo 8.1

nomeDaFuncao <- function (parametro1, parametro2) {   # Definição da função.
  resultado <- 0
  
  # Corpo da função.
  # Realiza operações com os parâmetros e/ou variáveis locais.
  
  return (resultado) # Valor que será retornado pela função.
}


# Exemplo 8.2

# Esta função imprime uma saudação.

saudacao <- function (nome) {
  sprintf("Olá %s.", nome)
}

# Chamando (executando) a função saudacao.

saudacao("Victor")

# Exemplo 8.3 - Esta função retorna a soma de dois números.

soma <- function (valor1, valor2) {
  resultado <- 0
  resultado <- (valor1 + valor2)
  return (resultado)
}

# Chamando a função e armazenando o resultado retornado.

resultadoSoma <- soma(3, 5)

# Imprime o valor da variável resultado no console.

print(resultadoSoma)

##########################
# 9 - Bibliotecas
##########################

install.packages("tidyverse")
install.packages("readxl")
install.packages("plotly")
install.packages("geobr")
install.packages("sf")

setwd("H:\\Laboratorio\\Arquivos")   # Alunos

# Exemplo 9.1

library(tidyverse) # Importando a biblioteca

# O arquivo DadosRJ.csv contém o código, a população e o PIB per capita dos municípios do Estado do RJ para um dado ano.

dadosEstadoRJ <- read.csv2("DadosRJ.csv") # data frame montado.

summary(dadosEstadoRJ)      # Apresenta informações úteis do data frame.
str(dadosEstadoRJ)          # Apresenta a estrutura do data frame.
head(dadosEstadoRJ)         # Apresenta as primeiras linhas do data frame.
print(nrow(dadosEstadoRJ))  # Número de linhas (registros).
print(ncol(dadosEstadoRJ))  # Número de colunas (atributos).

mediaPopulacao <- mean(dadosEstadoRJ$populacao)          # Calcula a média da coluna 'populacao'. 
sprintf("Média da população: %d", round(mediaPopulacao)) # Apresenta a média da população.

# Cria o data frame dadosEstadoRJFiltrado contendo somente os registro do data frame 
# dadosEstadoRJ que possuem o atributo 'populacao' com valor acima da média da população.

dadosEstadoRJFiltrado <- filter(dadosEstadoRJ, populacao > mediaPopulacao) # O comando 'filter' seleciona os registros.

summary(dadosEstadoRJFiltrado)      # Apresenta informações úteis do data frame.
str(dadosEstadoRJFiltrado)          # Apresenta a estrutura do data frame.
print(nrow(dadosEstadoRJFiltrado))  # Número de linhas (registros).

# Salva no arquivo DadosRJFiltrado.csv o dados do data frame dadosEstadoRJFiltrado.

write.csv2(dadosEstadoRJFiltrado, "DadosRJFiltrado.csv", row.names = FALSE) 

# Exemplo 9.2

library(tidyverse)
library(readxl)
library(plotly)

# PIBMunicípios20102021.xlsx é uma planilha co Excel contendo dados dos municípios do Estado do RJ de 2010 a 2021.

dadosMunicipio <- read_excel("PIBMunicípios20102021.xlsx")
dadosMunicipio <- filter(dadosMunicipio, CodigoMunicipio == "3304557") # Município do Rio de Janeiro https://www.ibge.gov.br/cidades-e-estados/rj/rio-de-janeiro.html

grafico <- ggplot(data = dadosMunicipio) +
  geom_line(aes(x = Ano, y = PIBPerCapita)) +
  labs(title = "PIB per Capita do Município do Rio de Janeiro", x = "Ano", y = "R$")

ggplotly(grafico)

# Exemplo 9.3

library(tidyverse)
library(geobr)
library(sf)

# A função read_municipality o pacote geobr baixa os dados espaciais dos municípios brasileiros.
# No exemplo estamos trabalhando com os dados de 2021.

municipios <- read_municipality("RJ", 2021)

# O arquivo DadosRJ.csv contém o código, a população e o PIB per capita dos municípios do Estado do RJ para um dado ano.

dadosRJ <- read.csv2("DadosRJ.csv")

# Vamos 'juntar dos dados' para gerar um mapa pelo PIB per capita.

mapa.com.dados <- left_join(municipios, dadosRJ, by = c("code_muni" = "codigo"))

ggplot(data = mapa.com.dados) + 
  geom_sf(aes(fill = pibpercapta)) +
  labs(title="PIB per Capita dos Municípíos do RJ", fill="PIB per Capita") +
  scale_fill_distiller (palette = "Greens")

# Exemplo 9.4

library(tidyverse)
library(readxl)
library(geobr)
library(sf)
library(plotly)

municipios <- read_municipality("RJ", 2021)

dados <- read_excel("PIBMunicípios20102021.xlsx")
dados <- filter(dados, (dados$SiglaUF == "RJ") & (dados$Ano == 2010)) # Testar com 2021

mapa.com.dados <- left_join(municipios, dados, by = c("code_muni" = "CodigoMunicipio"))

mapa <- ggplot(data = mapa.com.dados) + 
  geom_sf(aes(fill = PIBPerCapita, text = name_muni)) +
  labs(title = "PIB per Capita dos Municípíos do RJ", fill = "PIB per Capita") +
  scale_fill_distiller (palette = "Greens", direction = 1)

ggplotly(mapa, tooltip = 'text')

