const A = [
    [2, 3],
    [4, 5]
];

const B = [
    [1, 4],
    [2, 1]
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
const resultado2 = multiplicarMatriz(B, A);

console.log("Multiplicação A x B:");
resultado.forEach(linha => {
    console.log('| ' + linha.join('\t') + ' |');
});

console.log("\n Multiplicação B x A:");
resultado2.forEach(linha => {
    console.log('| ' + linha.join('\t') + ' |');
});
