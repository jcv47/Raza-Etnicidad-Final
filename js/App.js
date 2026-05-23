const GLOSARIO = [
  { term: "Desigualdad racial", def: "Diferencias sistemáticas en bienestar, ingreso y acceso entre grupos raciales, producidas por estructuras históricas y no por diferencias naturales.", fuente: "Texto 01" },
  { term: "Mercado de trabajo racializado", def: "Mercado laboral donde la raza determina las oportunidades, el salario y los límites del ascenso social, más allá de la calificación individual.", fuente: "Texto 01" },
  { term: "Sociodemografía", def: "Estudio de poblaciones que combina variables sociales (raza, clase, género) con datos cuantitativos (ingresos, pobreza, educación).", fuente: "Texto 01" },
  { term: "Brecha racial de ingresos", def: "Diferencia estadística entre los ingresos de grupos raciales distintos, que persiste incluso controlando otras variables socioeconómicas.", fuente: "Texto 01" },
  { term: "Persistencia de élites", def: "Fenómeno por el cual las familias con posiciones privilegiadas en el pasado siguen manteniéndolas generación tras generación.", fuente: "Texto 02" },
  { term: "Apellidos étnicos", def: "Apellidos que funcionan como marcadores de origen étnico o racial, usados para rastrear movilidad social histórica.", fuente: "Texto 02" },
  { term: "Segregación educativa", def: "Separación sistemática de grupos raciales o socioeconómicos dentro del sistema educativo, que reproduce desigualdades.", fuente: "Texto 02" },
  { term: "Movilidad social intergeneracional", def: "Capacidad de una persona para ascender o descender en la escala social respecto a la posición de sus padres y abuelos.", fuente: "Texto 02" },
  { term: "Resistencia", def: "Conjunto de acciones individuales y colectivas con que los grupos dominados responden, subvierten o escapan de los sistemas de opresión.", fuente: "Texto 03" },
  { term: "Agencia histórica", def: "Capacidad de los sujetos subalternos de actuar, decidir y transformar sus condiciones de vida, incluso bajo condiciones de opresión extrema.", fuente: "Texto 03" },
  { term: "Esclavización", def: "Término preferido al de 'esclavitud' porque enfatiza que es un acto cometido por unos sobre otros, no una condición natural.", fuente: "Texto 03" },
  { term: "Interseccionalidad", def: "Marco que reconoce cómo la raza, el género y la clase se entrecruzan produciendo experiencias de opresión específicas y únicas.", fuente: "Texto 03 / Texto 11" },
  { term: "Racismo", def: "Sistema de clasificación jerárquica de grupos humanos basado en características físicas o culturales, que produce y justifica desigualdades.", fuente: "Texto 04" },
  { term: "Racismo biológico", def: "Forma histórica del racismo que afirmaba diferencias naturales e innatas entre razas para justificar jerarquías y dominación.", fuente: "Texto 04" },
  { term: "Racismo estructural", def: "Racismo incrustado en leyes, políticas e instituciones que produce desigualdades raciales incluso sin intención discriminatoria explícita.", fuente: "Texto 04" },
  { term: "Raza como construcción social", def: "La raza no es una categoría biológica real sino una construcción histórica y política usada para ordenar y dominar a las sociedades.", fuente: "Texto 04 / Texto 06" },
  { term: "Minga", def: "Tradición de trabajo comunitario y colectivo de los pueblos andinos, resignificada como acción política y educativa de resistencia.", fuente: "Texto 05" },
  { term: "SEIP", def: "Sistema Educativo Indígena Propio: modelo educativo diseñado por y para comunidades indígenas, basado en sus lenguas, territorios y cosmovisiones.", fuente: "Texto 05" },
  { term: "Interculturalidad", def: "Relación entre culturas diversas basada en el diálogo, el respeto y la reciprocidad, no en la jerarquización o asimilación de unas por otras.", fuente: "Texto 05" },
  { term: "Educación propia", def: "Propuesta pedagógica indígena que parte del territorio, la lengua y la comunidad, en contraste con el currículo estatal homogeneizante.", fuente: "Texto 05" },
  { term: "Etnicidad", def: "Forma de identidad colectiva basada en cultura, historia, lengua o territorio compartidos, usada tanto para la inclusión como para la exclusión social.", fuente: "Texto 06" },
  { term: "Mestizaje", def: "Ideología y proceso de mezcla racial promovido por estados latinoamericanos como proyecto de nación, que frecuentemente blanquea y excluye.", fuente: "Texto 06" },
  { term: "Nación y raza", def: "Relación histórica entre los proyectos de construcción de identidades nacionales y las jerarquías raciales que los sostienen.", fuente: "Texto 06" },
  { term: "Identidad racial", def: "Forma en que las personas y grupos se ubican y son ubicados en categorías raciales, proceso siempre mediado por contextos históricos y de poder.", fuente: "Texto 06" },
  { term: "Necropolítica", def: "Poder de decidir quién vive y quién muere. Desarrollado por Achille Mbembe para analizar cómo el Estado expone a poblaciones racializadas a la muerte.", fuente: "Texto 07" },
  { term: "Biopolítica", def: "Poder sobre la vida de las poblaciones: regulación, clasificación y gestión de los cuerpos a escala social, según Foucault.", fuente: "Texto 07" },
  { term: "Blackpolis", def: "Concepto de Alves para nombrar el espacio negro urbano: zona de exclusión y muerte racial, pero también de resistencia y producción cultural.", fuente: "Texto 07" },
  { term: "Racismo socio-espacial", def: "Dimensión territorial del racismo: la segregación geográfica de comunidades racializadas y sus efectos en el acceso a bienes y en la exposición a la violencia.", fuente: "Texto 07" },
  { term: "Vaciamiento", def: "Operación de despojo simbólico y material que priva a los cuerpos y territorios racializados de su historia, humanidad y derechos.", fuente: "Texto 08" },
  { term: "Paradigma de la diferencia", def: "Marco conceptual que analiza cómo la diferencia racial y cultural es producida y utilizada para jerarquizar a los sujetos y grupos sociales.", fuente: "Texto 08" },
  { term: "Cuerpo racializado", def: "El cuerpo entendido no como dato biológico sino como superficie en la que se inscriben y reproducen las jerarquías raciales.", fuente: "Texto 08" },
  { term: "Despojo territorial", def: "Pérdida de tierras y territorios de comunidades étnicas, frecuentemente legitimada por marcos jurídicos y discursos que niegan su presencia histórica.", fuente: "Texto 08 / Texto 12" },
  { term: "Colonialidad del poder", def: "Patrón de dominación que sobrevive al colonialismo: clasifica a la humanidad en razas, organiza el trabajo, el saber y la autoridad en favor de los colonizadores.", fuente: "Texto 09" },
  { term: "Eurocentrismo", def: "Perspectiva que coloca a Europa como centro y modelo de la historia, el conocimiento y el desarrollo, marginando otras tradiciones intelectuales y culturales.", fuente: "Texto 09" },
  { term: "Colonialidad del saber", def: "Dimensión epistémica de la colonialidad: la jerarquización de los conocimientos que privilegia el pensamiento occidental y descalifica los saberes subalternos.", fuente: "Texto 09" },
  { term: "Decolonialidad", def: "Proyecto intelectual y político que busca desmantelar las estructuras de poder, saber y ser heredadas del colonialismo europeo.", fuente: "Texto 09 / Texto 11" },
  { term: "Cátedra de Estudios Afrocolombianos", def: "Asignatura obligatoria en el sistema educativo colombiano, orientada al reconocimiento de la historia y cultura de las comunidades afrodescendientes.", fuente: "Texto 10" },
  { term: "Ley 70 de 1993", def: "Ley colombiana que reconoce los derechos territoriales, culturales y de participación de las comunidades negras, y establece la Cátedra Afrocolombiana.", fuente: "Texto 10" },
  { term: "Reparación epistémica", def: "Proceso de corrección de los sesgos y exclusiones del conocimiento hegemónico, incorporando saberes y perspectivas históricamente marginados.", fuente: "Texto 10" },
  { term: "Cimarronaje", def: "Acto de huida y resistencia de personas esclavizadas que escapaban de las plantaciones y haciendas para fundar comunidades libres (palenques).", fuente: "Texto 10" },
  { term: "Feminismo descolonial", def: "Corriente feminista que critica el eurocentrismo del feminismo hegemónico e incorpora la raza, la colonialidad y la clase como ejes centrales del análisis.", fuente: "Texto 11" },
  { term: "Abya Yala", def: "Nombre kuna para el continente americano, usado por movimientos indígenas como acto de descolonización lingüística frente al nombre 'América'.", fuente: "Texto 11" },
  { term: "Epistemología descolonial", def: "Propuesta de producción de conocimiento desde los márgenes: saberes propios de comunidades racializadas y subalternizadas que desafían al canon occidental.", fuente: "Texto 11" },
  { term: "Liberación de la madre tierra", def: "Práctica política del pueblo Nasa que consiste en la recuperación colectiva de tierras consideradas territorios ancestrales, por vías directas y no institucionales.", fuente: "Texto 12" },
  { term: "Legitimidad vs. legalidad", def: "Distinción entre lo que una comunidad considera justo y válido (legitimidad) y lo que el Estado reconoce como legal dentro de su ordenamiento jurídico.", fuente: "Texto 12" },
  { term: "Territorio ancestral", def: "Espacio geográfico habitado, nombrado y cuidado históricamente por un pueblo indígena, cuya relación con él precede al Estado-nación.", fuente: "Texto 12" },
  { term: "Acción directa", def: "Estrategia política que actúa directamente sobre las condiciones de vida, sin intermediación del Estado o instituciones formales, para producir cambios inmediatos.", fuente: "Texto 12" },
];

