// lista de arquivos
const arquivos = [
  "foto1.png",
  "foto2.jpg",
  "foto3.png",
  "relatorio.pdf",
  "trabalho.pdf",
  "foto4.png",
  "musica.mp3",
  "foto5.jpg",
  "relatorio2.pdf",
  "video.mp4",
  "foto6.png",
  "musica2.mp3"
];

let procurar = prompt("qual arquivo deseja procurar?");
// filtra arquivos PDF
console.log(arquivos.filter(a => a.endsWith("pdf")));

// filtra arquivos que começam com "foto"
console.log(arquivos.filter(a => a.startsWith("foto")));

// verifica se existe um arquivo na lista
console.log(arquivos.includes("musica.mp3"));
