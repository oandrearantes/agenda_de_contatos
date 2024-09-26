// Dados dos serviços de emergência e utilidade pública
const servicosEmergencia = [
    { nome: "Disque Direitos Humanos", numero: "100" },
    { nome: "Caixa Econômica Federal - Programa Emergencial de Manuntenção do Emprego e da Renda", numero: "111" },
    { nome: "Polícia Militar - SOMENTE CELULAR", numero: "112/911" },
    { nome: "Conselhos Tutelares", numero: "125" },
    { nome: "Serviços de Emergência no Mercosul - serviço não ativado", numero: "128" },
    { nome: "Ministério da Cidadania - Atendimento a Dependentes Químicos", numero: "132" },
    { nome: "Guarda Municipal", numero: "153" },
    { nome: "Central de Atendimento à Mulher", numero: "180" },
    { nome: "Disque Denúncia", numero: "181" },
    { nome: "Marinha – Emergências Marítimas / Fluviais", numero: "185" },
    { nome: "Linha da Vida - Ministério da Saúde", numero: "188" },
    { nome: "Polícia Militar", numero: "190" },
    { nome: "Polícia Rodoviária Federal", numero: "191" },
    { nome: "Serviço de Atendimento Médico de Urgência -SAMU", numero: "192" },
    { nome: "Corpo de Bombeiros", numero: "193" },
    { nome: "Polícia Federal", numero: "194" },
    { nome: "SABESP (Somente Estado de São Paulo)", numero: "195" },
    { nome: "Ministério da Saúde - Apoio COVID-19", numero: "196" },
    { nome: "Polícia Civil", numero: "197" },
    { nome: "Polícia Rodoviária Estadual", numero: "198" },
    { nome: "Defesa Civil", numero: "199" }
];

const servicosUtilidade = [
    { nome: "Prestadoras de Interesse Coletivo do STFC", numero: "103" },
    { nome: "Acesso à Plataforma TUP", numero: "104" },
    { nome: "Prestadoras de Interesse Coletivo do SMP/SME", numero: "105" },
    { nome: "Prestadoras de Interesse Coletivo do SCEM", numero: "106" },
    { nome: "Prestadoras de Água e Esgoto", numero: "115" },
    { nome: "Prestadoras de Energia Elétrica", numero: "116" },
    { nome: "Prestadoras de Distribuição de Gás Natural", numero: "117" },
    { nome: "Transporte Público", numero: "118" },
    { nome: "Ministério do Desenvolvimento Social", numero: "121" },
    { nome: "Child Helpline - Serviço Suspenso", numero: "123" },
    { nome: "Ministério Público", numero: "127" },
    { nome: "Defensorias Públicas", numero: "129" },
    { nome: "Hora Certa", numero: "130" },
    { nome: "Anatel", numero: "133+1 e 133+2" },
    { nome: "Despertador Automático", numero: "134" },
    { nome: "INSS", numero: "135" },
    { nome: "INSS - Atendimento aos servidores do Regime Próprio de Previdência Social (RPPS)", numero: "135+8" },
    { nome: "Sistema Único de Saúde - DISQUE SAÚDE", numero: "136" },
    { nome: "Governo Federal", numero: "138" },
    { nome: "BACEN- Banco Central do Brasil", numero: "145" },
    { nome: "Receita Federal do Brasil", numero: "146" },
    { nome: "EAD - TV Digital", numero: "147" },
    { nome: "Justiça Eleitoral", numero: "148" },
    { nome: "Vigilância Sanitária", numero: "150" },
    { nome: "Procon", numero: "151" },
    { nome: "IBAMA", numero: "152" },
    { nome: "DETRAN", numero: "154" },
    { nome: "Serviço Estadual", numero: "155" },
    { nome: "Serviço Municipal", numero: "156" },
    { nome: "Informações Sobre Emprego (SINE)", numero: "157" },
    { nome: "Delegacias Regionais do Trabalho", numero: "158" },
    { nome: "Poder Judiciário", numero: "159" },
    { nome: "Administração Pública na Área de Saúde", numero: "160" },
    { nome: "Disque Denúncia Sobre Atos do Governo", numero: "161" },
    { nome: "Ouvidorias Públicas", numero: "162" },
    { nome: "ANAC - Agência Nacional de Aviação Civil", numero: "163" },
    { nome: "ANP - Agência Nacional do Petróleo, Gás Natural e Biocombustíveis", numero: "164" },
    { nome: "Disque Idoso", numero: "165" },
    { nome: "ANTT - Agência Nacional de Transportes Terrestre", numero: "166" },
    { nome: "ANEEL - Agência Nacional de Energia Elétrica", numero: "167" },
    { nome: "Petrobrás (Incidentes)", numero: "168" },
    { nome: "Prefeitura do Rio de Janeiro", numero: "174+6" }
];

