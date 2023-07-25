// mỗi task là một object bao gồm id và text

// task = {id: new Date().toISOString() , text: taskText}


class Task {
  id: string;
  text: string;

  constructor(taskText: string) {
    this.id = new Date().toISOString();
    this.text = taskText;
  }
}
export default Task;
