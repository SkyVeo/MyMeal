export class Tag {
    title: string;
    emoji?: string;

    constructor(title: string, emoji?: string) {
        this.title = title;
        this.emoji = emoji;
    }

    toString() {
        return this.emoji ? `${this.emoji} ${this.title}` : this.title;
    }
}
