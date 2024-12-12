'use client';

import {useSearchParams, useRouter as useNavigationRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import {Task} from '@/types/task';
import {getTask, updateTask} from '@/services/tasks';
import {TaskForm} from '@/components/TaskForm';

export default function EditTaskPage() {
    const [task, setTask] = useState<Task | null>(null);
    const [error, setError] = useState('');
    const searchParams = useSearchParams();
    const id = searchParams.get('id') || '-1';
    const navRouter = useNavigationRouter();
    useEffect(() => {
        const fetchTask = async () => {
            try {
                const data = await getTask(id);
                setTask(data);
            } catch (err) {
                setError('Failed to load task');
                console.error(err);
            }
        };

        fetchTask();
    }, [id]);

    const handleSubmit = async (data: any) => {
        setError('');

        try {
            await updateTask(id, data);
            navRouter.push('/');
            navRouter.refresh();
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
                onCancel={() => navRouter.push('/')}
            />
        </>
    );
}
