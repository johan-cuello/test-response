import {cleanConsole, createAll} from './data';

const companies = createAll();

// Part 1
function getCompanyById(id) {
  const company = companies.find((company) => company.id === id);
  return !!company ? company.name : undefined;
}

// Part 2
function removeCompanyById(id) {
  const company = companies.find((company) => company.id === id);
  const index = companies.indexOf(company);
  return companies.splice(index, 1, companies);
}

// Part 3
function patch(id, updatedData) {
  const company = companies.find((company) => company.id === id);
  if (!!updatedData && company) {
    if (updatedData.isOpen) {
      company.isOpen = updatedData.isOpen;
    }
    if (updatedData.name) {
      company.name = updatedData.name;
    }
    if (updatedData.usersLength) {
      company.usersLength = updatedData.usersLength;
    }
  }

  return company;
}

// Part 4
function insert(companyId, newUser) {
  const company = companies.find((company) => company.id === companyId);
  let id = 0;
  if (!!company) {
    company.users.forEach((user) => {
      if (user.id > id) {
        id = user.id + 1;
      }
    });
    newUser.id = id;
    company.users.push(newUser);
    company.usersLength = company.users.length;
  }

  return company;
}

// Part 5
function updateCompany(id, updatedData) {
  const company = companies.find((company) => company.id === id);
  if (!!updatedData && company) {
    company = {
      ...company,
      ...updatedData,
    };
  }

  return company;
}

// Part 6
function removeUser(companyId, userId) {
  const company = companies.find((company) => company.id === companyId);
  if (!!company) {
    const user = company.users.find((user) => user.id === userId);
    if (!!user) {
      const userIndex = companies.users.indexOf(user);
      company.users = company.users.splice(userIndex, 1, company.users);
    }
  }
}

// Part 7
function updateUser(companyId, userId, updateUser) {
  if (!!updateUser) {
    const company = companies.find((company) => company.id === companyId);
    if (!!company) {
      const user = company.users.find((user) => user.id === userId);
      if (!!user) {
        if (updateUser.firstName) {
          user.firstName = updateUser.firstName;
        }
        if (updateUser.lastName) {
          user.lastName = updateUser.lastName;
        }
        if (updateUser.age) {
          user.age = updatedData.age;
        }
      }
    }
  }
}

// Part 8
function replaceUser(companyId, userId, updateUser) {
  if (!!updateUser) {
    const company = companies.find((company) => company.id === companyId);
    if (!!company) {
      const user = company.users.find((user) => user.id === userId);
      if (!!user) {
        user = {
          ...user,
          ...updateUser,
        };
      }
    }
  }
}

// Part 9
function moveUser(companyOriginId, companyDestinationId, userId) {
  const companyOrigin = companies.find((company) => company.id === companyOriginId);
  if (!!companyOrigin) {
    const user = companyOrigin.users.find((user) => user.id === userId);
    if (!!user) {
      const companyDestination = companies.find((company) => company.id === companyDestinationId);
      if (!!companyDestination) {
        const index = companyOrigin.users.indexOf(user);
        companyOrigin.users.splice(index, 1, companyOrigin.users);
        companyDestination.users.push(user);
        companyDestination.usersLength = companyDestination.users.length;
      }
    }
  }
}

cleanConsole(7, companies);
console.log('---- EXAMPLE 7 part 1 --- ', getCompanyById(1));
console.log('---- EXAMPLE 7 part 2 --- ', removeCompanyById(1));
console.log('---- EXAMPLE 7 part 3 --- ', patch(1, {isOpen: false}));
console.log('---- EXAMPLE 7 part 4 --- ', insert(1, {
  firstName: 'Juan',
  lastName: 'Delgado',
  age: 35,
  car: true,
}));
console.log('---- EXAMPLE 7 part 5 --- ', updateCompany(1, {
  firstName: 'Juan',
  lastName: 'Delgado',
  age: 35,
  car: true,
}));
console.log('---- EXAMPLE 7 part 6 --- ', removeUser(1, 1));
console.log('---- EXAMPLE 7 part 7 --- ', updateUser(1, 1));
console.log('---- EXAMPLE 7 part 8 --- ', replaceUser(1, 1));
console.log('---- EXAMPLE 7 part 9 --- ', moveUser(1, 1, 1));

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Parte 1: Crear una función tomando como parámetro un "id" de "company" y
// devolviendo el nombre de esta "company".

