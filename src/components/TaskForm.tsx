'use client';

import { CreateTaskInput, Task } from '@/types/task';
import React, { useState, useEffect } from 'react';
import clsx from "clsx";

interface TaskFormProps {
    initialData?: Task;
    onSubmit: (data: CreateTaskInput) => void;
    onCancel: () => void;
}

const colorOptions = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink',
    'brown',
];

export function TaskForm({ initialData, onSubmit, onCancel }: TaskFormProps) {
    const [title, setTitle] = useState<string>('');
    const [color, setColor] = useState<string>('red');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setColor(initialData.color);
        }
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, color });
    };

    return (
        <form onSubmit={handleSubmit} className={"flex flex-col gap-[48px]"}>
            <button onClick={onCancel} className="btn-back">
                <img src="/images/arrow-back.svg" alt="Go back" />
            </button>

            <div className={"flex flex-col gap-[24px]"}>
                <div className={"flex flex-col gap-[12px]"}>
                    <label htmlFor="title" className="text-accents-blue font-bold text-[14px]">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 h-[52px] bg-accents-light text-accents-gray text-[14px] rounded-lg border font-normal border-accents-dgray focus:outline-none focus:border-white"
                        required
                    />
                </div>

                <div className={"flex flex-col gap-[12px]"}>
                    <label className="text-accents-blue font-bold text-[14px]">
                        Color
                    </label>
                    <div className="flex gap-4">
                        {colorOptions.map((option) => (
                            <label key={option} className="flex items-center">
                                <input
                                    type="radio"
                                    name="color"
                                    value={option}
                                    checked={color === option}
                                    onChange={(e) => setColor(e.target.value)}
                                    className="hidden"
                                />
                                <span
                                    className={clsx(
                                        "w-[52px] h-[52px] rounded-full cursor-pointer border-2 ", "bg-task-" + option,
                                        color === option ? "border-white" : "border-transparent",
                                    )}
                                />
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <button
                    type="submit"
                    className="btn-main"
                >
                    {initialData ? (
                        <>
                            <span>Save</span>
                            <img src="/images/check.svg" alt="check" className="h-[15.97px] w-[15.97px]" />
                        </>
                    ) : (
                        <>
                            <span>Add Task</span>
                            <img src="/images/plus.svg" alt="plus" className="h-[15.97px] w-[15.97px]" />
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
