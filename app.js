const levels = [
  { id: 'A1', label: 'A1', description: 'Débutant' },
  { id: 'A2-B1', label: 'A2–B1', description: 'Intermédiaire' },
  { id: 'B1-B2', label: 'B1–B2', description: 'Avancé' },
];

const books = [
  { id: 'a1-communication', level: 'A1', skill: 'Comunicación', title: 'Communication progressive', cover: 'violet' },
  { id: 'a1-grammar', level: 'A1', skill: 'Gramática', title: 'Grammaire progressive · Débutant', cover: 'orange' },
  { id: 'a1-vocabulary', level: 'A1', skill: 'Vocabulario', title: 'Vocabulaire progressif · Débutant', cover: 'green' },
  { id: 'a2-communication', level: 'A2-B1', skill: 'Comunicación', title: 'Communication progressive · Intermédiaire', cover: 'blue' },
  { id: 'a2-grammar', level: 'A2-B1', skill: 'Gramática', title: 'Grammaire progressive · Intermédiaire', cover: 'coral' },
  { id: 'a2-vocabulary', level: 'A2-B1', skill: 'Vocabulario', title: 'Vocabulaire progressif · Intermédiaire', cover: 'yellow' },
  { id: 'b1-communication', level: 'B1-B2', skill: 'Comunicación', title: 'Communication progressive · B2–C1', cover: 'green' },
  { id: 'b1-grammar', level: 'B1-B2', skill: 'Gramática', title: 'Grammaire progressive · Avancé', cover: 'violet' },
  { id: 'b1-vocabulary', level: 'B1-B2', skill: 'Vocabulario', title: 'Vocabulaire progressif · B2–C1', cover: 'orange' },
];

const courses = [...new Map(
  (window.eduardingoCourses || []).map((course) => [course.bookId, course]),
).values()];

const state = {
  level: 'A1',
  skill: 'Todo',
  search: '',
  book: null,
  course: null,
  lessonIndex: 0,
  testMode: false,
};

const progressKey = (bookId) => `eduardingo:completed:${bookId}`;
const legacyProgressKey = (bookId) => `bonjour:completed:${bookId}`;

function readProgress(bookId) {
  try {
    let raw = localStorage.getItem(progressKey(bookId));
    if (raw === null) {
      raw = localStorage.getItem(legacyProgressKey(bookId));
      if (raw !== null) localStorage.setItem(progressKey(bookId), raw);
    }
    const saved = JSON.parse(raw || '[]');
    const course = courses.find((item) => item.bookId === bookId);
    const lessonIds = new Set(course ? course.lessons.map((lesson) => lesson.id) : []);
    return Array.isArray(saved) ? [...new Set(saved.filter((id) => lessonIds.has(id)))] : [];
  } catch (error) {
    console.error('No se pudo leer el progreso del curso.', error);
    return [];
  }
}

function saveProgress(bookId, completed) {
  try {
    localStorage.setItem(progressKey(bookId), JSON.stringify(completed));
  } catch (error) {
    console.error('No se pudo guardar el progreso del curso.', error);
    window.alert('No se pudo guardar el progreso en este dispositivo.');
  }
}

function renderLevelNavigation() {
  const nav = document.getElementById('level-nav');
  const tabs = document.getElementById('level-tabs');
  nav.innerHTML = levels.map((level) => `
    <a class="level-link ${state.level === level.id ? 'active' : ''}" href="#${level.id}" data-level="${level.id}">
      <span class="level-dot"></span>${level.label} <span>${level.description}</span>
    </a>`).join('');
  tabs.innerHTML = levels.map((level) => `
    <button class="level-tab ${state.level === level.id ? 'active' : ''}" role="tab"
      aria-selected="${state.level === level.id}" data-level="${level.id}">${level.label}</button>`).join('');
}

function renderFilters() {
  const skills = ['Todo', 'Gramática', 'Vocabulario', 'Comunicación'];
  document.getElementById('skill-filters').innerHTML = skills.map((skill) => `
    <button class="filter-chip ${state.skill === skill ? 'active' : ''}" data-skill="${skill}">${skill}</button>`).join('');
}

function getCourse(bookId) {
  return courses.find((course) => course.bookId === bookId) || null;
}

