export class Project {
    id: number;
    component: string;
    description: string;
    title: string;
    username: string;
    created_at: string;
    updated_at: string;

    constructor(
        id: number, 
        component: string, 
        description: string, 
        title: string, 
        username: string, 
        created_at: string, 
        updated_at: string) {

        this.id = id;
        this.component = component;
        this.description = description;
        this.title = title;
        this.username = username;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
