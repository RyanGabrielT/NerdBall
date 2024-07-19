<h1>NerdBall</h1>
<br>
<h2 align="center">Colisão</h2>

<p>Ao movimento da elipse, todos os lados devem ter uma colisão. Ao colidir, a elipse deverá retornar à posição inicial, ou seja, x e y = 0, e parar.</p>

<h3>Colisão lado superior</h3>
<p>Para fazer a colisão no lado superior, é necessário pegar a posição y (vertical da elipse), adicionar metade da altura da elipse, e verificar se é maior ou igual à posição y do retângulo menos metade da altura do retângulo.</p>

<h3>Colisão lado direito</h3>
<p>Para fazer a colisão no lado direito, é necessário pegar a posição x (horizontal da elipse), adicionar metade da largura da elipse, e verificar se é maior ou igual à posição x do retângulo menos metade da largura do retângulo.</p>

<h3>Colisão lado inferior</h3>
<p>Para fazer a colisão no lado inferior, é necessário pegar a posição y (vertical da elipse), subtrair metade da altura da elipse, e verificar se é menor ou igual à posição do y retângulo mais metade da altura do retângulo.</p>

<h3>Colisão lado esquerdo</h3>
<p>Para fazer a colisão no lado esquerdo, é necessário pegar a posição x (horizontal da elipse), subtrair metade da largura da elipse, e verificar se é menor ou igual à posição x do retângulo mais metade da largura do retângulo.</p>
