import CollectionWrapper from "../utils/collectionWrapper";

export default class ProjectCollection extends CollectionWrapper {
    constructor(items) {
        super(items);
    }

    getTasksDueToday() {
        const tasks = this.items.reduce((total, item) => {
            const due = item.getDueToday();
            if (due) {
                total.push(...due);
            }
        }, []);
        return tasks;
    }

    getTasksDueThisWeek() {
        const tasks = this.items.reduce((total, item) => {
            const due = item.getDueThisWeek();
            if (due) {
                total.push(...due);
            }
        }, []);
        return tasks;
    }
}