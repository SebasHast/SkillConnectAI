/*. ── Config ───────────────────────────────────────────────────────────── */
const API = 'https://retoolapi.dev/OKkjoF/data';

/* ── Datos estáticos ──────────────────────────────────────────────────── */
const PROFESIONES = {
  'Cardiología': { emoji: '❤️', class: 'medico' },
  'Dermatología': { emoji: '✨', class: 'dermatologo' },
  'Endocrinología': { emoji: '🧬', class: 'general' },
  'Neurología': { emoji: '🧠', class: 'psicologo' },
  'Gastroenterología': { emoji: '🫃', class: 'general' },
  'Psiquiatría': { emoji: '💭', class: 'psicologo' },
  'Psicología': { emoji: '💭', class: 'psicologo' },
  'Medicina Interna': { emoji: '🩺', class: 'medico' },
  'Ortopedia y Traumatología': { emoji: '🦴', class: 'fisioterapeuta' },
  'Pediatría': { emoji: '🧒', class: 'general' },
  'Urología': { emoji: '🚻', class: 'general' },
  'Ginecobstetricia': { emoji: '🤰', class: 'general' }
};

const ESPECIALISTAS = {

      'Cardiología': [
        'pecho',
        'dolor pecho',
        'corazon',
        'corazón',
        'palpitaciones',
        'taquicardia',
        'arritmia',
        'presion alta',
        'hipertension',
        'presion baja',
        'falta aire',
        'opresion pecho',
        'latidos',
        'cardiaco',
        'angina'
      ],

      'Dermatología': [
        'piel',
        'acne',
        'cabello',
        'uñas',
        'manchas',
        'ronchas',
        'dermatitis',
        'picazon',
        'caida cabello',
        'eczema',
        'sarpullido',
        'alergia piel',
        'irritacion',
        'resequedad'
      ],

      'Endocrinología': [
        'diabetes',
        'azucar',
        'glucosa',
        'tiroides',
        'hipotiroidismo',
        'hipertiroidismo',
        'hormonas',
        'metabolismo',
        'aumento peso',
        'perdida peso',
        'insulina',
        'fatiga hormonal',
        'obesidad',
        'endocrino'
      ],

      'Neurología': [
        'migraña',
        'convulsion',
        'dolor cabeza',
        'cefalea',
        'mareo',
        'memoria',
        'temblores',
        'desmayo',
        'entumecimiento',
        'neurologico',
        'nervios',
        'vertigo',
        'coordinacion',
        'epilepsia'
      ],

      'Medicina Interna': [
        'fatiga',
        'fiebre',
        'gripe',
        'tos',
        'dolor general',
        'malestar',
        'debilidad',
        'presion levemente alta',
        'dolor cabeza leve',
        'estres',
        'cansancio',
        'control medico',
        'chequeo',
        'seguimiento',
        'resfriado',
        'dolor muscular',
        'dolor estomacal leve',
        'mareo leve',
        'ansiedad leve',
        'alergia leve',
        'infeccion leve',
        'sintomas generales'
      ],

      'Pediatría': [
        'niño',
        'bebe',
        'adolescente',
        'fiebre infantil',
        'tos infantil',
        'vacunas',
        'crecimiento',
        'dolor infantil',
        'control pediatrico',
        'alimentacion infantil',
        'desarrollo',
        'guarderia',
        'pediatra',
        'menor edad'
      ],

      'Ortopedia y Traumatología': [
        'fractura',
        'rodilla',
        'espalda',
        'hueso',
        'articulacion',
        'ligamento',
        'tobillo',
        'dolor muscular',
        'lesion',
        'columna',
        'hombro',
        'codo',
        'tendinitis',
        'esguince'
      ],

      'Urología': [
        'orina',
        'riñon',
        'prostata',
        'infeccion urinaria',
        'ardor orinar',
        'retencion',
        'sangre orina',
        'urinario',
        'vejiga',
        'calculo renal',
        'dolor lumbar',
        'impotencia',
        'frecuencia urinaria',
        'urologico'
      ],

      'Ginecobstetricia': [
        'embarazo',
        'menstrual',
        'ginecologia',
        'parto',
        'fertilidad',
        'ovarios',
        'colicos',
        'flujo',
        'ciclo',
        'gestacion',
        'dolor pelvico',
        'anticonceptivos',
        'endometriosis',
        'ginecologico'
      ],

      'Gastroenterología': [
        'estomago',
        'digestivo',
        'colon',
        'dolor abdominal',
        'gastritis',
        'reflujo',
        'nauseas',
        'vomito',
        'diarrea',
        'estreñimiento',
        'higado',
        'intestino',
        'acidez',
        'digestión',
        'páncreas',
        'úlcera',
        'apendicitis',
        'colitis',
        'hepatitis',
        'gastrointestinal'
      ],

      'Psicología': [
        'ansiedad',
        'depresion',
        'insomnio',
        'estres',
        'panico',
        'tristeza',
        'trastorno',
        'obsesiones',
        'emocional',
        'cambio humor',
        'crisis',
        'mental',
        'conducta',
        'agotamiento emocional',
        'psiquiatrico',
        'salud mental',
        'psicologico',
        'psicoterapia',
        'psiquiatra'
      ],

      'Psiquiatría': [
        'ansiedad',
        'depresion',
        'insomnio',
        'estres',
        'panico',
        'tristeza',
        'trastorno',
        'obsesiones',
        'emocional',
        'cambio humor',
        'crisis',
        'mental',
        'conducta',
        'agotamiento emocional',
        'psiquiatrico',
        'salud mental',
        'psicologico',
        'psicoterapia',
        'psiquiatra'
      ]
    };
