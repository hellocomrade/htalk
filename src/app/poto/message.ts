export class Message {
    readonly question: string;
    readonly timestamp: Date;
    readonly avatar: string;

    constructor(readonly msg: string, readonly isFromRobot: boolean, readonly ts?: Date) {
        this.question = msg;
        this.avatar = true == isFromRobot ? 'fas fa-user-md fa-3x avatar-doc' : 'fas fa-user fa-3x';
        this.timestamp = ts;
    }
}