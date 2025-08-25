const A = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

const B = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

function podeMultiplicar(A, B) {
    return A[0].length === B.length;
}

function multiplicarMatriz(A, B) {
    if (!podeMultiplicar(A, B)) {
        throw new Error("As matrizes não podem ser multiplicadas: número de colunas de A deve ser igual ao número de linhas de B.");
    }

    const resultado = [];

    for (let i = 0; i < A.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < B[0].length; j++) {
            let soma = 0;
            for (let k = 0; k < A[0].length; k++) {
                soma += A[i][k] * B[k][j];
            }
            resultado[i][j] = soma;
        }
    }

    return resultado;
}

const resultado = multiplicarMatriz(A, B);

console.log("Resultado da Multiplicação:");
resultado.forEach(linha => {
    console.log('| ' + linha.join(' \t ') + ' |');
});
