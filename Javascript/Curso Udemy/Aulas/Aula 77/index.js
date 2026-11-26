// 705.484.450-52 / 070.987.720-03
/*

Para calcular o CPF temos que multiplicar os numeros da esquerda para direita e hordem decrecente ( 10 ao 2 )
EX:
    7x 0x 5x 4x 8x 4x 4x 5x 0x
    10 9  8  7  6  5  4  3  2
    70 0  40 28 38 20 16 15 0 == 237

    11 - (237 % 11) == 5 (primeiro digito)
    Se o digito for maior que 9, consideramos 0.

*/
/*

// Para calcular o segundo digito, add o primeiro digito calculado e multiplicamos novamente em hordem decrecente ( 11 ao 2 )

    7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
    11 10 9  8  7  6  5  4  3  2
    70 0  40 28 38 20 16 15 0  10 == 284

    11 - (284 % 11) = 2 (Segundo Digito)
    Se der um digito maior que 9, e considerado 0.

*/

// Por fim vamos concatenar os CPF para ser valido

// OBS1: O CPF deve ser recevido como uma string
// OBS2: Para limpar CPF podemos usar o comando [ .replace(/\D+/g) ] isso remoive tudo oque n e um numero. e para tira basta acresetar isso ao comando [ .replace(/\D+/g, '')]


