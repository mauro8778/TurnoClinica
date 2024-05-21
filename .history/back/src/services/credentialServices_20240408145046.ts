class CredentialService {
    private credentials: Credential[] = [];
    private lastId: number = 0;

    createCredential(username: string, password: string): number {
        const newCredential: Credential = {
            id: ++this.lastId,
            username,
            password
        };
        this.credentials.push(newCredential);
        return newCredential.id;
    }
}