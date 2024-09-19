import { Component, ViewEncapsulation } from '@angular/core';
import { GanttTask, tasks } from '../model/task.model'; // Import your task model

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public data: GanttTask[] = tasks; // Existing tasks
  public dialogOpened = false;      // Controls dialog visibility
  public newTask: Partial<GanttTask> = {}; // Temporary task data for form input
  public invalidFields: Set<string> = new Set(); // Store invalid fields

  public selectionState: Set<number> = new Set(); // Keeps track of selected tasks

  // Opens the dialog
  public openDialog(): void {
    this.newTask = {
      title: 'Blockout'
    };
    this.dialogOpened = true; // Show the dialog
  }

  // Closes the dialog
  public closeDialog(): void {
    this.dialogOpened = false; // Hide the dialog
  }

  public isFieldInvalid(field: string): boolean {
    return this.invalidFields.has(field);
  }

  // Adds the new task to the Gantt chart
  public addTask(): void {
    this.invalidFields.clear(); // Clear previous errors
    const { name, start, end } = this.newTask;

    if (!name) this.invalidFields.add('name');
    if (!start) this.invalidFields.add('start');
    if (!end) this.invalidFields.add('end');

    // If there are invalid fields, do not proceed
    if (this.invalidFields.size > 0) {
      return;
    }

    const newTaskId = this.data.length + 1; // Auto-generate a new task ID
    const newGanttTask: GanttTask = {
      id: newTaskId,
      name: this.newTask.name!,
      title: 'Blockout',               // Default Leave Type
      start: new Date(this.newTask.start!), 
      end: new Date(this.newTask.end!),     
    };

    // Find index of the first task with the same name
    const existingTaskIndex = this.data.findIndex(task => task.name === this.newTask.name);

    if (existingTaskIndex !== -1) {
      const updatedData = [...this.data]; // Create a new array to trigger Angular change detection
      updatedData.splice(existingTaskIndex, 0, newGanttTask); // Modify the new array
      this.data = updatedData; // Assign the updated array back to the data
    } else {
      // If no task with the same name, add the new task at the end
      this.data = [...this.data, newGanttTask];
    }


    this.closeDialog(); // Close the dialog after saving
  }

  // Get selected task IDs
  public get selectedKeys(): number[] {
    return Array.from(this.selectionState);
  }

  // Check if a task is selected
  public isSelected = (dataItem: GanttTask): boolean => {
    return this.selectionState.has(dataItem.id);
  };

  // Toggle task selection (on click)
  public toggleSelection({
    dataItem,
    sender,
    originalEvent,
  }: any): void {
    originalEvent.preventDefault(); // Prevents default context menu

    if (this.isSelected(dataItem)) {
      this.selectionState.delete(dataItem.id); // Deselect if selected
    } else {
      this.selectionState.add(dataItem.id); // Select if not selected
    }

    sender.updateView(); // Update the Gantt chart view
  }
}