const SECTION_LABELS = {
  home: "Inicio",
  t1: "01 — Desigualdades raciales en Cali",
  t2: "02 — Segregación educativa",
  t3: "03 — Demando mi libertad",
  t4: "04 — El racismo",
  t5: "05 — Minga / Pueblo Nasa",
  t6: "06 — Raza y etnicidad en Latinoamérica",
  t7: "07 — Biopólis, necrópolis, blackpolis",
  t8: "08 — Cuerpos y territorios vaciados",
  t9: "09 — Colonialidad del poder",
  t10: "10 — Cátedra Afrocolombiana",
  t11: "11 — Tejiendo de otro modo",
  t12: "12 — Liberación de la madre tierra",
  glosario: "Glosario de conceptos",
};

function navigate(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const target = document.getElementById('section-' + sectionId);
  if (target) target.classList.add('active');

  const navItem = document.querySelector('[data-section="' + sectionId + '"]');
  if (navItem) navItem.classList.add('active');

  document.getElementById('breadcrumb').textContent = SECTION_LABELS[sectionId] || sectionId;

  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeSidebar();
}

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const section = this.getAttribute('data-section');
    if (section) navigate(section);
  });
});

document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('active');
});

document.getElementById('sidebarToggle').addEventListener('click', closeSidebar);

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

function buildGlosario(list) {
  const grid = document.getElementById('glosarioGrid');
  grid.innerHTML = '';
  if (list.length === 0) {
    grid.innerHTML = '<p style="color: var(--c-text-muted); font-size:14px;">No se encontraron resultados.</p>';
    return;
  }
  list.forEach(item => {
    const div = document.createElement('div');
    div.className = 'glosario-item';
    div.innerHTML = '<div class="glosario-term">' + item.term + '</div>'
      + '<div class="glosario-source">' + item.fuente + '</div>'
      + '<div class="glosario-def">' + item.def + '</div>';
    grid.appendChild(div);
  });
}

function filterGlosario() {
  const q = document.getElementById('glosarioSearch').value.toLowerCase().trim();
  if (!q) { buildGlosario(GLOSARIO); return; }
  const filtered = GLOSARIO.filter(g =>
    g.term.toLowerCase().includes(q) ||
    g.def.toLowerCase().includes(q) ||
    g.fuente.toLowerCase().includes(q)
  );
  buildGlosario(filtered);
}

buildGlosario(GLOSARIO);