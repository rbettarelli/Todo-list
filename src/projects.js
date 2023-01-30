import * as localStorage from './localStorage.js'

class Project {
    constructor(name) {
      this.id = getID();
      this.name = name;
    }
  }

  function getID() {
    return   Math.random().toString(36).substring(2, 9);
  }
  
 export default Project