function generarFechas(dias) {
  const h = new Date();
  return dias.map(d => { const f = new Date(h); f.setDate(f.getDate() + d); return f.toISOString().split('T')[0]; });
}
function generarHoras(i = '08:00', c = 5) {
  let [h, m] = i.split(':').map(Number), r = [];
  for (let x = 0; x < c; x++) {
    r.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
    m += 30; if (m >= 60) { h++; m = 0; }
  }
  return r;
}

const DISPONIBILIDAD = {
  'Cardiología': [
    { nombre: 'Dr. Carlos Herrera', fechas: generarFechas([1, 2, 4]), horas: generarHoras('08:00') },
    { nombre: 'Dra. Laura Méndez', fechas: generarFechas([2, 5]), horas: generarHoras('10:00') }
  ],
  'Dermatología': [
    { nombre: 'Dra. Paula Gómez', fechas: generarFechas([1, 3]), horas: generarHoras('09:00') },
    { nombre: 'Dr. Andrés Rojas', fechas: generarFechas([2, 4]), horas: generarHoras('13:00') }
  ],
  'Medicina Interna': [
    { nombre: 'Dr. Mateo Silva', fechas: generarFechas([1, 2, 3]), horas: generarHoras('08:00') },
    { nombre: 'Dra. Juliana Torres', fechas: generarFechas([2, 4]), horas: generarHoras('11:00') }
  ],
  'Psiquiatría': [
    { nombre: 'Dra. Daniela Mora', fechas: generarFechas([1, 4]), horas: generarHoras('09:00') },
    { nombre: 'Dr. Nicolás Pérez', fechas: generarFechas([2, 5]), horas: generarHoras('14:00') }
  ],
  'Psicología': [
    { nombre: 'Dra. María López', fechas: generarFechas([1, 4]), horas: generarHoras('09:00') },
    { nombre: 'Dr. Carlos Ruiz', fechas: generarFechas([2, 5]), horas: generarHoras('14:00') }
  ],
  'Neurología': [
    { nombre: 'Dr. Santiago Vargas', fechas: generarFechas([1, 3]), horas: generarHoras('08:00') }
  ],
  'Gastroenterología': [
    { nombre: 'Dra. Camila Ríos', fechas: generarFechas([2, 4, 6]), horas: generarHoras('09:30') }
  ],
  'Pediatría': [
    { nombre: 'Dr. Felipe Castro', fechas: generarFechas([1, 2, 3, 4]), horas: generarHoras('08:00') }
  ],
  'Ortopedia y Traumatología': [
    { nombre: 'Dr. Sergio Montoya', fechas: generarFechas([2, 5]), horas: generarHoras('10:00') }
  ]
};

