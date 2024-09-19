export interface GanttTask {
    id: number;
    name: string;
    title: string;
    start: Date;
    end: Date;
}

export const tasks: GanttTask[] = [
    {
        id: 1,
        name: '1-1',
        title: 'SKU A',
        start: new Date('2023-03-27 0:00'),
        end: new Date('2023-03-28 23:59'),
    },
    {
        id: 2,
        name: '1-1',
        title: 'SKU A',
        start: new Date('2023-03-29 0:00'),
        end: new Date('2023-03-30 23:59'),
    },
    {
        id: 3,
        name: '1-1',
        title: 'SKU C',
        start: new Date('2023-03-31 0:00'),
        end: new Date('2023-03-31 23:59'),
    },

    {
        id: 4,
        name: '1-2',
        title: 'SKU A',
        start: new Date('2023-03-27 0:00'),
        end: new Date('2023-03-28 23:59'),
    },
    {
        id: 5,
        name: '1-2',
        title: 'SKU A',
        start: new Date('2023-03-29 0:00'),
        end: new Date('2023-03-30 23:59'),
    },
    {
        id: 6,
        name: '1-2',
        title: 'SKU C',
        start: new Date('2023-03-31 0:00'),
        end: new Date('2023-03-31 23:59'),
    },

    {
        id: 7,
        name: '1-3',
        title: 'SKU D',
        start: new Date('2023-03-27 0:00'),
        end: new Date('2023-03-28 23:59'),
    },
    {
        id: 8,
        name: '1-3',
        title: 'SKU A',
        start: new Date('2023-03-29 0:00'),
        end: new Date('2023-03-30 23:59'),
    },
    {
        id: 9,
        name: '1-3',
        title: 'SKU C',
        start: new Date('2023-03-31 0:00'),
        end: new Date('2023-03-31 23:59'),
    },

    {
        id: 10,
        name: '1-4',
        title: 'SKU E',
        start: new Date('2023-03-27 0:00'),
        end: new Date('2023-03-28 23:59'),
    },
    {
        id: 11,
        name: '1-4',
        title: 'SKU F',
        start: new Date('2023-03-29 0:00'),
        end: new Date('2023-03-30 23:59'),
    },
    {
        id: 12,
        name: '1-4',
        title: 'SKU C',
        start: new Date('2023-03-31 0:00'),
        end: new Date('2023-03-31 23:59'),
    },

    {
        id: 13,
        name: '1-5',
        title: 'SKU A',
        start: new Date('2023-03-27 0:00'),
        end: new Date('2023-03-28 23:59'),
    },
    {
        id: 14,
        name: '1-5',
        title: 'SKU A',
        start: new Date('2023-03-29 0:00'),
        end: new Date('2023-03-30 23:59'),
    },
    {
        id: 15,
        name: '1-5',
        title: 'SKU C',
        start: new Date('2023-03-31 0:00'),
        end: new Date('2023-03-31 23:59'),
    },

    {
        id: 16,
        name: '2-1',
        title: 'SKU C',
        start: new Date('2023-03-27 0:00'),
        end: new Date('2023-03-27 23:59'),
    },
    {
        id: 17,
        name: '2-1',
        title: 'SKU A',
        start: new Date('2023-03-28 0:00'),
        end: new Date('2023-03-29 23:59'),
    },
    {
        id: 18,
        name: '2-1',
        title: 'SKU A',
        start: new Date('2023-03-30 0:00'),
        end: new Date('2023-03-31 23:59'),
    },

    {
        id: 19,
        name: '2-2',
        title: 'SKU C',
        start: new Date('2023-03-27 0:00'),
        end: new Date('2023-03-27 23:59'),
    },
    {
        id: 20,
        name: '2-2',
        title: 'SKU E',
        start: new Date('2023-03-28 0:00'),
        end: new Date('2023-03-29 23:59'),
    },
    {
        id: 21,
        name: '2-2',
        title: 'SKU E',
        start: new Date('2023-03-30 0:00'),
        end: new Date('2023-03-31 23:59'),
    },

    {
        id: 22,
        name: '2-3',
        title: 'SKU C',
        start: new Date('2023-03-27 0:00'),
        end: new Date('2023-03-27 23:59'),
    },
    {
        id: 23,
        name: '2-3',
        title: 'SKU E',
        start: new Date('2023-03-28 0:00'),
        end: new Date('2023-03-29 23:59'),
    },
    {
        id: 24,
        name: '2-3',
        title: 'SKU E',
        start: new Date('2023-03-30 0:00'),
        end: new Date('2023-03-31 23:59'),
    },

    {
        id: 25,
        name: '2-4',
        title: 'SKU C',
        start: new Date('2023-03-27 0:00'),
        end: new Date('2023-03-27 23:59'),
    },
    {
        id: 26,
        name: '2-4',
        title: 'SKU D',
        start: new Date('2023-03-28 0:00'),
        end: new Date('2023-03-29 23:59'),
    },
    {
        id: 27,
        name: '2-4',
        title: 'SKU D',
        start: new Date('2023-03-30 0:00'),
        end: new Date('2023-03-31 23:59'),
    },

    {
        id: 28,
        name: '2-5',
        title: 'SKU C',
        start: new Date('2023-03-27 0:00'),
        end: new Date('2023-03-27 23:59'),
    },
    {
        id: 29,
        name: '2-5',
        title: 'SKU D',
        start: new Date('2023-03-28 0:00'),
        end: new Date('2023-03-29 23:59'),
    },
    {
        id: 30,
        name: '2-5',
        title: 'SKU D',
        start: new Date('2023-03-30 0:00'),
        end: new Date('2023-03-31 23:59'),
    },
];