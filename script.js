var listaFilmes = ["https://i.pinimg.com/236x/bb/0d/7b/bb0d7b82704cdb927533c5c3a2c86ff2.jpg", "https://miro.medium.com/max/1000/1*2KNDaurxwRE5na59NBVYTA.jpeg", "https://i.pinimg.com/236x/57/a3/51/57a35146dc5ca0a13df777b60e9ac3ea.jpg", "https://miro.medium.com/max/1200/1*jBrFuoRqSRJo9yU55GjJZw.jpeg"]

for (var i = 0; i < listaFilmes.length; i++){
  document.write("<img src=" + listaFilmes[i] + ">")
}