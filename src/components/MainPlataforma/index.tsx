import React from "react";

import './MainPlataforma.css'

import Logo from '../../assets/logo.png';
import imgMenu from '../../assets/menu.png';
import imgClose from '../../assets/close.png';

function MainPlataforma() {
    return (
        <>
          <div className="menu-mobile">
    <div className="menu-hamburguer-open">
      <img src={imgMenu} alt="" />
    </div>
    
    <div className="menu-hamburguer">
      <div className="menu-hamburguer-close">
        <img src={imgClose} alt="" />
      </div>
      <div className="menu-hamburguer-links">
        <ul>
          <li>
            <a className="PlataformaBarraLateralVideos PlataformaLinkVideo" id="video3">
              <p>Vídeo 3 - Realização do Projeto</p>
            </a>
          </li>
          <li>
            <a className="PlataformaBarraLateralVideos PlataformaLinkVideo" id="video4">
              <p>Vídeo 3 Profético - Atividade Especial Divina</p>
            </a>
          </li>
          <li>
            <a className="PlataformaBarraLateralVideos PlataformaLinkVideo" id="video5">
              <p>Vídeo 5 - Quem é esse Deus da bíblia?</p>
            </a>
          </li>
          <li>
            <a className="PlataformaBarraLateralVideos PlataformaLinkVideo" id="video6">
              <p>Vídeo 6 - A Origem do Mal</p>
            </a>
          </li>
          <li>
            <a className="PlataformaBarraLateralVideos PlataformaLinkVideo" id="video7">
              <p>
                Vídeo 7 - Gênesis parte I criação do mundo, tentação e queda e o
                primeiro assassinato.
              </p>
            </a>
          </li>
          <li>
            <a className="PlataformaBarraLateralVideos PlataformaLinkVideo" id="video8">
              <p>Vídeo 8 - Gênesis parte II Nóe 6, 7, 8 e 9.</p>
            </a>
          </li>
          <li>
            <a className="PlataformaBarraLateralVideos PlataformaLinkVideo" id="video9">
              <p>Vídeo 9 - Gênesis parte III - A torre de Babel cap. 11</p>
            </a>
          </li>
          <li>
            <a className="PlataformaBarraLateralVideos PlataformaLinkVideo" id="video10">
              <p>Vídeo 10 - Gênesis parte IV Abraão, subparte I cap. 12 e 13.</p>
            </a>
          </li>
          <li>
            <a className="PlataformaBarraLateralVideos PlataformaLinkVideo" id="video11">
              <p>Vídeo 11 - Gênesis parte V, subparte II cap. 14.</p>
            </a>
          </li>
          <li>
            <a className="PlataformaBarraLateralVideos PlataformaLinkVideo" id="video12">
              <p>Vídeo 12 - Gênesis parte VI, subparte III cap. 15 a 17.</p>
            </a>
          </li>
          <li>
            <a className="PlataformaBarraLateralVideos PlataformaLinkVideo" id="video13">
              <p>Vídeo 13 - Gênesis parte VII, subparte IV cap. 18 a 20.</p>
            </a>
          </li>
          <li>
            <a className="PlataformaBarraLateralVideos PlataformaLinkVideo" id="video14">
              <p>Vídeo 14 - Gênesis parte VIII, subparte V cap. 20 a 22.</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <header>
    <div className="PlataformaHeader">
      <div className="PlataformaHeaderlogo">
        <a href="/"><img src={Logo} alt="" /></a>
      </div>
      <div className="PlataformaTitulo">
        <p id="PlataformaTituloVideo">Vídeo 3 - Realização do Projeto</p>
      </div>
    </div>
  </header>

  <main className="PlataformaMain">
    <nav className="PlataformaBarraLateral">
      <div className="PlataformaBarraLateralLinks">
        <ul id="PlataformaBarraLateralMenu">
          <div className="PlataformaBarraLateralVideos" id="video3">
            <a className="LinkVideo" id="video3">
              <p>Vídeo 3 - Realização do Projeto</p>
            </a>
          </div>
          <div className="PlataformaBarraLateralVideos" id="video4">
            <a className="LinkVideo" id="video4">
              <p>Vídeo 3 Profético - Atividade Especial Divina</p>
            </a>
          </div>
          <div className="PlataformaBarraLateralVideos" id="video5">
            <a className="LinkVideo" id="video5">
              <p>Vídeo 5 - Quem é esse Deus da bíblia?</p>
            </a>
          </div>
          <div className="PlataformaBarraLateralVideos" id="video6">
            <a className="LinkVideo" id="video6">
              <p>Vídeo 6 - A Origem do Mal</p>
            </a>
          </div>
          <div className="PlataformaBarraLateralVideos" id="video7">
            <a className="LinkVideo" id="video7">
              <p>
                Vídeo 7 - Gênesis parte I criação do mundo, tentação e queda e o
                primeiro assassinato.
              </p>
            </a>
          </div>
          <div className="PlataformaBarraLateralVideos" id="video8">
            <a className="LinkVideo" id="video8">
              <p>Vídeo 8 - Gênesis parte II Nóe 6, 7, 8 e 9.</p>
            </a>
          </div>
          <div className="PlataformaBarraLateralVideos" id="video9">
            <a className="LinkVideo" id="video9">
              <p>Vídeo 9 - Gênesis parte III - A torre de Babel cap. 11</p>
            </a>
          </div>
          <div className="PlataformaBarraLateralVideos" id="video10">
            <a className="LinkVideo" id="video10">
              <p>Vídeo 10 - Gênesis parte IV Abraão, subparte I cap. 12 e 13.</p>
            </a>
          </div>
          <div className="PlataformaBarraLateralVideos" id="video11">
            <a className="LinkVideo" id="video11">
              <p>Vídeo 11 - Gênesis parte V, subparte II cap. 14.</p>
            </a>
          </div>
          <div className="PlataformaBarraLateralVideos" id="video12">
            <a className="LinkVideo" id="video12">
              <p>Vídeo 12 - Gênesis parte VI, subparte III cap. 15 a 17.</p>
            </a>
          </div>
          <div className="PlataformaBarraLateralVideos" id="video13">
            <a className="LinkVideo" id="video13">
              <p>Vídeo 13 - Gênesis parte VII, subparte IV cap. 18 a 20.</p>
            </a>
          </div>
          <div className="PlataformaBarraLateralVideos" id="video14">
            <a className="LinkVideo" id="video14">
              <p>Vídeo 14 - Gênesis parte VIII, subparte V cap. 20 a 22.</p>
            </a>
          </div>
        </ul>
        </div>
      </nav>

    <div className="PlataformaVideo">
      <div className="PlataformaVideoIframe"><iframe id="iframe" width="1000" height="500" src="https://www.youtube.com/embed/08R2ah16Wy8"></iframe></div>
      <div className="PlataformaContainer">
        <div className="PlataformaVideoNav">
          <h3>Transcrição</h3>
          <hr />
          <div className="PlataformaVideoTranscrito" id="video-transcrito3a">
            <h3>VÍDEO 3 – REALIZAÇÃO DO PROJETO</h3>
            <p>OLÁ QUERIDO E QUERIDA DE DEUS,</p>
            <p>Vamos conhecer o PROJETO VIDA PLENA?</p>
            <h4>&diams; O Objetivo:</h4>
            <p>
              O Projeto Vida Plena tem o objetivo de dar alimento para a
              tricotomia do ser que é constituída por corpo, alma e espírito.
            </p>
            <p>
              A mais importante das três áreas da tricotomia do ser é o lado
              espiritual cuja criação do ser humano é a imagem e semelhança de
              Deus em espírito.
            </p>
            <p>
              Por isso, a ênfase do projeto é preparar você para ter
              conhecimento e intimidade com as Escrituras Sagradas e,
              conseqüentemente, poder ter um relacionamento diretamente com
              Deus.
            </p>
            <p>
              Conhecendo a Palavra de Deus através da sua leitura diária, sem
              interferência ou persuasão de qualquer pessoa, você poderá
              obedecer a Deus de forma plena e com o espírito livre de
              contaminações.
            </p>
            <p>
              Com relação à alma, você deve responder as questões do livro QUEM
              SOU de acordo com todas as instruções que estão contidas nele.
            </p>

            <p>
              Com relação ao lado financeiro você vai ter orientação de como
              administrar seu orçamento pessoal e, essencialmente, você deve
              realizar uma atividade profética para sua benção financeira.
            </p>
            <p>
              Quando terminar essa atividade garanto que você vai se conhecer e,
              se colocar em prática tudo que aprendeu, vai adquirir uma
              autoestima equilibrada e saudável.
            </p>
            <h4>&check; Qual será o formato do treinamento?</h4>
            <p>
              Será apresentado um vídeo por semana, contando a história de um
              trecho específico da Bíblia em ordem cronológica de acordo com
              cada livro.
            </p>
            <h4>&check; Como será a participação?</h4>
            <p>
              Você se cadastra na plataforma, assiste aos vídeos no dia e
              horário que melhor lhe convier, participa das atividades, cumpre
              as tarefas.
            </p>
            <h4>&check; O que fazer para se cadastrar na plataforma?</h4>
            <p>
              Se você está assistindo ou lendo esse regulamento você já deve ter
              comprado o livro porque é o preenchimento do cadastro e a compra
              do livro que dá acesso a plataforma.
            </p>
            <p>
              Para participar do PVP o único custo financeiro é a compra do
              livro Quem Sou?
            </p>
            <p>
              Para comprar o livro, é necessário preencher o cadastro e pagar o
              valor do livro.
            </p>
            <p>
              Então automaticamente você, além de receber o livro físico no seu
              endereço, você vai receber uma pasta personalizada para realização
              das atividades. Você ainda vai ter acesso à planilha de
              administração orçamentária para você aprender a administrar sua
              vida financeira pessoal. Também terá acesso em texto a esse
              regulamento e o regulamento do vídeo 3 profético na sua pasta.
            </p>
            <h4>&check; Quem pode participar do projeto?</h4>
            <p>
              Qualquer pessoa, independente de idade, de raça, de nível de
              instrução, de gênero, de crença ou qualquer discriminação criada
              pela sociedade e poderá se cadastrar para o projeto, no início ou
              a qualquer tempo enquanto estiver sendo realizado o projeto.
            </p>
            <p>
              Poderá haver o cadastramento durante o andamento das postagens ou
              a qualquer tempo. Nesse caso, o participante deverá assistir aos
              vídeos anteriores e realizar as atividades de todos eles dentro de
              um prazo de 60 dias a partir da data do cadastramento, caso deseje
              concorrer na pontuação. Porém, nada é obrigatório nesse projeto.
            </p>
            <h4>&check; Como é a contagem de pontos?</h4>
            <p>
              As atividades interativas receberão pontos de acordo com as
              respostas. Serão somados os pontos respectivos a realização de
              cada atividade em relação ao vídeo apresentado até o término do
              projeto.
            </p>
            <h4>&check; O que fazer para participar da pontuação?</h4>
            <p>
              Depois de assistir o vídeo e ler o trecho dos livros e capítulos
              especificados diretamente da Bíblia, você deverá registrar na sua
              pasta personalizada as respostas às questões conforme as regras e
              dentro da semana da apresentação do vídeo, isto é, o prazo para
              realizar a atividade do vídeo apresentado, será a partir do dia da
              apresentação dele até a véspera do seguinte.
            </p>
            <h4>&check; Quais as regras das atividades?</h4>
            <p>
              A participação será respondendo cada um dos três questionamentos
              com apenas número, além da opção de realizar a atividade extra, a
              qual, como o nome diz, é opcional.
            </p>
            <h4>&check; Como realizar a tarefa sobre o autoconhecimento?</h4>
            <p>
              Você deve responder as questões contidas no livro “Quem sou de
              acordo com as instruções contidas nele.
            </p>
            <h4>
              &check; Como devo realizar a tarefa sobre a administração de meu
              orçamento financeiro?
            </h4>
            <p>
              Você deve usar a planilha preenchendo fisicamente ou preenchendo
              virtualmente. Ela é auto-explicativa e você deve ir preenchendo de
              acordo com a coluna.
            </p>
            <p>
              Preencha o lado esquerdo com suas receitas e o lado direito com o
              que tem a pagar mensalmente. Compare os totais do lado esquerdo
              com o direito e veja como está seu orçamento mensal. Se o lado
              direito estiver maior que o esquerdo, é necessário que você faça
              uma avaliação daquilo que está gastando e encontrar o que pode ser
              cortado ou diminuído dos seus gastos a fim de se enquadrar dentro
              da sua receita.
            </p>
            <p>
              Pelo menos uma vez por semana atualize a planilha e revise,
              verifique se está tudo dentro do planejado ou se afastou muito do
              esperado. Se existir um desvio pequeno, é só atualizar os dados.
            </p>
            <p>
              Essa planilha vai ajudar você a ter um orçamento mensal
              completamente planejado e controlado.
            </p>
            <h4>&check; Quais são os três questionamentos?</h4>
            <p>
              1. PRIMEIRA QUESTÃO: Quantos versículos têm na Bíblia que compõem
              toda a história narrada?
            </p>
            <p>
              2. SEGUNDA QUESTÃO: Quantas vezes a palavra Deus aparece no texto
              todo que compõe a história, ou caso não tenha nenhuma,
              secundariamente, registrar quantas vezes tem a palavra SENHOR?
            </p>
            <p>
              3. TERCEIRA QUESTÃO: Qual o numero do último versículo que encerra
              a história narrada?
            </p>
            <h4>
              Exemplo da atividade através da história de Cornélio do Novo
              Testamento.
            </h4>
            <p>A HISTÓRIA DE CORNÉLIO (Livro de Atos capítulo 10).</p>
            <p>
              A história será contada, mas a atividade deve ser feita de acordo
              com a referência do livro e capítulo da Bíblia.
            </p>
            <h4>EXEMPLO PARA AS RESPOSTAS DAS QUESTÕES DA ATIVIDADE:</h4>
            <p>1. 48</p>
            <p>2. 16</p>
            <p>3. 48</p>
            <h4>&check; Como é a atividade extra?</h4>
            <p>
              &diams; Elaborar um texto dentro dos parâmetros fixados sobre sua
              visão da história assistida e lida na Bíblia.
            </p>
            <p>&diams; Os parâmetros:</p>
            <p>&nbsp;&bull; Texto com no máximo 30 palavras.</p>
            <p>&nbsp;&bull; Mensagem clara e objetiva.</p>
            <p>
              &nbsp;&bull; Escrita dentro dos padrões aceitáveis da Língua
              Portuguesa, isto é, com ortografia o mais correta possível.
            </p>
            <p>
              &nbsp;&bull; Texto sem impropérios, sem palavras esdrúxulas, sem
              gírias e sem abreviações.
            </p>
            <h4>&diams; Qual será o critério para pontuação?</h4>
            <h4>A pontuação da atividade semanal será:</h4>
            <p>
              o Se responder corretamente as três questões, o participante
              somará 3 pontos. Se acertar duas questões somará 2 pontos e se
              acertar 1 questão somará 1 ponto.
            </p>
            <p>
              o Se deixar de realizar as questões do vídeo da semana perderá 3
              pontos.
            </p>
            <p>
              A pontuação da atividade extra, a qual, como o nome diz, é
              opcional, somará 5 pontos no máximo ou quantos pontos ganharem de
              acordo com a correção.
            </p>
            <h4>*****ATENÇÃO PARA UMA PONTUAÇÃO EXTRAORDINÁRIA*****</h4>
            <p>
              &check; Ao final do projeto, você poderá somar 15 pontos ao seu
              total geral.
            </p>
            <p>
              &check; A última questão do livro Quem Sou? é exatamente sobre
              quem é você. Se você colocar na sua pasta sua resposta a essa
              questão, você ganha mais 15 pontos. O texto deve ter no mínimo 15
              palavras e no máximo 30 palavras conforme sua resposta no livro.
            </p>
            <h4>A premiação ao final do trabalho será:</h4>
            <p>o Primeiro lugar....................... R$ 10.000,00</p>
            <p>o Segundo lugar........................ R$ 2.000,00</p>
            <p>o Terceiro lugar......................... R$ 1.000,00</p>
            <h4>
              FLASH<br />

              AGORA queridos de Deus, eu tenho uma surpresa muito, mas muito
              especial para vocês.<br />

              Esse projeto tem uma atividade divina que dependendo da sua fé,
              disciplina, perseverança e resiliência, você poderá mudar sua vida
              em todas as áreas dela.<br />

              Aguarde o próximo vídeo especial de número 3 profético que vai
              contar para você, só para você, como Deus quer dar prosperidade em
              sua vida em todos os aspectos.<br />

              Calma...Você não precisa ficar ansioso, é só se preparar
              psicologicamente para se comprometer em conquistar uma vida plena.
              VOCÊ PODE TER UMA VIDA PLENA, SÓ DEPENDE DE VOCÊ, leia todas as
              instruções do vídeo 3 e 3 profético e saiba como conquistar uma
              vida plena.<br />
            </h4>
          </div>

          <div className="Desactived PlataformaVideoTranscrito" id="video-transcrito3b">
            VÍDEO 3 PROFÉTICO
            ATIVIDADE ESPECIAL DIVINA
            OLÁ QUERIDO E QUERIDA DE DEUS,
            Esse é um vídeo muito, mas muito importante, especialmente para você atingir uma vida plena por causa da
            missão profética que ele ensina.
            Nesse vídeo vamos tratar do lado físico, o qual ter uma renda financeira digna é essencial para poder
            cumprir com todas suas necessidades básicas e até seus compromissos assumidos.
            Conforme você viu no vídeo 3, esse projeto ao final dele dará 3 prêmios para as maiores pontuações.
            Esses prêmios são apenas uma motivação para você se comprometer com todo o projeto, acompanhar o projeto com
            disciplina, com perseverança e realizar as atividades com competência.
            No caso da premiação dos três primeiros, como a questão estabelece, somente três ganharão.
            Contudo, no caso dessa atividade profética, todos ao final terão seus prêmios financeiros pelo próprio
            esforço de trabalho.
            Os questionamentos e os textos são apenas atividades físicas desenvolvendo a inteligência, sem algo
            espiritual ou emocional.
            Contudo, essa atividade que vou explicar para você, nesse vídeo, é especial e divina, porque será profética
            para sua vida plena.
            Independentemente de a área espiritual ser a essência da sua criação, você precisa ter uma educação
            financeira plena.
            Controle orçamentário pleno depende de uma administração financeira competente e, por isso, você deve
            utilizar a planilha orçamentária que receberá ou já recebeu ao se cadastrar.
            Ao cumprir plenamente os requisitos apresentados, você terá como conseqüência uma vida financeira eficaz e
            idônea.
            Só depende de você a administração de seu orçamento e seu compromisso com a adimplência de todas as
            responsabilidades financeiras assumidas.
            Por isso, eu profetizo pela fé que tenho em Deus, que, se você se comprometer com sua educação financeira,
            se você cumprir rigorosamente tudo que ela preceitua, se você superar qualquer momento de fraqueza, se você
            enfrentar qualquer obstáculo para atingir seu sucesso financeiro, você terá uma vida financeira plena.
            Então, como é isso Maria Angélica?
            Como falei, os prêmios finais são apenas motivação. Eles servem para promover uma competição saudável e
            impulsionar a realização das atividades, as quais proporcionam resultados.
            Já essa atividade divina vai lhe proporcionar a maturidade e sabedoria para conquistar os ganhos financeiros
            que precisa para viver. Além disso, você também terá sua coroa quando, então, ao final do projeto usar da
            forma que quiser o saldo de sua aplicação de todo o período.
            Importante destacar que, essa atividade especial divina, além do controle orçamentário, é um compromisso que
            você vai fazer consigo mesmo.
            PASSOS:
            1) Abrir uma poupança para você num banco;
            2) Depositar 7% de toda renda que tiver por todo o período de realização do projeto, sem fazer qualquer
            retirada;
            3) Após o término do projeto, você vai dividir por 0,07 o saldo da poupança e diante do valor apurado que
            foi sua renda ao final de todo o período e fazer uma oração em à Deus, em nome de JESUS, agradecendo toda
            provisão que gerou aquele saldo final.
            4) E, então, só depois do terceiro passo poderá usar o valor da forma que desejar ou continuar investindo na
            poupança conforme fez em todo o período.
            Detalhadamente,
            Você vai abrir uma poupança para você no banco que quiser, de preferência na CEF - Caixa Econômica Federal.
            Vai depositar nessa poupança 7% de toda renda que tiver de seus investimentos em serviço, em venda, seja lá
            de que tipo for.
            Você terá uma poupança sua sem um objetivo material específico.
            Essa poupança tem dois objetivos, um espiritual e outro de treinamento financeiro.
            1) Você dar testemunho de como Deus atuou na sua vida financeira e você, ao final do período, poder
            comprovar quanto Deus abençoou você com fontes de recursos de acordo com sua atividade.
            2) Você aprender a ter educação financeira e saber como administrar suas finanças.
            Ratificando, e
            Essa poupança só poderá ser mexida por você ao final do projeto, o qual, em princípio, durará 24 meses.
            Comprometa-se em depositar rigorosamente 7% do bruto de tudo que receber.
            Não importa se você está sem qualquer renda atualmente, creia que se você orar pedindo a Deus uma fonte de
            renda, você já foi atendido e é só atuar com responsabilidade a cada oportunidade.
            Se você ganhou 50 reais, 7% serão 3,50 reais, não deixe de depositar na poupança por ser um valor pequeno.
            Se você ganhou 5 reais, os 7% serão apenas 35 centavos de reais e você poderá ficar constrangido de fazer um
            depósito nesse valor.
            Então, vá juntando até completar 1 ou 2 ou 5 reais para depositar. Você decide qual valor será o depósito
            mínimo, mas é importante separar para não perder o foco no objetivo.
            Agora... essa profecia só terá validade se você cumprir todas as etapas do Projeto.
            Realizar as atividades da leitura dos textos especificados de cada história e fazer a atividade dos três
            questionamentos.
            Responder todo o questionário do livro QUEM SOU?
            Fazer seu controle orçamento e depositar na sua poupança com toda disciplina conforme está orientado.
            FLASH
            AVISO IMPORTANTE: Essa atividade não tem nada a ver com o dizimo constante da Bíblia. Quem já paga seu
            dizimo deve continuar pagando normalmente e, quem não paga sugiro que pesquise como funciona essa lei de
            Deus para poder obedecer.
            Jamais use o valor do dizimo para pagar qualquer outra conta que não seja a obra de Deus para evangelização.
            Só repetindo, porque é muito importante: Você não deve mexer na poupança antes do término do Projeto.
            Você não deve deixar de cumprir qualquer dos requisitos das três áreas.
            Caso você tenha algum contratempo que impeça de realizar algo de alguma das atividades ou todas elas, quando
            puder, retorne ao projeto, realizando tudo que foi perdido até chegar ao ponto em que ele se encontrar.
            Se você deixar de cumprir algum dos requisitos, não corrigir ou desistir de algo, certamente não vai atingir
            o objetivo de conquistar uma vida plena.
            Espero ter explicado tudo direitinho, porém, dúvidas sempre existirão, e caso tenha alguma eu terei imenso
            prazer em atender você através do meu e-mail: atendimento@mariaangelicaroma.com
            Desejo que JESUS abençoe sua vida e você atinja a vida plena que Ele pode proporcionar a você.
          </div>

          <div className="Desactived PlataformaVideoTranscrito" id="video-transcrito5">
            VÍDEO 5
            QUEM É ESSE DEUS DA BÍBLIA
            OLÁ QUERIDO E QUERIDA DE DEUS,
            No vídeo 4, você conheceu um pouquinho da Bíblia.
            Agora, antes de entrar propriamente nas histórias da Bíblia, vamos conhecer um pouquinho quem é O Deus da
            Bíblia.
            O Deus, o qual você vai perceber em todas as histórias ser o personagem sobrenatural principal.
            Através das ações Dele você vai poder criar em seu coração a sua própria imagem Dele.
            Você vai poder conhecê-Lo e, com certeza, se afeiçoar e amá-Lo de todo o seu coração porque Ele é o supremo
            criador de todas as coisas.
            Esse projeto não é um trabalho científico e por isso não precisa provar nada. Esse projeto é um trabalho de
            fé.
            FLASH
            Angélica, por que eu posso acreditar em você?
            Tudo que estou falando é baseado nas experiências de minha vida. Desde o dia que conheci O Deus da Bíblia,
            aprendi a obedecê-lo e viver de acordo com os ensinamentos Dele, minha vida mudou.
            Hoje vivo uma vida Plena.
            FLASH – COLOCAR ESSE QUADRO
            Ora, a fé é a certeza daquilo que esperamos e
            a prova das coisas que não vemos.
            HEBREUS 11:1
            Então, crer na Bíblia é uma questão interior de cada um.
            Deus criou cada criatura sua com o direito de escolha.
            Se você quiser se dar uma chance de crer na Bíblia e testar a Palavra Viva que Ela contém, se você quiser
            escolher acreditar Nela, Conhecer Ela e praticar o que Ela preconiza, pode ter certeza que você conquistará
            resultados de suas ações, os quais lhe proporcionarão uma vida física plena e a certeza de que terá o
            paraíso de Deus conforme ensinou Jesus Cristo.
            Importante destacar que você deve ter muitas crenças que incutiram em você.
            Não foi você que escolheu com conhecimento de base.
            Talvez você pratique muitas ações que foram treinadas em você e você nem saiba por que age da forma como
            age.
            FLASH
            Um conselho que pode mudar sua vida, que pode levar você a ter paz no coração e conquistar uma vida plena.
            Se passar a confiar na Bíblia e fizer Dela seu manual de vida, obedecer e praticar tudo que Nela preconiza
            você chegará ao sucesso.
            MAS COMO FAZER ISSO MARIA ANGÉLICA?
            É aqui que esse projeto apresenta sua importância.
            Você vai aprender a ler a Bíblia e conhecer tudo que Ela contém por você mesmo, sem interferência externa.
            A Bíblia que é a Palavra de Deus é o manual para você aprender a obedecer a Deus ao cumprir sua Palavra.
            Conhecendo a Bíblia você vai perceber que pratica muitas ações que não estão Nela.
            E, então, você poderá abandonar atos que podem ser pecados, ou erros, ou práticas que afastam você de Deus,
            impedindo você de ter toda a proteção e benção integral que somente Ele pode dar a você.
            Aprenda a conferir tudo que diz, que faz e pratica comparando com os ensinamentos da Bíblia que é Deus nos
            ensinando.
            O Deus que estamos falando é o Deus da Bíblia, especificamente esse Deus, porque de tudo que já acreditei,
            confiei e vivenciei, Ele é o único que mudou minha vida.
            &diams;Ele é o único que me trouxe paz, alegria, uma paternidade natural e sobrenatural, e a certeza de que
            essa vida física não termina com a morte.
            &diams;Ele é o único que pode responder nossas preces,
            &diams;Ele é o único que pode nos proteger,
            &diams;Ele é o único que pode nos abençoar.
            &diams;Ele é o único que se relaciona de forma sobrenatural conosco.
            O Deus da Bíblia promete em sua Palavra que depois dessa vida física, para aqueles que crerem no sacrifício
            de Jesus Cristo, virá o verdadeiro Paraíso, sem dores, sem sofrimento, sem maldades, sem medos, sem tudo
            aquilo que nos faz padecer.
            Será uma vida eterna no Paraíso Dele para você que aceitar JESUS CRISTO como salvador da sua vida e escolher
            ter Ele como SENHOR da sua vida.
            A Bíblia mostra esse Deus que é um Ser Todo Poderoso.
            O Deus que criou todas as coisas e criou o ser vivo.
            O Deus que é o único que não é criado, Ele é o criador.
            Acredito que você pode me perguntar como então Ele existe?
            A verdade é que não posso responder a esse questionamento de forma embasada porque é algo metafísico, algo
            além de nosso entendimento.
            Essa questão é tão sobrenatural, tão além de nosso entendimento, que qualquer coisa que eu responda não terá
            consistência. O que mais desejo nesse projeto é apenas me ater ao que está na Bíblia sem qualquer influência
            das minhas conjecturas.
            A primeira curiosidade que terei em descobrir quando entrar no céu será exatamente essa.
            Como entender um ser que sempre existiu, numa eternidade que está muito além de nosso entendimento e são
            três pessoas em uma só?
            Deus possui todos os atributos bons que existem.
            Nós fomos feitos imagem e semelhança de Deus em Espírito e isso significa que possuímos muitos atributos de
            Deus.
            Contudo, não são todos.
            Existem alguns que são exclusivos de Deus.
            Nenhum ser humano, nenhum anjo, nada e ninguém os possuem. Só O Deus da Bíblia.
            Aqui é que temos o grande diferencial.
            Como eu vou crer num Deus que possui alguma limitação, alguma fraqueza, algum talvez, algum senão ou não
            seja totalmente bom?
            Meu Deus tem que ser O TODO PODEROSO, senão para mim não é Deus.
            Por isso creio nesse Deus que tem agido em minha vida com todo seu poder.
            O Deus da Bíblia é Onisciente, isto é, SABE TUDO, você conhece alguém que saiba tudo? Esse atributo é um dos
            exclusivos do Deus da Bíblia.
            O Deus da Bíblia é Onipotente, isto é, PODE TUDO, você conhece alguém que possa tudo? Esse atributo é outro
            exclusivo do Deus da Bíblia.
            O Deus da Bíblia é Onipresente, isto é, está em todos os lugares.
            Como pode isso Angélica?
            FLASH
            É mesmo, é tão sobrenatural, é tão poderoso, é tão extasiante, que fica até difícil de nós acreditarmos, não
            é mesmo?
            Contudo, é por isso que creio de todo meu coração Nele.
            Esses três atributos citados são dos sete exclusivos ou também chamados de não comunicáveis de Deus com suas
            criaturas.
            Por que é importante conhecer os atributos de Deus?
            Vamos ver quatro razões simples:
            (1) Conhecendo os atributos de Deus saberemos um pouco quem Ele é, Seu caráter, pensamento e vontade;
            (2) Conhecendo a Deus como Ele é, podemos honrá-Lo como merece, prestando-lhe uma adoração bíblica com o
            coração transbordando de amor;
            (3) Estaremos mais preparados para fazer uma apologia da nossa fé e ficarmos imunes quando as distorções
            heréticas surgidas ou surgirem em nosso caminho;
            (4) Poderemos ajudar a tantas pessoas que estão incorrendo em erro grave abraçando as mais diversas heresias
            e distorções sobre a Pessoa de Deus.
            FLASH
            No início é preciso acreditar em tudo isso da Bíblia somente pela fé, porque não vemos, não ouvimos, não
            sentimos o cheiro, não sentimos o sabor e não tocamos. Porém, se começar a orar e crer, mais dia ou menos
            dia, você vai sentir a ação de Deus na sua vida e então começará a ter um relacionamento sobrenatural com
            Ele.
            Então, vamos conhecer mais os outros 4 atributos exclusivos de Deus.
            Existem várias posições sobre quantos são os atributos exclusivos de Deus, isto é, os atributos que só Ele
            possui.
            Eu prefiro a corrente daqueles estudiosos que dizem serem 7.
            - Asseidade, isto é, Deus existe de e por si mesmo”. Isso é a Asseidade de Deus.
            - Imutabilidade, isto é, Ele era, Ele é e Ele sempre será, nunca mudará.
            - Unidade, apesar da Trindade, Deus é uno, isto é, um só. O Deus Pai, O Deus Filho e O Deus Espírito Santo
            existe em uma só pessoa.
            - Infinitude, isto é, Deus não tem começo e não tem fim.
            Querido e querida de Deus, no mais, além disso, você vai conhecer verdadeiramente O Deus da Bíblia através
            de seus atos, decisões, vontades, nas histórias dos relacionamentos Dele com o ser humano que vamos
            conhecer.
            E para encerrar hoje deixo uma das frases famosas de Tomas de Aquino do século XIII:
            “DEUS É UNO, SIMPLES, PERFEITO, INFINITO, DOTADO DE INTELIGÊNCIA E VONTADE”
            CENA FINAL DO VÍDEO
            Anjo........... Dependo de Deus
            Malígno...... Eu sou deus.
          </div>

          <div className="Desactived PlataformaVideoTranscrito" id="video-transcrito6">
            VÍDEO 6 – A ORIGEM DO MAL
            Olá querido e querida de Deus,
            No vídeo 5 você assistiu a história sobre quem é o Deus das Escrituras Sagradas.
            Nesse vídeo eu vou narrar a história da Origem do Mal.
            IMAGEM
            COLOCAR ALGUMA IMAGEM DA BATALHA NO CÉU
            A ORIGEM DO MAL
            Esta história que vou narrar agora é uma montagem de vários textos contidos em vários livros da Bíblia.
            Todas as histórias que pretendo contar nesse canal, a partir do Livro de Gênesis, estão contidas em alguma
            parte da Bíblia e descritas com início, meio e fim no mesmo trecho.
            Contudo, essa do vídeo 6, não pode ser encontrada da mesma forma porque é a união de vários versículos de
            vários capítulos de alguns livros.
            São trechos do livro de Isaias, de Ezequiel e do Apocalipse principalmente.
            Bem...Vamos lá começar...
            Antes de Deus criar esse mundo que vivemos, já existia um céu, um paraíso, com milhares de milhares de
            anjos.
            Esse paraíso pertencia à trindade, Deus Pai, Deus Filho e Deus Espírito Santo que é um Deus único
            constituído por três pessoas.
            Os anjos adoravam fazer a vontade de Deus.
            Eles tinham total paz porque obedeciam ao seu Criador.
            FLASH
            QUER SER SÁBIO?
            É MUITO SIMPLES, É SÓ FAZER UMA COISINHA.
            SEJA TEMENTE AO SENHOR OBEDECENDO AOS MANDAMENTOS E LEIS DELE.
            O comandante supremo era o filho de Deus. Que quando veio ao mundo teve o nome de Jesus.
            Era um paraíso perfeito, com todos se amando e todos adorando a Deus.
            Não existia qualquer mal.
            Imagine um paraíso perfeito em que só exista paz, alegria e felicidade.
            Só existia o bem.
            Tudo de mal que conhecemos aqui nesse mundo, nesse paraíso não existia.
            Tudo funcionava perfeitamente como o próprio paraíso.
            A organização dos grupos de anjos era por hierarquia e havia um anjo ligado diretamente ao Filho de Deus.
            Esse anjo, era o querubim ungido, era o superior de todos os outros anjos.
            O nome dele era Lúcifer que significa estrela da manhã.
            Os anjos também são criaturas de Deus e Lúcifer foi criado perfeito, era um anjo de formosura que se vestia
            de pedras preciosas e era o querubim mais belo, mais sábio e mais importante do céu.
            A tarefa de Lúcifer no céu era transmitir aos seus subordinados diretos as ordens de Deus.
            A sua função era de proteger, era de aferidor de medidas, era uma espécie de maestro musical, era mais sábio
            que Daniel.
            IMAGEM
            COLOCAR UMA IMAGEM DE LÚCIFER EM GLÓRIA.
            Um dia, Lúcifer percebeu sua beleza e poder e começou a desejar em seu coração ser superior a Deus.
            Tornou-se soberbo e desejou ter um trono acima do trono de Deus. Desejou ser chamado de Deus. Arquitetou um
            plano para se elevar acima do trono de Deus.
            Como não se pode esconder nada de Deus, o Filho de Deus, conhecendo as intenções maldosas e destrutivas de
            Lúcifer, tentou avisar a ele que limpasse o coração e destruísse os sentimentos de vaidade, inveja, soberba,
            maledicências e voltasse a ser o ser puro e de brilho que Deus criou.
            Porém, nada adiantou, com o mal completamente instalado no coração de Lúcifer, ele começou a difundir
            mentiras entre seus subordinados, para poder atingir seus objetivos maléficos.
            FLASH
            Maledicências do tipo...
            O maligno dizia que ia contar algo muito importante sobre Deus e, então, Bla, bla, bla....
            Eram mentiras, mentiras, mentiras. Começou a espalhar uma onda de mentiras para atingir seus objetivos.
            Ora, para você ter seguidores precisa conquistar um número mínimo de adeptos que tenha simpatia por você.
            Adeptos que estejam do seu lado nas divergências de idéias, opiniões, interesses entre grupos. Então,
            Lúcifer começou a fazer campanha, difundindo mentiras para seus subordinados. Ele começou a ensinar seus
            subordinados a duvidarem dos preceitos de Deus. Começou a difundir e conclamar a todos para se rebelarem
            contra Deus. Começou a difamar Deus, inventando características negativas de Deus que gerava uma imagem de
            Deus como injusto, explorador e opressor.
            FLASH
            Qualquer semelhança com as campanhas políticas atuais será que é mera coincidência?
            Lúcifer tinha alimentado o mal em seu coração e colocado em prática todo esse mal, porque ele direcionou o
            seu amor para si próprio. Se imbuiu do mal completamente sem qualquer resquício de condição para voltar a
            ser um anjo do bem.
            Lúcifer dentro de sua conspiração começou a ensinar seus subordinados a duvidarem dos preceitos de Deus.
            Começou a difundir e conclamar a todos para se rebelarem contra Deus.
            E então o mal se originou no céu através de um ser criado por Deus.
            Será que Deus criou um ser defeituoso?
            IMAGEM
            COLOCAR UMA IMAGEM QUE REPRESENTE O LIVRE ARBÍTRIO.
            Não, em hipótese alguma. Deus é amor e o amor é realizado quando se faz a felicidade de alguém. O amor é o
            inverso do egoísmo. O egoísmo quer tudo para si mesmo e o amor quer fazer a felicidade do próximo. E porque
            Deus é amor Ele deu a cada criatura Sua o direito de escolha. Cada criatura de Deus tem a qualidade do livre
            arbítrio, o poder de escolher o que quer. Por isso, Lúcifer escolheu o mal ao invés do bem que é Deus.
            Se Deus é amor como Ele iria criar seres totalmente escravos Dele, sem opinião própria? A liberdade é o
            direito de escolha. Na realidade, o direito de escolha é muito bom, porém, muito perigoso. Como alguém que
            não tem competência para gerir sua vida poderá fazer uma escolha do que é bom e melhor?
            FLASH
            NÃO DEIXE NINGUÉM TIRAR SUA LIBERDADE DE ESCOLHER O QUE VOCÊ QUISER...
            Bem... Lúcifer conseguiu que 1/3 dos anjos acreditassem nele e ficassem do lado dele. Quando você houve essa
            história, você que é conhecedor do bem e do mal, pode especular como esse 1/3 de anjos pode acreditar em
            Lúcifer, tão mentiroso e tão maligno, não é mesmo?
            Creio que a inocência faz dos seres muitos crédulos. A credulidade ignorante pode ser muito perigosa e levar
            muitos seres a destruição. Esses anjos eram completamente desconhecedores do mal porque até aquele ponto não
            existiam maldades, por isso eles acreditaram nas mentiras e ações maléficas de Lúcifer.
            FLASH
            DE NOVO... !!!! Qualquer semelhança com as campanhas políticas atuais será que é mera coincidência?
            Em função do plano maléfico de Lúcifer, aconteceu uma rebelião no céu, de um lado os anjos que não se
            corromperam com as mentiras dele e continuaram fieis a Deus e de outro lado àquele 1/3 que acreditou em tudo
            que Lúcifer espalhou e ficou ao lado de Lúcifer.
            Com a rebelião aconteceu a primeira guerra que se tem informação. E essa guerra aconteceu no céu. Houve
            batalha, e eu fico especulando se não foi terrivelmente dantesca considerando que se tratava de seres
            poderosos e não limitados a um corpo como nós.
            Deus poderia exterminar Lúcifer e seus seguidores, afinal Ele é o TODO PODEROSO. Contudo, Deus também é
            soberano por Sua Sabedoria total e plena. Ele decidiu expulsar Lúcifer e o 1/3 dos anjos do céu e foi o que
            aconteceu.
            Lúcifer e 1/3 dos anjos foram expulsos do céu e quando a terra foi criada pelo Filho de Deus, eles se
            instalaram nela.
            Diante do mal que escolheram, Lúcifer virou satanás que é o grande dragão.
            E, além desse, tem muitos adjetivos como:
            Prepare-se que eu só vou citar uns 14 e você já vai ficar impressionado, imagine se você conhecer todas as
            qualificações maléficas que ele tem porque é o que é.
            A antiga serpente, o pai da mentira, demônio, espírito-guardião, espírito-guia, belzebu, canhoto, capeta,
            chifrudo, cornudo, diabo, maligno, satanás, tentador. Talvez até você conheça mais, porque realmente existe.
            Ele é àquele que vive nos tentando para praticarmos ações maléficas em desobediência as leis e mandamentos
            de Deus.
            Os anjos que caíram com ele são os demônios que existem também no sobrenatural a lutar contra Deus tentando
            as criaturas de Deus para praticarem o mal e morrerem fisicamente na escravidão desses seres malignos.
            Um conselho para encerrar essa história:
            É melhor acreditar que satanás e os demônios existem apesar de estar além de nossos sentidos, de serem
            sobrenatural e começar a vigiar para não ser induzido por ele a praticar ações que vão destruir você e tudo
            ao seu redor. Na Bíblia diz que ele está ao derredor para matar, roubar e destruir.
            E por hoje é isso aí...

            CENA FINAL DO VÍDEO
            Anjo........... Eu quero obedecer à Deus
            Malígno...... Quero curtir tudo.
          </div>

          <div className="Desactived PlataformaVideoTranscrito" id="video-transcrito7">
            VÍDEO 7 – LIVRO DE GÊNESIS
            PARTE I – CRIAÇÃO DO MUNDO / A TENTAÇÃO E QUEDA / O PRIMEIRO ASSASSINATO

             CAPÍTULOS 1, 2, 3 E 4

             Olá querido e querida de Deus,
            Agora vamos começar realmente a primeira história do primeiro livro da Bíblia.
            Quanto à datação das histórias, é importante destacar que a história da criação do mundo, a da tentação e
            queda, a do primeiro assassinato, a história de Noé e até a torre de Babel, não existe qualquer referência
            aproximada de datação que seja fidedigna. Somente temos referência de datação a partir da história de
            Abraão.
            Então, vamos ao tema de hoje...
            FLASH
            Incluir imagem de uma Bíblia aberta no Livro de Gênesis.
            Você, após assistir o vídeo deve ler os capítulos 1, 2, 3 e 4 do Livro de Gênesis para realizar as
            atividades interativas.
            Tenho certeza que depois de assistir o vídeo da narrativa da história, você vai ler os capítulos respectivos
            e entender tudo. Vai ficar fera nessa história, sem qualquer achismo, porque leu diretamente na fonte.
            Vamos saber um pouquinho sobre os personagens principais:
            FLASH
            Colocar a imagem de algum ADÃO.
            1. ADÃO – Foi o primeiro ser humano com imagem e semelhança de Deus.
            Primeiro em tudo. Primeiro zoólogo, primeiro arquiteto, etc.
            Além dos pontos fortes, ele também tinha fraquezas e erros como todo ser humano.
            Fugiu à responsabilidade e culpou a outros preferindo se esconder a ser confrontado. Depois de pecar,
            inventou desculpas ao invés de admitir a verdade.
            Seu maior pecado foi juntamente com Eva trazer o pecado ao mundo.
            FLASH
            COLOCAR A IMAGEM DE ALGUMA EVA
            2. EVA – Tinha como pontos fortes e êxitos ter sido a primeira mulher e mãe. Foi co-responsável com Adão
            pela administração da criação do mundo e demonstrou certas características de Deus.
            Também, como Adão e qualquer ser humano, tinha fraquezas e erros. Permitiu que sua satisfação fosse minada
            por Satanás. Agiu impulsivamente, sem consultar a Deus ou a seu marido. Não apenas pecou como também induziu
            seu marido a pecar. Também quando confrontada pelo erro, culpou os outros.
            COLOCAR ALGUMA IMAGEM DE CAIM MATANDO ABEL
            3. ABEL – Filho de Adão e Eva foi o primeiro membro da Galeria da Fé que consta no Livro de Hebreus. Foi o
            primeiro pastor de ovelhas. Foi o primeiro mártir pela verdade.
            Creio que como ser humano também devia ter fraquezas e erros, porém a história não registra qualquer citação
            sobre isso.
            4. CAIM – Filho de Adão e Eva foi a primeira criança humana. Foi o primeiro a seguir a profissão do pai como
            fazendeiro.
            Dentre suas fraquezas e erros, consta que quando contrariado, reagia com fúria. Por isso alimentou um
            caráter deformado e em uma de suas contrariedades, encheu seu coração de raiva contra o irmão. Foi avisado
            por Deus que deveria limpar o coração, porém rejeitou a condição de recuperação de seu caráter e na primeira
            oportunidade matou seu irmão, se tornando o primeiro assassino da história.
            A HISTÓRIA
            Depois que Lúcifer e 1/3 dos anjos foram expulsos do céu, o Filho de Deus resolveu criar um mundo de seres
            com imagem e semelhança Dele mesmo. Criar seres humanos para se relacionar em amor com Ele. Criar seres
            humanos para Deus realizar seu amor neles.
            Então o Filho de Deus criou um mundo em 6 dias, que é a nossa terra, e no sétimo dia descansou. Sua criação
            é tudo que existe desde os luminares, tudo inanimado e os seres vivos irracionais. Também no sexto dia, o
            Filho de Deus criou sua obra prima que foi o ser humano, nas figuras de Adão e Eva para se relacionarem com
            Deus no amor Ágape e entre eles com amor fraternal e serem felizes.
            Nessa criação desse mundo por Deus, não havia quaisquer males. Não havia doenças, acidentes, sofrimentos,
            sentimentos negativos, mazelas, aflições, guerras, enfim tudo de mal que enfrentamos nesse mundo. Todos os
            animais, mesmo sendo irracionais, se relacionavam com amizade e sem qualquer disputa, competição ou meio de
            sobrevivência violenta. E não havia a morte, que é o grande medo e desespero das pessoas.
            FLASH
            COLOCAR ALGUMA IMAGEM DE UM CASAL FELIZ NO PARAÍSO
            Colocou Adão e Eva no Éden, que significa jardim de delícias, paraíso, e lhes deu toda autoridade sobre tudo
            que foi criado, desde o inanimado até os seres viventes irracionais. Somente o ser humano criado imagem e
            semelhança de Deus eram seres vivos racionais.
            O ser vivo racional é aquele que pode desenvolver o raciocínio, tem o poder de imaginar, criar, tem o poder
            de escolher o que quer e o que não quer. Essa característica que Deus deu ao ser humano já foi citada na
            história da origem do mal. Ela é a prova do amor de Deus, porque Ele poderia criar suas criaturas totalmente
            submissas a Ele, mas preferiu dar a condição de cada uma de suas criaturas escolherem seu caminho.
            FLASH
            COLOCAR UMA IMAGEM DE UM CAMINHO COM VÁRIAS DIREÇÕES E O HOMEM PENSANDO
            De tudo que foi criado, o homem tinha autoridade e podia usufruir. Contudo, Deus colocou apenas uma
            restrição, a qual era para testar a obediência do homem. Se tudo fosse permitido, sem restrição, como então
            a obediência do homem seria provada? Então Deus colocou a árvore da vida e a árvore do conhecimento do bem e
            do mal no centro do Jardim do Éden. Ensinou a eles que poderiam comer de todos os frutos, menos o fruto da
            árvore do conhecimento do bem e do mal. Eles foram bem avisados e, inclusive, como tudo na vida, existem
            conseqüências, Deus disse que se comessem certamente morreriam.
            A cada sétimo dia da semana, Deus se relacionava presencialmente com Adão e Eva. Se confraternizavam,
            trocavam idéias e carinhos. Que mundo maravilhoso e divino Deus criou para o ser humano.
            FLASH
            COLOCAR UMA IMAGEM DE UM CASAL SE RELACIONANDO COM DEUS
            Contudo, havia um ser decaído, satanás que tinha sido expulso do céu e vivia travando batalha contra Deus.
            Ele planejava e agia o tempo todo querendo destruir tudo de Deus. Então, ele se apossou de uma serpente e
            esperou a oportunidade para tentar as criaturas de Deus e fazê-las pecar desobedecendo à única restrição que
            existia no paraíso.
            Um dia, Eva se aproximou perigosamente da árvore do conhecimento do bem e do mal e foi a oportunidade que o
            maligno esperava. Imagino que ele deve ter feito o fruto brilhar, irresistível. Ela se deixou envolver por
            aquilo que pareceu agradável, muito atraente aos olhos e, além de tudo, muito desejável. O maligno ainda a
            abordou com uma argumentação mentirosa, porém, muito convincente dizendo que se ela comesse os seus olhos se
            abririam e eles seriam como Deus sendo conhecedores do bem e do mal e, ainda, alegou que com toda certeza
            não morreriam.
            Usou de uma pergunta traiçoeira para começar a abordagem com Eva, dizendo: É assim que Deus disse: Não
            comereis de toda a árvore do jardim?
            FLASH
            MALÍGNO MENTIROSO E ASQUEROSO: Deus disse: De toda a árvore do jardim comerás livremente, mas da árvore do
            conhecimento do bem e do mal, dela não comerás, porque no dia em que dela comeres, certamente morreras.
            Será que o maligno disse a mesma coisa que Deus????
            Eva ainda argumentou que não tinha sido assim que Deus falou, mas ela estava tão envolvida pelo desejo que
            acabou deixando a serpente possuída enganar ela.
            Acabou por pegar o fruto e comer. Ao comer cometeu o primeiro pecado da desobediência no mundo. Por isso se
            diz que o pecado entrou no mundo pelos nossos primeiros pais. Eva também levou o fruto para Adão e este
            comeu induzido por Eva.
            Depois que comeram, seus olhos se abriram e percebeu que estavam nus e cobriram-se com folhas de figueira.
            Conheceram o que é o mal.
            FLASH
            COLOCAR UMA IMAGEM DE ADÃO E EVA COM CARAS DE MEDO E SE ESCONDENDO.
            ACABOU A PAZ E TRANQUILIDADE, O PECADO TROUXE MEDO E ANGÚSTIA PARA ELES.
            Adão e Eva quando ouviram a voz de Deus, tiveram medo e se esconderam. Deus os interrogou sobre tudo aquilo
            que estava acontecendo, apesar de Ele saber com certeza tudo que estava acontecendo, porém, permitiu que
            eles argumentassem.
            FLASH
            AÍ O BICHO PEGOU. Eles ao invés de assumirem suas respectivas culpas, entornaram o caldo de vez, um culpando
            o outro. Ninguém assumiu o erro.
            Alguma semelhança com o que ocorre até hoje será mera coincidência?
            Eva culpou a serpente. Adão culpou Eva.
            FLASH
            XIIII!!! Que Ingratidão!!! Adão ainda teve o atrevimento de culpar Deus dizendo que a culpa era da mulher
            que Deus deu a ele.
            Então Deus determinou as devidas sentenças de cada um.
            Para a serpente, sentenciou que ela seria maldita entre todos os animais, iria rastejar sobre o próprio
            ventre e comeria do pó da terra todos os dias de sua vida.
            Para Eva, sentenciou que iria multiplicar grandemente o sofrimento na gravidez, em meio à agonia daria a luz
            filhos e seria dominada pelo marido.
            Para Adão, ordenou que, porque escutou a voz da sua mulher e comeu do fruto da árvore que Deus havia
            proibido comer, maldita seria a terra por causa de Adão. Com sofrimentos ele obteria do solo o alimento
            necessário em todos os dias da vida dele. A terra produz espinhos e ervas daninha e Adão teria de comer das
            plantas do campo. Com o suor do rosto o homem comeria o pão, até que voltasse ao solo, pois da terra foi
            formado. O homem é pó e ao pó da terra retornará.
            Deus ainda fez para eles túnicas de peles e os vestiu.
            Adão e Eva não poderiam mais ficar no paraíso porque a árvore da vida estava também no centro do Éden. Como
            Eles estavam condenados a morte não poderiam comer o fruto da árvore de vida e por isso foram expulsos do
            Jardim do Éden.
            Deus colocou Querubins guardando o caminho da árvore da vida.
            FLASH
            COLOCAR UMA IMAGEM DE EVA E ADÃO TRABALHANDO COM MUITA AFLIÇÃO
            Fora do paraíso começaram a viver uma vida de aflições porque tinham perdido o relacionamento face a face
            com Deus por causa do pecado. Eva concebeu e deu a luz ao seu primeiro filho e o chamou de Caim, depois deu
            a luz a Abel.
            Caim foi lavrador da terra e Abel foi pastor de Ovelhas. Um dia os dois ofereceram ofertas ao SENHOR.
            Contudo, Deus se agradou da oferta de Abel, mas não se agradou de Caim.
            Caim ficou com muita raiva de Abel porque Deus se agradou da oferta do irmão, mas não da sua. Como Deus
            sabia o sentimento que Caim estava alimentando, avisou a ele que deveria limpar o coração dele, porém, ele
            rejeitou a condição de recuperação de seu caráter. Por isso, um dia, acabou matando seu irmão.
            FLASH
            COLOCAR NOVAMENTE A IMAGEM DE CAIM MATANDO ABEL
            Que triste! Caim teve a chance de destruir o ódio que estava nutrindo, poderia oferecer outra oferta com
            amor a Deus e não teria sujado suas mãos com o sangue do irmão.
            Foi o primeiro assassinato da história do mundo.
            Como sentença, Deus disse que ele seria maldito desde a terra, a qual abriu a sua boca para receber da mão
            dele o sangue do irmão. Sentenciou ainda, que a quando ele cultivasse o solo, este não forneceria mais do
            que a força dele e ainda seria um fugitivo e vagabundo na terra.
            Caim, depois de cometer um terrível assassinato e ser sentenciado, ainda quis discutir com Deus numa soberba
            insuportável. Disse ao SENHOR se a maldade dele era tão grande que não poderia ser perdoada.
            FLASH
            Será que CAIM não ficou com muito medo de sofrer o mesmo mal que causou ao seu irmão?
            O SENHOR como tão grande misericordioso que é, disse a Caim que qualquer que matasse a Caim seria sete vezes
            castigado. Então pôs o SENHOR um sinal em Caim para que ninguém o ferisse.
            E aqui eu concluo essa narrativa.

            CENA FINAL DO VÍDEO
            Anjo........... Quero Deus
            Malígno...... Quero poder
          </div>

          <div className="Desactived PlataformaVideoTranscrito" id="video-transcrito8">
            VÍDEO 8 – LIVRO DE GÊNESIS
            PARTE II– A HISTÓRIA DO DILÚVIO

             CAPÍTULOS 6, 7, 8 e 9

             Olá queridos e queridas de Deus,
            Esse é o PROJETO VIDA PLENA. O projeto que oferece a você a oportunidade de tornar sua vida plena.
            Administrar ela com sabedoria, com estrutura e dependendo de um Pai Todo Poderoso que quer lhe proteger e
            abençoar.
            FLASH
            Para participar do projeto e ter acesso as atividades interativas é só comprar esse livro e receberá, além
            do livro em sua casa, uma pasta personalizada a fim de realizar as atividades interativas. Esse livro que
            dei o nome do “QUEM SOU?” é parte do projeto em que as narrativas das histórias da Bíblia proporciona a você
            o alimento espiritual e o livro vai proporcionar o alimente emocional. Com ele você vai se autoconhecer e
            poderá atingir uma autoestima equilibrada. Acredite e participe! Eu garanto a sua caminhada para uma vida
            plena.
            Você vai dar a largada de sua vida para conquistar uma vida plena, se alimentando de forma saudável
            espiritualmente, emocionalmente e financeiramente.
            VOCÊ PODE TER UMA VIDA PLENA, SÓ DEPENDE DE VOCÊ, leia todas as instruções do vídeo 3 e 3 profético e saiba
            como conquistar uma vida plena.
            Vamos ao tema de hoje...
            O tema de hoje é a história de Noé. Você deve ler no livro de Gênesis os capítulos de 6 a 9 para poder fazer
            as atividades.
            PRINCIPAIS PERSONANGENS:
            1. NOÉ – Filho de Lameque, creio que foi o ultimo homem que viveu mais de 900 anos.
            Único seguidor de Deus que restou de sua geração.
            Segundo pai da raça humana. Homem de paciência, consistência e obediência.
            Primeiro e mais importante construtor de barcos.
            Como todo ser humano, também tinha fraquezas e erros. Um de seus erros que a Bíblia registra é que ficou
            bêbado e nu diante dos filhos.
            FLASH
            IMAGEM DE UMA ARCA DE NOÉ.
            A HISTÓRIA
            Depois que Caim matou Abel, ele saiu diante da face do SENHOR e habitou na terra de Node, do lado oriental
            do Eden.
            Nesse período os seres viviam muitos anos, em média 800 anos. Então, nesse período os homens da árvore
            genealógica da descendência de Adão viveram muitos anos.
            Transcorreu um grande tempo desde a debandada de Caim e, durante esse tempo, os homens começaram a
            multiplicar-se sobre a face da terra, e lhes tiveram muitas filhas.
            Diante de tantas mulheres, os filhos de Deus, se deixaram levar pelo desejo da carne e começaram a ter
            relacionamentos de forma rebelde e maligna. Tornaram-se terríveis pecadores diante dos olhos do SENHOR.
            FLASH
            Toda criatura viva da terra são criadas por Deus. Contudo, somente àqueles que são tementes ao SENHOR e
            vivem em obediência ao SENHOR são os filhos de Deus.
            A terra começou a virar um caos, os homens estavam agindo com muita perversidade. A terra se perverteu
            diante de Deus e encheu-se de violência. Deus observou a que ponto de perversão havia chegada toda a
            humanidade, com suas práticas malignas.
            FLASH
            QUALQUER SEMELHANÇA COM O QUE OCORRE ATUALMENTE SERÁ MERA COINCIDÊNCIA?
            O SENHOR muito se entristeceu pelas escolhas que o homem tinha feito. O homem escolheu o pecado ao invés de
            ser temente ao SENHOR e viver uma vida de paz e abundância. Por isso, Deus resolveu destruir toda vida que
            havia na terra.
            FLASH
            Deus conhece o coração e mente de todas as suas criaturas. Creio que se Deus resolveu destruir todas as
            vidas é porque sabia que essas vidas não teriam mais salvação.
            Contudo, Deus sendo o TODO PODEROSO QUE TUDO SABE, encontrou um coração justo, temente ao SENHOR e resolveu
            poupá-lo. Noé era um homem justo, integro e andava com Deus.
            Noé tinha três filhos de nomes, Sem, Cam e Jafé. Creio que esses filhos não devem ter tido uma vida com
            acontecimentos importantes que deixassem legados registrados na Bíblia.
            Diante da decisão do SENHOR de exterminar toda vida na terra e também decidindo poupar Noé e sua família,
            Deus deu uma missão a Noé. Essa missão seria uma prova da fé de Noé aos outros homens e também poderia ser
            uma advertência aos pecadores para se arrependerem e voltarem para Deus enquanto fosse tempo.


            FLASH
            DE NOVO!!!!! QUALQUER SEMELHANÇA COM O QUE OCORRE ATUALMENTE SERÁ MERA COINCIDÊNCIA?
            Então Deus disse para Noé que iria mandar um dilúvio para terra. Disse que mandaria o Dilúvio, muitas e
            muitas águas sobre a terra, a fim de exterminar de debaixo do céu toda a carne que tivesse fôlego de vida:
            tudo o que há sobre a face da terra deveria perecer. Então mandou Noé construir uma arca de madeira para
            quando acontecesse o dilúvio.
            FLASH
            DEUS é tão perfeito, tão detalhista que deu a Noé todas as instruções de como deveria ser a arca. Disse que
            ele deveria fazer exatamente como detalhado.
            Deus disse ainda que iria destruir tudo, porém, com Noé e família estabeleceria uma Aliança. Iria levar para
            Arca aves de cada espécie, animais de cada espécie, todos os répteis do solo de cada espécie, seria um casal
            para os conservarem em vida.
            Então, Noé começou a construir a arca exatamente de acordo com todas as instruções do SENHOR. Ele levou um
            pouco mais de 100 anos para construir. Nesse tempo os homens pecadores poderiam praticar a fé como Noé,
            poderiam arrepender-se de seus pecados e voltar-se para o SENHOR. Contudo, todavia, entretanto, preferiram
            zombar de Noé por causa da construção de um barco em terra seca e sem qualquer perspectiva de chuva.
            Noé tinha 600 anos quando veio o dilúvio. Começou a chover e então Noé e sua família entraram na arca. Deus
            também mandou os casais de animais grandes, puros e impuros, de aves e de todos os animais pequenos que se
            movem rente ao chão para entrar na arca.
            Desabaram as grandes águas do Dilúvio sobre a terra! Foram quarenta dias e quarenta noites chovendo
            torrencialmente sem parar. Todas as fontes das grandes profundezas jorraram, e as comportas do céu se
            romperam.
            As águas subiram e se avolumaram muito sobre a terra, e a arca flutuava sobre as muitas águas. As águas
            aumentaram cada vez mais sobre a terra e as mais altas montanhas que estão sob todo o céu foram totalmente
            cobertas! As águas subiram até cerca de sete metros acima das montanhas.
            FLASH
            Fico imaginando o terror que deve ter sido.
            Quando começam as trovoadas, os relâmpagos, uma chuva torrencial, fico quietinha, encolhida orando para a
            chuva diminuir.
            Pereceram então todos os seres vivos que se movem sobre a face da terra: aves, animais domésticos, feras,
            todas as pequenas criaturas que povoam a terra e todos os seres humanos. Morreu tudo que tinha um sopro de
            vida nas narinas e não estava na arca. Isto é, tudo o que estava vivo sobre a terra firme.
            Assim desapareceram todos os seres que se moviam na superfície do solo: não sobreviveu um só homem, assim
            como todos os animais grandes, os animais pequenos que rastejam pelo chão e as aves do céu. Somente
            sobreviveram Noé e os que com ele estavam na arca.
            FLASH
            Por que o homem dotado de tanta inteligência que Deus deu não consegue viver pela fé no seu criador e estar
            protegido e abençoado, livre espiritualmente de todos os males que está propenso a enfrentar? As criaturas
            daquele tempo tiveram oportunidade durante pelo menos cem anos para terem a benção divina, mas não quiseram.
            Que tristeza e terror é a rebeldia do homem!
            A enchente prevaleceu sobre a terra durante cento e cinqüenta dias. Depois desse tempo, Deus enviou um forte
            vento sobre a terra e as águas começaram a baixar.
            No total foi um pouco mais de um ano que Noé, sua família e todos os animais permaneceram na arca e poderem
            pisar novamente em solo seco. Depois desse tempo Noé e todos os seres vivos saíram da arca e puderam sentir
            novamente o valor da liberdade que vem da paz de Deus.
            Noé construiu um altar dedicado ao SENHOR e ofereceu alguns animas e aves em holocausto. O SENHOR sentiu o
            aroma agradável da adoração e declarou a si mesmo: “Jamais amaldiçoarei a terra por causa do homem,
            porquanto seu íntimo é completamente inclinado para o mal, desde o nascimento. E nunca mais destruirei todos
            os seres nos quais há o fôlego da vida, como fiz desta vez.
            Deus abençoou Noé e seus filhos, e determinou-lhes: Sede fecundos e multiplicai-vos, enchei a terra. Deus
            renovou sua aliança com Noé e seus filhos. Deus também instruiu sobre as leis Dele e colocou o seu arco nas
            nuvens que é um sinal fulgurante da Aliança entre Deus e a terra.
            Noé era cultivador e foi o primeiro a plantar uma vinha. Bebeu do vinho que havia feito, enbriagou-se e
            ficou dentro de sua tenda nu. Cam viu seu pai nu e foi contar aos dois irmãos de forma desrespeitosa sobre o
            estado do seu pai. Então, Sem e Jafé tomaram uma capa e foram cobrir seu pai sem, contudo, olhar a nudez
            dele.
            Quando Noé acordou da sua embriaguez e soube do que Cam, seu filho mais jovem, havia feito e esbravejou:
            Maldito seja Canaã! Escravo de escravos será para seus irmãos.
            FLASH
            Noé amaldiçoou Canaã porque Cam, seu filho que o havia desrespeitado, era o pai de Canaã.
            Noé ainda acrescentou: Bendito seja o SENHOR, o Deus de Sem! E seja Canaã seu escravo. Que Deus amplie o
            território de Jafé; habite ele nas tendas de Sem, e seja Canaã seu escravo.
            Noé ainda viveu mais trezentos anos após o Dilúvio.
            Aqui nós concluímos a história do grande Noé, filho querido, amado e abençoado pelo SENHOR.
            FLASH
            Todos que fizerem DEUS o SENHOR de suas vidas viverão todos os anos de suas vidas com proteção, bênçãos e O
            amor ágape que somente esse Deus tem.
            Que a paz de Deus esteja em sua vida.
            FLASH
            Colocar o vídeo de minha despedida dando tchau...
          </div>

          <div className="Desactived PlataformaVideoTranscrito" id="video-transcrito9">
            VÍDEO 9 – LIVRO DE GÊNESIS
            PARTE III– A TORRE DE BABEL

             CAPÍTULO 11

             Olá querido e querida de Deus,
            Vamos a narrativa de hoje que é TORRE DE BABEL.
            Você deve ler o capítulo 6 do Livro de Gênesis para fazer as atividades.
            PRINCIPAIS PERSONANGENS:
            1. NINRODE – Esse personagem só foi citado no capítulo 10– 8 e 9.
            Não existem muitas informações a respeito dele. Contudo, a Bíblia cita como um guerreiro heróico e um grande
            caçador na terra.
            O pecado entra no coração de pessoas quando elas se tornam orgulhosas.
            Ninrode deve ter se orgulhado de seus feitos e cometeu o pecado da soberba.
            Alguns historiadores o consideram fundador do grande e ímpio Império Babilônico.
            A HISTÓRIA
            FLASH
            COLOCAR UMA FOTO DE UM ZIGURATE.
            Os três filhos de Noé se dispersaram e tiveram grande descendência.
            Se multiplicaram grandemente e a terra tornou-se novamente bem povoada.
            Todos os povos tinham uma mesma língua e uma mesma fala.
            Ninrode que era descendente de Cam, se tornou poderoso na terra.
            Ele foi o mais audaz e corajoso dos caçadores diante do SENHOR, e por esse motivo há o ditado: “Valente como
            Ninrode!”
            FLASH
            É especulado que provavelmente foi sob o comando de Ninrode que começou a construção da Torre de Babel.
            Um grupo de pessoas que habitava num vale no Oriente, na terra de Sinar, começou a fazer tijolos e
            queimá-los bem. Os tijolos eram por pedra e o betume por cal.

            FLASH
            Esses tijolos serviram para construir a Torre de Babel.
            Esse grupo de pessoas acabou por resolver edificar uma cidade e uma torre cujo ápice penetrasse nos céus!.
            Envaideciam-se dizendo que por causa da cidade e da torre o nome deles seria honrado por todos e eles jamais
            seriam dispersados pela face da terra.
            O SENHOR viu o que faziam e, além disso, sabia que eles queriam ser admirados e adorados como um deus.
            Ora, o SENHOR declarou: Eis que a humanidade se constitui em um só povo e todos falam a mesma língua.
            Com essa construção o homem começa a se achar auto-suficiente e em breve nada mais impedirá de realizar o
            que quiserem.
            Então o SENHOR decidiu descer e confundir a linguagem dos seres humanos, a fim de que não mais se
            entendesseem uns com os outros.
            Então o SENHOR confundiu a linguagem dos seres humanos e eles se espalharam dali por toda a terra e pararam
            de erguer a cidade por não se entendiam mais.
            Por isso essa construção ficou conhecida como Babel, porquanto ali o SENHOR confundiu a língua de todo
            mundo.
            Assim, desde a Babilônia, o SENHOR dispersou a humanidade sobre a face da terra.
            Muitos filmes e muitas narrativas especulam que foi com um grande trovão que Deus destruiu a torre e todos
            os que estavam nela caíram desacordados.
            Quando acordaram não falavam a mesma língua.
            Contudo, isso é apenas especulação do homem porque a Bíblia não cita de que forma Deus confundiu a linguagem
            e dispersou os seres humanos.
            FLASH
            COLOCAR UMA IMAGEM DE DEUS DESTRUINDO A TORRE DE BABEL.
            A Torre de Babel foi uma grande conquista humana, uma maravilha do mundo.
            No entanto, era um monumento para engrandecer as pessoas, não a Deus.
            CENA FINAL DO VÍDEO
            Anjo........... Só Deus é Onipotente
            Malígno...... Eu sou poderoso
          </div>

          <div className="Desactived PlataformaVideoTranscrito" id="video-transcrito10">
            VÍDEO 10 – LIVRO DE GÊNESIS
            PARTE IV – ABRAÃO – SUBPARTE I

             CAPÍTULO 12 E 13

             Olá querido e querida de Deus,
            Na narrativa de hoje vamos começar com a história de Abraão.
            Você deve ler os capítulos 12 e 13 do Livro de Gênesis para fazer as atividades.
            PRINCIPAIS PERSONANGENS:
            1. ABRAÃO – Homem de fé que agradou a Deus.
            Tornou-se o fundador da nação judaica
            Foi respeitado pelos outros e corajoso ao defender a família a qualquer preço
            Foi um pai cuidadoso não apenas para a sua família, mas praticou a hospitalidade para com outras pessoas.
            Foi um fazendeiro bem-sucedido
            Tinha o costume de evitar conflitos, mas, quando estes eram inevitáveis permitia que seu oponente
            estabelecesse as regras para a disputa.
            Assim como qualquer ser humano também tinha suas fraquezas e erros.
            Quando Abraão estava sob pressão, ele distorcia a verdade.
            2. SARA – Esposa de Abraão.
            Foi intensamente leal ao seu único filho
            Tornou-se mãe de uma nação e uma antecessora de JESUS
            Foi uma mulher de fé, a primeira citada na Galeria da fé, em Hebreus 11.
            Também Sara tinha suas fraquezas e erros. Teve dificuldade em crer nas promessas de Deus para a sua vida.
            Deus não se limita aos acontecimentos comuns. Ele pode alargar os limites e realizar proezas nunca antes
            vistas.
            3. LÓ – Sobrinho de Abraão.
            Foi um homem de negócios bem sucedido.
            Fraquezas e Erros: Costumava fugir às decisões, e depois escolhia a saída mais fácil.
            Ao receber opção de escolha, sua primeira reação era pensar em si mesmo.
            A HISTÓRIA
            Até a história da Torre de Babel, não existe qualquer informação fidedigna de datação em relação a esse
            acontecimento e aos anteriores desde a criação.
            Então, depois da confusão de línguas e a dispersão de grupos humanos, a Bíblia começa no capítulo 12 a
            história de Abraão, que tinha como nome de nascença Abrão.
            Abraão vivia na cidade de Ur com sua família e seus parentes. Era Ur uma cidade muita idólatra.
            FLASH
            Será que foi por isso que o SENHOR mandou Abraão sair de lá?
            Quando Abraão tinha 75 anos, O SENHOR fez um grande chamado a Abraão e fez uma promessa divina e inusitada
            para ele.
            O SENHOR disse para Abraão sair da terra dele, da casa do pai dele e ir para a terra que o SENHOR iria
            mostrar.
            O SENHOR disse também que iria fazer dele uma grande nação, iria abençoar e engrandecer o nome dele e ele
            seria uma benção.
            O SENHOR disse ainda que abençoaria a todos que o abençoassem e amaldiçoaria os que o amaldiçoassem. Disse
            que seriam benditas todas as famílias da terra através dele.
            Então Abraão saiu com sua família, com seu sobrinho Ló e família, e foi para Harã. De Harã foram para Siquem
            em Canaã, onde estavam estabelecidos os cananeus. Nessa terra O SENHOR disse a Abrão que daria aquela terra
            para ele.
            Abraão moveu-se dali e armou a sua tenda. Edificou um altar ao SENHOR e invocou o nome do SENHOR.
            Depois, Abraão caminhou dali, seguindo para a banda do sul. E aconteceu uma grande fome na terra, por isso
            Abraão saiu de sua localização e desceu ao Egito.
            Ao entrar no Egito, Abraão ficou receoso porque sua mulher, Sara, era muito bela e o Faraó poderia
            cobiçá-la. Poderia matar Abraão para ficar com ela. Em função disso Abraão resolveu criar uma meia-verdade.
            Combinou com Sara que iria dizer no Egito que ela era irmã dele. Na realidade ela era meia irmã dele por
            isso meia verdade.
            FLASH
            Por mais que eu tente ser tolerante nessa ação de Abraão sobre dizer uma meia-verdade, não consigo deixar de
            crer que ele errou muito. Afinal não existe meia verdade. Ou é verdade ou não é. E você o que acha a
            respeito?
            Os príncipes do Faraó começaram a gabar-se diante do Faraó por causa de Sara e então Faraó a tomou para seu
            palácio porque Abraão disse que ela era irmã dele. Faraó tomou Sara para si e deu muitos presentes a Abraão
            como honra por ter uma irmã tão formosa.
            Contudo, O SENHOR não permitiu que o Faraó tocasse em Sara. O SENHOR feriu o Faraó e a sua casa com grandes
            pragas. Faraó descobriu que tudo que estava acontecendo era porque ele estava com a mulher de Abraão.

            FLASH
            Como Deus é fiel nas promessas Dele!
            Mesmo com o erro de Abraão, Deus não permitiu que sua esposa fosse maculada.
            Faraó chamou Abraão e questionou ele porque tinha mentido. Independente da justificativa de Abraão, o Faraó
            devolveu Sara para Abraão e mandou que ele fosse embora dali.
            Depois que saiu do Egito, Abraão foi para o sul com todos que estavam com ele e também tudo que tinha.
            Abraão ia seguindo caminho com tudo que tinha e estava muito rico, com gado, com prata e ouro.
            Voltou ao lugar que tinha armado sua tenda e levantado um altar AO SENHOR.
            Após permanecerem algum tempo acampados nesse lugar, Ló também já tinha muitos bens, já tinha rebanhos e
            vacas e tendas.
            Porém, a terra era pequena e os recursos dela eram insuficientes para todos que ali estavam. Por causa disso
            começou uma contenda entre os servos de Ló e Abraão.
            Então Abraão chamou Ló e disse que não deveria haver contendas entre ele e Ló e seus servos porque todos
            eram irmãos em companheirismo e amor. Pediu a Ló que olhasse toda a terra a frente, que escolhesse um lugar
            para ir. Disse ainda que se Ló escolhesse a terra da direita ele iria para esquerda e, caso escolhesse a da
            esquerda, ele iria para direita. Deixou Ló escolher de acordo com o interesse dele.
            FLASH
            Diante dessa atitude de Abraão podemos constatar como ele era desapegado. Como ele realmente estava
            conectado com Deus acima de qualquer situação física ou bem material.
            À frente existiam as cidades de Sodoma e Gomorra. Era campina do Jordão, bem regada, por isso Ló escolheu ir
            para Sodoma e foi com toda sua família e com todos seus bens.
            Depois que Ló foi embora, Abraão habitou na terra de Canaã. O SENHOR mais uma vez fez grandes promessas
            abençoadoras a Abraão. Disse que daria a Abraão toda terra desde a banda do norte, e do sul, e do oriente, e
            do ocidente porque nessa terra estará toda sua semente para sempre.
            Então... Continua no vídeo 11.
            CENA FINAL DO VÍDEO
            Anjo........... Deus me ama
            Malígno...... Eu me odeio
          </div>

          <div className="Desactived PlataformaVideoTranscrito" id="video-transcrito11">
            VÍDEO 11 – LIVRO DE GÊNESIS
            PARTE V – ABRAÃO – SUBPARTE II

             CAPÍTULO 14

             Olá querido e querida de Deus,
            No vídeo 10 iniciamos a narrativa da história de Abraão e, agora, vamos narrar mais uma parte da história de
            Abraão.
            Para esse vídeo, você deve ler o capítulo 14 do Livro de Gênesis para fazer as atividades.
            PRINCIPAIS PERSONANGENS:
            1. MELQUISEDEQUE – Foi o primeiro sacerdote/rei que as Escrituras registram.
            Um líder com o coração voltado para Deus.
            Hábil para encorajar as pessoas e servir a Deus de todo o coração.
            Um homem cujo caráter refletia seu amor por Deus.
            Uma pessoa no Antigo Testamento que nos lembra JESUS, e a qual alguns ralmente acreditam que era JESUS.
            A Bíblia não cita qualquer fraqueza ou erro dele.

            A HISTÓRIA
            Existiam muitos conflitos entre os reis de várias cidades das quais Sodoma era uma delas. Eram quatro reis
            contra cinco reis.
            FLASH
            Você acredita que tinha um dos reis que se chamava... QUE DOR LA OMER
            Xiii.... que nome infeliz!
            Esse era o rei da cidade de Elão e cobrava impostos de cinco cidades. Essas cidades estavam pagando impostos
            já havia 12 anos. Um dia essas cidades fizeram uma aliança e se negaram a pagar mais impostos a esse rei.
            FLASH
            Eram pelo menos 9 localidades em conflitos. Todas tinham um rei e com nomes escalafobéticos que me fazem
            enrolar a língua para dizer. Por isso, na minha narrativa acho melhor não ficar citando todos esses nomes
            para não eu não passar vergonha... Estou perdoada?
            Esse rei da cidade de Elão com nome terrivelmente complicado reagiu rapidamente a rebelião guerreando e
            reconquistando todas as cidades. Dos versículos 1 ao 11 vemos uma guerra bem complicada e confusa. Porém, o
            que nos importa na narrativa é que dentre as cinco cidades estava Sodoma, onde habitava Ló. Todas as cidades
            perderam a batalha e os reis de ambas fugiram para um monte.
            FLASH
            Você lembra de Ló, sobrinho de Abraão que se separou dele e escolheu Sodoma para habitar?
            Então, Ló que estava em meio à confusão também foi capturado juntamente com sua família e seus bens.
            Um dos que escapara do cativeiro foi até Abraão contar o que havia acontecido. Ouvindo, pois, Abraão que seu
            sobrinho estava em cativeiro decidiu partir para guerra a fim de os libertar.
            Então Abraão orou pedindo a Deus direção e proteção. Armou os seus criados, nascidos em sua casa, sendo um
            total de 318 e foi com eles até Dã.
            Orientado por Deus, armou uma estratégia de atacar à noite.
            Abraão com seus 318 homens desafiou o exército desse nome difícil Que dor e alguma coisa mais, e o atacou
            próximo a Damasco.
            Sob a direção, proteção e benção de Deus, Abraão derrotou os opressores e resgatou Ló, sua família e os bens
            dele, mesmo com um número de adversário bem maior.
            Depois da batalha que Abraão foi o grande vitorioso, Melquisedeque, rei de Salém, foi a Abraão, levou pão e
            vinho e realizando uma confraternização, abençoou Abraão, porque ele provavelmente era um sacerdote.
            Melquisedeque disse: - Bendito seja Abraão do Deus Altíssimo, o Possuidor dos céus e da terra; bendito seja
            o Deus Altíssimo, que entregou os teus inimigos nas tuas mãos.
            Nesse acontecimento a Bíblia registra a primeira vez que foi pago um dízimo. Abraão deu a Melquisedeque dez
            por cento dos bens que havia recobrado.
            IMAGEM FINAL
            ANJO ............. Quero PAZ
            Malígno......... Quero GUERRA
          </div>

          <div className="Desactived PlataformaVideoTranscrito" id="video-transcrito12">
            VÍDEO 12 – LIVRO DE GÊNESIS
            PARTE VI – ABRAÃO – SUBPARTE III

             CAPÍTULO 15 A 17

             Olá querido e querida de Deus,
            Esse é o nosso PROJETO VIDA PLENA.
            Com ele VOCÊ PODE TER UMA VIDA PLENA, SÓ DEPENDE DE VOCÊ, leia todas as instruções do vídeo 3 e 3 profético
            e saiba como conquistar uma vida plena.
            No vídeo 11 narramos mais um trecho da história de Abraão.
            Para esse vídeo, você deve ler os capítulos de 15 a 17 do Livro de Gênesis para fazer as atividades.
            PRINCIPAIS PERSONANGENS:
            1. AGAR – Serva de Sara.
            Mãe do primeiro filho de Abraão, Ismael, que se tornou o fundador das nações árabes.
            Dentre suas fraquezas e erros, sempre que se deparava com problemas, fugia deles. Sua gravidez suscitou
            fortes sentimentos de orgulho e arrogância.
            2. ISMAEL – Primeiro filho de Abraão.
            Um dos primeiros a experimentar o sinal físico do pacto de Deus, a circuncisão.
            Conhecido por sua habilidade como arqueiro e caçador.
            Pai de 12 filhos que se tornaram líderes de tribos guerreiras.
            Dentre suas fraquezas e erros não reconheceu o lugar de seu irmão Isaque e zombou dele.
            A HISTÓRIA
            No vídeo anterior narramos as batalhas que Abraão teve que ter coragem e enfrentar para libertar seu
            sobrinho Ló e família, somente por amor.
            Com essa atitude Abraão demonstrou sua fidelidade, primeiramente ao SENHOR que lhe deu coragem para guerrear
            com fé na certeza da vitória. Em segundo, ainda lhe foi oferecido bens e terras de Sodoma, as quais ele não
            aceitou.
            Nesse evento em que teve contato com Melquisedeque, a Bíblia registra o primeiro fato de pagamento de
            dizimo, Abraão confirmou sua fé em Deus e foi abençoado abundantemente.


            FLASH
            Consulte a Deus em todas as situações de sua vida, obedeça e comprove o sucesso nos resultados.
            Depois dessas coisas O SENHOR deu uma visão a Abraão e declarou:
            - Não temas, Abrão, eu sou o teu escudo, o teu grandíssimo galardão.
            Abraão aproveitou para choramingar com o SENHOR e abrir seu coração e mente de suas tristezas e temores.
            Abriu-se com o SENHOR ao declarar seu grande desejo de ter um herdeiro vindo da união dele com Sara.
            Então Deus o levou ao relento e o mandou contar as estrelas, se era possível ele fazer isso.
            Independentemente dele poder contar ou não, Deus disse a ele de que a descendência dele seria tão grande ou
            maior que a quantidade de estrelas existentes no céu.
            FLASH
            Quando Deus fizer uma promessa para você, independentemente de parecer impossível de realizar,
            independentemente de tempo, independentemente de tudo que é físico, creia e aguarde porque dependendo,
            apenas, de sua fé, vai acontecer.
            Agora, tenha certeza de que foi Deus que prometeu e não é algo de você mesmo.
            Além da promessa de Deus a Abraão, Deus naquele momento fez um concerto com ele, dizendo que deu à
            descendência dele toda a terra que estava pisando, desde o rio do Egito até ao grande rio Eufrates.
            Bem, depois que se passaram dez anos da saída de Abraão com os seus da cidade de Ur, Sara, sua esposa, sendo
            estéril e já com 75 anos, resolveu pedir a Abraão que se deitasse com sua serva Agar para conceber o filho
            que ela acreditava ter sido prometido por Deus.
            FLASH
            Sara pensou que podia dar uma ajudinha para realizar as promessas de Deus.
            Deus é Deus e não precisa de uma “mãozinha” de nenhuma de suas criaturas para realizar suas promessas.
            Lembre-se sempre que Ele sabe e pode TUDO. TUDO, TUDO.
            Então, Abraão atendeu ao pedido de sua esposa e ele entrou à Agar, e ela concebeu. Ficou grávida de um filho
            de Abraão.
            Contudo, Agar sentindo-se superior a Sara, começou a desprezar Sara e tratá-la desrespeitosamente.
            FLASH
            Veja você o problemão que Sara arranjou ao ser impulsiva e querer dar uma mãozinha à Deus.
            Sara começou a sentir o menosprezo de Agar e, com a autorização de Abraão, começou a perseguir
            desfavoravelmente Agar.
            Agar ficou muito aborrecida e fugiu da aldeia pelo deserto, acabando por desabar junto a uma fonte de água.
            Então veio um anjo do SENHOR e perguntou a ela de onde estava vindo e para onde ia com aquela atitude tão
            impulsiva e rebelde.
            Agar, naturalmente já arrependida de sua atitude porque devia estar enfrentando o caos de um deserto, ouviu
            a ordem do anjo que mandou ela voltar à aldeia e humilhar-se diante da sua senhora.
            Porém, o anjo do SENHOR declarou uma profecia de que aquela semente que ela carregava seria multiplicada
            sobremaneira a qual não poderia ser contada por tão numerosa que seria. Disse também que o menino que
            nasceria deveria ser chamado de Ismael e ele seria homem bravo.
            Agar obedeceu ao anjo de SENHOR, voltou a aldeia, deu a luz ao seu filho e o chamou de Ismael, conforme
            orientou o anjo do SENHOR.
            E tinha Abraão 86 anos quando Agar deu Ismael a ele.
            O nome de nascença de Abraão e Sara era Abrão e Sarai.
            Quando Abraão estava com 99 anos, muito próximo de se cumprir a promessa do SENHOR na vida dele e Sara, Deus
            mudou os nomes deles.
            A partir dos 99 anos de Abraão e 89 de Sara foi que passaram a chamar-se dessa forma. O nome Abraão que Deus
            trocou, significa “pai da multidão de nações”.
            Também nesse concerto Deus instituiu a aliança da circuncisão como sinal entre Ele e Abraão. Todos os que
            pertenciam à casa de Abrão, inclusive ele próprio, deveriam ser circuncidados e, a partir daí, todos os
            machos que nascessem deveriam ter o prepúcio circuncidado quando tivesse 8 dias de vida.
            Então, Abraão tomou todos os machos de sua casa, juntamente com Ismael e os circuncidou conforme a aliança
            estabelecida entre ele e Deus.
            Nesse tempo, Abraão já com a idade de 100 anos e Sara com 90 anos, Deus cumpriu sua promessa e concedeu a
            eles o filho tão desejado da união dos dois.
            Deus disse que esse filho deveria ser chamado de Isaque e o casal obedeceu.
            CENA FINAL
            Anjo .........Deus é fiel
            Malígno... Sou imediatista
          </div>

          <div className="Desactived PlataformaVideoTranscrito" id="video-transcrito13">
            VÍDEO 13 – LIVRO DE GÊNESIS
            PARTE VII – ABRAÃO – SUBPARTE IV

             CAPÍTULO 18 A 19

             Olá querido e querida de Deus,
            Esse é o nosso PROJETO VIDA PLENA.
            Com ele VOCÊ PODE TER UMA VIDA PLENA, SÓ DEPENDE DE VOCÊ, leia todas as instruções do vídeo 3 e 3 profético
            e saiba como conquistar uma vida plena.
            No vídeo 12 narramos mais um trecho da história de Abraão.
            Para esse vídeo, você deve ler os capítulos de 18 e 19 do Livro de Gênesis para fazer as atividades.
            A HISTÓRIA
            Nesse vídeo vamos narrar a história da destruição de SODOMA E GOMORRA.
            Quando da idade de 99 anos, Abraão estava sentado à porta de sua tenda percebeu a chegada de 3 varões, que
            eram os anjos do SENHOR.
            Como era de hábito Abraão receber visitas com toda dedicação, ele foi aos anjos e ofereceu uma recepção
            calorosa, amorosa e farta.
            Tendo se regalado com toda a recepção, os anjos iniciaram a apresentar o motivo da visita deles. Então
            disseram a Abraão que por um tempo bem próximo Sara iria ter um filho.
            Sara ouvindo essa informação riu-se porque não podia crer que ela com 89 anos e sem mais ovular pudesse ter
            um filho. Na idéia dela isso era impossível.
            FLASH
            Na nossa também...
            E disse o SENHOR a Abraão: Por que Sara riu-se? Será que haveria alguma coisa impossível ao SENHOR?
            Depois de dada a mensagem, os anjos se levantaram e olharam para a banda de Sodoma e Gomorra.
            Como o SENHOR é amoroso com seus filhos fieis, Ele comunicou a Abraão que iria julgar Sodoma e Gomorra e
            realizar a justiça necessária diante da multiplicação do pecado que estavam praticando.
            Abraão ficou diante da face do SENHOR e começou a interceder pelas cidades clamando pela misericórdia de
            Deus.
            Disse Abraão ao SENHOR: Destruirás também o justo com o ímpio?
            Se porventura houver cinqüenta justos na cidade, destruí-los-ás também e não pouparás o lugar por causa dos
            cinqüenta justos que estão dentro dela? Disse mais ainda Abraão e logo o SENHOR respondeu:
            - Se eu em Sodoma achar cinqüenta justos dentro da cidade, pouparei todo o lugar por amor deles.
            Então, Abraão, vendo a misericórdia do SENHOR e sentindo que Deus estava permitindo ele interceder pela
            cidade, foi diminuindo o número inicial de 50 justos até chegar a 10 justos.
            Deus sempre com amor e misericórdia foi cedendo a Abraão e, por fim, prometeu que se encontrasse 10 justos
            na cidade não a destruiria por amor aos 10.
            FLASH
            Será que dá para perceber a plenitude da justiça de Deus? Será que existe algum ser vivo que possa fazer uma
            justiça tão plena que chegue perto de Deus?
            E no amor que Ele tem por seus filhos fieis? Cada dia me maravilho mais com esse Deus que é Todo Poderoso e
            nos dá a liberdade de negociar com Ele.
            Então dois dos anjos foram a Sodoma. Ló vendo os dois estrangeiros e também tendo o hábito de excelente
            anfitrião, prostrou-se diante deles e os convidou para se hospedarem-se em sua casa.
            Apesar da negativa inicial dos anjos de aceitarem o convite de Ló, ele tanto insistiu que conseguiu seu
            objetivo.
            À noite, todos os varões da cidade cercaram a casa de Ló e começaram a exigir que entregasse os hóspedes
            para eles. Ló não atendeu aos pedidos e até ofereceu suas duas filhas em lugar dos hospedes.
            Como Ló os desafiou, eles se voltaram cheios de ódio contra Ló e começaram a tentar matá-lo.
            Então os anjos do SENHOR, trouxeram Ló para dentro de casa, ergueram as mãos e cegaram todos os varões que
            estavam à frente da casa.
            Os anjos disseram a Ló que juntasse toda a família e saísse da cidade porque ela seria destruída diante da
            total crueldade que toda a cidade vinha praticando.
            Ao amanhecer os anjos cobraram Ló que saísse rápido da cidade com sua família. E, porque estavam demorando,
            os anjos pegaram as mãos de todos da família e puseram para fora da cidade.
            Contudo, deram um aviso muito importante: Escapa-te por tua vida, não olhes para trás de ti e não pares em
            toda esta campina, escapa lá para o monte, para que não pereças.
            Ló ainda pediu para ir a uma cidadezinha perto e o SENHOR autorizou.
            Depois que Ló saiu com sua família, o SENHOR fez chover enxofre e fogo, desde os céus, sobre Sodoma e
            Gomorra.
            Destruiu tudo, toda a cidade, toda a campina, todos os moradores e o que nascia da terra.
            A mulher de Ló não ligou para os avisos dos anjos, olhou para trás e virou uma estátua de sal imediatamente.
            Ló ficou tão temeroso que se escondeu em uma caverna e ficou habitando nela junto com suas duas filhas.
            A primogênita percebendo que não poderia se unir a qualquer homem vivendo daquela forma, resolveu embebedar
            o pai e ter relações sexuais com ele para poder ter uma semente dele. Foi o que fez a noite. Embebedou o pai
            e deitou-se com ele. Ele bêbado não teve consciência de nada do que aconteceu.
            No dia seguinte convenceu sua irmã a fazer o mesmo. Ela aceitou e deitou-se também com o pai à noite, sendo
            que ele também não teve consciência disso.
            As duas engravidaram e a primogênita teve um filho que chamou de Moabe e é o pai dos Moabitas até o dia de
            hoje. A mais nova também teve um filho e chamou de Bem-Ami que é o pai dos filhos de Amom até hoje.
            Como conseqüência dos incestos praticados pelas filhas de Ló, os filhos delas se tornaram pais dos dois
            maiores inimigos dos israelitas,
            FLASH
            Como atitudes impulsivas e irresponsáveis geram conseqüências tão desastrosas. Pense bem antes de tomar
            atitudes contrárias as leis de Deus porque as conseqüências podem ser terrivelmente trágicas.
            E aqui terminamos a história da destruição de Sodoma e Gomorra.
            CENA FINAL
            Anjo .........Quero meu SENHOR
            Malígno... Quero engravidar.
          </div>

          <div className="Desactived PlataformaVideoTranscrito" id="video-transcrito14">
            VÍDEO 14 – LIVRO DE GÊNESIS
            PARTE VIII – ABRAÃO – SUBPARTE V

             CAPÍTULO 20 A 22

             Olá querido e querida de Deus,
            Esse é o nosso PROJETO VIDA PLENA.
            Com ele VOCÊ PODE TER UMA VIDA PLENA, SÓ DEPENDE DE VOCÊ, leia todas as instruções do vídeo 3 e 3 profético
            e saiba como conquistar uma vida plena.
            No vídeo 13 narramos mais um trecho da história de Abraão.
            E nesse vídeo terminaremos a história de Abraão.
            Para ele você deve ler os capítulos de 20 a 22 do Livro de Gênesis para fazer as atividades.
            PERSONAGENS
            1. ISAQUE – Nasceu miraculosamente da união de Abraão e Sara, quando estes tinham 100 e 90 anos
            respectivamente.
            Foi o primeiro descendente no cumprimento da promessa de Deus a Abraão.
            Parece ter sido um marido cuidadoso e consistente, pelo menos até o nascimento de seus filhos gêmeos.
            Demonstrou grande paciência.
            Das duas fraquezas que a Bíblia registra, uma delas talvez tenha herdado do pai porque costumava mentir
            quando era pressionado. A outra fraqueza foi a prática do favoritismo entre seus filhos e, ainda, alienação
            da esposa.
            A HISTÓRIA
            Ao terminar a história da destruição de SODOMA e GOMORRA, voltemos à história de Abraão que é o nosso foco
            nesses capítulos até aqui.
            Abraão por algum motivo que a Bíblia não diz, partiu para terra do sul indo peregrinar em Gerar onde o rei
            era Abimeleque.
            Mais uma vez, Abraão teve medo por causa da beleza de Sara e disse ao rei que ela era sua irmã. Então o rei
            a tomou para ser sua esposa.
            Abimeleque ficou doente por causa da luxúria iminente que ele estava para cometer apesar de inocente. Também
            no palácio dele e as mulheres estavam estéreis por causa da situação. Contudo, Deus em sonho alertou
            Abimeleque que não tocasse em Sara porque ela era casada.
            Abimeleque pode clamar a Deus por justiça porque ainda não tinha se deitado com Sara e foi enganado pensando
            que ela era livre. Conforme toda Sua Justiça, Deus respondeu a Abimeleque que conhecia o coração dele e não
            o culpava, mas ele deveria restituir
            Sara a Abraão.
            FLASH
            O rei não sabia que quando Deus governa nossa vida, mesmo quando cometemos alguma transgressão, Ele nos
            protege e impede que o mal aconteça.
            Foi Deus que não permitiu que Abimeleque tocasse em Sara.
            Abimeleque depois de repreender Abraão, não só restituiu Sara como ainda deu ovelhas e vacas, e servos e
            servas e disse ainda: Eis que a minha terra está diante da tua face, habita onde bom for aos teus olhos.
            Então Abraão clamou por misericórdia para Abimeleque e Deus o sarou e a sua mulher, e as suas servas, de
            maneira que voltaram a procriar.
            Nesse tempo Deus cumpriu Sua promessa e Sara ficou grávida. Deu a luz ao tão sonhado filho de Abraão, o qual
            deu o nome de Isaque.
            Isaque foi circundado aos 8 dias de vida conforme ordenado pelo SENHOR.
            Com o passar dos anos, Ismael, filho de Agar, começou a zombar e menosprezar Isaque. A situação começou a
            ficar periclitante.
            Então Sara pediu a Abraão que tirasse da aldeia Agar e o filho. Abraão ficou desnorteado com esse pedido,
            mas Deus confirmou que era para fazer aquilo.
            Abraão, naturalmente com o coração partido, obedeceu e mandou embora Agar e seu filho.
            FLASH
            Pensou que Deus foi cruel? Saiba que Deus é o único que conhece os desejo do coração e os pensamentos de
            suas criaturas. Então Ele sempre será justo.
            Talvez se Agar com seu filho não fossem embora pudesse acontecer uma desgraça até de Ismael matando Isaque.
            Alguns anos depois, a Bíblia não especifica exatamente com que idade Isaque estava quando Deus pediu a
            Abraão um grande sacrifício. Porém, alguns especulam que ele estava com 8 anos.
            Então, nesse tempo Deus pediu a Abraão um grande sacrifício. Mandou ele sacrificar Isaque em holocausto no
            monte Moriá.



            FLASH
            Quantos de nós seria capaz de obedecer a uma ordem dessa? Antes de tudo é preciso ter certeza que a ordem
            veio realmente de Deus e depois obedecer incondicionalmente e irracionalmente.
            Se Deus mandou é melhor obedecer.
            Abraão em obediência plena, pegou Isaque e mais dois servos e foi em direção ao Monte Moriá para cumprir sua
            missão.
            Quando já estava próximo, deixou os servos, pegou a lenha do holocausto e colocou no ombro do menino, depois
            ele pegou o fogo e o cutelo e seguiram para o monte.
            Isaque ainda inquiriu seu pai onde estava o cordeiro que era o mais importante para o holocausto que
            faltava.
            Dessa vez Abraão não mentiu e nem usou de subterfúgios, teve uma fé inimaginável e disse ao seu filho: DEUS
            PROVERÁ. Frase que ficou famosa até hoje.
            Deus realmente proveu, mas no último momento. Abraão foi testado no seu amor a Deus acima até do filho que
            deveria ser o que mais amava na vida.
            FLASH
            Você sabe praticar a fé nas suas dificuldades, problemas e, principalmente, nos piores momentos de sua vida?
            Aqui encerramos a história de Abraão e no vídeo 15 vamos narrar à história de Isaque.
            CENA FINAL
            Anjo .........Deus acima de tudo
            Malígno... Não posso obedecer
          </div>
        </div>
      </div>
    </div>

  </main>
        </>
    )
}

export default MainPlataforma;