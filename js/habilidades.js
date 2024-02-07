const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>Revit</p> <br> <p>Revit é um software BIM para arquitetura, urbanismo, engenharia e design.</p> <br> <p>Nivel: ☆☆☆ </p>',
                    '<p>AutoCAD 2D</p> <br> <p>AutoCAD é um software do tipo CAD — computer aided design ou desenho auxiliado por computador - criado e comercializado pela Autodesk</p> <br> <p>Nivel: ☆☆☆☆☆ </p>',
                    '<p>SketchUp </p> <br> <p>é um software próprio para a criação de modelos em 3D</p> <br> <p>Nivel: ☆ </p>',
                    '<p>Canva </p> <br> <p>é uma plataforma de design gráfico que permite aos usuários criar gráficos de mídia social, apresentações, infográficos, pôsteres e outros conteúdos visuais.</p> <br> <p>Nivel: ☆☆☆☆ </p>',
                    '<p>GeoSampa  </p> <br> <p>O GeoSampa é o Mapa Digital do Município de São Paulo.</p> <br> <p>Nivel: ☆☆☆☆ </p>',
                    '<p>Outlook  </p> <br> <p>O Microsoft Outlook é um sistema de software de gerenciamento de informações pessoais da Microsoft </p> <br> <p>Nivel: ☆☆☆☆☆ </p>',
                    '<p>Word   </p> <br> <p>O Microsoft Word é um processador de texto produzido pela Microsoft </p> <br> <p>Nivel: ☆☆☆☆☆ </p>',
                    '<p>Excel    </p> <br> <p>O Microsoft Excel é um editor de planilhas </p> <br> <p>Nivel: ☆☆☆ </p>',
                    '<p>PowerPoint     </p> <br> <p>O Microsoft PowerPoint é um programa utilizado para criação/edição e exibição de apresentações gráficas </p> <br> <p>Nivel: ☆☆☆☆ </p>',
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
    } )
} );



