export default class dicio{
    constructor(fila) {
        this.fila = [
'SAGAZ',
'AMAGO',
'NEGRO',
'EXITO',
'MEXER',
'TERMO',
'SENSO',
'NOBRE',
'ALGOZ',
'AFETO',
'PLENA',
'ETICA',
'MUTUA',
'TENUE',
'SUTIL',
'VIGOR',
'AQUEM',
'POREM',
'AUDAZ',
'FAZER',
'SANAR',
'SECAO',
'INATO',
'ASSIM',
'CERNE',
'IDEIA',
'FOSSE',
'DESDE',
'PODER',
'MORAL',
'TORPE',
'MUITO',
'HONRA',
'JUSTO',
'FUTIL',
'GOZAR',
'ANEXO',
'RAZAO',
'QUICA',
'ETNIA',
'SOBRE',
'ICONE',
'TANGE',
'SONHO',
'EGIDE',
'LAPSO',
'MUTUO',
'EXPOR',
'HAVER',
'AMIGO',
'HABIL',
'CASAL',
'TEMPO',
'SEARA',
'PESAR',
'POSSE',
'AVIDO',
'PORRA',
'ENTAO',
'BOCAL',
'DENGO',
'GENRO',
'COSER',
'ARDIL',
'CORJA',
'CAUSA',
'PROLE',
'PARIA',
'DETEM',
'DIZER',
'TENAZ',
'DEVER',
'DIGNO',
'SABER',
'CRIVO',
'OBICE',
'APICE',
'ANSIA',
'GRACA',
'ANIMO',
'CEDER',
'BRADO',
'ORGIA',
'GLEBA',
'COMUM',
'ASSAZ',
'ATROZ',
'CULTO',
'SENDO',
'TEMOR',
'MUNDO',
'PAUTA',
'CENSO',
'FUGAZ',
'DENSO',
'VALHA',
'COZER',
'AINDA',
'NENEM',
'VICIO',
'FORTE',
'ESTAR',
'REVES',
'VULGO',
'PUDOR',
'REGRA',
'DOGMA',
'LOUCO',
'CRIAR',
'BANAL',
'IMPOR',
'PIFIO',
'TENRO',
'DESSE',
'APRAZ',
'ROUND',
'JEITO',
'SAUDE',
'ORDEM',
'ATRAS',
'PEDIR',
'REACA',
'MERCE',
'CLAVA',
'USURA',
'VIRIL',
'JUIZO',
'SABIO',
'PROSA',
'SERVO',
'MANSO',
'ONTEM',
'FELIZ',
'PRESA',
'COISA',
'HOMEM',
'FALAR',
'CUNHO',
'FORMA',
'DEVIR',
'FLUIR',
'AFAGO',
'EBRIO',
'MEIGA',
'PLATO',
'SERIO',
'VENDO',
'MESMO',
'GUISA',
'LIMBO',
'PLENO',
'VISAR',
'MAGOA',
'TEMER',
'HEROI',
'CISMA',
'ACASO',
'BRUMA',
'PUDER',
'LUGAR',
'VALOR',
'EXODO',
'OBVIO',
'GERAR',
'AFINS',
'IMPIO',
'OBTER',
'MATIZ',
'CERTO',
'CRISE',
'SENIL',
'PRAXE',
'POSSO',
'HAVIA',
'VENIA',
'FLUXO',
'ENFIM',
'RITMO',
'TEDIO',
'ALIBI',
'TODOS',
'TOMAR',
'GARBO',
'ABRIR',
'UNIAO',
'RETER',
'PULHA',
'PARVO',
'VALIA',
'VISAO',
'VITAL',
'GRATO',
'FAVOR',
'FACIL',
'BRAVO',
'VIVAZ',
'FALSO',
'LAICO',
'PARCO',
'PRUMO',
'GENIO',
'AMENO',
'OLHAR',
'POSSA',
'RELES',
'OBITO',
'BURRO',
'LEVAR',
'PRIME',
'TESAO',
'CASTA',
'TECER',
'LEGAL',
'SELAR',
'ANELO',
'FATOR',
'RANCO',
'CITAR',
'ROGAR',
'FARSA',
'FACAM',
'NOCAO',
'ADIAR',
'MORTE',
'ACHAR',
'COESO',
'CABAL',
'CISAO',
'EPICO',
'SABIA',
'NICHO',
'FALTA',
'FARDO',
'OUVIR',
'IMUNE',
'FORCA',
'SINTO',
'ATIVO',
'GENTE',
'VIVER',
'EXATO',
'NOITE',
'HASTE',
'BREGA',
'AMPLO',
'LAVRA',
'SULCO',
'PASSO',
'SONSO',
'DUBIO',
'CESTA',
'LABOR',
'TENDO',
'GESTO',
'REVEL',
'LEIGO',
'SESTA',
'UNICO',
'DETER',
'VEMOS',
'ARDUO',
'ATUAR',
'CALMA',
'FEIXE',
'VADIA',
'REVER',
'OTICA',
'HUMOR',
'CIUME',
'TENDE',
'IGUAL',
'POBRE',
'HIATO',
'SONSA',
'TOADA',
'PONTO',
'DEBIL',
'IDEAL',
'VELHO',
'OUTRO',
'VACUO',
'CLARO',
'LINDA',
'CARMA',
'AMBOS',
'TERNO',
'REMIR',
'FUSAO',
'VARAO',
'CAUDA',
'PROBO',
'AJUDA',
'LEITO',
'SENAO',
'ADVEM',
'DOIDO',
'MARCO',
'FONTE',
'JOVEM',
'HORDA',
'INATA',
'CAPAZ',
'XEQUE',
'RELVA',
'TENRA',
'ALGUM',
'FICAR',
'CACAR',
'VELAR',
'APOIO',
'TERRA',
'SERIE',
'ANUIR',
'FARAO',
'RIGOR',
'VIMOS',
'DORSO',
'VERSO',
'LIDER',
'VAZIO',
'TANTO',
'ENTRE',
'BOTAR',
'COCAR',
'FRASE',
'CRUEL',
'MASSA',
'PRECE',
'VIRUS',
'POUCO',
'MOCAO',
'AMBAS',
'MORAR',
'SIGNO',
'COESA',
'PESTE',
'SENTE',
'CASTO',
'FAUNA',
'COVIL',
'PRESO',
'CREDO',
'MINHA',
'FEITO',
'FAINA',
'RAIVA',
'FUROR',
'LAZER',
'DOCIL',
'CICLO',
'IMPAR',
'TORCO',
'VETOR',
'FLORA',
'MAIOR',
'CORNO',
'CHATA',
'PAPEL',
'ARIDO',
'BRISA',
'ACESO',
'BEATA',
'TRAMA',
'VULTO',
'HOUVE',
'PEGAR',
'BREVE',
'MANHA',
'ADEUS',
'LIAME',
'BIRRA',
'SETOR',
'VASTO',
'SALVO',
'BLASE',
'SENDA',
'SEITA',
'BANZO',
'ARDOR',
'NOSSA',
'MORRO',
'LIVRO',
'PECHA',
'ATOMO',
'VISSE',
'PRADO',
'REGER',
'PEIXE',
'ANTRO',
'MESES',
'AVARO',
'SEGUE',
'COMER',
'PRONO',
'PLANO',
'OCASO',
'SAIBA',
'REZAR',
'CHUVA',
'SORTE',
'ANCIA',
'AUREO',
'SAIDA',
'OTIMO',
'ALIAS',
'PAJEM',
'NUNCA',
'FODER',
'JUNTO',
'ACIMA',
'CHULO',
'MUDAR',
'CARRO',
'FITAR',
'OPCAO',
'SERAO',
'SINAL',
'JAZIA',
'FRUIR',
'PARAR',
'SERIA',
'TRETA',
'FUGIR',
'PUXAR',
'BANDO',
'NACAO',
'MOTIM',
'GERIR',
'PRAZO',
'ANDAR',
'GRUPO',
'TOSCO',
'LEITE',
'NORMA',
'ALUDE',
'EPOCA',
'SINHA',
'BRAVA',
'LENDA',
'RAPAZ',
'TENSO',
'PARTE',
'EXAME',
'AVIAO',
'IDOLO',
'ARCAR',
'CAMPO',
'TIRAR',
'PSICO',
'REINO',
'VENAL',
'SOLDO',
'MALTA',
'PRAGA',
'QUOTA',
'VIRAO',
'VILAO',
'SUMIR',
'ANAIS',
'AONDE',
'EXIJO',
'CORPO',
'LOGRO',
'AGORA',
'POMPA',
'TRAGA',
'PRETO',
'VORAZ',
'FIXAR',
'ANTES',
'INDIO',
'QUASE',
'CHEIO',
'RISCO',
'PRAIA',
'CERTA',
'FILHO',
'TURVA',
'NODOA',
'SOLTO',
'COPIA',
'OASIS',
'TURBA',
'ALADO',
'APEGO',
'TEXTO',
'CAIXA',
'MESSE',
'ESTAO',
'DOIDO',
'GRAVE',
'PROVA',
'PARVA',
'ACESA',
'PERDA',
'VERVE',
'NIVEL',
'APELO',
'LIGAR',
'ATRIO',
'PARDO',
'TOCAR',
'TRUPE',
'FENDA',
'LINDO',
'DESSA',
'VIRIA',
'SABIA',
'LIVRE',
'RETEM',
'CONTA',
'COITO',
'ALCAR',
'VERBO',
'OPACO',
'NAVIO',
'AUREA',
'FICHA',
'FRACO',
'AFORA',
'ETICO',
'ASTRO',
'FAIXA',
'ELITE',
'PARCA',
'SUPRA',
'GLOSA',
'JIRAU',
'AUTOR',
'VERBA',
'CIOSO',
'LIDAR',
'MENTE',
'OXALA',
'TINHA',
'FIRME',
'FESTA',
'GRATA',
'FATOS',
'MAGIA',
'FATAL',
'BATER',
'CALDA',
'RESES',
'COUSA',
'PRIVE',
'JUNCO',
'PIQUE',
'IRMAO',
'DEIXA',
'PAGAO',
'MOLHO',
'SALVE',
'DOUTO',
'MACIO',
'ABRIU',
'MANHA',
'TORSO',
'TURVO',
'SUPOR',
'LIGHT',
'ATUAL',
'BICHO',
'POSTO',
'IGNEO',
'ASILO',
'ORFAO',
'EXTRA',
'ROUCA',
'CABER',
'JUDEU',
'CURSO',
'SARCA',
'SEXTA',
'VEZES',
'LOCUS',
'BESTA',
'RUINA',
'PISAR',
'DESTA',
'ZELAR',
'RADIO',
'VIDEO',
'LONGE',
'ABUSO',
'PORTA',
'CANON',
'PAIRA',
'COMBO',
'ERETO',
'FINDA',
'BIOMA',
'CULPA',
'VINHA',
'VOSSO',
'AGUDO',
'FEUDO',
'MENOS',
'BAIXO',
'FACTO',
'TETRA',
'DROPS',
'URGIA',
'BONUS',
'ADVIR',
'CUTIS',
'SURJA',
'ESTIO',
'MEIGO',
'TRACO',
'SUPER',
'SITIO',
'AUTOS',
'TENTO',
'GOSTO',
'RUMOR',
'FACHO',
'SUAVE',
'CALAO',
'COCHO',
'AMENA',
'PILAR',
'MUSEU',
'NOSSO',
'CLEAN',
'TURMA',
'LASSO',
'GERAL',
'ACOLA',
'CHAMA',
'ACOES',
'OPTAR',
'PIFIA',
'MEDIR',
'LOUCA',
'BOATO',
'MOSTO',
'PODIO',
'LAPIS',
'LOCAL',
'PENTA',
'HOBBY',
'RUBRO',
'CRIME',
'LETAL',
'PACTO',
'FOLGA',
'PONHA',
'CACHO',
'REFEM',
'DRAMA',
'COVER',
'BRABO',
'AROMA',
'HOSTE',
'VIGIA',
'POEMA',
'VETAR',
'FAZIA',
'PASMO',
'FEROZ',
'MESMA',
'MOVEL',
'ACUDE',
'RIVAL',
'FINJO',
'TROCA',
'MONTE',
'AXILA',
'PEITO',
'GOLPE',
'ALUNO',
'METIE',
'AVIDA',
'ECOAR',
'PAREO',
'CORAL',
'JULIA',
'RISTE',
'TESTE',
'FORUM',
'LESSE',
'LICAO',
'DAQUI',
'PLEBE',
'SUCIA',
'FOREM',
'MONGE',
'CLIMA',
'CHATO',
'CARTA',
'POETA',
'EBANO',
'ESCOL',
'CETRO',
'MACRO',
'SWING',
'PIADA',
'PASSA',
'FALHA',
'SARAU',
'VIRAM',
'VENHA',
'ATEIA',
'VERDE',
'TACHA',
'BRIGA',
'CONTO',
'CALMO',
'CARGO',
'FARTA',
'LEGUA',
'ATIMO',
'FRUTO',
'ROUPA',
'BUSCA',
'PERCO',
'BERRO',
'TARDE',
'PLAGA',
'IDOSO',
'BROXA',
'PLUMO',
'AVISO',
'ARTUR',
'TRIBO',
'CHEFE',
'VENTO',
'VIRAR',
'CORSO',
'GRAMA',
'ARADO',
'CIVIL',
'SURTO',
'ASSAR',
'ESTRO',
'SEIXO',
'BRUTA',
'RECEM',
'CATRE',
'TRAJE',
'ORNAR',
'SALDO',
'NUVEM',
'BEIJO',
'DESTE',
'IMPIA',
'FOSSO',
'TROCA',
'PEDRA',
'DERAM',
'TRATO',
'VEDAR',
'ARFAR',
'DEPOR',
'TICAO',
'GIRIA',
'PORTE',
'IRADO',
'UTEIS',
'MANGA',
'CASAR',
'GROTA',
'CANSO',
'AMBAR',
'MANGA',
'SILVO',
'UNICA',
'CIFRA',
'PASMA',
'BENCA',
'GABAR',
'BAZAR',
'AMADO',
'SOSIA',
'TUTOR',
'MAGNA',
'VAZAO',
'REGIO',
'RURAL',
'TIVER',
'PAVOR',
'LAUDO',
'BRUTO',
'PERTO',
'SEGAR',
'ITENS',
'RENDA',
'BUCHO',
'MIDIA',
'TROCO',
'TCHAU',
'AMIGA',
'NESSE',
'JEJUM',
'VAGAR',
'MINAR',
'MOLDE',
'ODIAR',
'INTER',
'VIADO',
'CLERO',
'LESTO',
'VADIO',
'FEITA',
'FOSSA',
'ORGAO',
'MECHE',
'SOTAO',
'AREIA',
'POMAR',
'AVIAR',
'NEGAR',
'CENHO',
'CINTO',
'LARGO',
'PAIOL',
'LESAO',
'ILESO',
'CANTO',
'ROCHA',
'PINHO',
'HORTO',
'VISTO',
'PUGNA',
'RUIDO',
'BOLSA',
'PROTO',
'PODAR',
'INVES',
'UFANO',
'MARCA',
'URDIR',
'GURIA',
'DENSA',
'VISTA',
'MORFO',
'CIVEL',
'DUBIA',
'JOGAR',
'CLOSE',
'FROTA',
'VASTA',
'MOCHO',
'PENSO',
'MAMAE',
'XUCRO',
'BUNDA',
'BULIR',
'CULTA',
'PICHE',
'UMIDO',
'CHULA',
'PEITA',
'AMADA',
'CHEIA',
'UBERE',
'LINHA',
'ESGAR',
'STAND',
'CANIL',
'RESTO',
'VAROA',
'APEAR',
'MISTO',
'DEMAO',
'FAZES',
'MANTO',
'NATAL',
'MONTA',
'NARCO',
'FUNDO',
'FINDO',
'CAMPA',
'BARAO',
'GEMER',
'AGAPE',
'NESSA',
'TENHA',
'CHAGA',
'JAZER',
'SIMIO',
'RETRO',
'ALBUM',
'MOVER',
'CERCA',
'PRECO',
'ARDIS',
'VENHO',
'FOLIA',
'COSMO',
'POLIS',
'SANTO',
'LABIA',
'VELHA',
'VOLTA',
'PUNHA',
'SEIVA',
'FERPA',
'ALAMO',
'MATAR',
'VERAO',
'SABOR',
'BANTO',
'LETRA',
'PORCA',
'SIGLA',
'CALCA',
'RENTE',
'CEITA',
'LOURO',
'FIRMA',
'BARRO',
'NESTA',
'SALVA',
'ETAPA',
'TRAGO',
'AUDIO',
'ARROZ',
'TROCO',
'AXIAL',
'REDOR',
'TUMBA',
'LIMPO',
'TORNA',
'MIOPE',
'FINAL',
'COEVO',
'BOLSO',
'SOLTA',
'LOGOS',
'ENJOO',
'LOUSA',
'COROA',
'OUSAR',
'LUTAR',
'QUEDA',
'BAIXA',
'FUGIU',
'SINTA',
'CORAR',
'ZUMBI',
'MIMAR',
'FAROL',
'OBTEM',
'VELOZ',
'NESTE',
'CACTO',
'FOLHA',
'NACAR',
'BURRA',
'RELER',
'DANCA',
'FATUO',
'LONGO',
'PENCA',
'VAZIA',
'VARIO',
'FORRO',
'MACHO',
'QUITE',
'JUSTA',
'MANIA',
'FARTO',
'BEDEL',
'SUGAR',
'PUIDO',
'SALMO',
'REPOR',
'LUCRO',
'STAFF',
'ULTRA',
'REFIL',
'CALOR',
'CHAVE',
'GUETO',
'SUBIR',
'VIGER',
'PASSE',
'CUSTO',
'SEXTO',
'URGIR',
'LOGIA',
'SADIO',
'MIMOS',
'TODAS',
'HAREM',
'HIFEN',
'VALER',
'VERSA',
'CALVO',
'USUAL',
'LENTO',
'SOCIO',
'MOURO',
'CARDO',
'MERDA',
'REDEA',
'ARDUA', 
'ALIAR', 
'GUIAR', 
'MATAR', 
'ESTAR', 
'ATEAR', 
'FREAR', 
'ODIAR', 
'SECAR', 
'TOCAR', 
'PECAR', 
'CA??AR', 
'RO??AR', 
'VAGAR', 
'CEGAR', 
'PEGAR', 
'JOGAR', 
'LIGAR', 
'PAGAR', 
'AGUAR', 
'DEVER', 
'VIVER', 
'MOVER', 
'JAZER', 
'DEPOR', 
'SUPOR', 
'RETER', 
'DETER', 
'OBTER', 
'HAVER', 
'REVER', 
'CABER', 
'RELER', 
'DIZER', 
'FAZER', 
'PODER', 
'SABER', 
'VALER', 
'FEDER', 
'ABRIR', 
'FERIR', 
'GERIR', 
'MUGIR', 
'RUGIR', 
'URGIR', 
'SUBIR', 
'SUMIR', 
'BULIR', 
'FUGIR', 
'PEDIR', 
'MEDIR', 
'OUVIR', 
'ADVIR', 
'DEVIR', 
'OBVIR', 
'REVIR', 
'LUZIR', 
'TRAIR', 
'BANIR', 
'BALIR', 
'DELIR', 
'GANIR', 
'LATIR', 
'MUNIR', 
'TINIR', 
'UNGIR', 
'FALIR', 
'REMIR', 
'POLIR', 
'VAGIR', 
'ZELAR', 
'LEVAR', 
'VELAR', 
'BOTAR', 
'BEBER', 
'COZER', 
'COSER', 
'ADIAR', 
'ANDAR', 
'ARMAR', 
'ASSAR', 
'BATER', 
'BOLAR', 
'CALAR', 
'CASAR', 
'CATAR', 
'CAVAR', 
'CEDER', 
'COLAR', 
'COMER', 
'CORAR', 
'COTAR', 
'CO??AR', 
'CURAR', 
'DOMAR', 
'ECOAR', 
'ERRAR', 
'FALAR', 
'FUMAR', 
'FURAR', 
'GELAR', 
'GERAR', 
'GIRAR', 
'GOZAR', 
'LAVAR', 
'LESAR', 
'LIMAR', 
'LIXAR', 
'LUTAR', 
'MAMAR', 
'METER', 
'MIMAR', 
'MIRAR', 
'MORAR', 
'NADAR', 
'OLHAR', 
'PARAR', 
'PISAR', 
'PODAR', 
'PULAR', 
'PUNIR', 
'PUXAR', 
'REGAR', 
'REMAR', 
'REPOR', 
'REZAR', 
'RIMAR', 
'ROLAR', 
'RUMAR', 
'SANAR', 
'SARAR', 
'SOLAR', 
'SOMAR', 
'SUJAR', 
'TAPAR', 
'TOMAR', 
'VARAR', 
'ZERAR', 
'ACHAR', 
'ACUAR', 
'AL??AR', 
'APEAR', 
'ARCAR', 
'ARDER', 
'ARFAR', 
'ATUAR', 
'AVIAR', 
'BABAR', 
'BICAR', 
'BOIAR', 
'BUFAR', 
'CAGAR', 
'CAIAR', 
'CAPAR', 
'CHIAR', 
'CITAR', 
'DANAR', 
'DITAR', 
'DOPAR', 
'DOSAR', 
'DOTAR', 
'DURAR', 
'EXPOR', 
'FICAR', 
'FITAR', 
'FIXAR', 
'FOCAR', 
'FU??AR', 
'GABAR', 
'GEMER', 
'GORAR', 
'ILHAR', 
'IMPOR', 
'JURAR', 
'LA??AR', 
'LEGAR', 
'LOCAR', 
'LOTAR', 
'MELAR', 
'MEXER', 
'MINAR', 
'MOFAR', 
'MURAR', 
'NANAR', 
'NEGAR', 
'NEVAR', 
'NINAR', 
'NOTAR', 
'OPTAR', 
'OR??AR', 
'ORLAR', 
'OUSAR', 
'PAPAR', 
'PENAR', 
'PESAR', 
'PICAR', 
'PIFAR', 
'POSAR', 
'RAIAR', 
'RAJAR', 
'RALAR', 
'RAPAR', 
'REGER', 
'RIFAR', 
'ROGAR', 
'RUFAR', 
'SACAR', 
'SAFAR', 
'SELAR', 
'SOCAR', 
'SUGAR', 
'TACAR', 
'TAXAR', 
'TECER', 
'TEMER', 
'TOPAR', 
'UIVAR', 
'UNTAR', 
'URRAR', 
'VAIAR', 
'VAZAR', 
'VETAR', 
'VEXAR', 
'VISAR', 
'VOTAR', 
'DATAR', 
'FILAR', 
'LIDAR', 
'MUDAR', 
'RODAR', 
'TIRAR', 
'VIRAR', 
'AFIAR', 
'ANUIR', 
'FLUIR', 
'FRUIR', 
'ORNAR', 
'PARIR', 
'PELAR', 
'SOVAR', 
'TOSAR', 
'ZUNIR', 
'MIJAR', 
'CRIAR', 
'RUGAR', 
'VEDAR', 
'URDIR', 
    ];
        }
    
}