import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(4, companies);
// Cual tabla? Which table?

export function getUsers(data) {
  const users = data.flatMap((company) => {
    return company.users.map((user) => {
      return {
        ...user,
        company: company.name,
      };
    });
  });
  return users.sort(compareUsersByAge);
}

function compareUsersByAge(user1, user2) {
  if (user1.age > user2.age) {
    return -1;
  }
  if (user1.age < user2.firagestName) {
    return 1;
  }
  // a debe ser igual b
  return 0;
}

console.log('---- EXAMPLE 4 --- ', getUsers(companies));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the "companies" variable and grouping
// all "users" of all "companies" in a single table. Each "user"
// must have a new attribute "company" having for value the name of the "company"
// to which it belongs. The "users" must be sorted according to their
// age (from oldest to youngest).

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et regroupant
// tous les "users" de toutes les "companies" dans un seul tableau. Chaque "user"
// doit avoir un nouvel attribut "company" ayant pour valeur le nom de la "company"
// à laquelle il appartient. Les "users" doivent être triés en fonction de leur
// âge (du plus vieux au plus jeune).
