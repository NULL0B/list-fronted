'use client';

import {Task} from '@/types/task';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
interface TaskCardProps {
    task: Task;
    onToggleComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

export function TaskCard({task, onToggleComplete, onDelete}: TaskCardProps) {
    return (
        <div
            className={'p-4 rounded-lg shadow-sm border-accents-dgray border transition-all hover:shadow-md bg-accents-light'}>
            <div className="flex items-start gap-[16px] padding-[16px]">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id)}
                    className="custom-checkbox"
                />
                <Link
                    href={`/edit?id=${task.id}`}
                    className="flex-1 flex items-start"
                >
                        <span className={clsx(
                            'text-accents-gray font-normal text-[14px]',
                            task.completed && 'line-through text-accents-disabled'
                        )}>
                            {task.title}
                        </span>
                </Link>
                <button
                    onClick={() => onDelete(task.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                >
                    <img src="/images/trash.svg" alt="trash" className="h-[14px] w-[14px]"/>
                </button>
            </div>
        </div>
    );
}
