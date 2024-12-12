export type Task = {
  id: number;
  title: string;
  color: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CreateTaskInput = {
  title: string;
  color: string;
};

export type UpdateTaskInput = Partial<CreateTaskInput> & {
  completed?: boolean;
};
