'use client';

import {TaskForm} from '@/components/TaskForm';
import {createTask} from '@/services/tasks';
import {CreateTaskInput} from '@/types/task';
import {useRouter} from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

export default function CreateTaskPage() {
    const router = useRouter();

    const handleSubmit = async (data: CreateTaskInput) => {
        try {
            await createTask(data);
            toast.success('Task created');
            router.push('/');
        } catch (error) {
            toast.error('Failed to create task');
        }
    };

    return (
            <TaskForm
                onSubmit={handleSubmit}
                onCancel={() => router.push('/')}
            />
    );
}