function renderBooks() {
  const filtered = books.filter((book) => book.level === state.level
    && (state.skill === 'Todo' || book.skill === state.skill)
    && `${book.title} ${book.skill}`.toLocaleLowerCase('es').includes(state.search.toLocaleLowerCase('es')));
  const grid = document.getElementById('book-grid');
  grid.innerHTML = filtered.length ? filtered.map((book) => {
    const course = getCourse(book.id);
    const completed = course ? readProgress(book.id).length : 0;
    return `
      <article class="book-card ${course ? '' : 'book-card-pending'}">
        <div class="book-cover cover-${book.cover}">
          <span class="cover-tag">${book.level} · ${book.skill}</span>
          <h3>${book.skill}</h3>
          <span class="cover-ornament" aria-hidden="true">${book.level.slice(0, 1)}</span>
        </div>
        <div class="book-info">
          <div class="book-meta"><span>${book.level} · ${book.skill}</span><span>${course ? `${course.lessons.length} lecciones` : 'En conversión'}</span></div>
          <h4>${book.title}</h4>
          <div class="book-footer">
            <span class="correction-state ${course ? '' : 'unavailable'}">${course ? `${completed}/${course.lessons.length} completadas` : 'Contenido interactivo pendiente'}</span>
            ${course
              ? `<button class="open-book" data-book="${book.id}">Empezar <span>→</span></button>`
              : '<span class="pending-label">Próximamente</span>'}
          </div>
        </div>
      </article>`;
  }).join('') : '<div class="empty-state">No encontramos temas con ese nombre. Prueba otra búsqueda.</div>';

  const levelCourses = books.filter((book) => book.level === state.level).length;
  document.getElementById('library-title').textContent = `Tu recorrido ${state.level}`;
  document.getElementById('book-count').textContent = levelCourses;
  document.getElementById('lesson-count').textContent = courses.reduce((total, course) => total + course.lessons.length, 0);
  const totalLessons = courses.reduce((total, course) => total + course.lessons.length, 0);
  const completedLessons = courses.reduce((total, course) => total + readProgress(course.bookId).length, 0);
  document.getElementById('completed-count').textContent = completedLessons;
  document.getElementById('course-progress').textContent = `${totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0}%`;
}

