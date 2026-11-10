import {Cliente} from "./models/Cliente.js";

const Cliente1 = new Cliente(1, 'André Solicito', '068,753,540,98', '41.068.896-4', new Date(1980, 5, 23));

const Cliente2 = new Cliente(2, 'Janete de Oliveira', '501.764.310-98', '20.360.374-6', new Date(1970, 1, 12));

const Cliente3 = new Cliente(3, 'José de Almeida', '862.373.890-08', '42.172.423-7', new Date(1965, 7, 13));

console.log(Cliente1);
console.log(Cliente1.getAnoNascimento());
console.log(Cliente1.getCPF());
console.log(Cliente1.getNome());
console.log(Cliente1.getRG());

console.log(Cliente2);
console.log(Cliente2.getAnoNascimento());
console.log(Cliente2.getCPF());
console.log(Cliente2.getNome());
console.log(Cliente2.getRG());

console.log(Cliente3);
console.log(Cliente3.getAnoNascimento());
console.log(Cliente3.getCPF());
console.log(Cliente3.getNome());
console.log(Cliente3.getRG());