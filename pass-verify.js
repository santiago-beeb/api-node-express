const bcrypt = require('bcrypt')

async function verifyPassword () {
  const myPassword = 'admin123.654';
  const hash = '$2b$10$73/Gq72/bEj.UkOi9lD0auHuuTbiRyPaH3EsVM.6efLOiqlAyrr/K';
  const match = await bcrypt.compare(myPassword, hash);
  console.log(match)
}

verifyPassword();
