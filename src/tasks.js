
class Tasks {
    constructor(name, description, date, priority, project){
        this.id = getID()
        this.name= name
        this.description = description
        this.date = date
        this.priority = priority
        this.project = project
    }
    
}

function getID() {
    return   Math.random().toString(36).substring(2, 9);
  }


export default Tasks
