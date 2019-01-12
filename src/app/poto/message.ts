export class Message {
    readonly question: string;
    readonly timestamp: Date;

    constructor(readonly msg: string, readonly ts?: Date) {
        this.question = msg;
        this.timestamp = ts;
    }
}