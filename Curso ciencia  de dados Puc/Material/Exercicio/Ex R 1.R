v0 = 0
a = 2
t = 5

calcularVelocidade <- function (v0, a, t) {   # Definição da função.
  # Corpo da função.
  v = 0.0
  v = v0 + a * t
  return (v) # Valor que será retornado pela função.
}

velocidade <- calcularVelocidade(v0, a, 5)

v0 = 6
a = 2
t  = 5

velocidade <- calcularVelocidade(v0,  a, t)