'use client';

import {deleteTask, getTask, getTasks, updateTask} from '@/services/tasks';
import {Task} from '@/types/task';
import React, {useEffect, useState} from 'react';
import toast from 'react-hot-toast';
import {TaskCard} from "@/components/TaskCard";
import {useRouter} from 'next/navigation';

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const router = useRouter();

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const data = await getTasks();
            setTasks(data);
        } catch (error) {
            toast.error('Failed to load tasks');
        }
    };

    const handleToggleComplete = async (id: number) => {
        const task = tasks.find(t => t.id === id);
        if (!task) return;

        try {
            await updateTask(id, {completed: !task.completed});
            // Fetch the updated task from the server
            const updatedTask = await getTask(id);
            setTasks(tasks.map(t =>
                t.id === id ? updatedTask : t
            ));
        } catch (error) {
            toast.error('Failed to update task');
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this task?')) return;

        try {
            await deleteTask(id);
            setTasks(tasks.filter(t => t.id !== id));
            toast.success('Task deleted');
        } catch (error) {
            toast.error('Failed to delete task');
        }
    };

    const completedCount = tasks.filter(t => t.completed).length;

    return (
        <div className="relative flex flex-col gap-[24px]">
            <button className={'btn-main absolute-btn'} onClick={() => router.push('/create')}>
                <span>Create Task</span>
                <img src="/images/plus.svg" alt="plus" className="h-[15.97px] w-[15.97px]"/>
            </button>

            <div className={'flex justify-between'}>
                <div className="flex gap-[8px]">
                    <span
                        className={'text-accents-blue font-bold text-[14px]'}>Tasks</span>
                    <span className={'chip'}>{tasks.length}</span>
                </div>

                <div className="flex gap-[8px]">
                    <span className={'text-accents-purple font-bold text-[14px]'}>Completed</span>
                    <span className={'chip'}>{completedCount} de {tasks.length}</span>
                </div>
            </div>

            <div className="flex flex-col gap-[12px]">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onToggleComplete={handleToggleComplete}
                        onDelete={handleDelete}
                    />
                ))}
                {tasks.length === 0 && (
                    <div className={"h-[266px] flex flex-col items-center justify-center gap-[16px]"}>
                        <img src="/images/empty.svg" alt="empty" className="h-[56px] w-[56px]"/>
                        <p className={"text-[16px] font-normal text-accents-disabled"}>
                            <span className={"font-bold"}>You don't have any tasks registered yet.</span>
                            <br/>
                            <br/>
                            Create tasks and organize your to-do items.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