// Armazenamento de contatos pessoais
let contatos = [];

// Seletores
const cadastroForm = document.getElementById("cadastro");
const tbodyContatos = document.getElementById("tbody-contatos");
const tbodyEmergencia = document.getElementById("tbody-emergencia");
const tbodyUtilidade = document.getElementById("tbody-utilidade");
const tbodyPesquisa = document.getElementById("tbody-pesquisa");
const pesquisaNome = document.getElementById("pesquisa-nome");
const tabelaContatos = document.getElementById("tabela-contatos");
const tabelaEmergencia = document.getElementById("tabela-emergencia");
const tabelaUtilidade = document.getElementById("tabela-utilidade");
const tabelaPesquisa = document.getElementById("tabela-pesquisa");

const btnAgenda = document.getElementById("btn-agenda");
const btnServicosEmergencia = document.getElementById("btn-servicos-emergencia");
const btnServicosUtilidade = document.getElementById("btn-servicos-utilidade");

// Adiciona os serviços de emergência à tabela correspondente
function listarServicosEmergencia() {
    servicosEmergencia.forEach(servico => {
        const row = document.createElement("tr");
        row.innerHTML = `<td class="tdnome">${servico.nome}</td><td class="tdnum">${servico.numero}</td>`;
        tbodyEmergencia.appendChild(row);
    });
}

// Adiciona os serviços de utilidade à tabela correspondente
function listarServicosUtilidade() {
    servicosUtilidade.forEach(servico => {
        const row = document.createElement("tr");
        row.innerHTML = `<td class="tdnome">${servico.nome}</td><td class="tdnum">${servico.numero}</td>`;
        tbodyUtilidade.appendChild(row);
    });
}

// Função para validar e formatar o telefone
function validarEFormatarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, ''); // Remove tudo que não for número

    // Verifica o formato do telefone
    if (telefone.length === 11) {
        if (telefone.startsWith('08') || telefone.startsWith('03') || telefone.startsWith('05') || telefone.startsWith('09')) {
            return formatarNumeroComDDDEspecial(telefone); // Formato especial
        } else if (telefone[2] === '9') {
            return formatarCelular(telefone); // Celular
        }
    } else if (telefone.length === 10) {
        if (['2', '3', '4', '5', '7'].includes(telefone[2])) {
            return formatarFixo(telefone); // Fixo ou móvel reservado
        }
    } else if (telefone.length === 3 || telefone.length === 5) {
        if (telefone.startsWith('1')) {
            return formatarServicoEspecial(telefone); // Serviços especiais
        }
    }

    return null; // Se não atender a nenhuma regra, retorna nulo
}

// Funções de formatação de telefone
function formatarCelular(telefone) {
    const ddd = telefone.substring(0, 2);
    const parte1 = telefone.substring(2, 7);
    const parte2 = telefone.substring(7);
    return `(${ddd}) ${parte1}-${parte2}`;
}

function formatarFixo(telefone) {
    const ddd = telefone.substring(0, 2);
    const parte1 = telefone.substring(2, 6);
    const parte2 = telefone.substring(6);
    return `(${ddd}) ${parte1}-${parte2}`;
}

function formatarNumeroComDDDEspecial(telefone) {
    const tipo = telefone.substring(0, 4);
    const parte1 = telefone.substring(4, 7);
    const parte2 = telefone.substring(7);
    return `${tipo} ${parte1} ${parte2}`; // Ex: 0800 111 2222
}

function formatarServicoEspecial(telefone) {
    return telefone.length === 3 ? telefone : `${telefone.substring(0, 3)} ${telefone.substring(3)}`; // Ex: 190 ou 103 55
}

// Função para renderizar a tabela de contatos
function renderizarContatos() {
    tbodyContatos.innerHTML = "";
    contatos.forEach(contato => {
        const row = document.createElement("tr");
        row.innerHTML = `<td class="tdnome">${contato.nome}</td><td class="tdnum">${contato.telefone}</td>`;
        tbodyContatos.appendChild(row);
    });
}

// Função para cadastrar um contato
cadastroForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("cadastro-contato").value.trim();
    const telefone = document.getElementById("cadastro-telefone").value.trim();
    
    // Valida e formata o telefone
    const telefoneFormatado = validarEFormatarTelefone(telefone);
    if (!telefoneFormatado) {
        alert("Número de telefone inválido!");
        return;
    }
    
    // Verifica se o contato já existe
    const contatoExistente = contatos.find(c => c.nome.toLowerCase() === nome.toLowerCase() || c.telefone === telefoneFormatado);
    if (contatoExistente) {
        alert("Contato ou telefone já cadastrado!");
        return;
    }
    
    // Adiciona o novo contato
    contatos.push({ nome, telefone: telefoneFormatado });
    renderizarContatos();
    
    // Limpa os campos de cadastro
    cadastroForm.reset();
});