function showView(name) {
  document.getElementById('home-view').classList.toggle('hidden', name !== 'home');
  document.getElementById('course-view').classList.toggle('hidden', name !== 'course');
  document.getElementById('test-view').classList.toggle('hidden', name !== 'test');
  document.getElementById('breadcrumb-current').textContent = name === 'test' || (name === 'course' && state.testMode)
    ? 'Test final' : name === 'course' ? 'Lección' : 'Hoy';
  document.querySelectorAll('.nav-link').forEach((link) => link.classList.toggle('active', name === 'home' && link.dataset.action !== 'library'));
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function openBook(bookId) {
  state.book = books.find((book) => book.id === bookId) || null;
  state.course = getCourse(bookId);
  state.lessonIndex = 0;
  state.testMode = false;
  if (!state.book) return;
  renderCourse();
  showView('course');
}

function renderCourse() {
  const heading = document.querySelector('.course-heading');
  document.getElementById('breadcrumb-current').textContent = state.testMode ? 'Test final' : 'Lección';
  if (!state.course) {
    document.getElementById('course-level').textContent = `${state.book.level} · ${state.book.skill}`;
    document.getElementById('course-title').textContent = state.book.title;
    document.getElementById('course-description').textContent = 'Este material todavía no se ha convertido en lecciones interactivas.';
    document.getElementById('course-progress-bar').style.width = '0%';
    document.getElementById('course-progress-label').textContent = 'En preparación';
    document.getElementById('course-pending-message').classList.remove('hidden');
    document.getElementById('lesson-navigation').classList.add('hidden');
    document.getElementById('lesson-content').classList.add('hidden');
    heading.classList.add('pending-course');
    return;
  }
  document.getElementById('course-pending-message').classList.add('hidden');
  document.getElementById('lesson-navigation').classList.remove('hidden');
  document.getElementById('lesson-content').classList.remove('hidden');
  heading.classList.remove('pending-course');
  const completed = readProgress(state.course.bookId);
  const percent = Math.round((completed.length / state.course.lessons.length) * 100);
  document.getElementById('course-level').textContent = `${state.course.level} · ${state.course.category}`;
  document.getElementById('course-title').textContent = state.course.name;
  document.getElementById('course-description').textContent = state.course.description;
  document.getElementById('course-progress-bar').style.width = `${percent}%`;
  document.getElementById('course-progress-label').textContent = `${completed.length} de ${state.course.lessons.length} lecciones completadas`;

  const firstIncomplete = state.course.lessons.findIndex((lesson) => !completed.includes(lesson.id));
  const maxUnlocked = firstIncomplete === -1 ? state.course.lessons.length - 1 : firstIncomplete;
  document.getElementById('lesson-navigation').innerHTML = `
    <div class="lesson-nav-header"><span class="section-kicker">TU RECORRIDO</span><strong>${state.course.lessons.length} lecciones</strong></div>
    ${state.course.lessons.map((lesson, index) => {
      const done = completed.includes(lesson.id);
      const locked = index > maxUnlocked;
      return `<button class="lesson-nav-item ${index === state.lessonIndex ? 'active' : ''} ${done ? 'done' : ''}"
        data-lesson="${index}" ${locked ? 'disabled' : ''}>
        <span class="lesson-nav-number">${done ? '✓' : String(index + 1).padStart(2, '0')}</span>
        <span class="lesson-nav-text"><strong>${lesson.title}</strong><small>${lesson.goal}</small></span>
        ${locked ? '<span class="lock-icon" aria-label="Bloqueada">⌑</span>' : ''}
      </button>`;
    }).join('')}
    <button class="final-test-link ${completed.length === state.course.lessons.length ? 'ready' : ''}"
      data-action="final-test" ${completed.length < state.course.lessons.length ? 'disabled' : ''}>
      <span class="lesson-nav-number">★</span><span><strong>Test final</strong><small>${completed.length === state.course.lessons.length ? 'Comprueba lo que has aprendido' : 'Completa todas las lecciones'}</small></span>
    </button>`;

  if (state.testMode) {
    renderFinalTest();
    return;
  }
  renderLesson(state.course.lessons[state.lessonIndex]);
}

function renderLesson(lesson) {
  const content = document.getElementById('lesson-content');
  content.innerHTML = `
    <div class="lesson-topline"><span class="section-kicker">LECCIÓN ${String(state.lessonIndex + 1).padStart(2, '0')} · PÁGINAS ${lesson.sourcePages}</span><span class="lesson-duration">✦ Aprende · practica · valida</span></div>
    <h2>${lesson.title}</h2>
    <p class="lesson-goal">${lesson.goal}</p>
    <section class="lesson-explanation">
      <div class="explanation-heading"><span class="explanation-icon">✳</span><div><span class="section-kicker">LO ESENCIAL</span><h3>Comprende el tema</h3></div></div>
      ${lesson.explanation.map((paragraph) => `<p>${paragraph}</p>`).join('')}
    </section>
    ${lesson.cards?.length ? `<div class="learning-cards">${lesson.cards.map((card) => `
      <div class="learning-card tone-${card.tone}"><strong>${card.title}</strong><span>${card.text}</span></div>`).join('')}</div>` : ''}
    <div class="exercise-heading"><div><span class="section-kicker">A TI TE TOCA</span><h3>Practica lo aprendido</h3></div><span>${lesson.questions.length} actividades</span></div>
    <div class="question-list">${lesson.questions.map((question, index) => renderQuestion(question, index, 'lesson')).join('')}</div>
    <div class="lesson-footer">
      <span id="lesson-feedback" class="lesson-feedback">Valida correctamente todas las actividades para continuar.</span>
      <button id="complete-lesson" class="primary-button" disabled>${state.lessonIndex === state.course.lessons.length - 1 ? 'Completar y hacer el test final' : 'Completar lección →'}</button>
    </div>`;
  content.querySelectorAll('.check-answer').forEach((button) => button.addEventListener('click', () => validateQuestion(button, false)));
  content.querySelectorAll('.answer-option').forEach((button) => button.addEventListener('click', () => selectOption(button)));
  content.querySelectorAll('.answer-input').forEach((input) => input.addEventListener('input', () => resetQuestion(input.closest('.question-card'))));
  content.querySelector('#complete-lesson').addEventListener('click', completeLesson);
}

function renderQuestion(question, index, mode) {
  const options = question.type === 'choice'
    ? `<div class="answer-options">${question.choices.map((choice, optionIndex) => `
      <button class="answer-option" type="button" data-option-index="${optionIndex}">${choice}</button>`).join('')}</div>`
    : `<input class="answer-input" type="text" autocomplete="off" placeholder="Escribe tu respuesta en francés" aria-label="Respuesta a la actividad ${index + 1}" />`;
  return `<section class="question-card" data-mode="${mode}" data-question="${index}" data-answer="${escapeAttribute(question.answer)}">
    <div class="question-label"><span>ACTIVIDAD ${String(index + 1).padStart(2, '0')}</span><span class="question-state">Pendiente</span></div>
    <p class="question-prompt">${question.prompt}</p>
    ${options}
    <div class="question-actions"><button class="check-answer" type="button">Comprobar respuesta</button></div>
    <div class="question-feedback hidden" role="status"></div>
  </section>`;
}

function escapeAttribute(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function selectOption(button) {
  const card = button.closest('.question-card');
  card.querySelectorAll('.answer-option').forEach((option) => option.classList.remove('selected'));
  button.classList.add('selected');
  card.dataset.selected = button.textContent;
  card.dataset.correct = 'pending';
  card.querySelector('.question-feedback').classList.add('hidden');
  card.querySelector('.question-state').textContent = 'Pendiente';
  card.querySelector('.question-state').classList.remove('is-correct');
  if (card.dataset.mode === 'lesson') updateLessonButton();
  else document.getElementById('test-result').classList.add('hidden');
}

function resetQuestion(card) {
  card.dataset.correct = 'pending';
  card.querySelector('.question-feedback').classList.add('hidden');
  card.querySelector('.question-state').textContent = 'Pendiente';
  card.querySelector('.question-state').classList.remove('is-correct');
  if (card.dataset.mode === 'lesson') updateLessonButton();
  else document.getElementById('test-result').classList.add('hidden');
}

function normalizeAnswer(value) {
  return value.trim().toLocaleLowerCase('fr')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’‘']/g, '')
    .replace(/[-\s.,!?;:]/g, '');
}

function validateQuestion(button, testMode) {
  const card = button.closest('.question-card');
  const index = Number(card.dataset.question);
  const question = testMode ? state.course.finalTest[index] : state.course.lessons[state.lessonIndex].questions[index];
  const input = card.querySelector('.answer-input');
  const submitted = input ? input.value : card.dataset.selected || '';
  const correct = normalizeAnswer(submitted) === normalizeAnswer(question.answer);
  card.dataset.correct = String(correct);
  const feedback = card.querySelector('.question-feedback');
  feedback.className = `question-feedback ${correct ? 'correct' : 'incorrect'}`;
  feedback.innerHTML = `<strong>${correct ? 'Bravo !' : 'Pas encore.'}</strong> ${question.explanation}`;
  card.querySelector('.question-state').textContent = correct ? '✓ Correcta' : 'Revisa e inténtalo otra vez';
  card.querySelector('.question-state').classList.toggle('is-correct', correct);
  if (testMode) updateTestResult();
  else updateLessonButton();
}

function updateLessonButton() {
  const cards = [...document.querySelectorAll('#lesson-content .question-card')];
  const allCorrect = cards.length > 0 && cards.every((card) => card.dataset.correct === 'true');
  const continueButton = document.getElementById('complete-lesson');
  if (!continueButton) return;
  continueButton.disabled = !allCorrect;
  document.getElementById('lesson-feedback').textContent = allCorrect
    ? '¡Todo correcto! Ya puedes continuar.'
    : 'Valida correctamente todas las actividades para continuar.';
}

function completeLesson() {
  const completed = readProgress(state.course.bookId);
  const currentLesson = state.course.lessons[state.lessonIndex];
  if (!completed.includes(currentLesson.id)) {
    completed.push(currentLesson.id);
    saveProgress(state.course.bookId, completed);
  }
  if (state.lessonIndex < state.course.lessons.length - 1) state.lessonIndex += 1;
  else state.testMode = true;
  renderCourse();
  renderBooks();
}

function renderFinalTest() {
  const content = document.getElementById('lesson-content');
  content.innerHTML = `
    <div class="lesson-topline"><span class="section-kicker">ÉVALUATION · ${state.course.level}</span><span class="lesson-duration">${state.course.finalTest.length} preguntas</span></div>
    <h2>Test final</h2>
    <p class="lesson-goal">Comprueba lo que has aprendido en este recorrido. Puedes revisar la explicación de cada respuesta después de validarla.</p>
    <div class="question-list">${state.course.finalTest.map((question, index) => renderQuestion(question, index, 'test')).join('')}</div>
    <div id="test-result" class="test-result hidden" role="status"></div>
    <div class="lesson-footer"><button class="secondary-button" data-action="back-to-lessons">← Volver a las lecciones</button></div>`;
  content.querySelectorAll('.check-answer').forEach((button) => button.addEventListener('click', () => validateQuestion(button, true)));
  content.querySelectorAll('.answer-option').forEach((button) => button.addEventListener('click', () => selectOption(button)));
  content.querySelectorAll('.answer-input').forEach((input) => input.addEventListener('input', () => resetQuestion(input.closest('.question-card'))));
  content.querySelector('[data-action="back-to-lessons"]').addEventListener('click', () => {
    state.testMode = false;
    state.lessonIndex = state.course.lessons.length - 1;
    renderCourse();
  });
}

function updateTestResult() {
  const cards = [...document.querySelectorAll('#lesson-content .question-card')];
  const validated = cards.filter((card) => card.dataset.correct === 'true' || card.dataset.correct === 'false');
  const result = document.getElementById('test-result');
  if (!result || validated.length !== cards.length) return;
  const score = cards.filter((card) => card.dataset.correct === 'true').length;
  const passed = score / cards.length >= 0.8;
  result.className = `test-result ${passed ? 'passed' : 'retry'}`;
  result.innerHTML = `<strong>${passed ? 'Bravo !' : 'Sigue practicando'}</strong><span>Resultado: ${score} de ${cards.length}. ${passed ? 'Has superado el test final.' : 'Repasa las lecciones y vuelve a intentarlo.'}</span>`;
}

function render() {
  renderLevelNavigation();
  renderFilters();
  renderBooks();
}

document.addEventListener('click', (event) => {
  const levelButton = event.target.closest('[data-level]');
  if (levelButton) {
    event.preventDefault();
    state.level = levelButton.dataset.level;
    state.skill = 'Todo';
    render();
    return;
  }
  const skillButton = event.target.closest('[data-skill]');
  if (skillButton) {
    state.skill = skillButton.dataset.skill;
    renderFilters();
    renderBooks();
    return;
  }
  const lessonButton = event.target.closest('[data-lesson]');
  if (lessonButton && state.course) {
    const lessonIndex = Number(lessonButton.dataset.lesson);
    const completed = readProgress(state.course.bookId);
    const firstIncomplete = state.course.lessons.findIndex((lesson) => !completed.includes(lesson.id));
    const maxUnlocked = firstIncomplete === -1 ? state.course.lessons.length - 1 : firstIncomplete;
    if (lessonIndex <= maxUnlocked) {
      state.lessonIndex = lessonIndex;
      state.testMode = false;
      renderCourse();
    }
    return;
  }
  const bookButton = event.target.closest('[data-book]');
  if (bookButton) {
    openBook(bookButton.dataset.book);
    return;
  }
  const action = event.target.closest('[data-action]');
  if (action) {
    event.preventDefault();
    if (action.dataset.action === 'final-test' && state.course
      && readProgress(state.course.bookId).length === state.course.lessons.length) {
      state.testMode = true;
      renderCourse();
    } else if (action.dataset.action === 'continue') {
      const firstCourse = courses[0];
      const completed = readProgress(firstCourse.bookId);
      const next = firstCourse.lessons.findIndex((lesson) => !completed.includes(lesson.id));
      state.level = firstCourse.level;
      render();
      openBook(firstCourse.bookId);
      if (next >= 0) state.lessonIndex = next;
      else state.testMode = true;
      renderCourse();
    } else {
      showView('home');
      if (action.dataset.action === 'library') document.getElementById('biblioteca').scrollIntoView({ behavior: 'smooth' });
    }
  }
});

document.getElementById('book-search').addEventListener('input', (event) => {
  state.search = event.target.value;
  renderBooks();
});

document.addEventListener('keydown', (event) => {
  if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    document.getElementById('book-search').focus();
  }
  if (event.key === 'Enter' && event.target.matches('.answer-input')) {
    event.preventDefault();
    event.target.closest('.question-card').querySelector('.check-answer').click();
  }
});

render();
