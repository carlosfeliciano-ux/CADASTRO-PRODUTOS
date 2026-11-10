import {Cliente} from "./models/Cliente.js";

const cliente1 = new Cliente(1, 'André Solicito', '068,753,540,98', '41.068.896-4', new Date(1980, 5, 23));

const cliente2 = new Cliente(2, 'Janete de Oliveira', '501.764.310-98', '20.360.374-6', new Date(1970, 1, 12));

const cliente3 = new Cliente(3, 'José de Almeida', '862.373.890-08', '42.172.423-7', new Date(1965, 7, 13));

console.log(cliente1);
console.log(cliente1.getAnoNascimento());
console.log(cliente1.getCPF());
console.log(cliente1.getNome());
console.log(cliente1.getRG());

console.log(cliente2);
console.log(cliente2.getAnoNascimento());
console.log(cliente2.getCPF());
console.log(cliente2.getNome());
console.log(cliente2.getRG());

console.log(cliente3);
console.log(cliente3.getAnoNascimento());
console.log(cliente3.getCPF());
console.log(cliente3.getNome());
console.log(cliente3.getRG());