// Função para pesquisar contatos em todas as tabelas
pesquisaNome.addEventListener("input", function() {
    const searchTerm = pesquisaNome.value.toLowerCase();
    tbodyPesquisa.innerHTML = "";  // Limpa a tabela de pesquisa

    // Verifica se há termo de pesquisa
    if (searchTerm) {
        let encontrouResultados = false;  // Flag para rastrear se algo foi encontrado

        // Filtra os contatos cadastrados
        const contatosFiltrados = contatos.filter(contato => 
            contato.nome.toLowerCase().includes(searchTerm) || 
            contato.telefone.includes(searchTerm)
        );

        // Filtra os serviços de emergência
        const emergenciaFiltrados = servicosEmergencia.filter(servico => 
            servico.nome.toLowerCase().includes(searchTerm) || 
            servico.numero.includes(searchTerm)
        );

        // Filtra os serviços de utilidade pública
        const utilidadeFiltrados = servicosUtilidade.filter(servico => 
            servico.nome.toLowerCase().includes(searchTerm) || 
            servico.numero.includes(searchTerm)
        );

        // Renderiza os contatos filtrados
        contatosFiltrados.forEach(contato => {
            const row = document.createElement("tr");
            row.innerHTML = `<td class="tdnome">${contato.nome}</td><td class="tdnum">${contato.telefone}</td>`;
            tbodyPesquisa.appendChild(row);
            encontrouResultados = true;  // Se achou algum contato, seta a flag para verdadeiro
        });

        // Renderiza os serviços de emergência filtrados
        emergenciaFiltrados.forEach(servico => {
            const row = document.createElement("tr");
            row.innerHTML = `<td class="tdnome">${servico.nome}</td><td class="tdnum">${servico.numero}</td>`;
            tbodyPesquisa.appendChild(row);
            encontrouResultados = true;  // Se achou algum serviço de emergência, seta a flag
        });

        // Renderiza os serviços de utilidade pública filtrados
        utilidadeFiltrados.forEach(servico => {
            const row = document.createElement("tr");
            row.innerHTML = `<td class="tdnome">${servico.nome}</td><td class="tdnum">${servico.numero}</td>`;
            tbodyPesquisa.appendChild(row);
            encontrouResultados = true;  // Se achou algum serviço de utilidade, seta a flag
        });

        // Se houver qualquer resultado, exibe a tabela de pesquisa
        if (encontrouResultados) {
            tabelaPesquisa.classList.remove("hidden");
            tabelaContatos.classList.add("hidden");  // Oculta as outras tabelas
            tabelaEmergencia.classList.add("hidden");
            tabelaUtilidade.classList.add("hidden");
        } else {
            tabelaPesquisa.classList.add("hidden");  // Esconde se nada for encontrado
        }
    } else {
        // Esconde a tabela de pesquisa se o campo de busca estiver vazio
        tabelaPesquisa.classList.add("hidden");
        // Mostra a tabela de contatos novamente se a pesquisa estiver limpa
        tabelaContatos.classList.remove("hidden");
    }
});

// Funções para alternar as tabelas
btnAgenda.addEventListener("click", function() {
    pesquisaNome.value = "";  // Limpa o campo de pesquisa
    tabelaPesquisa.classList.add("hidden");  // Esconde a tabela de pesquisa
    tabelaContatos.classList.remove("hidden");
    tabelaEmergencia.classList.add("hidden");
    tabelaUtilidade.classList.add("hidden");
    tabelaPesquisa.classList.add("hidden");
});

btnServicosEmergencia.addEventListener("click", function() {
    pesquisaNome.value = "";  // Limpa o campo de pesquisa
    tabelaPesquisa.classList.add("hidden");  // Esconde a tabela de pesquisa
    tabelaEmergencia.classList.remove("hidden");
    tabelaContatos.classList.add("hidden");
    tabelaUtilidade.classList.add("hidden");
    tabelaPesquisa.classList.add("hidden");
});

btnServicosUtilidade.addEventListener("click", function() {
    pesquisaNome.value = "";  // Limpa o campo de pesquisa
    tabelaPesquisa.classList.add("hidden");  // Esconde a tabela de pesquisa
    tabelaUtilidade.classList.remove("hidden");
    tabelaContatos.classList.add("hidden");
    tabelaEmergencia.classList.add("hidden");
    tabelaPesquisa.classList.add("hidden");
});

// Inicializa as tabelas de serviços
listarServicosEmergencia();
listarServicosUtilidade();
