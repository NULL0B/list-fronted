'use client';

import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import {Task} from '@/types/task';
import {getTask, updateTask} from '@/services/tasks';
import {TaskForm} from '@/components/TaskForm';
import {useParams} from 'next/navigation';

export default function EditTaskPage() {
    const router = useRouter();
    const [task, setTask] = useState<Task | null>(null);
    const [error, setError] = useState('');
    const params = useParams<{id: string}>();

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const data = await getTask(params.id);
                setTask(data);
            } catch (err) {
                setError('Failed to load task');
                console.error(err);
            }
        };

        fetchTask();
    }, [params.id]);

    const handleSubmit = async (data: any) => {
        setError('');

        try {
            await updateTask(params.id, data);
            router.push('/');
            router.refresh();
        } catch (err) {
            setError('Failed to update task');
            console.error(err);
        }
    };

    if (error) {
        return <div className="p-4 text-red-500">{error}</div>;
    }

    return (
        <>
            <TaskForm
                initialData={task}
                onSubmit={handleSubmit}
                onCancel={() => router.push('/')}
            />
        </>
    );
}