// Parte 2: Crear una función tomando como parámetro un "id" de "company" y
// quitando la "company" de la lista.

// Parte 3: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PATCH (como con una llamada HTTP) en todos los
// atributos de esta "company" excepto en el atributo "users".

// Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
// nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
// dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
// "company" y tener un "id" generado automáticamente. La función también debe modificar
// el atributo "usersLength" de "company".

// Parte 5: Crear una función tomando como parámetro un "id" de "company" y
// permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
// en el atributo "users".

// Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user". La función debe quitar este "user" de la lista de "users"
// de "company" y cambiar el atributo "usersLength" de "company".

// Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
// "user".

// Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
// "id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
// "user".

// Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
// un "id" de "user". La función debe permitir que el user sea transferido de la
// primera "company" a la segunda "company". El atributo "usersLength" de cada
// "company" debe actualizarse.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Part 1: Create a function taking as parameter an "id" of "company" and
// returning the name of this "company".

// Part 2: Create a function taking as parameter an "id" of "company" and
// removing the "company" from the list.

// Part 3: Create a function taking as a parameter an "id" of "company" and
// allowing to make a PATCH (as with an HTTP call) on all
// attributes of this "company" except on the "users" attribute.

// Part 4: Create a function taking as parameter an "id" of "company" and a
// new "user" whose name is "Delgado", the first name "Juan", aged 35 and
// a car. The new "user" must be added to the "users" list of this
// "company" and have an automatically generated "id". The function must also modify
// the "usersLength" attribute of "company".

// Part 5: Create a function taking as parameter an "id" of "company" and
// allowing to make a PUT (as with an HTTP call) on this "company" except
// on the "users" attribute.

// Part 6: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user". The function must remove this "user" from the list of "users"
// from "company" and change the attribute "usersLength" from "company".

// Part 7: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PATCH (as with an HTTP call) on this
// "user".

// Part 8: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PUT (as with an HTTP call) on this
// "user".

// Part 9: Create a function taking as parameter two "id" of "company" and
// an "id" of "user". The function must allow the user to be transferred as a parameter
// from the 1st "company" to the 2nd "company". The "usersLength" attribute of each
// "company" must be updated.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Partie 1 : Créer une fonction prenant en paramètre un "id" de "company" et
// retournant le nom de cette "company".

// Partie 2 : Créer une fonction prenant en paramètre un "id" de "company" et
// supprimant la "company" de la liste.

// Partie 3 : Créer une fonction prenant en paramètre un "id" de "company" et
// permettant de faire un PATCH (comme avec un appel HTTP) sur tous les
// attributs de cette "company" sauf sur l'attribut "users".

// Partie 4 : Créer une fonction prenant en paramètre un "id" de "company" et un
// nouvel "user" dont le nom est "Delgado", le prénom "Juan", ayant 35 ans et
// une voiture. Le nouvel "user" doit être ajouté à la liste des "users" de cette
// "company" et avoir un "id" généré automatiquement. La fonction doit aussi modifier
// l'attribut "usersLength" de "company".

// Partie 5 : Créer une fonction prenant en paramètre un "id" de "company" et
// permettant de faire un PUT (comme avec un appel HTTP) sur cette "company" sauf
// sur l'attribut "users".

// Partie 6 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user". La fonction doit supprimer cet "user" de la liste des "users"
// de la "company" et modifier l'attribut "usersLength" de "company".

// Partie 7 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user" permettant de faire un PATCH (comme avec un appel HTTP) sur cet
// "user".

// Partie 8 : Créer une fonction prenant en paramètre un "id" de "company" et un
// "id" de "user" permettant de faire un PUT (comme avec un appel HTTP) sur cet
// "user".

// Partie 9 : Créer une fonction prenant en paramètre deux "id" de "company" et
// un "id" de "user". La fonction doit permettre de transférer l'user en paramètre
// de la 1re "company" à la 2e "company". L'attribut "usersLength" de chaque
// "company" doit être mis à jour.
