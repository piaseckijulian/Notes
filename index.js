const submitNoteBtn = document.getElementById('submitNote');
const notesDiv = document.getElementById('notes');
const noteTextArea = document.getElementById('noteText');

const date = new Date().toLocaleDateString();

const addNote = () => {
  const note = document.createElement('div');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  note.className = 'note';
  note.innerHTML = `${date} <br><br> ${noteTextArea.value} <br><br>`;

  editBtn.innerText = 'Edit';
  editBtn.className = 'noteForm';

  deleteBtn.innerText = 'Delete';
  deleteBtn.className = 'noteForm';

  editBtn.onclick = () => editNote(note);
  deleteBtn.onclick = () => deleteNote(note, editBtn, deleteBtn);

  notesDiv.appendChild(note);
  note.appendChild(editBtn);
  note.appendChild(deleteBtn);
};

const editNote = (note) => {
  submitNoteBtn.innerText = 'Edit note';

  submitNoteBtn.onclick = () => {
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    editBtn.innerText = 'Edit';
    editBtn.className = 'noteForm';

    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'noteForm';

    editBtn.onclick = () => editNote(note);
    deleteBtn.onclick = () => deleteNote(note, deleteBtn, editBtn);

    note.innerHTML = `${date} <br><br> ${noteTextArea.value} <br><br>`;

    note.appendChild(editBtn);
    note.appendChild(deleteBtn);

    submitNoteBtn.innerText = 'Create note';
    submitNoteBtn.onclick = () => addNote();
  };
};

const deleteNote = (note, editBtn, deleteBtn) => {
  note.remove();
  editBtn.remove();
  deleteBtn.remove();
};

submitNoteBtn.onclick = () => addNote();