/* ── Estado ───────────────────────────────────────────────────────────── */
let citas = [];
let citasFiltradas = [];
let pendingDeleteId = null;

/* ── Utilidades ───────────────────────────────────────────────────────── */
function getProf(nombre) { return PROFESIONES[nombre] || { emoji: '🩺', class: 'general' }; }

function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  const icon = type === 'success' ? '✓' : '✕';
  t.innerHTML = `<span aria-hidden="true">${icon}</span> ${msg}`;
  t.className = `show ${type}`;
  setTimeout(() => { t.className = ''; }, 3500);
}

function formatDate(str) {
  if (!str) return '—';
  try {
    const [y, m, d] = str.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch { return str; }
}

/* ── Skeleton / loading ───────────────────────────────────────────────── */
function showSkeleton() {
  document.getElementById('appointments-list').innerHTML =
    '<div class="skeleton skeleton-card"></div>'.repeat(3);
}

/* ── Stats ────────────────────────────────────────────────────────────── */
function updateStats() {
  document.getElementById('stat-total').textContent = citas.length;
  const now = new Date();
  const semana = citas.filter(c => {
    if (!c.fecha) return false;
    const diff = (new Date(c.fecha) - now) / 86400000;
    return diff >= -1 && diff <= 7;
  }).length;
  document.getElementById('stat-semana').textContent = semana;
  document.getElementById('stat-profs').textContent =
    new Set(citas.map(c => c.profesion).filter(Boolean)).size;
}

/* ── Filtro ───────────────────────────────────────────────────────────── */
function cargarFiltroEspecialidades() {
  const select = document.getElementById('filtro-especialidad');
  if (!select) return;
  const actuales = [...new Set(citas.map(c => c.profesion).filter(Boolean))];
  select.innerHTML = '<option value="">Todas las especialidades</option>';
  actuales.forEach(p => {
    const opt = document.createElement('option');
    opt.value = opt.textContent = p;
    select.appendChild(opt);
  });
}

function aplicarFiltro() {
  const val = document.getElementById('filtro-especialidad').value;
  citasFiltradas = val ? citas.filter(c => c.profesion === val) : [...citas];
  renderList();
}

/* ── Render ───────────────────────────────────────────────────────────── */
function renderList() {
  const container = document.getElementById('appointments-list');
  const lista = document.getElementById('filtro-especialidad')?.value
    ? citasFiltradas : citas;

  if (lista.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon" aria-hidden="true">📅</div>
        <div class="empty-text">No hay citas registradas.<br>¡Agrega la primera!</div>
      </div>`;
    return;
  }

  container.innerHTML = lista.map((c, i) => {
    const p = getProf(c.profesion);
    return `
    <article class="appt-card" style="animation-delay:${i * .05}s" aria-label="Cita de ${c.nombre || 'paciente'}">
      <div class="appt-left">
        <div class="appt-avatar avatar-${p.class}" aria-hidden="true">${p.emoji}</div>
        <div class="appt-info">
          <div class="appt-name">${c.nombre || 'Sin nombre'}</div>
          <div class="appt-details">
            <div class="appt-date">📅 ${formatDate(c.fecha)}&nbsp;&nbsp;🕒 ${c.hora || '—'}</div>
            ${c.profesion ? `<span class="appt-prof-badge prof-${p.class}">${c.profesion}</span>` : ''}
          </div>
          <div class="appt-id">ID #${c.id}</div>
        </div>
      </div>
      <button class="btn-delete" onclick="confirmarEliminar(${c.id})" aria-label="Eliminar cita de ${c.nombre || 'paciente'}">
        ✕ Eliminar
      </button>
    </article>`;
  }).join('');
}

/* ── Fetch all ────────────────────────────────────────────────────────── */
async function cargarCitas() {
  showSkeleton();
  try {
    const r = await fetch(API);
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const data = await r.json();
    citas = Array.isArray(data) ? data : [];
    citasFiltradas = [...citas];
    cargarFiltroEspecialidades();
    renderList();
    updateStats();
  } catch (e) {
    document.getElementById('appointments-list').innerHTML = `
      <div class="empty-state">
        <div class="empty-icon" aria-hidden="true">⚠️</div>
        <div class="empty-text">Error al conectar con la API.<br>Verifica tu conexión.</div>
      </div>`;
    console.error('cargarCitas:', e);
  }
}

/* ── Add ──────────────────────────────────────────────────────────────── */
async function agregarCita() {
  const campos = {
    nombre: document.getElementById('inp-nombre'),
    diagnostico: document.getElementById('inp-diagnostico'),
    fecha: document.getElementById('inp-fecha'),
    hora: document.getElementById('inp-hora'),
    profesion: document.getElementById('inp-profesion'),
    medico: document.getElementById('inp-medico')
  };

  // Limpiar errores anteriores
  Object.values(campos).forEach(el => { if (el) el.removeAttribute('aria-invalid'); });

  let valido = true;
  Object.entries(campos).forEach(([k, el]) => {
    if (!el || !el.value) { if (el) el.setAttribute('aria-invalid', 'true'); valido = false; }
  });

  if (!valido) {
    showToast('Completa todos los campos antes de continuar.', 'error');
    return;
  }

  const { nombre, diagnostico, fecha, hora, profesion, medico } =
    Object.fromEntries(Object.entries(campos).map(([k, el]) => [k, el.value.trim()]));

  // Verificar conflicto de horario
  if (citas.some(c => c.profesion === profesion && c.medico === medico && c.fecha === fecha && c.hora === hora)) {
    showToast(`Ya existe una cita de ${profesion} el ${fecha} a las ${hora}`, 'error');
    return;
  }

  const btn = document.getElementById('btn-agregar');
  btn.disabled = true;
  btn.innerHTML = '<div class="spinner"></div> Guardando...';

  try {
    const r = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, diagnostico, fecha, hora, medico, profesion })
    });

    if (r.status === 400) { const e = await r.json(); throw new Error(e.message || 'Datos inválidos'); }
    if (r.status === 409) throw new Error('Conflicto: la cita ya existe');
    if (!r.ok) throw new Error(`Error del servidor (${r.status})`);

    const nueva = await r.json();
    citas.unshift(nueva);
    citasFiltradas = [...citas];
    cargarFiltroEspecialidades();
    renderList();
    updateStats();
    showToast(`Cita de ${nombre} agregada exitosamente`);

    // Limpiar form
    document.getElementById('inp-nombre').value = '';
    document.getElementById('inp-diagnostico').value = '';
    document.getElementById('inp-profesion').innerHTML = '<option value="">Analiza primero</option>';
    document.getElementById('inp-medico').innerHTML = '<option value="">Selecciona médico</option>';
    document.getElementById('inp-fecha').innerHTML = '<option value="">Selecciona fecha</option>';
    document.getElementById('inp-hora').innerHTML = '<option value="">Selecciona hora</option>';


  } catch (err) {
    showToast(err.message || 'Error al guardar la cita. Intenta de nuevo.', 'error');
    console.error('agregarCita:', err);
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<span>Agregar Cita</span>';
  }
}

/* ── Delete (con modal) ───────────────────────────────────────────────── */
function confirmarEliminar(id) {
  pendingDeleteId = id;
  const overlay = document.getElementById('modal-overlay');
  overlay.removeAttribute('hidden');
  document.getElementById('modal-confirm').focus();
}

function cerrarModal() {
  document.getElementById('modal-overlay').setAttribute('hidden', '');
  pendingDeleteId = null;
}

async function ejecutarEliminar() {
  if (!pendingDeleteId) return;
  const id = pendingDeleteId;
  cerrarModal();

  try {
    const r = await fetch(`${API}/${id}`, { method: 'DELETE' });
    if (r.status === 404) throw new Error('La cita ya no existe');
    if (!r.ok) throw new Error(`Error del servidor (${r.status})`);
    citas = citas.filter(c => c.id !== id);
    citasFiltradas = citasFiltradas.filter(c => c.id !== id);
    cargarFiltroEspecialidades();
    renderList();
    updateStats();
    showToast('Cita eliminada correctamente.');
  } catch (err) {
    showToast(err.message || 'Error al eliminar la cita.', 'error');
    console.error('eliminarCita:', err);
  }
}
function recomendarEspecialista() {

  const diagnostico =
    document
      .getElementById(
        'inp-diagnostico'
      )
      .value
      .trim()
      .toLowerCase();

  const selector =
    document
      .getElementById(
        'inp-profesion'
      );

  if (!diagnostico) {

    showToast(
      'Describe primero el motivo de consulta.',
      'error'
    );

    return;

  }

  let resultado =
    'Medicina Interna';

  for (
    const [
      especialidad,
      palabras
    ]
    of Object.entries(
      ESPECIALISTAS
    )
  ) {

    if (
      palabras.some(
        p =>
          diagnostico.includes(
            p
          )
      )
    ) {

      resultado =
        especialidad;

      break;

    }

  }

  selector.innerHTML =
    `<option value="${resultado}">
${resultado}
</option>`;

  selector.value =
    resultado;

  cargarDisponibilidad(
    resultado
  );

  showToast(
    `Especialista recomendado: ${resultado}`
  );

}

/* ── Disponibilidad ───────────────────────────────────────────────────── */
function cargarDisponibilidad(especialidad) {
  const selMedicos = document.getElementById('inp-medico');
  const selFechas = document.getElementById('inp-fecha');
  const selHoras = document.getElementById('inp-hora');

  selMedicos.innerHTML = '<option value="">Selecciona médico</option>';
  selFechas.innerHTML = '<option value="">Selecciona fecha</option>';
  selHoras.innerHTML = '<option value="">Selecciona hora</option>';

  const lista = DISPONIBILIDAD[especialidad] || [];
  if (lista.length === 0) {
    showToast('No hay disponibilidad registrada para esta especialidad.', 'error');
    return;
  }
  lista.forEach(m => {
    const opt = document.createElement('option');
    opt.value = opt.textContent = m.nombre;
    selMedicos.appendChild(opt);
  });
}

function cargarAgendaMedico() {
  const especialidad = document.getElementById('inp-profesion').value;
  const medico = document.getElementById('inp-medico').value;
  const selFechas = document.getElementById('inp-fecha');
  const selHoras = document.getElementById('inp-hora');

  selFechas.innerHTML = '<option value="">Selecciona fecha</option>';
  selHoras.innerHTML = '<option value="">Selecciona hora</option>';

  const data = (DISPONIBILIDAD[especialidad] || []).find(m => m.nombre === medico);
  if (!data) return;

  data.fechas.forEach(f => {
    const opt = document.createElement('option');
    opt.value = opt.textContent = f;
    selFechas.appendChild(opt);
  });
  data.horas.forEach(h => {
    const opt = document.createElement('option');
    opt.value = opt.textContent = h;
    selHoras.appendChild(opt);
  });
}

/* ── Sugerencias ──────────────────────────────────────────────────────── */
const SUGERENCIAS = {
  'Medicina Interna': [
    { nombre: 'Dr. Carlos Rivera', fecha: 'próx. martes', prof: 'Medicina Interna', nota: 'Especialista en medicina interna' },
    { nombre: 'Dra. Lucía Pérez', fecha: 'próx. jueves', prof: 'Medicina Interna', nota: 'Disponible mañana y tarde' }
  ],
  'Psiquiatría': [
    { nombre: 'Psc. Valentina Cruz', fecha: 'esta semana', prof: 'Psiquiatría', nota: 'Terapia cognitivo-conductual' },
    { nombre: 'Psc. Mateo Sánchez', fecha: 'próx. miércoles', prof: 'Psiquiatría', nota: 'Manejo de ansiedad y estrés' }
  ]
};



function rellenarDesde(nombre, prof) {
  document.getElementById('inp-nombre').value = nombre;
  document.getElementById('inp-profesion').innerHTML = `<option value="${prof}">${prof}</option>`;
  document.getElementById('inp-profesion').value = prof;
  cargarDisponibilidad(prof);
  const tom = new Date(); tom.setDate(tom.getDate() + 1);
  document.getElementById('suggestions-section').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Toggle formulario ────────────────────────────────────────────────── */
function toggleFormulario() {
  const panel = document.getElementById('panel-cita');
  const btn = document.getElementById('toggle-btn');
  const open = panel.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}

/* ── Cerrar modal con Escape ──────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrarModal();
});

/* ── Init ─────────────────────────────────────────────────────────────── */
cargarCitas();
